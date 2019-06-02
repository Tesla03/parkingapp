import React, { Component, Dispatch } from "react";
import { Parking } from "../models/Parking";
import { connect } from "react-redux";
import { AppState } from "../store";
import MojeDugme from "./Button";
import "../styles/Button.css";
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
}

const intialState = {
  id: "",
  vreme: "",
  popunjeno: false,
  tablice: "",
  counter: 0,
  redirect: false
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

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/ParkingDetails" />;
    }
  };

  componentDidMount() {
    if (this.props.parkings.length === 1) this.props.fetchParkings();
    console.log(`${this.props.parkings.length}`);
  }

  render() {
    let pom = true;
    if (!this.props.parkings) {
      return <h1>Svi parkinzi su prazni</h1>;
    }
    return (
      <div>
        {this.renderRedirect()}
        <div id="unos">
          <div id="mesto">
            <label>Vreme:</label>
            <input
              type="text"
              name="vreme"
              onChange={e => this.setState({ vreme: e.target.value })}
            />
          </div>
          {/* <div id="id">
            <label>Id parking mesta:</label>
            <input
              type="text"
              name="vreme"
              onChange={e => this.setState({ vreme: e.target.value })}
            />
          </div> */}
          <div id="tablice">
            <label>Tablice:</label>
            <input
              type="text"
              name="tablice"
              onChange={e => this.setState({ tablice: e.target.value })}
            />
          </div>
        </div>
        <button
          id="parkiraj"
          onClick={() => {
            const parking: Parking = {
              id: this.state.id,
              vreme: this.state.vreme,
              popunjeno: true,
              tablice: this.state.tablice
            };
            this.props.addParking(parking);
          }}
        >
          Parkiraj
        </button>
        <button
          id="prazna-mesta"
          onClick={() => {
            this.increaseCounter();
          }}
        >
          Prikazi stanje parkinga
        </button>
        <h3>
          Zauzeta parking mesta:{this.state.counter} /{" "}
          {this.props.parkings.length}
        </h3>
        <div id="tabela">
          {this.props.parkings.map((parking: Parking) => (
            <div id="dugmad">
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
            </div>
          ))}
        </div>
        <ParkingCounter />
        <button
          id="dodajPrazno"
          onClick={() => {
            const parking: Parking = {
              id: `${this.props.parkings.length + 1}`,
              vreme: "",
              popunjeno: false,
              tablice: ""
            };
            this.props.addEmpty(parking);
          }}
        >
          Dodaj prazno parking mesto
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
    //addParking: (parking: Parking) => dispatch(addParking(parking))
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
