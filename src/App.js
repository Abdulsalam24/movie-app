import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Nav from './components/Nav';
import { MovieContextProvider } from './context/MovieContext';
import Home from './pages/Home'
import MovieSearch from './pages/MovieSearch';

function App() {

    return (
        <>
            <Router>
                <Nav />
                <MovieContextProvider>
                    <Routes>
                        <Route path='/' exact element={<Home />} />
                        <Route path='/movie-search/:search' exact element={<MovieSearch />} />
                    </Routes>
                </MovieContextProvider>
            </Router>
        </>
    )
}

export default App



