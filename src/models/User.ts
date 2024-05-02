export default interface User {
  username?: string; 
  fistname?: string; 
  lastname?: string; 
  email?: string; 
  isConfirmed?: boolean; 
  isBlocked?: boolean;
  isConnected: boolean; 
  token?: string; 
}