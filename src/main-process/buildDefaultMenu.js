import { Menu } from 'electron'

const ZoomInFactors = [1, 1.2, 1.5, 1.75, 2, 3]
const ZoomOutFactors = ZoomInFactors.slice().reverse()

function showAbout (webContents) {
  webContents.send('showAbout', 'whoooooooh!')
}

function findClosestValue (arr, value) {
  return arr.reduce((previous, current) => {
    return Math.abs(current - value) < Math.abs(previous - value)
      ? current
      : previous
  })
}

function zoom (res, webContents) {
  console.log('zoom : ', res)
  if (res === 'reset') {
    // this.webContents.setZoomFactor(1.0)
    // this.webContents.send('zoom-factor-changed', 1)
    webContents.setZoomFactor(1)
  } else {
    const rawZoom = webContents.getZoomFactor()
    const zoomFactors =
      res === 'in' ? ZoomInFactors : ZoomOutFactors

    const currentZoom = findClosestValue(zoomFactors, rawZoom)
    console.log('currentZoom : ', currentZoom)

    const nextZoomLevel = zoomFactors.find(f =>
      res === 'in' ? f > currentZoom : f < currentZoom
    )

    console.log('nextZoomLevel : ', nextZoomLevel)
    const newZoom = nextZoomLevel === undefined ? currentZoom : nextZoomLevel

    webContents.setZoomFactor(newZoom)
    console.log('newZoom : ', newZoom)
  }
}

export function buildDefaultMenu (webContents) {
  const template = []
  const separator = { type: 'separator' }

  template.push({
    label: 'File',
    submenu: [
      {
        role: 'quit',
        label: 'Exit',
        accelerator: 'Alt+F4'
      }
    ]
  })

  template.push({
    label: 'View',
    submenu: [
      {
        label: 'Toggle Full Screen',
        role: 'togglefullscreen'
      },
      separator,
      {
        label: 'Reset Zoom',
        accelerator: 'CmdOrCtrl+0',
        click () {
          zoom('reset', webContents)
        }
      },
      {
        label: 'Zoom In',
        accelerator: 'CmdOrCtrl+=',
        click () {
          zoom('in', webContents)
        }
      },
      {
        label: 'Zoom Out',
        accelerator: 'CmdOrCtrl+-',
        click () {
          zoom('out', webContents)
        }
      },
      separator,
      {
        label: '&Reload',
        id: 'reload-window',
        accelerator: 'CmdOrCtrl+Alt+R',
        click (item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.reload()
          }
        },
        visible: true
      },
      {
        id: 'show-devtools',
        label: 'Toggle Developer Tools',
        accelerator: (() => {
          return 'Ctrl+Shift+I'
        })(),
        click (item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.webContents.toggleDevTools()
          }
        }
      }
    ]
  })

  template.push({
    label: 'Help',
    submenu: [
      {
        label: 'Learn Electronjs',
        click () { require('electron').shell.openExternal('https://www.electronjs.org') }
      },
      {
        label: 'Learn This App',
        click () { require('electron').shell.openExternal('https://github.com/seniya/electron-finder-normal') }
      },
      {
        label: 'About App',
        click () { showAbout(webContents) }
      },
      separator,
      {
        role: 'About'
      }
    ]
  })
  // console.log('template :', template)

  return Menu.buildFromTemplate(template)
}
