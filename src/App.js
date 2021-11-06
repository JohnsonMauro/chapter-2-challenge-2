import { BrowserRouter } from 'react-router-dom';

import Routing from "./routes";

import GlobalStyle from './styles/global';

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </>
);

export default App;
