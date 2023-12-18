import './App.css'
import ModalContextProvider from './context/modal-context';
import Home from './views/Home/Home';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  
  return (
    <StyledEngineProvider injectFirst>
      <ModalContextProvider>
        <Home />
      </ModalContextProvider>
    </StyledEngineProvider>
  )
}

export default App
