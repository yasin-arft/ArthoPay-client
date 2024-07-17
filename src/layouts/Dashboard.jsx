import { Button } from "@/components/ui/button";
import useUser from "@/hooks/useUser";
import { removeUserFromSS } from "@/utils/sessionStorage";
import { Outlet } from "react-router-dom";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { setUserExist } = useUser();

  const handleLogout = () => {
    removeUserFromSS();
    setUserExist(false);
    Swal.fire({
      icon: "success",
      title: 'Logged out successfully.',
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <div>
      <header className="bg-primary text-primary-foreground">
        <nav className="container px-3 max-w-screen-xl mx-auto flex justify-between items-center">
          <h2 className="lg:text-3xl md:text-2xl text-xl p-2 font-bold">Artho Pay</h2>
          <Button onClick={handleLogout} variant="secondary">Logout</Button>
        </nav>
      </header>
      <main className="container px-3 max-w-screen-xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;