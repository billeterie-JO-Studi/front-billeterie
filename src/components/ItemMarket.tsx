import { Button, Col, Row } from "react-bootstrap";
import ItemMarket from "../models/ItemMarket";
import { useRecoilState} from "recoil";
import { marketState } from "../store/store";

type Props = {
  item: ItemMarket;
};

export default function ItemCardMarket(props: Readonly<Props>) {
  const { item } = props;

  const [listItem, setListItem] = useRecoilState(marketState);

  const addItem = () => {
    if (item.quantity >= 99) return; 
    const newItem: ItemMarket = { ...item, quantity: item.quantity + 1 };
    const newListItem = listItem.map((element) =>
      item.offre.id === element.offre.id ? newItem : element
    );

    setListItem(newListItem); 
  };

  const removeItem = () => {
    if (item.quantity <= 0) return; 
    const newItem: ItemMarket = { ...item, quantity: item.quantity - 1 };

    const newListItem = listItem.map((element) =>
      item.offre.id === element.offre.id ? newItem : element
    );

    setListItem(newListItem);
  };

  return (
    <Row className="w-100 bg-light border rounded d-flex flex-column flex-xl-row mb-4 py-3">
      <Col className="d-flex flex-column  mb-3">
        <p>Type</p>
        <p className="d-flex align-items-center">{item.offre.name}</p>
      </Col>
      <Col className="d-flex flex-column  mb-3">
        <p>Description</p>
        <p>{item.offre.description}</p>
      </Col>
      <Col className="d-flex flex-column mb-3">
        <p>Quantité</p>
        <div className="d-flex w-25">
          <Button className="btn btn-sm btn-dark" onClick={removeItem}>
            -
          </Button>
          <input type="text" className="input-qty" value={item.quantity} />
          <Button className="btn btn-sm btn-dark" onClick={addItem}>
            +
          </Button>
        </div>
      </Col>
      <Col className="d-flex flex-column">
        <p>Total</p>
        <p>
          {item.offre.price * item.quantity}
          <span>€</span>
        </p>
      </Col>
    </Row>
  );
}
