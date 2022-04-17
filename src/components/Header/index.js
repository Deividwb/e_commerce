import React from "react";

const Header = () => {
  return (
    <>
      <>       
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Shopping-Car
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="/list">
                    Listar
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/add">
                    Adicionar
                  </a>
                </li>            
             
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-sm-2"
                  type="text"
                  placeholder="Procurar..."
                />
                <button
                  className="btn btn-secondary my-2 my-sm-0 me-sm-4"
                  type="submit"
                >
                  Buscar
                </button>
                <div>
                <i className="fa fa-cart-plus fa-2x " aria-hidden="true" />
                </div>
                
              </form>
            </div>
          </div>
        </nav>
      </>
    </>
  );
};

export default Header;
