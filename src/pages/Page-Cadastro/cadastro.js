import React, { useState } from "react";
import { useHistory } from "react-router";
import Axios from "axios";
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
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const cadUser = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios().post(api + "/cadastrar", user);
      setSuccess("Cadastrado com sucesso!");
      history.push("/login");
      return response;
    } catch (err) {
      const rest = err.response.data.message;
      setError(rest);
    }
  };

  return (
    <div>
      <Menu />
      <Container>
        <div className="cadastar-camp">
          <Card className="card-cadastro">
            {error && <Alert color="danger">{error} </Alert>}
            {success && <Alert color="success">{success} </Alert>}
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
