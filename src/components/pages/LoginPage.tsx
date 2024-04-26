import { Button, Card, Form, Spinner } from "react-bootstrap";
import "./LoginPage.css";
import { FormEvent, useState } from "react";

function wait(): Promise<unknown> {
  const promise = new Promise((resolve: Function) => {
    setTimeout(() => resolve(), 10000);
  });

  return promise;
}

export default function LoginPage() {
  const [waitingResponse, setWaitingResponse] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    // on arrete le comportemente par défaut
    event.preventDefault();

    setWaitingResponse(true);

   

    // demande API

    await wait();

    // fin de l'attente
    setWaitingResponse(false);
  };
  return (
    <>
      <Card>
        <h2>Connexion</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="inputEmail">Email</Form.Label>
            <Form.Control type="email" id="inputEmail" />

            <Form.Label htmlFor="inputPassword">Mot de passe</Form.Label>
            <Form.Control type="password" id="inputPassword" />
          </Form.Group>

          <Button variant="primary" type="submit">
            {waitingResponse && <Spinner animation="border" as="span" />}
            Connexion
          </Button>
        </Form>
      </Card>
      {waitingResponse ? "Pause Café" : "Au boulot"}
    </>
  );
}
