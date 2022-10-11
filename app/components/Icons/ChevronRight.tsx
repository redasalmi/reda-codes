import { forwardRef } from 'react';

import type { SvgPropsWithRef, SvgRef } from '~/components/Icons';

function SvgChevronRight(props: SvgPropsWithRef, ref: SvgRef) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      ref={ref}
      {...props}
    >
      <path d="m8 4 8 8-8 8" />
    </svg>
  );
}

const forwardedRef = forwardRef(SvgChevronRight);
export default forwardedRef;
