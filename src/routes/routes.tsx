import * as React from "react";
import { Route, Switch, Redirect } from "react-router";
import Home from "../components/Home";
import ParkingList from "../components/ParkingList";
import ParkingDetails from "../components/ParkingDetails";
import ListParkingDetails from "../components/ListParkingDetails";

export const Routes = () => (
  <Switch>
    <Route exact path={"/"} component={Home} />
    <Route path={"/ParkingList"} component={ParkingList} />
    <Route path={"/ParkingDetails"} component={ParkingDetails} />
    <Route path={"/ListParkingDetails"} component={ListParkingDetails} />
    <Redirect to={"/"} />
  </Switch>
);
