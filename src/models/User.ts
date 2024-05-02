export default interface User {
  id?: number; 
  username?: string; 
  firstname?: string; 
  lastname?: string; 
  email?: string; 
  isConfirmed?: boolean; 
  isBlocked?: boolean;
  isConnected: boolean; 
  token?: string; 
}