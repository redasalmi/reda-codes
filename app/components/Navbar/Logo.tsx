import { Link } from '@remix-run/react';

export default function Logo() {
  return (
    <div className="z-[3]">
      <Link
        to="/"
        className="block text-2xl font-bold hover:text-primary hover:dark:text-primary-dark"
      >
        Reda Codes
      </Link>
    </div>
  );
}
