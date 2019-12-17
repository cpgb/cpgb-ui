import { format } from 'url';

import { resolve } from 'app-root-path';
import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';
import * as record from './record';

import electronIsDev from 'electron-is-dev';

app.on(
  'ready',
  async (): Promise<void> => {
    const mainWindow: BrowserWindow = new BrowserWindow({
      width: 360,
      height: 600,
      show: true,
      frame: false,
      autoHideMenuBar: true,
      resizable: false,
      webPreferences: {
        nodeIntegration: true,
        webSecurity: false
      }
    });

    const devPath = 'http://localhost:1234';
    const prodPath: string = format({
      pathname: resolve('dist/renderer/index.html'),
      protocol: 'file:',
      slashes: true
    });

    const url: string = electronIsDev ? devPath : prodPath;

    ipcMain.on('close', () => {
      mainWindow.close();
    });

    mainWindow.setMenu(null);
    record.createWindow();
    record.showRecordWindow();

    globalShortcut.register('CommandOrControl+Shift+I', (): void => {
      mainWindow.webContents.openDevTools();
      record.showDevTool();
    });

    await mainWindow.loadURL(url);
  }
);

app.on('window-all-closed', app.quit);
