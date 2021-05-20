import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import {
  Form,
  Input,
  Container,
  FormGroup,
  Label,
  Col,
  Card,
  Row,
  Button,
  Alert,
} from "reactstrap";
import "./cadastro.css";
import { withRouter } from "react-router-dom";

import { api } from "../../Config/host";
import { Menu } from "../../components/Menu/Menu";

const Cadastro = () => {
  const [error, setError] = useState("");
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const cadUser = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post(api + "/cadastrar", user, { headers });
      setError("Success Create!");
      history.push("/login");
      return response;
    } catch (err) {
      setError("Created fail!");
    }
  };

  return (
    <div>
      <Menu />
      <Container>
        <div className="cadastar-camp">
          <Card className="card-cadastro">
            {error && <Alert color="danger">{error} </Alert>}
            <Form onSubmit={cadUser} className="card-body">
              <Label className="mt-4">CADASTRO DO CANDIDATO </Label>
              <FormGroup>
                <Row>
                  <Col sm={12}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="E-MAIL"
                      className=" input-Cadastrar"
                      onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                      }}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col sm={12}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="SENHA"
                      className="input-Cadastrar"
                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                      }}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col sm={12}>
                    <Input
                      type="password"
                      name="password"
                      id="password2"
                      placeholder="CONFIRME SUA SENHA"
                      className="input-Cadastrar"
                      onChange={(e) => {
                        setUser({ ...user, password2: e.target.value });
                      }}
                    />
                  </Col>
                </Row>
              </FormGroup>

              <Button className=" btn-Cadastrar btn-danger ">CADASTRAR</Button>
            </Form>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default withRouter(Cadastro);
