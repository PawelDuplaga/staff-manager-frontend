import './App.css'
import Home from './views/Home/Home';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  
  return (
    <StyledEngineProvider injectFirst>
      <Home />
    </StyledEngineProvider>
  )
}

export default App
