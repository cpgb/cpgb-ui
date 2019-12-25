import * as React from 'react';

export default function WindowIcon(
  props: React.SVGProps<SVGSVGElement>
): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" {...props}>
      <path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14m0 14V8H5v10h14z" />
    </svg>
  );
}
