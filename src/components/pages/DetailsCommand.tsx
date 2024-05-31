import jsPDF from "jspdf";
import QRCode from "qrcode-generator";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import Ticket from "../../models/Ticket";
import Command from "../../models/Command";
import TicketService from "../../services/TicketService";
import OffreService from "../../services/OffresService";
import CommandService from "../../services/CommandsService";

export default function DetailsCommand() {
  const api = useApi();
  const params = useParams();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [command, setCommand] = useState<Command>();

  const getTickets = async () => {
    const responseApi = await api.get(
      `/commands/${params.id}/?populate[tickets][populate]=offre`
    );
    const commandDataAPi = responseApi.data.data
    const newCommand = CommandService.createCommandFromDataApi(commandDataAPi)
    setCommand(newCommand);
    
    const ticketDataApi = commandDataAPi.attributes.tickets.data;
    const newTickets = ticketDataApi.map((ticketDataApi: any) => {
      const newTicket = TicketService.createTicketFromDataApi(ticketDataApi);
      newTicket.offre = OffreService.createOffreFromDataApi(
        ticketDataApi.attributes.offre.data
      );
      return newTicket;
    });
    setTickets(newTickets);
  };

  // Génération du QrCode
  const generateQRCode = (ticket: Ticket) => {
    const typeNumber = 4;
    const errorCorrectionLevel = "L"; // Liveau de correction d'erreur
    const qr = QRCode(typeNumber, errorCorrectionLevel);
    qr.addData(`${ticket.id}_${ticket.offre?.id}_${ticket.qrcode}`);
    qr.make();
    return qr;
  };

  // Génération du pdf
  const generatePDF = (ticket: Ticket, command?: Command) => {
    const qr = generateQRCode(ticket);

    const pdf = new jsPDF({
      unit: "px",
      orientation: "l",
      format: "a5",
    });

    const pdfHeight = pdf.internal.pageSize.getHeight();
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfBgImage = new Image();
    pdfBgImage.src = "/src/assets/logo.png"

    pdf
      .setFillColor("#B7CCCB")
      .rect(5, 5, pdfWidth - 10, pdfHeight - 10, "FD");
    pdf
      .addImage(
        pdfBgImage,
        "PNG",
        7,
        12,
        pdfWidth/16,
        pdfHeight/16,
      )
      .setTextColor("#202020")
      .setFontSize(16)
      .text(`Votre Billet - ${ticket.offre?.name}`, pdfWidth/12, 30)
      .line(10, 35, (pdfWidth / 2) - 10, 35 )
      .setFontSize(12)
      .text(`REF: ${command?.reference}`, 10, 50)
      .text(`ID Billet: ${ticket.id}`, 10, 70)
      .text(`${ticket.offre?.description} : ${ticket.offre?.price} €`, 10, 90)
      .line(pdfWidth / 2, 10, pdfWidth / 2, pdfHeight - 10)
      .addImage(
        qr.createDataURL(),
        "png",
        pdfWidth / 2 + ((pdfWidth / 2 - 5) / 2 - pdfWidth / 6),
        pdfHeight / 4,
        pdfWidth / 3,
        pdfWidth / 3
      )
      
    pdf.save('ticket.pdf')
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <>
      <h1 className="pb-5">Détails de votre commande</h1>
      {
        command ? 
        <div>
          <p>Référence : <strong>{command?.reference}</strong></p>
          <p>Date d'achat : <strong>{command?.datePurchasse.getDate()}/{command?.datePurchasse?.getMonth()+1}/{command?.datePurchasse.getFullYear()}</strong></p>
          <p>Prix total : <strong>{command?.totalPrice} €</strong></p>
        </div>
        :
        <p>Chargement de la commande...</p>
      }
      
      <hr/>
      <Table striped bordered className="rounded">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix unitaire</th>
            <th>Le billet</th>
            <th>QR Code</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.offre?.name}</td>
              <td>{ticket.offre?.description}</td>
              <td>{ticket.offre?.price} €</td>
              <td>
                <button
                  onClick={() => generatePDF(ticket, command)}
                  className="p-2 bg-blue"
                >
                  Télécharger le billet
                </button>
              </td>
              <td>
                <QRCodeSVG value={`${ticket.id}_${ticket.offre?.id}_${ticket.qrcode}`}/>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
