import React, { useEffect, useState } from "react";
import { ISong } from "./Album";

type PropsSong = {
  song: ISong;
};

export const Song = ({song}:PropsSong) => {
  return <>
<div className="card" style={{width: "18rem"}}>
  <img src={song.url} className="card-img-top"/>
  <div className="card-body">
    <p className="card-text">{song.title}</p>
  </div>
</div>
  </>
  
}
