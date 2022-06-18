import { MdKeyboardAlt, MdMic, MdSearch } from 'react-icons/md';
import styled from 'styled-components';

const iconColor = '#60666c';

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2rem;
  padding: 0 1rem;
  min-height: 42px;
  border: 1px solid ${props => props.theme.borderColor};
  transition: all 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover,
  &:focus-within {
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 0 0.5rem 0 0.725rem;
  margin-right: 8px;
  flex-grow: 1;
  outline: none;
  border: none;
  font-size: 16px;
  background-color: transparent;
  border-right: 1px solid ${props => props.theme.borderColor};
  color: black;
`;

const IconedButton = styled.button`
  background: transparent;
  border: none;
  vertical-align: middle;
  box-shadow: none;
  cursor: pointer;
`;

const SearchInputField = () => (
  <SearchBox>
    <MdSearch size="1.5em" color={iconColor} />
    <InputField type="search" />
    <IconedButton>
      <MdKeyboardAlt size="1.5em" color={iconColor} />
    </IconedButton>
    <IconedButton>
      <MdMic size="1.5em" color={iconColor} />
    </IconedButton>
  </SearchBox>
);

export default SearchInputField;
