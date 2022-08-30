import styled from "styled-components";

const FooterContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;

  background-color: var(--background);
  color: var(--secondary);
`;

const FooterCopyrigth = styled.p`
  font-size: 12px;
`;

const FooterGitHub = styled.span`
  font-size: 12px;
  cursor: pointer;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterCopyrigth>
        <FooterGitHub
          onClick={() =>
            window.open("https://github.com/CaioCesarP/ask-project", "_blank")
          }
        >
          CaioCesarP
        </FooterGitHub>{" "}
        © {currentYear}
      </FooterCopyrigth>
    </FooterContainer>
  );
};

export default Footer;
