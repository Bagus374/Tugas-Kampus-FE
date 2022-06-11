import styled from "styled-components";

const StyledHero = styled.div`
    margin: 5rem auto;
    padding: 1rem;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    margin-bottom: 2rem;
    text-align: justify;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  @media (min-width: 992px) {
    max-width: 1200px;

    section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  }
`;

const StyledHeroLeft = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    flex-basis: 50%;
  }
`;

const StyledHeroRight = styled.div`
  @media (min-width: 992px) {
    flex-basis: 30%;
  }
`;

export { StyledHero, StyledHeroLeft, StyledHeroRight};
