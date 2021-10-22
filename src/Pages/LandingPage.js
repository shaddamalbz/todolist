import React, { Component } from "react";
import axios from "axios";

// Parts
import Dashboard from "../Parts/Dashboard";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://todo.api.devcode.gethired.id/activity-groups?email=shaddamalghafiqih11@gmail.com"
      )
      .then((res) => {
        this.setState({
          activity: res.data,
        });
      });
  }

  render() {
    const { activity } = this.state;

    return (
      <>
        <Dashboard activity={activity} />
      </>
    );
  }
}
