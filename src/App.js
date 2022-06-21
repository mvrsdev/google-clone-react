import { HomePage, LoginPage, ResultsPage } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from 'style/theme';
import { ThemeProvider } from 'styled-components';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="*" element={<p>Page not Found</p>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
