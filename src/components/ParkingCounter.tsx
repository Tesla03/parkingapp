import React, { Component, Dispatch } from "react";
import { AppState } from "../store";
import { Action } from "redux";
import { connect } from "react-redux";
import { Parking } from "../models/Parking";

interface Props {
  parkings: Parking[];
}

interface State {}

class ParkingCounter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    if (!this.props.parkings) {
      return <p>Ukupan broj parkinga: 0</p>;
    }
    return (
      <div>
        <p>Ukupan broj parkinga: {this.props.parkings.length}</p>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    // prop name <= store slice
    parkings: state.parkings
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    // prop name => dispatch action
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParkingCounter);
