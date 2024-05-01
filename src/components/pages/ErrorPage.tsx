import { Button } from "react-bootstrap";
import imageFail from "../../assets/jeux-olympiques.gif";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <h1 className="h2 mb-4">Oupss... Page non trouvée !</h1>
      <p className="mb-4 text-center">La page que vous recherchez n'existe pas.</p>
      <img src={imageFail} alt="meme chute plongeon" className="w-100 mb-4"/>
      <Link to="/">
        <Button variant="primary w-100">Retour à l'accueil</Button>
      </Link>
    </>
  );
}
