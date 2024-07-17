import useUser from "@/hooks/useUser";
import Dashboard from "@/layouts/Dashboard";
import Login from "../login/Login";


const Home = () => {
  const { user } = useUser();

  if (user) {
    return <Dashboard />
  } else {
    return <Login />
  }
};

export default Home;