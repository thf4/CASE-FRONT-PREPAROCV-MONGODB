import React, { useContext } from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

import { app } from "../../Auth/Config-fire";
import { AuthContext } from "../../Auth/Auth-Provider";

const Home = () => {
  const history = useHistory();
  const { setCurrentUser } = useContext(AuthContext);

  return (
    <div>
      <h1>Ola mundo</h1>
      <Button
        onClick={() => {
          app.auth().signOut();
          setCurrentUser(null);
          history.push("/login");
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Home;
