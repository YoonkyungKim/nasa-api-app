import logo from './logo.svg';
import './App.css';
import '@shopify/polaris/build/esm/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
