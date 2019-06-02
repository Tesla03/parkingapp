import React, { Component, Dispatch } from "react";
import { Link } from "react-router-dom";
import { AppState } from "../store";
import { Action } from "redux";
import { connect } from "react-redux";
import { Parking } from "../models/Parking";
import { fetchParkings } from "../store/actions";
import "../styles/Home.css";

interface Props {
  parkings: Parking[];
  fetchParkings: Function;
}
interface State {}
class AppRoot extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.parkings.length === 1) this.props.fetchParkings();
  }
  render() {
    return (
      <div id="pocetak">
        <h2> Dobrodošli na parking tržnog centra "Tesla" </h2>
        <button id="ulaz">
          <Link to="/ParkingList"> Ulaz na parking --></Link>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    parkings: state.parkings
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    fetchParkings: () => dispatch(fetchParkings())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRoot);
