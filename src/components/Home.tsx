import React, { Component, Dispatch } from "react";
import { Link } from "react-router-dom";
import { AppState } from "../store";
import { Action } from "redux";
import { connect } from "react-redux";
import { Parking } from "../models/Parking";
import { fetchParkings } from "../store/actions";

interface Props {
  parkings: Parking[];
  fetchParkings: Function;
}
interface State {}
class AppRoot extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.parkings.length === 1) this.props.fetchParkings();
  }
  render() {
    return (
      <div>
        <h2 />
        <ul>
          <li>
            <button>
              <Link to="/ParkingList">Idi na parking</Link>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    //prop name <= store slice
    parkings: state.parkings //parce state-a iz index.tsx se mapira na prop
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    fetchParkings: () => dispatch(fetchParkings())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRoot);
