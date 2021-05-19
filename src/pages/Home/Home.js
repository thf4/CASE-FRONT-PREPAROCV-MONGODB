import React from "react";
import { Button } from "reactstrap";
import { app } from "../../Auth/Config-fire";

const Home = () => {
  return (
    <div>
      <h1>Ola mundo</h1>
      <Button href={"/login"}
        onClick={() => {
          app.auth().signOut()
        } }
      >
        Logout
      </Button>
    </div>
  );
};

export default Home;
