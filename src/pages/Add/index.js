import React, { useState } from "react";


const Add = () => {
  const [form, setForm] = useState();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // return cars;
    console.log(form);
  };

  return (
    <form className="container mt-5" onSubmit={onSubmit}>
      <div className="form-group">
        <label>Nome</label>
        <input
          type="text"
          name="name"
          onClick={handleChange}
          className="form-control"
          placeholder="Nome..."
          value={form.name}
        />
      </div>
      <div className="form-group">
        <label>URL:</label>
        <input
          type="text"
          name="url"
          onChange={(e) => handleChange()}
          className="form-control"
          placeholder="URL: https:/"
          value={form.url}
        />
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Adicionar
      </button>
    </form>
  );
};

export default Add;
