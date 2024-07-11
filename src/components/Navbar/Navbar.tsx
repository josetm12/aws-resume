//@ts-expect-error TS is not resolving @ path correctly
import { ModeToggle } from '@/components/mode-toggle';

function Navbar() {
  return (
    <div className="p-1 w-full flex flex-row justify-end">
      <ModeToggle />
    </div>
  );
}

export default Navbar;
