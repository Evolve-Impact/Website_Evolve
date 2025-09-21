import { Outlet } from "react-router-dom";
import Header from "./Component/Header.tsx";
import Footer from "./Component/Footer.tsx";


const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-100 text-gray-700 scroll-smooth">
      {/* Navbar */}
   <Header/>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

    <Footer/>
    </div>
  );
};

export default AppLayout;