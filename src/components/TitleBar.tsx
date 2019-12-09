import * as React from 'react';

interface IProps {
  title: string
}

const TitleBar: React.FunctionComponent<IProps> = (props: IProps) => {
  return <header>{props.title}</header>;
}
export default TitleBar;

