import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:title" content="Sharing previews" />
        <meta property="og:description" content="This is a page that demonstrates sharing previews using the Open Graph protocol" />
        <meta
          property="og:url"
          content="https://johnnyreilly.github.io/open-graph-sharing-previews/"
        />
        <meta
          property="og:image"
          content="https://upload.wikimedia.org/wikipedia/commons/7/72/Open_Graph_protocol_logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <h1>This page features the Open Graph protocol markup for sharing previews.</h1>
      <h2>Share it and see!</h2>
    </div>
  );
}

export default App;
