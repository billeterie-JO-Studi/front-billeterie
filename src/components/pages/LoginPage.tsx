import { Button, Card, Form, Spinner, Container } from "react-bootstrap";
import "./LoginPage.css";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

type Login = {
  identifier: string;
  password: string;
};

export default function LoginPage() {
  const [waitingResponse, setWaitingResponse] = useState(false);
  const [login, setLogin] = useState<Login>({ identifier: "", password: "" });
  const setUser = useSetRecoilState(userState);

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    // on arrete le comportemente par défaut
    event.preventDefault();

    setWaitingResponse(true);

    // demande API
    try {
      const response: any = await axios.post(`${apiUrl}/api/auth/local`, {
        identifier: login.identifier,
        password: login.password,
      });

      setUser({ token: response.data.jwt, isConnected: true });

      // redirection vers la home
      navigate("/");
    } catch (err) {
      console.error(err);
      // TODO: informé le client
    }

    // fin de l'attente
    setWaitingResponse(false);
  };

  const onChangeIdentified = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO: vérification si c'est un adresse email.

    setLogin({ ...login, identifier: e.target.value });
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO: controle de la force du mot de passe.

    // mise a jour du state local
    setLogin({ ...login, password: e.target.value });
  };
  return (
    <Container>
      <Card className="form-signin">
        <h1 className="h2 mb-4">Connexion</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="inputEmail">Email</Form.Label>
            <Form.Control
              type="email"
              id="inputEmail"
              onChange={onChangeIdentified}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="inputEmail">Mot de passe</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword1"
              onChange={onChangePassword}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100 d-flex justify-content-center align-items-center my-3"
          >
            {waitingResponse ? (
              <Spinner
                size="sm"
                animation="border"
                as="span"
                role="status"
                className="my-1"
              />
            ) : (
              <span>Connexion</span>
            )}
          </Button>
        </Form>
      </Card>
      {waitingResponse ? "Pause Café" : "Au boulot"}
    </Container>
  );
}
