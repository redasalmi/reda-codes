import { Links } from '~/components/Navbar';

export default function NavLinks() {
  return (
    <div className="hidden md:block">
      <ul className="md:flex md:list-none md:gap-[30px] lg:gap-[50px]">
        <Links linkClassName="text-fg-primary dark:text-fg-primary-dark font-bold text-[1.1rem] block hover:text-primary-col hover:dark:text-primary-col-dark after:content-[''] after:w-0 after:h-[2px] after:block after:bg-primary-col after:dark:bg-primary-col-dark after:transition-[width] after:ease-linear after:duration-100 after:hover:w-full motion-reduce:after:transition-none" />
      </ul>
    </div>
  );
}
