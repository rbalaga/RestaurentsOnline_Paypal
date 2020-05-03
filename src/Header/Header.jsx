import React from "react";
import { Button } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

export default function Header(props) {
  const { toggleSortType, sortRating, sortCost } = props;
  const toggleCost = () => toggleSortType("Average Cost for two");
  const toggleRating = () => toggleSortType("Aggregate rating");
  return (
    <nav className="navbar navbar-expand navbar-light bg-primary topbar mb-4 static-top shadow">
      <button class="btn navbar-brand">
        <i className="fa fa-paypal"></i>aypal
      </button>
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Search for Restaurents or Cuisines..."
            aria-label="Search"
            aria-describedby="basic-addon2"
            onChange={props.searchInputChange}
          />
          <div className="input-group-append">
            <button className="btn btn-warning" type="button">
              <FontAwesome name="search" />
            </button>
          </div>
        </div>
      </form>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a
            href="123"
            className="nav-link dropdown-toggle"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-search fa-fw"></i>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown"
          >
            <form
              action="#"
              className="form-inline mr-auto w-100 navbar-search"
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        <li>
          <Button className="mr-2" variant="light" onClick={toggleRating}>
            Rating{" "}
            <FontAwesome
              className="ml-5"
              name={
                sortRating === "ASC" ? "sort-numeric-asc" : "sort-numeric-desc"
              }
            />
          </Button>
          <Button className="mr-2 mr-auto" variant="light" onClick={toggleCost}>
            Cost{" "}
            <FontAwesome
              className="ml-5"
              name={
                sortCost === "ASC" ? "sort-numeric-asc" : "sort-numeric-desc"
              }
            />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
