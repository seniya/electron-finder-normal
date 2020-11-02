import fnGetDrives from '@/lib/fnGetDrives'
import fnWalkFolders from '@/lib/fnWalkFolders'
import fnCreateNode from '@/lib/fnCreateNode'
import _ from 'lodash'

const path = require('path')

class IpcRegister {
  constructor (ipcMain) {
    this.ipcMain = ipcMain
    this.drives_ = []
    this.fileInfos_ = []
  }

  registerOn () {
    this.ipcMain.on('req_system', async (event, res) => {
      console.log('ipcMain.on req_system : ')
      const fileInfos = await fnGetDrives()
      const drives = _.orderBy(fileInfos, ['label'], ['asc'])
      // console.log('orderItems : ', orderItems)
      const folders = [{
        id: 'ROOT',
        name: '내PC',
        label: '내PC',
        nodeKey: 'ROOT',
        expandable: true,
        tickable: true,
        lazy: true,
        children: drives
      }]
      const pathSep = path.sep
      const resObj = { folders, drives, pathSep }

      // event.sender.send('res_system', JSON.stringify(resObj))
      event.returnValue = JSON.stringify(resObj)
    })

    this.ipcMain.on('req_folders', async (event, res) => {
      console.log('ipcMain.on req_folders : ')
      const resObj = await this.getFolders(res)
      event.returnValue = JSON.stringify(resObj)
    })

    this.ipcMain.on('req_folderContents', async (event, res) => {
      console.log('ipcMain.on req_folderContents : ')
      const resObj = await this.getFolderContents(res)
      event.returnValue = JSON.stringify(resObj)
    })
  }

  getFolders (node) {
    const key = node.nodeKey + path.sep
    const folders = []
    try {
      // if (node.children.length) {
      //   node.children.splice(0, node.children.length)
      // }
      for (const fileInfo of fnWalkFolders(key, 0)) {
        if (!fileInfo.isDir) {
          continue
        }
        const n = fnCreateNode(fileInfo)
        folders.push(n)
        // node.children.push(n)
      }
      // console.log('loadChildren node : ', _.cloneDeep(node))
      return folders
    } catch (err) {
      console.error('Error: ', err)
      return []
    }
  }

  getFolderContents (folder) {
    const returnValue = {
      contents: [],
      folders: []
    }

    if (!folder || typeof folder !== 'string') {
      return returnValue
    }
    folder = folder + path.sep
    let newFolders = []
    let newFiles = []
    for (const fileInfo of fnWalkFolders(folder, 0)) {
      if ('error' in fileInfo) {
        // console.error(`Error: ${fileInfo.rootDir} - ${fileInfo.error}`)
        continue
      }
      const node = fnCreateNode(fileInfo)
      if (node.data.isDir) newFolders.push(node)
      if (!node.data.isDir) newFiles.push(node)
    }
    newFolders = _.orderBy(newFolders, ['label'], ['asc'])
    newFiles = _.orderBy(newFiles, ['label'], ['asc'])
    returnValue.folders = newFolders
    returnValue.contents.push(...newFolders, ...newFiles)
    return returnValue
  }
}

export default IpcRegister
