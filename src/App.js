import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Media } from './Pages/Media';
import { Header } from './components/Header';
import { PrivateRoute } from './components/PrivateRoute';
import { Help } from './Pages/Help';
import { Footer } from './components/Footer';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <Router>
      <div>
        <Header isLogin={isLogin} onClick={handleLogin} />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route
            path={'/about-us'}
            element={
              <PrivateRoute isAuthenticated={isLogin}>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path={'/help'}
            element={
              <PrivateRoute isAuthenticated={isLogin}>
                <Help />
              </PrivateRoute>
            }
          />
          <Route
            path={'/media'}
            element={
              <PrivateRoute isAuthenticated={isLogin}>
                <Media />
              </PrivateRoute>
            }
          />
          <Route
            path={'/contact'}
            element={
              <PrivateRoute isAuthenticated={isLogin}>
                <Contact />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
