import './App.css';

//@ts-expect-error TS is not resolving @ path correctly
import { ThemeProvider } from '@/components/theme-provider';

import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <MainBody />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
