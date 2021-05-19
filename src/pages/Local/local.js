import React from "react";
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
} from "reactstrap";
import "./local.css";
import { Menu } from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
const Local = (props) => {
  return (
    <div className="local-div">
      <Menu />
      <h6>Localização</h6>
      <Container>
        <Form>
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
                    <Input id="cep" type="text" />
                  </Col>
                  <Label for="cep">Cidade٭</Label>
                  <Col sm={5}>
                    <Input id="cep" type="text" />
                  </Col>
                  <Label for="exampleSelect">Estado٭</Label>
                  <Col sm={5}>
                    <Input type="select" name="select" id="exampleSelect">
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
                  <Label for="cep">Bairro٭</Label>
                  <Col sm={5}>
                    <Input id="cep" type="text" />
                  </Col>
                  <Label for="cep">Endereço٭</Label>
                  <Col sm={5}>
                    <Input id="cep" type="text" />
                  </Col>
                  <Label for="cep">Número٭</Label>
                  <Col sm={5}>
                    <Input id="cep" type="text" />
                  </Col>
                  <Label for="cep">Complemento٭</Label>
                  <Col sm={5}>
                    <Input
                      id="cep"
                      type="text"
                      placeholder="Insira um complemento se achar necessário"
                    />
                  </Col>
                </FormGroup>
              </div>
            </CardBody>
          </Card>
          <Button className="btn-local">Enviar٭</Button>
        </Form>
      </Container>
      <Footer/>
    </div>
  );
};

export default Local;
