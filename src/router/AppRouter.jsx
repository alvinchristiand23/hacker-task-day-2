import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Help } from '../pages/Help';
import { Media } from '../pages/Media';
import { Contact } from '../pages/Contact';
import { Footer } from '../components/Footer';
import { PrivateRoute } from './PrivateRoute';

function AppRoute() {
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

export default AppRoute;
