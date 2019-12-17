import { BrowserWindow, ipcMain } from 'electron';
import { format } from 'url';
import { resolve } from 'app-root-path';
import electronIsDev from 'electron-is-dev';

let recordWindow: BrowserWindow = null;

export async function createWindow(): Promise<void> {
  recordWindow = new BrowserWindow({
    width: 465,
    height: 65,
    show: true,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  });

  const devPath = 'http://localhost:1234/record';
  const prodPath: string = format({
    pathname: resolve('dist/renderer/index.html'),
    protocol: 'file:',
    slashes: true
  });

  const url: string = electronIsDev ? devPath : prodPath;

  ipcMain.on('close', () => {
    recordWindow.close();
  });

  recordWindow.setMenu(null);
  await recordWindow.loadURL(url);
}
export function showRecordWindow(): void {
  recordWindow.show();
}

export function hideRecordWindow(): void {
  recordWindow.hide();
}

export function showDevTool(): void {
  recordWindow.webContents.openDevTools();
}
