import { createWindow } from './services/windows';
import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';
import * as record from './record';
import * as capturer from './capturer';

app.on(
  'ready',
  async (): Promise<void> => {
    const mainWindow: BrowserWindow = createWindow({
      width: 360,
      height: 600
    });

    record.newWindow();
    capturer.newWindow();

    ipcMain.handle('toggleToolWindow', (): void => {
      record.toggleRecordWindow();
    });

    globalShortcut.register('CommandOrControl+Shift+I', (): void => {
      mainWindow.webContents.openDevTools();
      record.showDevTool();
      capturer.showDevTool();
    });
  }
);

app.on('window-all-closed', app.quit);
