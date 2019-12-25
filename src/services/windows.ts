import {
  BrowserWindow,
  BrowserWindowConstructorOptions,
  ipcMain
} from 'electron';
import { format } from 'url';
import { resolve } from 'app-root-path';
import electronIsDev from 'electron-is-dev';

const devPath = 'http://localhost:1234';
const prodPath: string = format({
  pathname: resolve('dist/renderer/index.html'),
  protocol: 'file:',
  slashes: true
});

interface CreateWindowOptions {
  path?: string;
}

export function createWindow(
  options?: CreateWindowOptions & BrowserWindowConstructorOptions
): BrowserWindow {
  const window = new BrowserWindow({
    show: true,
    frame: false,
    autoHideMenuBar: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    },
    ...options
  });
  const url: string = electronIsDev ? devPath : prodPath;
  window.loadURL(url + (options.path || '/'));
  window.setMenu(null);
  return window;
}

ipcMain.handle('createWindow', (_, args) => {
  return createWindow(args);
});
