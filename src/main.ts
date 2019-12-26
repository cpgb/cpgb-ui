import { createWindow } from './services/windows';
import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';
import * as record from './record';
import * as capturer from './capturer';

app.on(
  'ready',
  async (): Promise<void> => {
    createWindow({
      width: 360,
      height: 600
    });

    record.newWindow();
    capturer.newWindow();

    ipcMain.handle('toggleToolWindow', (): void => {
      record.toggleRecordWindow();
    });

    globalShortcut.register('CommandOrControl+Shift+I', (): void => {
      const focusedWindow = BrowserWindow.getFocusedWindow();
      if (focusedWindow) {
        focusedWindow.webContents.openDevTools();
      }
    });
  }
);

app.on('window-all-closed', app.quit);
