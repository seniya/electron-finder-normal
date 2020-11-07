import { app, protocol, BrowserWindow, ipcMain, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import IpcRegister from './main-process/IpcRegister'
import { buildDefaultMenu } from './main-process/buildDefaultMenu'
// import path from 'path'

const isDevelopment = process.env.NODE_ENV !== 'production'

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: false, standard: false } }
])

async function createWindow () {
  const win = new BrowserWindow({
    width: 1400,
    height: 800,
    // frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
    // icon: path.join(__dirname, 'bundled/favicon.ico')
  })
  win.setMenuBarVisibility(true)

  const menuItems = buildDefaultMenu(win.webContents)
  Menu.setApplicationMenu(menuItems)

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    win.loadURL('app://./index.html')
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }

  const ipcRegister = new IpcRegister(ipcMain)
  ipcRegister.registerOn()

  createWindow()

  // const menu = Menu.buildFromTemplate(
  //   buildDefaultMenu(win.webContents)
  // )

  // globalShortcut.register('Alt+F4', () => {
  //   console.log('Alt+F4 눌러짐.')
  //   app.quit()
  // })
})

if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

console.log('start')
