import * as React from 'react';
import styleCss from './style.css';

interface Props {
  title: string;
}

const TitleBar: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  return <header className={styleCss.title_bar}>{props.title}</header>;
};

export default TitleBar;
