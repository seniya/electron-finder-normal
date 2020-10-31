import fnCreateNode from './fnCreateNode'

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

function getWindowsDrives () {
  let drives_ = []
  const fileInfos_ = []
  try {
    // eslint-disable-next-line no-unused-vars
    const stdoutBuffer = execSync('wmic LOGICALDISK LIST BRIEF')
    const stdout = stdoutBuffer.toString().trim()
    // console.log('getWindowsDrives_ 1 stdout : ', stdout.toString().trim())
    // console.log('getWindowsDrives_ 2 stderr : ', stderr === '')
    const parts = stdout.split('\n')
    if (parts.length) {
      parts.splice(0, 1)
      for (let index = 0; index < parts.length; ++index) {
        const drive = parts[index].slice(0, 2)
        if (drive.length && drive[drive.length - 1] === ':') {
          try {
          // if stat fails, it'll throw an exception
            fs.statSync(drive + path.sep)
            drives_.push(drive)
          } catch (e) {
            console.error(`Cannot stat windows drive: ${drive}`, e)
          }
        }
      }
      // console.log('this.drives_ : ', this.drives_)
      for (let index = drives_.length - 1; index >= 0; --index) {
        try {
          const stat = fs.statSync(drives_[index] + path.sep)
          const fileInfo = {}
          fileInfo.rootDir = drives_[index]
          fileInfo.fileName = path.sep
          fileInfo.isDir = stat.isDirectory()
          fileInfo.stat = stat
          // console.log('fileInfo : ', fileInfo)
          const node = fnCreateNode(fileInfo)
          fileInfos_.push(node)
        } catch (error) {
        // remove from (bad/phantom) drive list
          drives_.splice(index, 1)
          console.error(error)
        }
      }
      return fileInfos_
    }
  } catch (error) {
    drives_ = []
    console.error('getWindowsDrives_ s: ', error)
  }
}

// module.exports = getWindowsDrives
export default getWindowsDrives
