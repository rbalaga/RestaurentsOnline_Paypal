import { connect } from "react-redux";
import RestaurentsList from "./RestaurentsList";
import { getRestaurentsList } from "../redux/actions";

const mapStateToProps = (state) => ({
  err: state.restaurentReducer.err,
});

const mapDispatchToProps = (dispatch) => ({
  getRestaurentsList: () => dispatch(getRestaurentsList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurentsList);
