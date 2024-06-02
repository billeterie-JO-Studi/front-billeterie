import { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { NavLink } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { marketState } from '../../store/store';

export default function PaymentSucess() {

  const setPanier = useSetRecoilState(marketState); 

  useEffect(() => {
    // vidage du panier 
    setPanier([]); 

  })

  return (
    <Alert key="success" variant="success" className=''>
      <Alert.Heading>Paiement accepté !</Alert.Heading>
      <NavLink to="/profile">Voir votre commande</NavLink>
    </Alert>
    
  )
}
