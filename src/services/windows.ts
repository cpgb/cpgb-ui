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
  onClose?: () => void;
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
  window.on(
    'close',
    options.onClose ||
      ((): void => {
        window.close();
      })
  );
  return window;
}

ipcMain.handle('createWindow', (_, args) => {
  const window = createWindow(args);
  return window;
});

const windowCache: {
  [propName: string]: BrowserWindow;
} = {};
ipcMain.handle('openWindow', (_, args) => {
  if (!windowCache[args.path]) {
    args.onClose = (): void => {
      windowCache[args.path].hide();
    };
    windowCache[args.path] = createWindow(args);
  } else {
    windowCache[args.path].show();
    windowCache[args.path].focus();
  }
  return windowCache[args.path];
});
