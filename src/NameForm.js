import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form>
        <label htmlFor="name">Name :</label>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          id="name"
          type="text"
        />
      </form>
    );
  }
}

export default NameForm;
