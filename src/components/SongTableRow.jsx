
function SongTableRow({ data, setsearchFormInputs,setNavigate, setdataStorage }) {
  const handleClickVer = () => {

    setsearchFormInputs(data)
    setNavigate(`/song/detail/:${data.id}`)

  };

  const handleClickDelete = () => {
    const storage = JSON.parse(localStorage.getItem("data"))

    const data_to_delete = storage.filter((el) => el.id!=data.id)
    
    localStorage.setItem("data",JSON.stringify(data_to_delete))

    setdataStorage(JSON.parse(localStorage.getItem("data")))
  }

  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.artist}</td>
      <td>{data.song}</td>

      <td>
        <button onClick={handleClickVer}>Ver</button>
        <button onClick={handleClickDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default SongTableRow;
