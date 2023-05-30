import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// == Import : local
// Composants
import App from 'src/components/App';

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const root = createRoot(document.getElementById('root'));

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
