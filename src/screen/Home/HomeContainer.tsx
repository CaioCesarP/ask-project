import styled from "styled-components";
import ArrowToTop from "../../components/ArrowToTop/ArrowToTop";

import insideView from "../../assets/interiroAsk.png";
import insideView2 from "../../assets/interiroAsk2.png";

const HomeContainer = styled.section`
  max-width: 100vw;
  min-height: 73vh;
  margin: 2.5vh 1.5vw;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);

  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

const AboutArticleContainer = styled.article`
  grid-column: 1;
  grid-row: span 3;

  padding: 10px 15px;

  display: flex;
  flex-direction: column;

  background-color: var(--secondary);
  border-radius: 8px;
  @media screen and (max-width: 900px) {
    margin: 0 15px;
    grid-column: 1 / span 3;
    grid-row: 1;
  }
`;

const ArticleImage = styled.section`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 160px;
  border: 3px solid var(--secondaryHover);
`;

const ArticleTextContainer = styled.section`
  flex: 1 0 auto;
`;

const ArticleTextTitle = styled.h2`
  color: var(--primary);
  font-size: 24px;
  line-height: 1.1em;
`;

const ArticleTextDetail = styled.p`
  font-size: 18px;
  line-height: 1.1em;
  @media screen and (max-width: 900px) {
    line-height: 1.3em;
  }
`;

const InformationArticleContainer = styled.article`
  grid-column: 2 / span 2;
  grid-row: 1;

  margin: 0 15px;
  padding: 0 15px 0 10px;

  display: flex;
  flex-direction: column;

  height: 100%;

  background-color: var(--white);
  @media screen and (max-width: 900px) {
    grid-column: 0;
    grid-row: span 0;
  }
`;

const ProductsArticleContainer = styled.article`
  grid-column: 2 / span 2;
  grid-row: 2 / span 2;

  padding: 5px 15px 10px 15px;

  display: flex;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    grid-column: 0;
    grid-row: span 0;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <AboutArticleContainer>
        <ArticleImage style={{ backgroundImage: `url(${insideView})` }} />
        <ArticleTextContainer>
          <ArticleTextTitle>Interior da Loja</ArticleTextTitle>
          <ArticleTextDetail>
            Interior da loja é uma mistura do novo e do antigo, trazendo a
            sensação de aconchego e paz recepcionando aqueles que vêm em busca
            da igualdade e sustentabilidade.
          </ArticleTextDetail>
          <ArticleTextDetail>
            Sensação de nostalgia com modernidade, sendo um novo lugar de
            refúgio.
          </ArticleTextDetail>
        </ArticleTextContainer>
      </AboutArticleContainer>
      <InformationArticleContainer>a</InformationArticleContainer>
      <ProductsArticleContainer></ProductsArticleContainer>
      <ArrowToTop />
    </HomeContainer>
  );
};

export default Home;
