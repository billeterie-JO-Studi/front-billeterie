import { Button, Card, Form, Spinner } from "react-bootstrap";
import "./LoginPage.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { tokenJwtState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

type Login = {
  identifier: string;
  password: string;
};

export default function LoginPage() {
  const [waitingResponse, setWaitingResponse] = useState(false);
  const [login, setLogin] = useState<Login>({ identifier: "", password: "" });
  const setToken = useSetRecoilState(tokenJwtState);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(apiUrl);
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    // on arrete le comportemente par défaut
    event.preventDefault();

    setWaitingResponse(true);

    console.log("debut requete");

    // demande API
    try {
      console.log(login);
      const response: any = await axios.post(`${apiUrl}/api/auth/local`, {
        identifier: login.identifier,
        password: login.password,
      });

      console.log(apiUrl);

      console.log(response.data.jwt);
      setToken({ token: response.data.jwt, isValid: true });

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
    console.log(e);

    setLogin({ ...login, identifier: e.target.value });
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO: controle de la force du mot de passe.

    console.log(e);

    // mise a jour du state local
    setLogin({ ...login, password: e.target.value });
  };
  return (
    <>
      <Card>
        <h2>Connexion</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="inputEmail">Email</Form.Label>
            <Form.Control
              type="email"
              id="inputEmail"
              onChange={onChangeIdentified}
            />

            <Form.Label htmlFor="inputPassword">Mot de passe</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword"
              onChange={onChangePassword}
            />
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
