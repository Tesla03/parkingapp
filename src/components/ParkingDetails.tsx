import React, { Component, Dispatch } from "react";
import { AppState } from "../store";
import { Action } from "redux";
import { connect } from "react-redux";
import { Parking } from "../models/Parking";
import { Redirect } from "react-router-dom";

interface Props {
  selectedParking?: Parking;
  parkings: Parking[];
}

interface State {
  redirect: boolean;
}

class ParkingDetails extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  componentDidMount() {}
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/ParkingList" />;
    }
  };

  render() {
    if (!this.props.selectedParking) {
      return <p>Selektovan parking: -</p>;
    }
    return (
      <div>
        {console.log(this.props.selectedParking.tablice)};
        {this.renderRedirect()}
        <p>Selektovan parking: {this.props.selectedParking.tablice}</p>
        <button
          onClick={() => {
            this.setRedirect();
          }}
        >
          Vrati se nazad
        </button>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    // prop name <= store slice
    selectedParking: state.selected
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
)(ParkingDetails);
