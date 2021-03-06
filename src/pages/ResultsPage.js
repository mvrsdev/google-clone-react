import {
  Article,
  Footer,
  Header,
  NavBar,
  PageContainer,
  SearchInputField,
} from 'components';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  border-bottom: 0.5px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  img {
    width: 92px;
    padding: 32px 32px 32px 48px;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left {
    display: flex;
    align-items: center;
  }
  .SearchInputFieldWrapper {
    width: 45vw;
  }
`;

const ResultsList = styled.div`
  height: 100vh;
`;

const ResultsPage = () => {
  const [searchTerm] = useSearchParams();

  return (
    <PageContainer>
      <HeaderDiv>
        <div className="row">
          <div className="left">
            <Link to={'/'}>
              <img
                id="logo"
                src="images/google-logo.svg"
                alt="Logo do Google"
              />
            </Link>
            <div className="SearchInputFieldWrapper">
              <SearchInputField value={searchTerm.get('q')} />
            </div>
          </div>
          <div className="right">
            <Header isVisibleGmailImage={false} />
          </div>
        </div>
        <NavBar />
      </HeaderDiv>
      <ResultsList>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </ResultsList>
      <Footer />
    </PageContainer>
  );
};

export default ResultsPage;
