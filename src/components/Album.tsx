import React, { useEffect, useState } from "react";
import { IAlbum } from "../App";
import { Song } from "./Song";

type PropsAlbum = {
  album: IAlbum;
};

export interface ISong {
  albumId:number,
  id:number,
  title:string,
  url:string,
  thumbnailUrl:string
}

export const Album = ({ album }: PropsAlbum) => {
  const [songs, setSongs] = useState<ISong[]>([]);
  const url = `https://jsonplaceholder.typicode.com/albums/${album.id}/photos`;
  useEffect(() => {
    async function fetchSongs() {
      var response = await fetch(url);
      var data = await response.json();
      setSongs(data);
    }
    fetchSongs();
  }, []);
  
  return (
    <tr>
      <th scope="row">{album.id}</th>
      <td>{album.title}
      <div className="d-flex">
        {songs.map((song)=><Song key={song.id} song={song} />)}
      </div>
      </td>
    </tr>
  );
};
