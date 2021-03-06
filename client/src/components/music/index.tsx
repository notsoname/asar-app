import { FC, useEffect, useState } from "react";
import client from "../../chared/spotify";
import MusicHeader from "./musicHeader";
import MusicHistory from "./musicHistory";
import MusicPlayer from "./musicPlayer";

const Music: FC = () => {
    const [music, setMusic] = useState<any>()
    const [artist, setArtist] = useState<SpotifyApi.SingleArtistResponse>(Object)
    useEffect( ()  => {
        fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            Authorization: `Basic ${btoa(
              `85bc8e1fa078426694ae47b2b87e6b92:93bf1e80a2274af2acac5aa24b958505`
            )}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: "grant_type=client_credentials",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.access_token) {
              client.setAccessToken(data.access_token);
            } 
          })
          .then(() => {
              client.getArtist("3vvLuXEEf7sl3izJcw0GIn")
                .then(data => setArtist(data))
          })
          
          .catch((err) => {
            console.log(err);
          });
      }, []);
      console.log(artist)
    return (
        <div>
            <MusicHeader/>
            <div className="d-flex mt-4">
                <MusicHistory/>
                <MusicPlayer artist={artist}/>
            </div>
        </div>
    )
}

export default Music;