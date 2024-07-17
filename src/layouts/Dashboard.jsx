import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  
  return (
    <div>
      <header className="bg-primary text-primary-foreground">
        <nav className="container px-3 max-w-screen-xl mx-auto flex justify-between items-center">
          <h2 className="lg:text-3xl md:text-2xl text-xl p-2 font-bold">Artho Pay</h2>
          <Button variant="secondary">Logout</Button>
        </nav>
      </header>
      <main className="container px-3 max-w-screen-xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;