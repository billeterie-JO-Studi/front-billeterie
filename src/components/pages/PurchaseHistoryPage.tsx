import "./PurchaseHistoryPage.css";

export default function PurchaseHistoryPage() {

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
