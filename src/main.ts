import { format } from 'url';

import appRootPath from 'app-root-path';
import { app, BrowserWindow, globalShortcut } from 'electron';
import electronIsDev from 'electron-is-dev';

app.on('ready', async () => {
  const mainWindow: BrowserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: true,
    titleBarStyle: 'hidden',
    frame: false,
    autoHideMenuBar: true
  });

  globalShortcut.register('CommandOrControl+Shift+I', () => {
    mainWindow.webContents.openDevTools();
  });

  const devPath: string = 'http://localhost:1234';
  const prodPath: string = format({
    pathname: appRootPath('dist/renderer/index.html'),
    protocol: 'file:',
    slashes: true
  });
  const url: string = electronIsDev ? devPath : prodPath;
  mainWindow.setMenu(undefined);
  await mainWindow.loadURL(url);
});

app.on('window-all-closed', app.quit);
