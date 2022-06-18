import styled from 'styled-components';
import IconButton from './IconButton';

const ImageContainer = styled.div`
  background: blue;
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

const Avatar = () => (
  <IconButton size="large">
    <ImageContainer />
  </IconButton>
);

export default Avatar;
