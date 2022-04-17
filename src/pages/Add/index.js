import React, { useState } from "react";
import { addCar } from "../../Store/cars";
import { useDispatch } from "react-redux";

const Add = () => {
  const [form, setForm] = useState({ name: "", url: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addCar(form));
  };

  return (
    <form className="container mt-5" onSubmit={onSubmit}>
      <div className="form-group">
        <label>Nome</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
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
          onChange={handleChange}
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
