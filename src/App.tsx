import { useState } from "react";
import { useEffect } from "react";
import { Album } from "./components/Album";
export interface IAlbum {
userId:number,
id: number,
title:string
}

function App() {
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const url = "https://jsonplaceholder.typicode.com/albums/";


  useEffect(() => {
    async function fetchAlbums() {
      const response = await fetch(url);
      const data = await response.json();
      setAlbums(data);
    }
    fetchAlbums();
  }, []);

  return <>
    <div className="container">
      <h1>Welcome to my albums</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
            {albums.map((album)=>
            <Album key={album.id} album={album} />)}
        </tbody>
      </table>
    </div>
  </>
}

export default App;
