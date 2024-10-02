import User from "../ui/User";
import HeaderSettings from "./HeaderSettings";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <User />
      <HeaderSettings />
    </header>
  );
}

export default Header;
