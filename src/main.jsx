import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import App from './App.jsx'
import { system } from './theme/index.js'
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider 
    value={system}
    >
      <App />
    </ChakraProvider>
  </StrictMode>,
)
