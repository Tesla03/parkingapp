import React, { Component, Dispatch } from "react";
import { Parking } from "../models/Parking";
import { connect } from "react-redux";
import { AppState } from "../store";
import MojeDugme from "./Button";
import "../styles/ParkingList.css";
import { Action } from "redux";
import {
  addParking,
  fetchParkings,
  deleteParking,
  selectParking,
  addEmpty
} from "../store/actions";
import ParkingCounter from "./ParkingCounter";
import { Redirect } from "react-router-dom";

interface Props {
  parkings: Parking[];
  fetchParkings: Function;
  addParking: Function;
  deleteParking: Function;
  selectParking: Function;
  addEmpty: Function;
}

interface State {
  id: string;
  vreme: string;
  popunjeno?: boolean;
  tablice?: string;
  counter: number;
  redirect: boolean;
  redirect2: boolean;
  vlasnik: string;
}

const intialState = {
  id: "",
  vreme: "",
  popunjeno: false,
  tablice: "",
  counter: 0,
  redirect: false,
  redirect2: false,
  vlasnik: ""
};

class ParkingList extends Component<Props, State> {
  state = intialState;
  constructor(props: Props) {
    super(props);
  }

  increaseCounter() {
    let pom = 0;
    this.props.parkings.map((parking: Parking) => {
      if (parking.popunjeno) {
        pom++;
      }
    });
    this.setState({ counter: pom });
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  setRedirect2 = () => {
    this.setState({
      redirect2: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/ParkingDetails" />;
    }
  };

  renderRedirect2 = () => {
    if (this.state.redirect2) {
      return <Redirect to="/ListParkingDetails" />;
    }
  };

  componentDidMount() {
    if (this.props.parkings.length === 1) this.props.fetchParkings();
  }

  componentWillReceiveProps() {
    this.increaseCounter();
  }

  render() {
    let pom = true;
    if (!this.props.parkings) {
      return <h1>Svi parkinzi su prazni</h1>;
    }
    return (
      <div id="glavni">
        {this.renderRedirect()}
        {this.renderRedirect2()}
        <div id="unos">
          <div id="mesto">
            <label>Vreme parkiranja:</label>
            <input
              type="text"
              name="vreme"
              onChange={e => this.setState({ vreme: e.target.value })}
            />
          </div>
          <div id="tablice">
            <label>Tablice:</label>
            <input
              type="text"
              name="tablice"
              onChange={e => this.setState({ tablice: e.target.value })}
            />
          </div>
          <div id="vlasnik">
            <label>Vlasnik:</label>
            <input
              type="text"
              name="vlasnik"
              onChange={e => this.setState({ vlasnik: e.target.value })}
            />
          </div>
          <button
            id="parkiraj"
            onClick={() => {
              const parking: Parking = {
                id: this.state.id,
                vreme: this.state.vreme,
                popunjeno: true,
                tablice: this.state.tablice,
                vlasnik: this.state.vlasnik
              };
              this.props.addParking(parking);
            }}
          >
            Parkiraj
          </button>
        </div>
        <div id="stanje">
          <h3>
            Broj zauzetih parking mesta: {this.state.counter} /{" "}
            {this.props.parkings.length}
          </h3>
        </div>
        <div id="tabela">
          {this.props.parkings.map((parking: Parking) => (
            <div id="dugmad">
              <li key={parking.id}>
                <MojeDugme
                  tablice={parking.tablice}
                  parking={parking}
                  popunjeno={parking.popunjeno}
                />
                <button
                  id="Select"
                  onClick={() => {
                    this.props.selectParking(parking);
                    this.setRedirect();
                  }}
                >
                  Select
                </button>
                <button
                  id="isparkiraj"
                  onClick={() => {
                    this.props.deleteParking(parking.tablice);
                  }}
                >
                  Isparkiraj
                </button>
              </li>
            </div>
          ))}
        </div>
        <ParkingCounter />
        <div id="redirect">
          <button
            id="dodajPrazno"
            onClick={() => {
              const parking: Parking = {
                id: `${this.props.parkings.length}`,
                vreme: "",
                popunjeno: false,
                tablice: "",
                vlasnik: ""
              };
              this.props.addEmpty(parking);
            }}
          >
            Dodaj prazno parking mesto
          </button>
          <button
            id="prikaziDetalje"
            onClick={() => {
              this.setRedirect2();
            }}
          >
            Prikazi detalje
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
    fetchParkings: () => dispatch(fetchParkings()),
    addParking: (parking: Parking) => dispatch(addParking(parking)),
    deleteParking: (parkingId: string) => dispatch(deleteParking(parkingId)),
    selectParking: (parking: Parking) => dispatch(selectParking(parking)),
    addEmpty: (parking: Parking) => dispatch(addEmpty(parking))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParkingList);
