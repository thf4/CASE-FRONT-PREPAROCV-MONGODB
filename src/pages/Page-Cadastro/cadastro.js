import React, { useCallback, useState } from "react";
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
import { app } from "../../Auth/Config-fire";
import { Menu } from "../../components/Menu/Menu";

const Cadastro = ({ history }) => {
  const [error, setError] = useState("");

  const cadastroUser = useCallback(
    async (e) => {
      e.preventDefault();

      const { email, password } = e.target;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        setError("Success");
        history.push("/login");
      } catch (err) {
        setError("Error to create");
      }
    },
    [history]
  );

  return (
    <div>
      <Menu />
      <Container>
        <div className="cadastar-camp">
          <Card className="card-cadastro">
            {error && <Alert color="danger">{error} </Alert>}
            <Form onSubmit={cadastroUser} className="card-body">
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
                      placeholder="SENHA"
                      className="input-Cadastrar"
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
