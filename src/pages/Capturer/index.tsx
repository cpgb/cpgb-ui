import * as React from 'react';
import styleCss from './style.css';

const { desktopCapturer, ipcRenderer } = window.require('electron');

export default function Capturer(): React.ReactElement {
  const [src, setSrc] = React.useState('');

  function startCapturer(): void {
    desktopCapturer
      .getSources({
        types: ['window'],
        thumbnailSize: { width: 0, height: 0 }
      })
      .then((sources): void => {
        console.log(sources);
      });
  }
  ipcRenderer.on('startCapturer', (): void => {
    startCapturer();
    setSrc('');
  });
  React.useEffect(() => {
    startCapturer();
  }, []);

  return (
    <React.Fragment>
      <img className={styleCss.img} src={src} alt="capturer" />
    </React.Fragment>
  );
}
