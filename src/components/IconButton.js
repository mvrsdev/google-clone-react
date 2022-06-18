import { useMemo } from 'react';
import styled from 'styled-components';

const RoundedButton = styled.button`
  border-radius: 50%;
  border: none;
  height: ${prop => prop.size ?? 32}px;
  width: ${prop => prop.size ?? 32}px;
  background-color: transparent;
  transition: all 195ms;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const IconButton = ({ children, onClick, size }) => {
  const sizeInPx = useMemo(() => {
    switch (size) {
      case 'small':
        return 24;
      case 'medium':
        return 32;
      case 'large':
        return 40;
    }
  }, [size]);

  const onClickHandler = () => {
    onClick && onClick();
  };

  return (
    <RoundedButton size={sizeInPx} onClick={onClickHandler}>
      {children}
    </RoundedButton>
  );
};

export default IconButton;
