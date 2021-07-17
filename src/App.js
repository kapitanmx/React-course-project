import React from 'react'; 
// Routing
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// Styles
import { GlobalStyle } from './GlobalStyles';

const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/: movieId'  element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Home />
      <GlobalStyle />
    </Router>
);


export default App;
