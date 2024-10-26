import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
