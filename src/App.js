import './App.css';
import endpoints from './Services/endpoints'
import Row from './Components/Row'
import Banner from './Components/Banner'
import NetworkDetector from './Components/hoc/ConnectivityHOC'
import Nav from './Components/Navbar'
import Footer from './Components/footer'
function App() {

  return (
    <div className="app">
      <Nav />
      <Banner fetchUrl={endpoints.fetchNetflixOriginals} isLarge={true} />
      <Row title={"Originals"} fetchUrl={endpoints.fetchNetflixOriginals} isLarge={true} />
      <Row title={"Trending"} fetchUrl={endpoints.fetchTrending} />
      <Row title={"Action"} fetchUrl={endpoints.fetchActionMovies} />
      <Row title={"Romance"} fetchUrl={endpoints.fetchRomanceMovies} />
      <Row title={"Horror"} fetchUrl={endpoints.fetchHorrorMovies} />
      <Row title={"Comedy"} fetchUrl={endpoints.fetchComedyMovies} />
      <Row title={"Documentaries"} fetchUrl={endpoints.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default NetworkDetector(App);
