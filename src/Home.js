import React from "react";
import app from "./base";
import { Button } from 'antd';

const divStyle = {
  width: '200px',
  'margin-left': '1093px',
  'padding-top': '20px',
};

const Home = () => {
  return (
    <div style={divStyle} className="btn_log_out" >
      {/* <h1>Home</h1> */}
      < Button type="primary" danger onClick={() => app.auth().signOut()}> Sign out</Button >
    </div >
  );
};

export default Home;
