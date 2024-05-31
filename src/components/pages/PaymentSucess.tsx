import Alert from 'react-bootstrap/Alert';
import { NavLink } from 'react-router-dom';

export default function PaymentSucess() {


  return (
    <Alert key="success" variant="success" className=''>
      <Alert.Heading>Paiement accepté !</Alert.Heading>
      <NavLink to="/profile">Voir votre commande</NavLink>
    </Alert>
    
  )
}
