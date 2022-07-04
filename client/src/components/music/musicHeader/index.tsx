import { FC, useEffect } from "react";
import client from "../../../chared/spotify";
import style from "./musicHeader.module.scss";

const MusicHeader: FC = () => {
    useEffect(() => {
    //    const posts = client.getFeaturedPlaylists({ country: "KZ" })
      })
      
    return (
        <div className={style.header}>
            <h2>Charts: Top 50</h2>
            <div className="d-flex">
                <div className={style.card}></div>
            </div>
        </div>
    )
}

export default MusicHeader;