import { Button, Card, Form, Spinner, Container } from "react-bootstrap";
import "./LoginPage.css";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

const apiUrl = import.meta.env.VITE_API_URL;

type FormRegister = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  checkPasswork: string;
};

export default function RegisterPage() {
  const [waitingResponse, setWaitingResponse] = useState(false);
  const [form, setForm] = useState<FormRegister>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    checkPasswork: "",
  });
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setWaitingResponse(true);

    console.log("debut requete");

    try {

      if (form.password !== form.checkPasswork) {
        throw new Error("Les mots de passe doivent etre identique"); 
      }

      const responseApi: any = await axios.post(
        `${apiUrl}/api/auth/local/register`,
        {
          username: form.email,
          email: form.email,
          password: form.password,
          firstname: form.firstname,
          lastname: form.lastname,
        }
      );

      setUser({
        id: responseApi.data.user.id,
        token: responseApi.data.jwt,
        isConfirmed: responseApi.data.user.confirmed,
        email: responseApi.data.user.email,
        firstname: responseApi.data.user.firstname,
        lastname: responseApi.data.user.lastname,
        isConnected: true,
      });

      navigate("/");
    } catch (err) {
      console.log(`Erreur d'enregistrement : ${err}`);
      // TODO: donner plus d'important au client sur l'erreur. 

    } finally {
      setWaitingResponse(false);
    }
  };

  const onChangeFirstname = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, firstname: e.target.value });
  };

  const onChangeLastname = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, lastname: e.target.value });
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, email: e.target.value });
  };

  const onChangeCheckPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, checkPasswork: e.target.value });
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, password: e.target.value });

    console.log(e);
  };

  return (
    <Container>
      <Card className="form-register">
        <h1 className="h2 mb-4">Inscription</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="inputLastname">Nom</Form.Label>
            <Form.Control
              type="text"
              id="inputLastname"
              onChange={onChangeLastname}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="inputFirstname">Prénom</Form.Label>
            <Form.Control
              type="text"
              id="inputFirstname"
              onChange={onChangeFirstname}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="inputEmail">Email</Form.Label>
            <Form.Control
              type="email"
              id="inputEmail"
              onChange={onChangeEmail}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="inputPassword1">Mot de passe</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword1"
              onChange={onChangePassword}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label htmlFor="inputPassword2">
              Confirmer le mot de passe
            </Form.Label>
            <Form.Control
              type="password"
              id="inputPassword2"
              onChange={onChangeCheckPassword}
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
              <span>Enregistrer</span>
            )}
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
