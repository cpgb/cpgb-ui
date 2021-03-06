import * as React from 'react';
import styleCss from './style.css';
import { Arrow } from '../../components/Icons';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export interface TitleBarProps extends RouteComponentProps {
  title: string;
  onClose: () => void;
}

const IconClose: React.FunctionComponent = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="close"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
  </svg>
);

const TitleBar: React.FunctionComponent<TitleBarProps> = (
  props: TitleBarProps
): React.ReactElement => {
  console.log(props.history);
  return (
    <header className={styleCss.titleBar}>
      {props.history.length > 1 && (
        <div className={styleCss.control}>
          <Arrow
            direction={'left'}
            fill="#666"
            onClick={(): void => {
              props.history.goBack();
            }}
          />
          <Arrow
            direction={'right'}
            fill="#666"
            onClick={(): void => {
              props.history.goForward();
            }}
          />
        </div>
      )}

      {props.title}
      <div className={styleCss.right}>
        <span
          className={styleCss.btn}
          onClick={(): void => {
            props.onClose();
          }}
        >
          <IconClose />
        </span>
      </div>
    </header>
  );
};

export default withRouter(TitleBar);
