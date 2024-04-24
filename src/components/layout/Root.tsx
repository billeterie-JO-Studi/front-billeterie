import { Outlet } from "react-router-dom";
import NavBarJO from "./NavBarJO";
import FooterJO from "./FooterJO";

export default function Root() {
  return (
    <>
      <NavBarJO />
      <Outlet />
      <FooterJO />
    </>
  );
}
