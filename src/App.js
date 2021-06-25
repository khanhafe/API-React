import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    persons: []
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }
  render() {
    return (
      <ul>
        {this.state.persons.map((personData) => (
          <li>{personData.name}</li>
        ))}
      </ul>
    );
  }
}
