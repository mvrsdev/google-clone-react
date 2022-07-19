import styled from 'styled-components';

const ArticleContainer = styled.div`
  padding-top: 6px;
  padding-bottom: 14px;
  line-height: 2px;
  text-align: left;
  ul li {
    text-decoration: none;
    list-style: none;
    color: #4d5156;
    font-size: 14px;
  }
  .link {
    color: #202124;
  }
  h3 {
    color: #1a0dab;
    font-weight: normal;
    font-size: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Article = () => (
  <ArticleContainer>
    <ul>
      <li>
        <a>
          <p className="link">https://loremipsum.com</p>
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            Proin iaculis tincidunt est, utviverra leo pellentesque vitae. Donec
            varius sodales elit sit amet feugiat.
          </p>
        </a>
      </li>
    </ul>
  </ArticleContainer>
);

export default Article;
