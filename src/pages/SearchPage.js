import { Avatar, Button, IconButton, SearchInputField } from 'components';
import { MdApps } from 'react-icons/md';

const SearchPage = () => (
  <>
    <p>Search Page works!</p>
    <SearchInputField />
    <Button primary>Pesquisa Google</Button>
    <Button>Estou com sorte</Button>
    <IconButton size="large">
      <MdApps size={24} />
    </IconButton>
    <Avatar />
  </>
);

export default SearchPage;
