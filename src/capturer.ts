import { BrowserWindow, globalShortcut } from 'electron';
import { createWindow } from './services/windows';

let capturerWindow: BrowserWindow = null;

export async function newWindow(): Promise<void> {
  capturerWindow = createWindow({
    width: 1440,
    height: 900,
    show: false,
    alwaysOnTop: true,
    path: '/capturer'
  });

  let show = false;
  globalShortcut.register('CommandOrControl+Shift+X', () => {
    if (show) {
      capturerWindow.hide();
    } else {
      capturerWindow.webContents.send('startCapturer');
      capturerWindow.show();
    }
    show = !show;
  });
}

export function showDevTool(): void {
  capturerWindow.webContents.openDevTools();
}
