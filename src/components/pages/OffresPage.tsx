import { Button, Container, Row, Col } from "react-bootstrap";
import CardTicket from "../CardTicket";
import { useState } from "react";
import offres from "../../mock/offres.json";
import Offre from "../../models/Offre";

export default function OffresPage() {
  const [totalCommand] = useState(0);

  console.log(offres);

  return (
    <Container fluid={false} className="m3">
      <h2>Nos Billets</h2>
      <Row>
        {offres.map((offre: Offre) => (
          <Col key={offre.id}>
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
          <Button className="justify-content-end">Commander</Button>
        </Col>
      </Row>
    </Container>
  );
}
