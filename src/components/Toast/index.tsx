import * as React from 'react';

import * as ReactDOM from 'react-dom';
import Notification from './Notification';
let instance: Notification = null;

function init(): void {
  if (null !== instance) {
    return;
  }
  const div = document.createElement('div');
  document.body.appendChild(div);
  function ref(notification): void {
    instance = notification;
  }
  ReactDOM.render(<Notification ref={ref} />, div);
}

init();

export default {
  succeed(content: string, duration?: number): () => void {
    const id = instance.add({ content, type: 'success' }, duration);
    return (): void => {
      instance.remove(id);
    };
  },
  failed(content: string, duration?: number): () => void {
    const id = instance.add({ content, type: 'failed' }, duration);
    return (): void => {
      instance.remove(id);
    };
  },
  loading(content: string, duration?: number): () => void {
    const id = instance.add({ content, type: 'loading' }, duration);
    return (): void => {
      instance.remove(id);
    };
  },
  info(content: string, duration?: number): () => void {
    const id = instance.add({ content }, duration);
    return (): void => {
      instance.remove(id);
    };
  }
};
