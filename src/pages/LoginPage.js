import { Button } from 'components';
import styled from 'styled-components';

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    box-sizing: border-box;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 8px;
    width: 450px;
    height: 500px;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 48px 40px 36px;
  }

  img {
    width: 75px;
  }

  h1 {
    color: #202124;
    padding-bottom: 0;
    font-size: 24px;
    font-weight: 500;
  }

  span {
    color: #202124;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.1px;
    line-height: 1.5;
  }

  input {
    height: 24px;
    font-size: 15px;
    font-weight: 400;
    width: 95%;
    padding: 13px 15px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 4px;
    margin: 32px 0 3px;
  }

  .forgot-container {
    display: flex;
    width: 390px;
    padding: 6px;
  }

  .forgot {
    color: ${props => props.theme.primaryColor};
    font-weight: 550;
    letter-spacing: 0.25px;
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
    border: 0;
  }

  .visitors {
    color: #5f6368;
    font-size: 14px;
    line-height: 1.4286;
    margin-top: 40px;
    width: 100%;
  }

  .login-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 40px;
    /* padding-bottom: 20px; */
  }
`;

const LoginPage = () => (
  <LoginContainer>
    <div className="box">
      <div className="login-form">
        <img src="images/google-logo.svg" alt="Logo do Google" />
        <h1>Fazer login</h1>
        <span>Use sua Conta do Google</span>
        <input type="email" placeholder="E-mail ou telefone" />
        <div className="forgot-container">
          <button className="forgot" href="">
            Esqueceu seu e-mail?
          </button>
        </div>
        <div className="visitors">
          Não está no seu computador? Use o modo visitante para fazer login com
          privacidade. <button className="forgot"> Saiba mais</button>
        </div>
        <div className="login-footer">
          <div>
            <button className="forgot"> Criar conta</button>
          </div>
          <div>
            <Button primary> Próxima </Button>
          </div>
        </div>
      </div>
    </div>
  </LoginContainer>
);

export default LoginPage;
