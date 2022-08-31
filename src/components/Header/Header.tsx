import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ResponsiveTag from "../ResponsiveTag/ResponsiveTag";

import logo from "../../assets/logo.svg";
import Home from "../../screen/Home/HomeContainer";

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 40px;
  max-width: 100vw;
  min-height: 15vh;

  background-color: var(--background);
  @media screen and (max-width: 900px) {
    justify-content: space-around;
    padding: 0;
  }
`;

const HeaderLogo = styled.section`
  flex: 0 0 auto;
  height: fit-content;
  max-height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  @media screen and (max-width: 900px) {
    gap: 0.8rem;
  }
`;

const HeaderlogoImageDiv = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 2px 12px;
  border-radius: 120px;
  background-color: var(--white);
`;

const HeaderLogoImage = styled.img`
  width: 64px;
  height: 64px;
  @media screen and (max-width: 900px) {
    width: 48px;
    height: 48px;
  }
`;

const HeaderLogoText = styled.h1`
  color: var(--white);
  @media screen and (max-width: 900px) {
    font-size: 2.6em;
  }
`;

const HeaderNavigation = styled.nav`
  flex: 0 0 auto;
`;

const HeaderList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

const HeaderLink = styled.li`
  list-style: none;
  font-size: 20px;
  .header-Link {
    color: var(--primary);
  }
  &:hover .header-Link {
    color: var(--primaryHover);
  }
  @media screen and (max-width: 900px) {
    background-color: var(--background);
    padding: 7px;
    font-size: 30px;
    .header-Link {
      color: var(--white);
    }
  }
`;

const SpanIcon = styled.span``;

const ModalContainer = styled.section`
  background-color: var(--white);
  position: absolute;

  max-width: 65vw;
  max-height: 75vh;

  padding: 20px 0 20px 40px;
  top: 15vh;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 30px;

  border-radius: 0 0 0 20px;
`;

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [iconStatus, setIconStatus] = useState({ menu: false, close: true });

  const openHandleClick = () => {
    setMenuStatus(true);
    setIconStatus({ menu: true, close: false });
  };

  const closeHandleClick = () => {
    setMenuStatus(false);
    setIconStatus({ menu: false, close: true });
  };

  const dataLink = [
    { id: 0, name: "Home", link: "/" },
    { id: 1, name: "Topics", link: "/Topics" },
    { id: 2, name: "Settings", link: "/Settings" },
  ];

  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogo>
          <HeaderlogoImageDiv>
            <HeaderLogoImage src={logo} alt="Logo da marca ASK" />
          </HeaderlogoImageDiv>
          <HeaderLogoText>AŞK</HeaderLogoText>
        </HeaderLogo>
      </Link>
      <HeaderNavigation>
        <HeaderList>
          <ResponsiveTag display="desktop">
            {dataLink?.map((data) => {
              return (
                <HeaderLink key={data.id}>
                  <Link className="header-Link" to={data.link}>
                    {data.name}
                  </Link>
                </HeaderLink>
              );
            })}
          </ResponsiveTag>
          <ResponsiveTag display="mobile">
            <SpanIcon
              style={
                iconStatus.menu
                  ? {
                      opacity: "0",
                      transition: "all 60ms linear 0.4s",
                    }
                  : {}
              }
              onClick={() => openHandleClick()}
              className="material-icons"
            >
              menu
            </SpanIcon>
            <SpanIcon
              style={
                iconStatus.close
                  ? {
                      opacity: "0",
                      transition: "all 60ms linear 0.6s",
                    }
                  : {}
              }
              onClick={() => closeHandleClick()}
              className="material-icons"
            >
              close
            </SpanIcon>
          </ResponsiveTag>
        </HeaderList>
      </HeaderNavigation>
      <ModalContainer
        style={
          !menuStatus
            ? { opacity: "0", transition: "all 60ms linear 0.6s" }
            : {}
        }
      >
        {dataLink?.map((data) => {
          return (
            <HeaderLink key={data.id}>
              <Link
                onClick={() => closeHandleClick()}
                className="header-Link"
                to={data.link}
              >
                {data.name}
              </Link>
            </HeaderLink>
          );
        })}
      </ModalContainer>
    </HeaderContainer>
  );
};

export default Header;
