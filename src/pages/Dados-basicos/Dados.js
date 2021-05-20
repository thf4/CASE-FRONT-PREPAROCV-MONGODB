import React, { useState } from "react";
import { withRouter, useHistory } from "react-router";
import {
  Form,
  Input,
  Container,
  Card,
  CardBody,
  FormGroup,
  Label,
  Button,
  CardSubtitle,
  CardTitle,
  Col,
  Alert,
} from "reactstrap";

import axios from "../../Config/axios";
import { api } from "../../Config/host";
import { Menu } from "../../components/Menu-User/User-Menu";
import Footer from "../../components/Footer/Footer";

const Dados = (props) => {
  const history = useHistory;
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    behance: "",
    github: "",
    linkedin: "",
    telephone: "",
    image: "",
  });

  const editSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(api + "/user/:_id", data);
      setError("Atualizado com sucesso!");
      history.push("/home");
      return response;
    } catch (err) {
      setError("Erro ao atualizar cadastro!");
    }
  };
  return (
    <div>
      <Menu />
      <Container className="pt-4">
        <Form onSubmit={editSubmit}>
          <Card>
            {error && <Alert>{error}</Alert>}
            <CardBody>
              <CardTitle>
                <h4>Foto de perfil</h4>
              </CardTitle>
              <CardSubtitle>Adicione uma foto em seu perfil</CardSubtitle>
              <Form className="mt-3 col-md d-flex flex-column align-items-left justify-content-center">
                <Label className="">Carregar</Label>
                <Input
                  type="file"
                  value={data.image}
                  onChange={(e) => setData({ ...data, image: e.target.value })}
                />
              </Form>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div>
                <CardTitle>
                  <h4>E-mail</h4>
                </CardTitle>
                <CardSubtitle>Você pode alterar seu email</CardSubtitle>
              </div>
              <FormGroup row>
                <Label for="emailex" sm={1}>
                  E-mail
                </Label>
                <Col sm={4}>
                  <Input
                    id="emailex"
                    type="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
              <Button className="mt-2" color="primary">
                Atualizar
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div>
                <CardTitle>
                  <h4>Instruções</h4>
                </CardTitle>
                <CardSubtitle>
                  Preencha seus dados de perfil. Sempre mantenha seu telefone
                  atualizado.
                </CardSubtitle>
              </div>
              <FormGroup row>
                <Label for="name">Nome</Label>
                <Col sm={4}>
                  <Input
                    id="name"
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="surname">Sobrenome</Label>
                <Col sm={4}>
                  <Input
                    id="surname"
                    type="text"
                    value={data.surname}
                    onChange={(e) =>
                      setData({ ...data, surname: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="telephone">Telefone</Label>
                <Col sm={4}>
                  <Input
                    id="telephone"
                    type="text"
                    value={data.telephone}
                    onChange={(e) =>
                      setData({ ...data, telephone: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div>
                <CardTitle>
                  <h4>Links Pessoais</h4>
                </CardTitle>
                <CardSubtitle>
                  Compartilhe seu perfil de outras plataformas aqui.
                </CardSubtitle>
              </div>

              <FormGroup row>
                <Label for="Github">Github</Label>
                <Col sm={4}>
                  <Input
                    id="Github"
                    type="text"
                    value={data.github}
                    onChange={(e) =>
                      setData({ ...data, github: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Behance">Behance</Label>
                <Col sm={4}>
                  <Input
                    id="Behance"
                    type="text"
                    value={data.behance}
                    onChange={(e) =>
                      setData({ ...data, behance: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="linkedin">Linkedin</Label>
                <Col sm={4}>
                  <Input
                    id="linkedin"
                    type="text"
                    value={data.linkedin}
                    onChange={(e) =>
                      setData({ ...data, linkedin: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
            </CardBody>
          </Card>
          <Button className="btn-atualizar-dados">Atualizar</Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default withRouter(Dados);
