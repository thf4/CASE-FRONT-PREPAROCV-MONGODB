import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Card,
  CardBody,
  Alert,
} from "reactstrap";
import "./local.css";

import { Menu } from "../../components/Menu-User/User-Menu";
import Footer from "../../components/Footer/Footer";
import Axios from "../../Config/axios";
import { api } from "../../Config/host";

const Local = (props) => {
  const params = useParams();
  const [error, setErros] = useState("");
  const [success, setSuccess] = useState("");
  const [data, setData] = useState({
    zip: "",
    state: "",
    address: "",
    statee: "",
    district: "",
    number: "",
    complement: "",
  });

  const localSubmit = async (e) => {
    e.preventDefault();

    try {
      const { _id } = params;
      const response = await Axios().put(`${api}/user/local/${_id}`, data);
      setSuccess("Atualizado com sucesso!");
      return response;
    } catch (err) {
      setErros("Erro ao atualizar dados!");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const { _id } = params;
        const { data } = await Axios().get(`${api}/user/local/${_id}`);
        const { statee, zip, district, address, city, complement } = data;

        setData({
          statee,
          zip,
          district,
          address,
          city,
          complement,
        });
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);

  return (
    <div className="local-div">
      <Menu />
      {error && <Alert color="danger">{error}</Alert>}
      {success && <Alert>{success}</Alert>}
      <h6>Localização</h6>
      <Container>
        <Form onSubmit={localSubmit}>
          <Card>
            <CardBody>
              <div>
                <h4>Instruções</h4>
                <p>
                  Preencha seus dados de Localização. Sempre os mantenha
                  atualizado.
                </p>
              </div>
              <div>
                <FormGroup row>
                  <Label for="cep">CEP٭</Label>
                  <Col sm={5}>
                    <Input
                      id="cep"
                      type="text"
                      value={data.zip}
                      onChange={(e) =>
                        setData({ ...data, zip: e.target.value })
                      }
                    />
                  </Col>
                  <Label for="cidade">Cidade٭</Label>
                  <Col sm={5}>
                    <Input
                      id="cidade"
                      type="text"
                      value={data.city}
                      onChange={(e) =>
                        setData({ ...data, city: e.target.value })
                      }
                    />
                  </Col>
                  <Label for="estado">Estado٭</Label>
                  <Col sm={5}>
                    <Input
                      type="select"
                      name="estado"
                      id="exampleSelect"
                      value={data.statee}
                      onChange={(e) =>
                        setData({ ...data, statee: e.target.value })
                      }
                    >
                      <option disabled>Selecione o Estado</option>
                      <option>AC</option>
                      <option>AL</option>
                      <option>AP</option>
                      <option>AM</option>
                      <option>BA</option>
                      <option>CE</option>
                      <option>DF</option>
                      <option>ES</option>
                      <option>GO</option>
                      <option>MA</option>
                      <option>MT</option>
                      <option>MS</option>
                      <option>MG</option>
                      <option>PA</option>
                      <option>PB</option>
                      <option>PR</option>
                      <option>PI</option>
                      <option>RJ</option>
                      <option>RN</option>
                      <option>RS</option>
                      <option>RO</option>
                      <option>RR</option>
                      <option>SC</option>
                      <option>SP</option>
                      <option>SE</option>
                      <option>TO</option>
                    </Input>
                  </Col>
                  <Label for="bairro">Bairro٭</Label>
                  <Col sm={5}>
                    <Input
                      id="bairro"
                      type="text"
                      value={data.district}
                      onChange={(e) =>
                        setData({ ...data, district: e.target.value })
                      }
                    />
                  </Col>
                  <Label for="endereço">Endereço٭</Label>
                  <Col sm={5}>
                    <Input
                      id="endereço"
                      type="text"
                      value={data.address}
                      onChange={(e) =>
                        setData({ ...data, address: e.target.value })
                      }
                    />
                  </Col>
                  <Label for="numero">Número٭</Label>
                  <Col sm={5}>
                    <Input
                      id="numero"
                      type="text"
                      value={data.number}
                      onChange={(e) =>
                        setData({ ...data, number: e.target.value })
                      }
                    />
                  </Col>
                  <Label for="comple">Complemento٭</Label>
                  <Col sm={5}>
                    <Input
                      id="comple"
                      type="text"
                      placeholder="Insira um complemento se achar necessário"
                      value={data.complement}
                      onChange={(e) =>
                        setData({ ...data, complement: e.target.value })
                      }
                    />
                  </Col>
                </FormGroup>
              </div>
            </CardBody>
          </Card>
          <Button className="btn-local">Enviar</Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default Local;
