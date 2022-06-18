import styled, { css } from 'styled-components';

const Button = styled.button`
  transition: all 190ms;
  min-height: 36px;
  min-width: 54px;
  border-radius: 4px;
  background-color: ${props => props.theme.defaultColor};
  border: 1px solid ${props => props.theme.defaultColor};
  font-size: 14px;
  padding: 0 16px;
  cursor: pointer;
  user-select: none;
  ${props =>
    props.primary &&
    css`
      background-color: ${props => props.theme.primaryColor};
      color: ${props => props.theme.primaryColorText};
      border: 1px solid ${props => props.theme.primaryColor};

      &:hover {
        border: 1px solid ${props => props.theme.primaryColor};
        filter: brightness(105%);
        box-shadow: 0 1px 2px 0 rgb(66 133 244 / 30%),
          0 1px 3px 1px rgb(66 133 244 / 15%);
      }
    `}

  &:hover {
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    border: 1px solid ${props => props.theme.borderColor};
  }

  &:active {
    filter: brightness(85%);
  }
`;

export default Button;
