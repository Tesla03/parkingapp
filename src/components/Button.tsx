import React, { Component } from "react";
import { Color } from "csstype";
import { Parking } from "../models/Parking";
import "../styles/Button.css";
import { parkingReducer } from "../store/parking-reducer";
import { Router, Route, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import Home from "./Home";
import ParkingCounter from "./ParkingCounter";
import ParkingDetails from "./ParkingDetails";

interface Props {
  tablice: string;
  parking: Parking;
  popunjeno: boolean;
}
const history = createBrowserHistory();
interface State {
  naslov: string;
  selektovano: boolean;
  boja: Color;
  redirect: boolean;
}

class MojeDugme extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      naslov: "Zauzeto",
      selektovano: false,
      boja: "green",
      redirect: false
    };
  }

  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   });
  // };

  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to="/ParkingDetails" />;
  //   }
  // };

  componentDidMount() {
    if (this.props.parking.popunjeno) {
      this.setState({ naslov: this.props.tablice, boja: "green" });
    } else {
      this.setState({ naslov: "", boja: "yellow" });
    }
  }
  render() {
    return (
      <div>
        {/* {this.renderRedirect()} */}
        <button
          style={{ backgroundColor: this.state.boja }}
          onClick={() => {
            if (this.props.popunjeno === this.props.parking.popunjeno) {
              this.setState({
                boja: "green",
                naslov: this.props.parking.tablice
              });
            } else {
              this.setState({
                boja: "yellow"
              });
            }
            //this.setRedirect();
          }}
        >
          {this.state.naslov}
        </button>
      </div>
    );
  }
}

export default MojeDugme;
