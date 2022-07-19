import { CgImage, CgSearch } from 'react-icons/cg';
import { MdOutlineMoreVert, MdOutlineSmartDisplay } from 'react-icons/md';
import { BiBookBookmark, BiNews } from 'react-icons/bi';
import styled from 'styled-components';

const NavContainer = styled.div`
  ul {
    display: flex;
    li {
      list-style: none;
      &:hover {
        color: #1a73e8;
        border-bottom: 3px solid #1a73e8;
      }
    }
  }
  a {
    color: #5f6368;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 18px 0;
    font-weight: 440;
    font-size: 14px;
    span {
      margin-left: 8px;
    }
  }
`;

const NavBar = () => (
  <NavContainer>
    <ul>
      <li>
        <a href="index.com">
          <CgSearch />
          <span>Todas</span>
        </a>
      </li>
      <li>
        <a href="index.com">
          <CgImage />
          <span>Imagens</span>
        </a>
      </li>
      <li>
        <a href="index.com">
          <MdOutlineSmartDisplay />
          <span>Videos</span>
        </a>
      </li>
      <li>
        <a href="index.com">
          <BiNews />
          <span>Notícias</span>
        </a>
      </li>
      <li>
        <a href="index.com">
          <BiBookBookmark />
          <span>Livros</span>
        </a>
      </li>
      <li>
        <a href="index.com">
          <MdOutlineMoreVert size={16} />
          <span>Mais</span>
        </a>
      </li>
    </ul>
  </NavContainer>
);

export default NavBar;
