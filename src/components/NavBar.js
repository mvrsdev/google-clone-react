import { CgImage, CgSearch } from 'react-icons/cg';
import { MdOutlineMoreVert, MdOutlineSmartDisplay } from 'react-icons/md';
import { BiBookBookmark, BiNews } from 'react-icons/bi';
import styled from 'styled-components';

const NavContainer = styled`
  font-size: 14px;
  ul {
    display: flex;
  }
  li {
    list-style: none;
    &:hover {
      color: #1a73e8;
      border-bottom: 3px solid #1a73e8;
    }
    a {
      color: #5f6368;
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0 8px 0 ;
      justify-content: space-between;
    }
  }
`;

const NavBar = () => {

<NavContainer>
<ul>
  <li>
    <a href="index.com">
      <CgSearch />
      Todas
    </a>
  </li>
  <li>
    <a href="index.com">
      <CgImage />
      Imagens
    </a>
  </li>
  <li>
    <a href="index.com">
      <MdOutlineSmartDisplay />
      Videos
    </a>
  </li>
  <li>
    <a href="index.com">
      <BiNews />
      Notícias
    </a>
  </li>
  <li>
    <a href="index.com">
      <BiBookBookmark />
      Livros
    </a>
  </li>
  <li>
    <a href="index.com">
      <MdOutlineMoreVert size={16} />
      Mais
    </a>
  </li>
</ul>
</NavContainer>;
};

export default NavBar;
