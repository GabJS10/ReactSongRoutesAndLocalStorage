import React, { useEffect } from "react";
import SongTableRow from "./SongTableRow";

function SongTable({ data, setArtist, setSong, setsearchFormInputs,setNavigate, setdataStorage }) {
  useEffect(() => {
    setTimeout(() => {
      setArtist(null);
      setSong(null);
    }, 500);
  }, []);

  console.log(data);

  return (
    <>
      <h2> Favoritos </h2>

      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Artist</td>
            <td>Song</td>
            <td>Actions</td>
          </tr>
        </thead>

        <tbody>
          {data.length===0 ? (
            <tr><td><h2>NO TIENE FAVORITOS</h2></td></tr>
          ) : (
            data.map((el) => (
              <SongTableRow
                key={el.id}
                data={el}
                setsearchFormInputs={setsearchFormInputs}
                setNavigate={setNavigate}
                setdataStorage={setdataStorage}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default SongTable;
