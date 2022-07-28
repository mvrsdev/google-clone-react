import {
  Button,
  Footer,
  Header,
  PageContainer,
  SearchInputField,
} from 'components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  .SearchInputFieldWrapper {
    width: 85vw;
    padding-top: 24px;
    padding-bottom: 16px;
    min-width: 400px;
    max-width: 650px;
  }

  fieldset {
    border: none;
    display: flex;
    justify-content: center;
  }

  Button {
    margin: 11px;
    color: #3c4043;
  }
`;

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onSearchHandler = searchValue => {
    navigate({
      pathname: '/results',
      search: `?q=${searchValue}`,
    });
    setSearchTerm(searchValue);
  };

  return (
    <PageContainer>
      <Header isVisibleGmailImage />
      <MainRow>
        <img src="images/google-logo.svg" alt="Logo do Google" />
        <div className="SearchInputFieldWrapper">
          <SearchInputField onPressEnter={onSearchHandler} />
        </div>
        <fieldset>
          <Button>Pesquisa Google</Button>
          <Button>Estou com sorte</Button>
        </fieldset>
      </MainRow>
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
