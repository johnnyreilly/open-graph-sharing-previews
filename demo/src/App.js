import * as React from "react";
import { Head } from "react-static";
import "./app.css";

function App() {
  const openGraphData = {
    title: "Sharing previews",
    description:
      "This is a page that demonstrates sharing previews using the Open Graph protocol",
    url: "https://johnnyreilly.github.io/open-graph-sharing-previews/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Open_Graph_protocol_logo.png",
  };
  return (
    <div className="App">
      <Head>
        <meta property="og:title" content={openGraphData.title} />
        <meta property="og:description" content={openGraphData.description} />
        <meta property="og:url" content={openGraphData.url} />
        <meta property="og:image" content={openGraphData.image} />
        {/* <meta name="twitter:card" content="summary" /> */}
      </Head>
      <h1>
        This page features the Open Graph protocol markup for sharing previews.
      </h1>
      <img src={openGraphData.image} alt="The Open Graph protocol logo" />
      <h2>Share it and see!</h2>
    </div>
  );
}

export default App;
