import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import useApi from "../../hooks/useApi";
import { userState } from "../../store/store";
import "./ProfilePage.css";
import Command from "../../models/Command";
import CommandService from "../../services/CommandsService";

export default function ProfilePage() {
  const user = useRecoilValue(userState);
  const api = useApi();
  const [commands, setCommands] = useState<Command[]>([]);

  const getCommand = async () => {
    const responseApi = await api.get(
      "/commands?populate=*"
    );
    const listaDataCommandApi: unknown[] = responseApi.data.data; 
    // console.log(listaDataCommandApi);
    const commandLoaded: Command[] = listaDataCommandApi.map(item => CommandService.createCommandFromDataApi(item)); 
    setCommands(commandLoaded)
    console.log(commandLoaded);
  };
  
  
  useEffect(() => {
    // Init
    getCommand();
    
  }, [])
  
  useEffect(() => {
    // problème que le init  est pas terminé quand le code est lancé. les enfants sont prioritaire pour les useEffect
    // solution : utilisé une variable isLoaded pour vérifié après le chargement.
    // if (!user.isConnected) {
      //   // Sort d'ici
      //   navigate("/");
      // }
  }, [user]);

  return (
    <>
      <h2 className="mb-5">Vos informations</h2>
      <p>{user.firstname}</p>
      <p>{user.lastname}</p>
      <p>{user.email}</p>

      <h2 className="mb-2">Mes commandes</h2>
      <Table striped bordered className="rounded">
        <thead>
          <tr>
            <th>Réference d'achat</th>
            <th>ID</th>
            <th>Date d'achat</th>
            <th>Nombre de tickets</th>
            <th>Prix total</th>
            <th>LOL</th>
          </tr>
        </thead>
        <tbody>
          {commands.map((command) => (
            <tr key={command.id}>
              <td>{command.reference}</td>
              <td>{command.id}</td>
              <td>{command.datePurchasse.toTimeString()}</td>
              <td>{command.tickets.length}</td>
              <td>{command.totalPrice} €</td>
              <td>
                <NavLink to={`/details-command/${command.id}`}>
                  détail de la commande
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
