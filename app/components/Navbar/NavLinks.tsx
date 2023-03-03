import { Links } from '~/components/Navbar';

export default function NavLinks() {
  return (
    <div className="hidden md:block">
      <ul className="md:flex md:list-none md:gap-[30px] lg:gap-[50px]">
        <Links linkClassName="text-fg-primary dark:text-fg-primary-dark font-bold text-[1.1rem] block animated-link" />
      </ul>
    </div>
  );
}
