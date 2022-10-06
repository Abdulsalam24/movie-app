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
import SingleMovie from './pages/SingleMovie';

function App() {

    return (
        <>
            <Router>
                <Nav />
                <MovieContextProvider>
                    <Routes>

                        <Route path='/' exact element={<Home />} />
                        <Route path='/movie-search/:search' exact element={<MovieSearch />} />
                        <Route path='/singleMovie/:id' exact element={<SingleMovie />} />

                    </Routes>
                </MovieContextProvider>
            </Router>
        </>
    )
}

export default App



