import * as React from 'react';
import styleCss from './style.css';

interface IProps {
  title: string
}

const TitleBar: React.FunctionComponent<IProps> = (props: IProps): React.ReactElement => {
  return <header className={styleCss.title_bar}>{props.title}</header>;
}

export default TitleBar;
