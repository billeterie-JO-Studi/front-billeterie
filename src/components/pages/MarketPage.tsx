import { Col, Row, Container } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import {
  marketState,
  totalCommandSelector,
  totalTicketSelector,
  userState,
} from "../../store/store";
import ItemCardMarket from "../ItemMarket";
import "./MarketPage.css";
import axios from "axios";

const urlApi = import.meta.env.VITE_API_URL;

export default function MarketPage() {
  const listMarket = useRecoilValue(marketState);
  const totalCommand = useRecoilValue(totalCommandSelector);
  const totalTicket = useRecoilValue(totalTicketSelector);
  const user = useRecoilValue(userState);

  const onClickPay = async () => {
    // logs 
    console.log(user.token); 
    try {
      const dataApi = listMarket.map((item) => {
        return { offre: item.offre.id, quantity: item.quantity };
      });
      const response = await axios.post(`${urlApi}/api/checkout`, dataApi, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response);

      document.location = response.data;
    } catch (err) {
      console.error("Erreur dans la request API");
      console.error(err);
    }
  };

  return (
    <Container>
      <h1 className="h2 mb-5">Mon panier</h1>
      <section>
        <Row className="d-flex flex-column flex-md-row gap-5 ">
          <Col lg="8">
            <h2 className="h4 mb-4">Description de la commande</h2>
            <Row className="w-100">
              <hr />
            </Row>

            {/* map */}

            {listMarket
              ? listMarket.map((item) => (
                  <ItemCardMarket key={item.offre.id} item={item} />
                ))
              : "liste vide "}

            {/* fin du map */}
            <Row className="w-100">
              <hr />
            </Row>
            <Row>
              <Col>
                <p className="fw-bold">
                  Nombre total de ticket :{" "}
                  <span className="fw-normal">{totalTicket}</span>
                </p>
              </Col>
              <Col>
                <p className="fw-bold">
                  Prix Total :{" "}
                  <span className="fw-normal">{totalCommand}€</span>
                </p>
              </Col>
            </Row>
          </Col>

          <Col>
            <h2 className="h4 mb-4">Résumé de la commande</h2>
            <Row className="d-flex flex-column">
              <Col className="mb-3">
                <Col className="d-flex justify-content-between">
                  <p className="fw-bold">Nombre total de ticket :</p>
                  <p>{totalTicket}</p>
                </Col>
                <Col className="d-flex justify-content-between">
                  <p className="fw-bold">Prix HT :</p>
                  <p>52€</p>
                </Col>
                <Col className="d-flex justify-content-between">
                  <p className="fw-bold">TVA :</p>
                  <p>50€</p>
                </Col>
                <Col className="d-flex justify-content-between">
                  <p className="fw-bold">Prix TTC : </p>
                  <p>{totalCommand}€</p>
                </Col>
              </Col>
              <Col>
                <button onClick={onClickPay}>Commander</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      {/* <ListGroup>
        {listMarket
          ? listMarket.map((item) => (
            
            <ItemCardMarket item={item} />
            
          ))
          : "Pannier vide"}
        </ListGroup> */}
    </Container>
  );
}
