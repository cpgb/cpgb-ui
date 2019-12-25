import { BrowserWindow } from 'electron';
import { createWindow } from './services/windows';

let recordWindow: BrowserWindow = null;

export async function newWindow(): Promise<void> {
  recordWindow = createWindow({
    width: 465,
    height: 65,
    show: false,
    path: '/record'
  });
}

let show = false;
export function showRecordWindow(): void {
  show = true;
  recordWindow.show();
}

export function hideRecordWindow(): void {
  show = false;
  recordWindow.hide();
}

export function toggleRecordWindow(): void {
  if (!show) {
    showRecordWindow();
  } else {
    hideRecordWindow();
  }
}

export function showDevTool(): void {
  recordWindow.webContents.openDevTools();
}
