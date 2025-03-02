import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gradient-to-r from-gray-900 via-black to-gray-900" >
        <Outlet />
      </main>
    </div>
  );
}
