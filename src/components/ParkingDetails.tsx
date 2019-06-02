import React, { Component, Dispatch } from "react";
import { AppState } from "../store";
import { Action } from "redux";
import { connect } from "react-redux";
import { Parking } from "../models/Parking";
import { Redirect } from "react-router-dom";
import "../styles/ParkingDetails.css";

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
        {this.renderRedirect()}
        <label>Selektovan parking: </label>
        <p>Vreme parkiranja: {this.props.selectedParking.vreme} sata</p>
        <p>Registarski broj automobila: {this.props.selectedParking.tablice}</p>
        <p>Vlasnik automobila: {this.props.selectedParking.vlasnik}</p>
        <button
          id="povratak"
          onClick={() => {
            this.setRedirect();
          }}
        >
          Povratak na parking -->
        </button>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    selectedParking: state.selected
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParkingDetails);
