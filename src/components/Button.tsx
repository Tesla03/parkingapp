import React, { Component } from "react";
import { Color } from "csstype";
import { Parking } from "../models/Parking";

interface Props {
  naslov: string;
  parking: Parking;
}

interface State {
  selektovano: boolean;
  boja: Color;
}

class MojeDugme extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selektovano: false,
      boja: "blue"
    };
  }
  render() {
    return (
      <button
        style={{ backgroundColor: this.state.boja }}
        onClick={() => {
          if (this.props.parking.selected === true) {
            this.setState({ boja: "green" });
          } else {
            this.setState({ boja: "yellow" });
          }
        }}
      >
        {this.props.naslov}
      </button>
    );
  }
}

export default MojeDugme;
