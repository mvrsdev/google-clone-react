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
    width: 45vw;
    padding-top: 40px;
    padding-bottom: 16px;
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
        <p>{searchTerm}</p>
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
