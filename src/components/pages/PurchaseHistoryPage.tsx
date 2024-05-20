import QRCode from "qrcode-generator";
import { jsPDF } from "jspdf";
import { Button } from "react-bootstrap";
import "./PurchaseHistoryPage.css";

export default function PurchaseHistoryPage() {
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
      <h1 className="h2 mb-5">Historique des commandes</h1>

      <div className="row d-flex justify-content-between">
        <div className="col col-lg-6 mb-3 px-0">Date du jour: 02/07/2024
        </div>
        <div className="col col-lg-6"></div>
      </div>
      <div className="row w-100">
        <table className="table table-striped table-responsive w-100">
          <thead>
            <tr>
              <th scope="col">Ref Commande</th>
              <th scope="col">Date</th>
              <th scope="col">Détails commande</th>
              <th scope="col">Prix total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <th scope="col">#52634</th>
              <th scope="col">02/08/2024</th>
              <th scope="col"><button className="btn btn-sm btn-dark">Lien</button></th>
              <th scope="col">152 €</th>
            </tr>
            <tr>
            <th scope="col">#52634</th>
              <th scope="col">02/08/2024</th>
              <th scope="col"><button className="btn btn-sm btn-dark">Lien</button></th>
              <th scope="col">152 €</th>
            </tr>
            <tr>
            <th scope="col">#52634</th>
              <th scope="col">02/08/2024</th>
              <th scope="col"><button className="btn btn-sm btn-dark">Lien</button></th>
              <th scope="col">152 €</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
