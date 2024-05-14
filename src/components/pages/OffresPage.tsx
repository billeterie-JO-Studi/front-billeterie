import { Button, Container, Row, Col } from "react-bootstrap";
import CardTicket from "../CardTicket";
import { useState } from "react";
import Offre from "../../models/Offre";
import { useRecoilValue } from "recoil";
import { offresState, totalCommandSelector } from "../../store/store";
import { useNavigate, useNavigation } from "react-router-dom";
// import offres from "../../mock/offres.json";

export default function OffresPage() {
  const totalCommand = useRecoilValue(totalCommandSelector); 
  const offres = useRecoilValue(offresState);

  // navigation 
  const navigate = useNavigate(); 

  const onClickCommand = () => {
    navigate("/market"); 
  }

  console.log(offres);

  return (
    <Container fluid={false} className="mb-5">
      <h1 className="h2 mb-5">Nos Billets</h1>
      <Row>
        {offres.map((offre: Offre) => (
          <Col
            xs
            lg={4}
            key={offre.id}
            className="d-flex justify-content-center justify-content-sm-start mb-4"
          >
            <CardTicket offre={offre} />
          </Col>
        ))}
      </Row>
      <hr />
      <Row>
        <Col>
          <strong>Total commande : {totalCommand.toString()} €</strong>
        </Col>
        <Col md={{ offset: 10 }}>
          <Button className="justify-content-end w-100" onClick={onClickCommand}>Commander</Button>
        </Col>
      </Row>
    </Container>
  );
}
