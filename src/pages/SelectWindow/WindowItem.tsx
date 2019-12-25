import * as React from 'react';
import StyleCss from './style.css';

export interface WindowItemProps {
  thumbnailSrc: string;
  appIconSrc: string;
  name: string;
}
export default function WindowItem(
  props: WindowItemProps & React.DOMAttributes<HTMLDivElement>
): React.ReactElement {
  return (
    <div className={StyleCss.windowItem}>
      <img src={props.thumbnailSrc} alt={props.name} />
      <div className={StyleCss.title}>
        <img src={props.appIconSrc} /> {props.name.substr(0, 20)}
      </div>
    </div>
  );
}