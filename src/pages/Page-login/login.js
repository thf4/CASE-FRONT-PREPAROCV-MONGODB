import React, { useCallback, useContext } from "react";
import { Redirect, withRouter } from "react-router-dom";
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
import { AuthContext } from "../../Auth/Auth-Provider";
import { app } from "../../Auth/Config-fire";
import "./login.css";
import { Menu } from "../../components/Menu/Menu";

const Login = ({ history }) => {
  const loginUser = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);

        history.push("/dados");
      } catch (err) {
        console.log(err);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    <Redirect to={"/dados"} />;
  }

  return (
    <div>
      <Menu />

      <div className="logincamp">
        <Container>
          <Card className="card-login">
            <Form onSubmit={loginUser} className="card-body">
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
