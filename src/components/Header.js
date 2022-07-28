import { MdSettings } from 'react-icons/md';
import { CgMenuGridO } from 'react-icons/cg';
import styled from 'styled-components';
import Button from './Button';
import IconButton from './IconButton';
import { useNavigate } from 'react-router-dom';

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 60px;
  font-size: 14px;
  padding: 8px 24px 8px 16px;

  a {
    padding: 15px;
    line-height: 24px;
    cursor: pointer;
    color: ${prop => prop.theme.defaultColorText};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  #login-button {
    margin-left: 8px;
    font-weight: 600;
  }
`;

const Header = ({ isVisibleGmailImage }) => {
  const navigate = useNavigate();
  const renderGmailImage = () => (
    <>
      <a href="index.com">Gmail</a>
      <a href="index.com">Imagens</a>
    </>
  );
  const renderSettings = () => (
    <IconButton size="large">
      <MdSettings size={24} />
    </IconButton>
  );

  const loginClickHandler = () => {
    navigate('/login');
  };

  return (
    <HeaderRow>
      {isVisibleGmailImage ? renderGmailImage() : renderSettings()}

      <IconButton size="large">
        <CgMenuGridO size={24} />
      </IconButton>
      <Button id="login-button" primary onClick={loginClickHandler}>
        Fazer login
      </Button>
    </HeaderRow>
  );
};

export default Header;
