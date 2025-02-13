import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './components/App'
import { Provider } from 'react-redux'
import { store } from './lib/state/store'
import '@fontsource/roboto/400.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
