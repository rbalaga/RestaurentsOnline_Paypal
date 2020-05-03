import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

import { filterRestaurents, sortByField } from "./redux/actions";
import RestaurentsList from "./Restaurents/restaurentsListContainer";
import isEqual from "lodash.isequal";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurents: props.restaurents,
      filteredRestaurents: props.restaurents,
      displayRestaurents: [],
      sortRating: "ASC",
      sortCost: "ASC",
    };

    // Binds our scroll event handler
    window.onscroll = () => {
      // Checks that the page has scrolled to the bottom
      if (
        Math.abs(
          window.innerHeight +
            document.documentElement.scrollTop -
            document.documentElement.offsetHeight
        ) < 2
      ) {
        let { filteredRestaurents } = this.state;
        const nextRestaurents = filteredRestaurents.splice(0, 20);
        this.setState({
          displayRestaurents: [
            ...this.state.displayRestaurents,
            ...nextRestaurents,
          ],
          filteredRestaurents,
        });
      }
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (!isEqual(prevState.restaurents, nextProps.restaurents)) {
      console.log(prevState.filteredRestaurents, nextProps.restaurents);
      const filteredRestaurents = [...nextProps.restaurents];
      const displayRestaurents = filteredRestaurents.splice(0, 20);
      return {
        restaurents: [...nextProps.restaurents],
        filteredRestaurents: filteredRestaurents,
        displayRestaurents: displayRestaurents,
        err: nextProps.err,
      };
    }
    return null;
  };

  searchInputChange = (e) => {
    const { filterRestaurents } = this.props;
    filterRestaurents(e.target.value, "");
  };

  toggleSortType = (field) => {
    let type = "";
    if (field === "Average Cost for two") {
      type = this.state.sortCost === "ASC" ? "DESC" : "ASC";
      this.setState({ sortCost: type });
    } else if (field === "Aggregate rating") {
      type = this.state.sortRating === "ASC" ? "DESC" : "ASC";
      this.setState({ sortRating: type });
    }
    this.props.sortByField(field, type);
  };

  render() {
    return (
      <div id="content d-flex bg-light flex-column">
        <Header
          searchInputChange={this.searchInputChange}
          sortRating={this.state.sortRating}
          sortCost={this.state.sortCost}
          toggleSortType={this.toggleSortType}
        />
        <Container className="overflow-auto">
          <RestaurentsList restaurents={this.state.displayRestaurents} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurents: state.restaurentReducer.filteredRestaurents,
});

const mapDispatchToProps = (dispatch) => ({
  filterRestaurents: (searchText, genre) =>
    dispatch(filterRestaurents(searchText, genre)),
  sortByField: (field, sortType) => dispatch(sortByField(field, sortType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
