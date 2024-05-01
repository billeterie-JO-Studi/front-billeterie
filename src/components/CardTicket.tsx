import { Button, Card, Form } from "react-bootstrap";
import Offre from "../models/Offre";
import "./CardTicket.css"
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
    <Card>
      <Card.Img variant="top" src={`https://loremflickr.com/500/500/stadium,ticket?random=${offre.id}`} />
      <Card.Body>
        <Card.Title>{offre.name}</Card.Title>
        <Card.Text>
          {offre.description}
        </Card.Text>
        <span><strong>Prix Unitaire :</strong> {`${offre.price.toString()} €`} </span>
        <hr />
        <Form.Label htmlFor="quantityTicket">Quantité de billet : </Form.Label>
        <Form.Control type="number" size="sm" defaultValue={0} className="mb-3" />
        <Button variant="primary" onClick={addToCard} className= "w-100">Ajouter au panier </Button>
      </Card.Body>
    </Card>
  );
}
