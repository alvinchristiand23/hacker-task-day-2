import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Media } from './components/Media';
import { Header } from './components/Header';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login';

function App() {
  const isAuthenticated = true;

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path={'/login'} element={<Login />} />
          <Route
            path={'/'}
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path={'/about'}
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path={'/contact'}
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path={'/media'}
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Media />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
