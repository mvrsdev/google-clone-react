import { MdSettings } from 'react-icons/md';
import styled from 'styled-components';
import Button from './Button';
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

Button {
  margin: 9px 23px;
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
      <Button primary> Fazer login</Button>
    </HeaderRow>
  );
};

export default Header;
