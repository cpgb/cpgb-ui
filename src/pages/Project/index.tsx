import * as React from 'react';
import styleCss from './style.css';
import Code from '../../components/Code';
import Button from '../../components/Button';
import { WindowIcon, ProjectIcon } from '../../components/Icons';
const { shell, ipcRenderer } = window.require('electron');
import { SelectWindowState } from '../SelectWindow';

export default function Project(): React.ReactElement {
  const [checkedWindow, setCheckedWindow] = React.useState<SelectWindowState>(
    null
  );

  React.useEffect(() => {
    ipcRenderer.on('switchWindow', (_, window: SelectWindowState) => {
      setCheckedWindow(window);
    });
  }, []);

  return (
    <React.Fragment>
      <div className={styleCss.projectWrapper}>
        <header className={styleCss.title}>
          <ProjectIcon />
          一键刷图
        </header>
        <Code
          title={'项目路径'}
          right={
            <button
              onClick={(): void => {
                shell.showItemInFolder(
                  '/Users/taowei/project/electron/cpgb-ui'
                );
              }}
              className={styleCss.folder}
            >
              访达
            </button>
          }
        >
          /Users/taowei/project/electron/cpgb-ui/project/electron/cpgb-ui
        </Code>
        <div className={styleCss.buttonGroup}>
          <Button
            onClick={(): void => {
              console.log('打包');
            }}
          >
            打包
          </Button>
          <Button>运行</Button>
        </div>
      </div>
      <video></video>
      <div className={styleCss.logWrapper}>这是输出的日志</div>
      <footer className={styleCss.footer}>
        <ToolWindowIcon
          onClick={(): void => {
            ipcRenderer.invoke('toggleToolWindow');
          }}
        />
        <CurrentWindow
          current={checkedWindow}
          onClick={(): void => {
            ipcRenderer.invoke('openWindow', {
              width: 900,
              height: 400,
              center: true,
              path: '/select-window'
            });
          }}
        />
      </footer>
    </React.Fragment>
  );
}

function ToolWindowIcon(
  props: React.DOMAttributes<HTMLDivElement>
): React.ReactElement {
  return <div className={styleCss.toolWindowIcon} {...props} />;
}

interface CurrentWindowProps {
  current?: SelectWindowState;
}
function CurrentWindow(
  props: CurrentWindowProps & React.DOMAttributes<HTMLDivElement>
): React.ReactElement {
  const { current, ...rest } = props;
  if (!current) {
    return (
      <div className={styleCss.currentWindow} {...rest}>
        <WindowIcon height={20} width={20} />
        <span>选择游戏窗口</span>
      </div>
    );
  } else {
    return (
      <div className={styleCss.currentWindow} {...rest}>
        <img src={current.appIconSrc} alt={current.name} />
        <span>{current.name}</span>
      </div>
    );
  }
}
