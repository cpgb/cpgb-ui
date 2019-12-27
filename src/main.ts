import { createWindow } from './services/windows';
import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';
import * as record from './record';
import * as capturer from './capturer';

app.on(
  'ready',
  async (): Promise<void> => {
    const mainWindow = createWindow({
      width: 360,
      height: 600
    });

    record.newWindow();
    capturer.newWindow();

    // 显示工具拦
    ipcMain.handle('toggleToolWindow', (): void => {
      record.toggleRecordWindow();
    });

    // 打开控制台
    globalShortcut.register('CommandOrControl+Shift+I', (): void => {
      const focusedWindow = BrowserWindow.getFocusedWindow();
      if (focusedWindow) {
        focusedWindow.webContents.openDevTools();
      }
    });

    // 发送消息给主窗口
    ipcMain.handle('sendToMainWindow', (_, channel, ...args) => {
      mainWindow.webContents.send(channel, ...args);
    });
  }
);

app.on('window-all-closed', app.quit);
