import { Container, Navbar} from "react-bootstrap";

export default function FooterJO() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="bottom">
      <Container>
       

        <Navbar.Collapse>
          <Navbar>
            CopyRight 2024
          </Navbar>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
