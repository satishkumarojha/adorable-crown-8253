import React from "react";
import UserRoutes from "./../../pages/UserRoutes";
import Dashboard from "./Dashboard";


const Home = () => {
  return (
    <div>
      <Dashboard />
      <UserRoutes />
    </div>
  );
};

export default Home;
