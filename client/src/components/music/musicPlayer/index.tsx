import { FC } from "react";
import style from "./musicPlayer.module.scss";

interface IArtist {
    name: string;
    imimagesg: [];
    external_urls: {};
    followers: {},
    genres: [];
    href: string;
    id: string;
    popularity: number;
    type: string;
    uri: string;
  }
interface MusicPlayerProps {
    artist: SpotifyApi.SingleArtistResponse;
}

const MusicPlayer: FC<MusicPlayerProps> = ({artist}) => {
    console.log(artist)
    return (
        <div className={style.card}>
            <strong>{artist.name}</strong>
            <img className={style.img} src={artist?.images[0]?.url} alt="track" />
            <div>
                <button>prev</button>
                <button>play</button>
                <button>next</button>
            </div>
            
        </div>
    )
}

export default MusicPlayer;