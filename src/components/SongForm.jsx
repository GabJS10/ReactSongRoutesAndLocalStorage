import React, { useState, useEffect } from "react";

const initialForm = {
  song: "",
  artist: "",
};

function SongForm({ setsearchFormInputs, setDataStorage }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    setsearchFormInputs(null);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setsearchFormInputs(form);
    handleReset(e);
  };

  const handleSaveStorage = (form) => {
    const storage = localStorage.getItem("data");
    let data_to_save;
    if (!storage) {
      data_to_save = [{ ...form, id: 1 }];
      localStorage.setItem("data", JSON.stringify(data_to_save));
    } else {
      data_to_save = [{ ...form, id: JSON.parse(storage).length + 1 }];
      data_to_save = [...JSON.parse(storage), ...data_to_save];
      localStorage.setItem("data", JSON.stringify(data_to_save));
    }

    setDataStorage(JSON.parse(localStorage.getItem("data")));
    handleReset(initialForm);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = (e) => {
    setForm(initialForm);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Type the artist"
          value={form.artist}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="song"
          placeholder="Type the song"
          value={form.song}
          onChange={handleChange}
          required
        />
        <input type="submit" value="Ok" />
        <input
          type="button"
          value={"Favourite"}
          onClick={(e) => {
            if (
              form.artist === initialForm.artist ||
              form.song === initialForm.song
            )
              return;
            handleSaveStorage(form);
          }}
        />
      </form>
    </div>
  );
}

export default SongForm;
