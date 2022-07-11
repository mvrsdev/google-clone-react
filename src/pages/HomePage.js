import { Button, Footer, Header, SearchInputField } from 'components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainRow = styled.div`
  display: flex;
  flex-direction: column;
  height: 84vh;
  align-items: center;
  justify-content: center;

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

  const onPressHandler = searchValue => {
    if (searchValue !== 'Gay') {
      navigate('/results');
      setSearchTerm(searchValue);
    } else {
      alert('Preconceituoso!');
    }
  };

  const loginClickHandler = () => {
    // Do something here
  };

  return (
    <>
      <Header onLoginClick={loginClickHandler} isVisibleGmailImage />
      <MainRow>
        <img src="images/google-logo.svg" alt="Logo do Google" />
        <p>{searchTerm}</p>
        <div className="SearchInputFieldWrapper">
          <SearchInputField onPressEnter={onPressHandler} />
        </div>
        <fieldset>
          <Button>Pesquisa Google</Button>
          <Button>Estou com sorte</Button>
        </fieldset>
      </MainRow>
      <Footer />
    </>
  );
};

export default HomePage;
