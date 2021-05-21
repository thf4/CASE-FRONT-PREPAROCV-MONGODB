import React, { useState, useContext, useEffect } from "react";
import { withRouter, useParams } from "react-router";
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

import Axios from "../../Config/axios";
import { api } from "../../Config/host";
import { Menu } from "../../components/Menu-User/User-Menu";
import Footer from "../../components/Footer/Footer";
import { AuthContext } from "../../Auth/Auth-Provider";

const Dados = (props) => {
  const { authenticated } = useContext(AuthContext);
  const params = useParams();
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

  const arrayBufferToBase64 = (buffer) => {
    const binary = "";
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const onFileInputChange = (e) => {
    const file = e.target.files[0];

    getBase64(file)
      .then((result) => {
        setData({
          ...data,
          image: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editSubmit = async (e) => {
    e.preventDefault();

    try {
      const { _id } = params;
      const response = await Axios().put(`${api}/user/${_id}`, data);
      setError("Atualizado com sucesso!");
      return response;
    } catch (err) {
      setError("Erro ao atualizar cadastro!");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const { _id } = params;
        const { data } = await Axios().get(`${api}/user/${_id}`);
        const { name, surname, email, behance, github, linkedin, telephone } = data;
        
        setData({
          name,
          surname,
          email,
          behance,
          github,
          linkedin,
          telephone,
        });
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    setData({
      ...data,
      email: (authenticated && authenticated.email) || "",
    });
  }, [authenticated]);

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
              <div className="mt-3 col-md d-flex flex-column align-items-left justify-content-center">
                <Label className="">Carregar</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={onFileInputChange}
                />
                {data.image && (
                  <img
                    alt="img"
                    style={{ width: 150, marginLeft: 0 }}
                    src={data.image}
                  />
                )}
              </div>
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
                    value={(authenticated && authenticated.email) || data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
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
