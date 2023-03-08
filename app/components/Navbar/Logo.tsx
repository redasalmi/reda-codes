import { Link } from '@remix-run/react';

export default function Logo() {
  return (
    <div className="z-[3]">
      <Link
        to="/"
        className="block text-[1.1rem] text-2xl font-bold hover:text-primary-col hover:dark:text-primary-col-dark"
      >
        Reda Codes
      </Link>
    </div>
  );
}
