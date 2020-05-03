import React, { Component } from "react";
import Restaurent from "./Restaurent";

class RestaurentsList extends Component {
  componentDidMount() {
    this.props.getRestaurentsList();
  }
  render() {
    const { err = "", restaurents = [] } = this.props;
    return (
      <div className="row">
        {err ? (
          <h2>{err}</h2>
        ) : (
          restaurents.map((restaurent) => <Restaurent details={restaurent} />)
        )}
      </div>
    );
  }
}

export default RestaurentsList;
