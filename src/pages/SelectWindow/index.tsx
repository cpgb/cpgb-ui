import * as React from 'react';
import WindowItem from './WindowItem';
import StyleCss from './style.css';
import Electron from 'electron';

const { desktopCapturer } = window.require('electron');

export default function SelectWindow(): React.ReactElement {
  const [windows, setWindows] = React.useState([]);
  React.useEffect((): void => {
    desktopCapturer
      .getSources({
        types: ['window'],
        thumbnailSize: {
          width: 300,
          height: 300
        }
      })
      .then((sources: Electron.DesktopCapturerSource[]): void => {
        setWindows(
          sources
            .filter(source => source.name !== '疯狂游戏盒子')
            .map(source => {
              return {
                name: source.name,
                id: source.id,
                displayId: source.display_id,
                thumbnailSrc: source.thumbnail.toDataURL(),
                appIconSrc: source.appIcon
              };
            })
        );
      });
  }, []);
  return (
    <div className={StyleCss.selectWindow}>
      {windows.map(window => (
        <WindowItem
          key={window.id}
          thumbnailSrc={window.thumbnailSrc}
          appIconSrc={window.appIconSrc}
          name={window.name}
        />
      ))}
    </div>
  );
}
