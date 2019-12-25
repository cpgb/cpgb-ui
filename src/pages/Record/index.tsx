import * as React from 'react';
import styleCss from './style.css';
import {
  SelectWindowIcon,
  CropIcon,
  MoreIcon,
  WindowIcon
} from '../../components/Icons';
export interface StartIconProps {
  recording: 'stop' | 'start';
}
function StartIcon(
  props: StartIconProps & React.DOMAttributes<HTMLDivElement>
): React.ReactElement {
  return (
    <div
      className={[
        styleCss.startBtn,
        props.recording === 'start' && styleCss.recording
      ].join(' ')}
      {...props}
    ></div>
  );
}

export default function Record(): React.ReactElement {
  const [recording, setRecording] = React.useState('stop');
  return (
    <div className={styleCss.recordWrapper}>
      <SelectWindowIcon />
      <WindowIcon />
      <StartIcon
        recording={recording as 'stop' | 'start'}
        onClick={(): void => {
          setRecording(recording === 'stop' ? 'start' : 'stop');
        }}
      />
      <CropIcon />
      <MoreIcon />
    </div>
  );
}
