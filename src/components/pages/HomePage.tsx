import { Col, Row, Container } from "react-bootstrap";
import jo2024Paris1 from "./../../assets/jo-2024-paris-1.jpg";
import jo2024Paris2 from "./../../assets/jo-2024-paris-2.jpg";

export default function HomePage() {
  return (
    <Container>
      <h1 className="h2 mb-5">JO 2024 - Paris</h1>
      <section>
        <Row className="d-flex flex-column flex-lg-row justify-content-around mb-5">
          <Col lg={6}>
            <img src={jo2024Paris1} alt="JO 2024 Paris" className="object-fit-cover img-fluid border rounded w-100 h-100 mb-3 mb-lg-0"/>
          </Col>
          <Col lg={6}>
            <h2 className="h3 text-start mb-4">Bienvenue sur notre site</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              numquam excepturi laudantium. Voluptatum error qui tenetur, vero
              ad libero veniam nobis earum nam omnis quos quo minus repellat?
              Maxime, cum?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              numquam excepturi laudantium. Voluptatum error qui tenetur, vero
              ad libero veniam nobis earum nam omnis quos quo minus repellat?
              Maxime, sit amet consectetur adipisicing elit Rémi.
              <br/>
              <br/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              numquam excepturi laudantium. Voluptatum error qui tenetur, vero
              ad libero veniam nobis earum nam omnis quos quo minus repellat?
              Maxime, Rémi sur la place?
              <br/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              numquam excepturi laudantium. Voluptatum error qui tenetur, vero
              ad libero veniam nobis earum nam omnis quos quo minus repellat?
              Maxime?
            </p>
          </Col>
        </Row>
        <Row className="d-flex flex-column flex-lg-row justify-content-around mb-5">

          <Col lg={6}>
            <h2 className="h3 text-start mb-4">Fonctionnement de la billeterie</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              numquam excepturi laudantium. Voluptatum error qui tenetur, vero
              ad libero veniam nobis earum nam omnis quos quo minus repellat?
              Maxime, cum?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              numquam excepturi laudantium. Voluptatum error qui tenetur, vero
              ad libero veniam nobis earum nam omnis quos quo minus repellat?
              Maxime, Rémi fait joujoue...
              <br/>
              <br/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              numquam excepturi laudantium. Voluptatum error qui tenetur, vero
              ad libero veniam nobis earum nam omnis quos quo minus repellat?
              Maxime, Voluptatum error qui tenetur.
              <br/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              numquam excepturi laudantium. Voluptatum error qui tenetur, vero
              ad libero veniam nobis earum nam omnis quos quo minus repellat?
              Rémi?
            </p>
          </Col>
          <Col lg={6}>
            <img src={jo2024Paris2} alt="JO 2024 Paris" className="object-fit-cover img-fluid border rounded w-100 h-100 mb-3 mb-lg-0"/>
          </Col>
        </Row>
      </section>
    </Container>
  );
}
