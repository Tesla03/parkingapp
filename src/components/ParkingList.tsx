import React, { Component } from "react";
import { Parking } from "../models/Parking";
import { connect } from "react-redux";
import { AppState } from "../store";
import MojeDugme from "./Button";

interface Props {
  parkings?: Parking[];
}

interface State {}

class ParkingList extends Component<Props, State> {
  render() {
    if (!this.props.parkings) {
      return <h1>No questions</h1>;
    }
    return (
      <div>
        {this.props.parkings.map((parking: Parking) => (
          <div>
            <MojeDugme parking={parking} naslov={parking.car} />
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    parkings: state.parkings
  };
}

export default connect(mapStateToProps)(ParkingList);
