import type { SvgPropsWithoutRef } from '~/components/Icons';

export default function ArrowUp(props: SvgPropsWithoutRef) {
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
      {...props}
    >
      <path d="M12 20V4m-7 7 7-7 7 7" />
    </svg>
  );
}
