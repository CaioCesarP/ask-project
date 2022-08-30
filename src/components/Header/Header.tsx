import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../assets/logo.svg";

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 40px;
  min-height: 120px;

  background-color: var(--background);
  color: var(--primary);
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
`;

const HeaderlogoImageDiv = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 2px 12px;
  border-radius: 120px;
  background-color: var(--secondary);
`;

const HeaderLogoImage = styled.img`
  width: 64px;
  height: 64px;
`;

const HeaderLogoText = styled.h1`
  color: var(--secondary);
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
  &:hover {
    color: var(--primaryHover);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <HeaderlogoImageDiv>
          <HeaderLogoImage src={logo} alt="Logo da marca ASK" />
        </HeaderlogoImageDiv>
        <HeaderLogoText>AŞK</HeaderLogoText>
      </HeaderLogo>
      <HeaderNavigation>
        <HeaderList>
          <HeaderLink>
            <Link to="/">Home</Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/topics">Topics</Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/settings">Settings</Link>
          </HeaderLink>
        </HeaderList>
      </HeaderNavigation>
    </HeaderContainer>
  );
};

export default Header;
