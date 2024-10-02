import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="bg-darkest m-4 grid h-[calc(100dvh-2rem)] grid-rows-[auto_1fr] rounded-3xl p-4">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
