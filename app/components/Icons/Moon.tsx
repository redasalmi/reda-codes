import { forwardRef } from 'react';

import type { SvgPropsWithRef, SvgRef } from '~/components/Icons';

function SvgMoon(props: SvgPropsWithRef, ref: SvgRef) {
  return (
    <svg viewBox="0 0 16 16" width={16} height={16} ref={ref} {...props}>
      <path
        fillRule="evenodd"
        d="M9.598 1.591a.75.75 0 0 1 .785-.175 7 7 0 1 1-8.967 8.967.75.75 0 0 1 .961-.96 5.5 5.5 0 0 0 7.046-7.046.75.75 0 0 1 .175-.786zm1.616 1.945a7 7 0 0 1-7.678 7.678 5.5 5.5 0 1 0 7.678-7.678z"
      />
    </svg>
  );
}

const forwardedRef = forwardRef(SvgMoon);
export default forwardedRef;
