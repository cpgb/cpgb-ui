import * as React from 'react';
import styleCss from './style.css';

export default function Loading(
  props: React.SVGProps<SVGSVGElement>
): React.ReactElement {
  return (
    <svg
      className={styleCss.spinIcon}
      viewBox="0 0 1024 1024"
      width="32"
      height="32"
      {...props}
    >
      <path d="M801.536 258.816L765.44 222.72l-144.896 144.64 36.096 36.096 144.896-144.64zM691.2 486.4v51.2h204.8v-51.2h-204.8zM537.6 128h-51.2v204.8h51.2V128zM258.56 222.464L222.464 258.56l144.896 144.64 36.096-36.096L258.56 222.464zM332.8 486.4H128v51.2h204.8v-51.2zM537.6 691.2h-51.2v204.8h51.2v-204.8zM222.464 765.696l36.096 36.096 144.64-144.896-36.096-36.096-144.64 144.896zM765.44 801.536l36.352-36.096-144.64-144.896-36.352 36.352 144.64 144.64z" />
    </svg>
  );
}
