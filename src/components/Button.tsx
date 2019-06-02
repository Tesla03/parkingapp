import React, { Component } from "react";
import { Color } from "csstype";
import { Parking } from "../models/Parking";
import "../styles/Button.css";

interface Props {
  tablice: string;
  parking: Parking;
  popunjeno: boolean;
}

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

  componentDidMount() {
    if (this.props.parking.popunjeno) {
      this.setState({ naslov: this.props.tablice, boja: "#cc0000" });
    } else {
      this.setState({ naslov: "", boja: "green" });
    }
  }

  render() {
    return (
      <div>
        <button style={{ backgroundColor: this.state.boja }}>
          {this.state.naslov}
        </button>
      </div>
    );
  }
}
export default MojeDugme;
