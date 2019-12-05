const { format } = require('url')

const { BrowserWindow, app } = require('electron')
const isDev = require('electron-is-dev')
const { resolve } = require('app-root-path')

app.on('ready', async () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    titleBarStyle: 'hidden'
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    if (isDev) { mainWindow.webContents.openDevTools() }
  })

  const devPath = 'http://localhost:1234'
  const prodPath = format({
    pathname: resolve('dist/renderer/index.html'),
    protocol: 'file:',
    slashes: true,
  })
  const url = isDev ? devPath : prodPath

  mainWindow.setMenu(null)
  mainWindow.loadURL(url)
})

app.on('window-all-closed', app.quit)