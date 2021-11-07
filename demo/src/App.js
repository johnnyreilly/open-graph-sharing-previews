import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:title" content="The Rock" />
        <meta property="og:type" content="video.movie" />
        <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        />
        <meta
          property="og:image"
          content="https://ia.media-imdb.com/images/rock.jpg"
        />
      </Helmet>
      <h1>This page is shareable!</h1>
    </div>
  );
}

export default App;
