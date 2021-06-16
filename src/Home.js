import React from "react";
import app from "./base";
import { Button } from "antd";

const Home = () => {
  return (
      <Button type="primary" danger onClick={() => app.auth().signOut()}>
        Sign out
      </Button>
  );
};

export default Home;
