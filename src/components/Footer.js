import styled from 'styled-components';

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #f2f2f2;
  border-top: 0.5px solid #e0e0e0;
  padding: 8px 20px;
  font-size: 14px;
  min-height: 32px;

  @media (max-device-width: 818px) {
    justify-content: center;
    .footer-group {
      padding: 8px 0;
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;
    padding: 0 16px;
    color: #70757a;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <FooterRow>
    <div className="footer-group">
      <a href="index.com">Sobre</a>
      <a href="index.com">Publicidade</a>
      <a href="index.com">Negócios</a>
      <a href="index.com">Como funciona a Pesquisa</a>
    </div>
    <div className="footer-group">
      <a href="index.com">Privacidade</a>
      <a href="index.com">Termos</a>
      <a href="index.com">Configurações</a>
    </div>
  </FooterRow>
);

export default Footer;
