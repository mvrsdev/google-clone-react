import { Footer, Header, NavBar, SearchInputField } from 'components';
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

const ResultsPage = () => (
  <>
    <HeaderDiv>
      <div className="row">
        <div className="left">
          <a href="index.html">
            <img id="logo" src="images/google-logo.svg" alt="Logo do Google" />
          </a>
          <div className="SearchInputFieldWrapper">
            <SearchInputField />
          </div>
        </div>
        <div className="right">
          <Header isVisibleGmailImage={false} />
        </div>
      </div>
      <NavBar />
    </HeaderDiv>
    <main>
      <p>This is Main!</p>
    </main>
    <Footer />
  </>
);

export default ResultsPage;
