import React, { useState, useContext } from "react";
import { withRouter, useHistory } from "react-router-dom";
import axios from "../../Config/axios";
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
} from "reactstrap";
import "./login.css";
import { Menu } from "../../components/Menu/Menu";
import { api } from "../../Config/host";
import { AuthContext } from "../../Auth/Auth-Provider";
const Login = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { authenticated } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(api + "/login", data);
      sessionStorage.setItem("token", JSON.stringify(response.data.token));
      history.push("/home");
      return response;
    } catch (err) {
      setError(" Usuário não cadastrado");
      console.log(err);
    }
  };

  return (
    <div>
      <Menu />
      <>{JSON.stringify(authenticated)}</>
      <div className="logincamp">
        <Container>
          <Card className="card-login">
            <Form onSubmit={handleSubmit} className="card-body">
              <Label>LOGIN</Label>
              <FormGroup>
                <Row>
                  <Col sm={12}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="EMAIL"
                      bsSize="xs"
                      className="mt-2 input-login"
                      value={data.email}
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
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
                      bsSize="xs"
                      className="mt-4 input-login"
                      value={data.password}
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                    />
                  </Col>
                </Row>
              </FormGroup>
              <Button className="mt-4 btn-login-LOGIN btn-danger ">
                ENTRAR
              </Button>
              <Button className="mt-2 btn-login-RECUPERAR">
                RECUPERAR SENHA
              </Button>
              <Button href="/cadastrar" className="mt-2 btn-login-CADASTRAR">
                CADASTRAR
              </Button>
            </Form>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default withRouter(Login);
