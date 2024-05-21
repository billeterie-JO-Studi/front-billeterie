import QRCode from "qrcode-generator";
import { jsPDF } from "jspdf";
import { Button } from "react-bootstrap";
import "./ProfilePage.css";

export default function ProfilePage() {
  const testDev = () => {
    const doc = new jsPDF();

    doc.html(document.body); 

    // Génération du QrCode
    const typeNumber = 4;
    const errorCorrectionLevel = "L"; // Liveau de correction d'erreur
    const qr = QRCode(typeNumber, errorCorrectionLevel);
    qr.addData("Mon super billet");
    qr.make();

    const qrImageData = qr.createDataURL();

    doc.addImage(qrImageData, "PNG", 15, 40, 50, 50);

    doc.save("a4.pdf");
  };

  return (
    <>
      <h1 className="h2 mb-5">Récapitulatif de la commande</h1>

      <div className="row d-flex justify-content-between">
        <div className="col col-lg-6 mb-3 px-0">Date : 02/07/2024
        </div>
        <div className="col col-lg-6"></div>
      </div>
      <div className="row">
        <table className="table table-striped table-responsive">
          <thead>
            <tr>
              <th scope="col">Produit</th>
              <th scope="col">Description</th>
              <th scope="col">Lien du billet</th>
              <th scope="col">Prix Unitaire</th>
              <th scope="col">Quantité</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ticket Solo</td>
              <td>Ticket permettant l'entrée à 1 évenemement</td>
              <td>
                <button className="btn btn-sm btn-dark">Lien</button>
              </td>
              <td>20 €</td>
              <td>1</td>
              <td>20 €</td>
            </tr>
            <tr>
              <td>Ticket Duo</td>
              <td>Ticket permettant l'entrée à 2 évenemements</td>
              <td>
                <button className="btn btn-sm btn-dark">Lien</button>
              </td>
              <td>36 €</td>
              <td>2</td>
              <td>72 €</td>
            </tr>
            <tr>
              <td>Ticket Familly</td>
              <td>Ticket permettant l'entrée à 3 évenemements</td>
              <td>
                <button className="btn btn-sm btn-dark">Lien</button>
              </td>
              <td>56 €</td>
              <td>2</td>
              <td>112 €</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="fw-bold">Total</td>
              <td className="fw-bold">212 €</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
