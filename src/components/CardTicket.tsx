import { Button, Card, Form } from "react-bootstrap";
import Offre from "../models/Offre";
import "./CardTicket.css";
import React, { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { marketState } from "../store/store";
import ItemMarket from "../models/ItemMarket";
type Props = {
  offre: Offre;
};

export default function CardTicket(props: Readonly<Props>) {
  const { offre } = props;

  // state global
  const [listMarket, setListMarket] = useRecoilState(marketState);
  const [quantity, setQuantity] = useState(1);
  const [isInvalid, setIsInvalid] = useState(false);

  const addToCard = () => {
    // ajout au panier
    if (isInvalid) return;

    const itemMarket: ItemMarket = {
      quantity: quantity,
      offre: offre,
    };

    // vérifcation du panier du panier
    const indexItem = listMarket.findIndex(
      (item) => itemMarket.offre.id === item.offre.id
    );
    if (indexItem === -1) {
      // item n'existe pas dans le panier
      console.log("item n'existe pas"); 
      setListMarket([...listMarket, itemMarket]);
    } else {
      console.log("item existe"); 
      const newListItem = listMarket.map((item) =>
        item.offre.id === itemMarket.offre.id ? itemMarket : item
      );
      setListMarket(newListItem);
    }

    console.log(listMarket);

    // TODO: informé le client avec un toast ou autres.

  };

  const onChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number.parseInt(event.target.value);
    
    if (Number.isNaN(newQuantity) || newQuantity < 0) {
      setIsInvalid(true);
      return;
    }
   

    setIsInvalid(false);
    setQuantity(newQuantity);
  };

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://loremflickr.com/500/500/stadium,ticket?random=${offre.id}`}
      />
      <Card.Body>
        <Card.Title>{offre.name}</Card.Title>
        <Card.Text>{offre.description}</Card.Text>
        <span>
          <strong>Prix Unitaire :</strong> {`${offre.price.toString()} €`}{" "}
        </span>
        <hr />
        <Form.Label htmlFor="quantityTicket">Quantité de billet : </Form.Label>
        <Form.Control
          type="number"
          size="sm"
          defaultValue={1}
          className="mb-3"
          onChange={onChangeQuantity}
          isInvalid={isInvalid}
        />
        <Button variant="primary" onClick={addToCard} className="w-100">
          Ajouter au panier{" "}
        </Button>
      </Card.Body>
    </Card>
  );
}
