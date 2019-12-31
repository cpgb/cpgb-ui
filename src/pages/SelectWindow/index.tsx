import * as React from 'react';
import WindowItem from './WindowItem';
import StyleCss from './style.css';
import Electron from 'electron';
import Toast from '../../components/Toast';
import Placeholder from '../../components/Placeholder';

const { desktopCapturer, ipcRenderer } = window.require('electron');

export interface SelectWindowState {
  thumbnailSrc: string;
  appIconSrc: string;
  name: string;
  displayId: string;
  id: string;
}

export default function SelectWindow(): React.ReactElement {
  const [windows, setWindows] = React.useState<SelectWindowState[]>([]);
  const [checkedId, setCheckedId] = React.useState({});

  React.useEffect((): void => {
    desktopCapturer
      .getSources({
        types: ['window'],
        thumbnailSize: {
          width: 460,
          height: 460
        },
        fetchWindowIcons: true
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
                appIconSrc: source.appIcon.toDataURL()
              };
            })
        );
      });
  }, []);
  return (
    <div className={StyleCss.selectWindow}>
      {windows.length === 0 && <Placeholder />}
      {windows.map(window => (
        <WindowItem
          key={window.id}
          thumbnailSrc={window.thumbnailSrc}
          appIconSrc={window.appIconSrc}
          name={window.name}
          onClick={(): void => {
            if (checkedId !== window.id) {
              setCheckedId(window.id);
              Toast.succeed('切换窗口成功');
              ipcRenderer.invoke('sendToMainWindow', 'switchWindow', window);
            }
          }}
          checked={checkedId === window.id}
        />
      ))}
    </div>
  );
}
