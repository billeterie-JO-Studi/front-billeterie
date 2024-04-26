import { Button, Card, Form } from "react-bootstrap";
import Offre from "../models/Offre";

type Props = {
  offre: Offre;
}

export default function CardTicket(props: Readonly<Props>) {

  const {offre} = props;

  const addToCard = () => {
    // ajout au panier
    console.log(`ajout au panier pour le billet : ${offre.name}`)
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`https://loremflickr.com/100/100/stadium,ticket?random=${offre.id}`} />
      <Card.Body>
        <Card.Title>{offre.name}</Card.Title>
        <Card.Text>
          {offre.description}
        </Card.Text>
        <span><strong>Prix Unitaire :</strong> {`${offre.price.toString()} €`} </span>
        <hr />
        <Form.Label htmlFor="quantityTicket">Quantité de billet : </Form.Label>
        <Form.Control type="number" size="sm" defaultValue={0} className="m-2" />
        <Button variant="primary" onClick={addToCard}>Ajouter au panier </Button>
      </Card.Body>
    </Card>
  );
}
