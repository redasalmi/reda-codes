import { Link } from '@remix-run/react';

export default function Logo() {
  return (
    <div className="z-[3]">
      <Link
        to="/"
        className="font-bold text-[1.1rem] block text-2xl hover:text-primary-col hover:dark:text-primary-col-dark"
      >
        Reda Codes
      </Link>
    </div>
  );
}
