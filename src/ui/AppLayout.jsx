import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="m-4 grid h-[calc(100dvh-2rem)] grid-rows-[auto_1fr] rounded-3xl bg-darkest p-4">
      <Header />
      <main className="grid grid-cols-[4fr_3fr] grid-rows-[1fr_2fr_1fr] gap-6">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
