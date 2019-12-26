import * as React from 'react';
import StyleCss from './style.css';
import Arrow from '../../components/Icons/Arrow';

export interface WindowItemProps {
  thumbnailSrc: string;
  appIconSrc: string;
  name: string;
  checked: boolean;
  onClick: () => void;
}
export default function WindowItem(
  props: WindowItemProps & React.DOMAttributes<HTMLDivElement>
): React.ReactElement {
  return (
    <div
      className={[
        StyleCss.windowItem,
        props.checked ? StyleCss.checked : ''
      ].join(' ')}
    >
      <div
        className={StyleCss.windowItemInner}
        onClick={(): void => {
          props.onClick();
        }}
      >
        <Arrow className={StyleCss.arrow} />
        <img src={props.thumbnailSrc} alt={props.name} />
        <div className={StyleCss.title}>
          <img src={props.appIconSrc} /> {props.name.substr(0, 20)}
        </div>
      </div>
    </div>
  );
}
