import React, { Component, Dispatch } from "react";
import { AppState } from "../store";
import { connect } from "react-redux";
import { Action } from "redux";
import { Parking } from "../models/Parking";
import ParkingCounter from "./ParkingCounter";
import { fetchParkings } from "../store/actions";
import "../styles/ListParkingDetails.css";
import { Redirect } from "react-router";

interface Props {
  parkings: Parking[];
  fetchParking: Function;
}

interface State {
  id: string;
  vreme: string;
  popunjeno: boolean;
  tablice: string;
  vlasnik: string;
  redirect: boolean;
}
const initialState = {
  id: "",
  vreme: "",
  popunjeno: false,
  tablice: "",
  vlasnik: "",
  redirect: false
};

class ListParkingDetails extends Component<Props, State> {
  state = initialState;
  constructor(props: Props) {
    super(props);
  }

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

  prikazi(parking: Parking) {
    if (parking.tablice !== "") {
      return (
        <li key={parking.id}>
          <p>Vreme parkiranja: {parking.vreme} sata</p>
          <p>Registarski broj automobila: {parking.tablice}</p>
          <p>Vlasnik automobila: {parking.vlasnik}</p>
          <br />
        </li>
      );
    } else {
      return (
        <p>Parking sa id brojem {parking.id} je prazan i nema podataka!</p>
      );
    }
  }

  componentDidMount() {
    if (this.props.parkings.length === 1) this.props.fetchParking();
  }
  render() {
    if (!this.props.parkings) {
      return <h1>Nema nijednog parkinga</h1>;
    }
    return (
      <div id="detalji">
        {this.renderRedirect()}
        <ul id="lista">
          {this.props.parkings.map((parking: Parking) => this.prikazi(parking))}
        </ul>
        <div id="mesta">
          <ParkingCounter />
          <button
            id="povratak"
            onClick={() => {
              this.setRedirect();
            }}
          >
            Povratak na parking -->
          </button>
        </div>
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
    fetchParking: () => dispatch(fetchParkings())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListParkingDetails);
