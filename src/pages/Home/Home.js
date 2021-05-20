import React, { useContext } from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../Auth/Auth-Provider";

const Home = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Ola mundo</h1>
    </div>
  );
};

export default Home;
