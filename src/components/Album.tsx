import React from "react";
import { IAlbum } from "../App";
type PropsAlbum = {
  album: IAlbum;
};
export const Album = ({ album }: PropsAlbum) => {
  return (
    <tr>
      <th scope="row">{album.id}</th>
      <td>{album.title}</td>
    </tr>
  );
};
