import { Button } from "react-bootstrap";
import imageFail from "../../assets/jeux-olympiques.gif";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <h1>Page non trouvé</h1>
      <p>la page de vous rechercher n'existe pas </p>
      <img src={imageFail} alt="meme chute plongeon" />
      <hr />
      <Link to="/">
        <Button variant="primary">Retour à l'accueil</Button>
      </Link>
    </>
  );
}
