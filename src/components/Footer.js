import styled from 'styled-components';

const FooterRow = styled.div`
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.5px solid #e0e0e0;
  padding: 0 20px;
  font-size: 14px;
  min-width: 50px;
  height: 48px;
  a {
    text-decoration: none;
    cursor: pointer;
    padding: 15px;
    color: #70757a;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <FooterRow>
    <div>
      <a href="index.com">Sobre</a>
      <a href="index.com">Publicidade</a>
      <a href="index.com">Negócios</a>
      <a href="index.com">Como funciona a Pesquisa</a>
    </div>
    <div>
      <a href="index.com">Privacidade</a>
      <a href="index.com">Termos</a>
      <a href="index.com">Configurações</a>
    </div>
  </FooterRow>
);

export default Footer;
