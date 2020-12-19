import React, { useState } from "react";
import Link from "next/link";
import { useFetchUser, UserProvider } from "../../lib/user";

import { ContainerHeader, Logo, Hamburguer, MobileHeader } from "./styles";
import { wrapper } from "../../components";
import Wrapper from "../Wrapper";

function Header() {
  const [open, setOpen] = useState(false);
  const { user, loading } = useFetchUser();

  return (
    <Wrapper>
      <ContainerHeader>
        <Logo>
          <a>
       
            <img src="/img/logo.png" /> 
          </a>
        </Logo>

        <ul id="nav">
          <li>
            <Link href={"/index"}>Home</Link>
          </li>
         
          <li>
            <Link href={"/comunidad-padres"}>Comunidad de padres</Link>
          </li>
          <li>
            <Link href={"/talleres"}>Talleres</Link>
          </li>
          {user && !loading ? (
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          ) : (
            <li>
              <a href="/api/login">Registrarse/Ingresar</a>
            </li>
          )}
          {user && !loading && (
            <li>
              <p>{user.nickname}</p>
            </li>
          )}
          

          <li>
            <Link href={"/administrador"}>Administrador</Link>
          </li>
        </ul>

        <MobileHeader>
          <Hamburguer onClick={() => setOpen(!open)}>
            <img src="img/menu.svg" />
          </Hamburguer>
          <div className={open ? "dropdown" : "dropup"}>
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              {/* <li><Link href={"/torneos"}>Torneos</Link></li>  */}
              <li>
                <Link href={"/comunidad-padres"}>Comunidad de padres</Link>
              </li>
              <li>
                <Link href={"/talleres"}>Talleres</Link>
              </li>
              {user && !loading ? (
                <li>
                  <a href="/api/logout">Logout</a>
                </li>
              ) : (
                <li>
                  <a href="/api/login">Registrarse</a>
                </li>
              )}
              {user && !loading && (
                <li>
                  <h4>{user.nickname}</h4>
                </li>
              )}
            </ul>
          </div>
        </MobileHeader>
      </ContainerHeader>
    </Wrapper>
  );
}
export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: "/api/login",
    });
    res.end();
    return {};
  }
  return { props: { user: session.user } };
}

export default Header;
