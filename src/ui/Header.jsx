import User from "../ui/User";
import HeaderSettings from "./HeaderSettings";

function Header() {
  return (
    <header className="mb-4 flex items-center justify-between">
      <User />
      <HeaderSettings />
    </header>
  );
}

export default Header;
