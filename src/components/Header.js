import { MdSettings } from 'react-icons/md';
import styled from 'styled-components';
import IconButton from './IconButton';

const HeaderRow = styled.div`
  display: flex;
  height: 60px;
  justify-content: flex-end;
  color: #000000de;
  align-items: center;
  a {
    padding: 15px;
    line-height: 24px;
    font-size: 14px;
    cursor: pointer;
    color: #000000de;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  #login-button {
    background-color: #1a73e8;
    border: none;
    color: white;
    padding: 9px 23px;
    font-weight: 500;
    letter-spacing: 0.25px;
    line-height: 16px;
    margin-left: 10px;
    margin-right: 8px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    &:hover {
      background: #4285f4;
    }
  }
  .material-icons.md-dark {
    color: rgba(0, 0, 0, 0.54);
  }
`;

const Header = ({ isVisibleGmailImage }) => {
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

  return (
    <HeaderRow>
      {isVisibleGmailImage ? renderGmailImage() : renderSettings()}
      <button id="login-button">Fazer login</button>
    </HeaderRow>
  );
};

export default Header;
