
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import RootLayout from './routes/root';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const router= createBrowserRouter([
  {
    path:'/', element:<RootLayout/>,
children:[{path:"" , element: <MovieList apiPath="movie/now_playing" title="Home" /> },
          {path:"movie/:id" , element: <MovieDetail/>},
          {path:"movies/popular" , element: <MovieList apiPath="movie/popular" title="Popular" />},
          {path:"movies/top" , element: <MovieList apiPath="movie/top_rated" title="Top Rated" />},
          {path:"movies/upcoming" , element: <MovieList apiPath="movie/upcoming" title="Upcoming" />},
          // {path:"search" , element: <Search apiPath="search/movie" />},
          // {path:"*" , element: <PageNotFound />},
          ]
  },
])

function App() {
  return (
 
    <RouterProvider router={router}/>
 
  );
}

export default App;
