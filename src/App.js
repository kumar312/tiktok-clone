import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import Videos from "./components/Videos";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // fires once when the component load.
    db.collection('videos').onSnapshot(snapshot => 
      setVideos(snapshot.docs.map(doc => doc.data()))
    )
  }, [Videos])
  return (
    //BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Videos
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
        
      </div>
    </div>
  );
}

export default App;
