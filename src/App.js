import theme from 'style/theme';
import { ThemeProvider } from 'styled-components';
import SearchPage from './pages/SearchPage';

const App = () => (
  <ThemeProvider theme={theme}>
    <SearchPage />
    {/* <HomePage /> */}
  </ThemeProvider>
);

export default App;
