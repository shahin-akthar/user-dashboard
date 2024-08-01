import { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import SignUp from "./components/SignUp";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

import ThemeContext from './context/ThemeContext';

const randomColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#33FFF5', '#FFBB33', '#8A33FF', '#33FF8A'];

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * randomColors.length);
    return randomColors[randomIndex];
};

const App = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [profileBgColor] = useState(getRandomColor());

  const toggleTheme = () => {
    setDarkTheme(prevState => !prevState)
  }

  return(
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        profileBgColor
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={SignUp}/>
          <ProtectedRoute exact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
     </ThemeContext.Provider>
  )
}

export default App