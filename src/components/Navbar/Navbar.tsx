//@ts-expect-error TS is not resolving @ path correctly
import { ModeToggle } from '@/components/mode-toggle';

function Navbar() {
  return (
    <nav className="p-1 w-full flex flex-row justify-end">
      <ModeToggle />
    </nav>
  );
}

export default Navbar;
