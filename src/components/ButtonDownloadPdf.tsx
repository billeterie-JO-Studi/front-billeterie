import jsPDF from "jspdf";
import Ticket from "../models/Ticket";
import ReactDOMServer from "react-dom/server";
import { QRCodeSVG } from "qrcode.react";

type Props = {
  ticket: Ticket;
};

export default function ButtonDownloadPdf(props: Readonly<Props>) {
  const generatePDF = () => {
    const doc = new jsPDF("p", "pt", "a4");

    console.log(props, "Console.log juste pour calmer Typescript, travaux en cours");

    // Utiliser ReactDOM pour rendre le composnat dans le contenur temporaire
    const ticketHTML = ReactDOMServer.renderToString(<TicketContent />);
    console.log(ticketHTML);

    doc.html(ticketHTML, {
      callback: function (doc) {
        doc.save("Ticket.pdf");
      },
      x: 10,
      y: 10,
      html2canvas: { scale: 0.5 },
      margin: [10, 10, 10, 10],
      autoPaging: "text",
    });
  };

  return <button onClick={generatePDF}>Télécharger le billet</button>;
}

function TicketContent() {
  return (
    <>
      <h1>Mon super billet</h1>
      <QRCodeSVG value="toto" />
    </>
  );
}
