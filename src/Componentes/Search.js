import React, { Component } from "react";

export default class Search extends Component {

  onChangeEvent = e => {
    const query = e.target.value.toString().toLocaleLowerCase();
    this.props.onSearch(query);
  };

  render() {
    return <input type="text" onChange={this.onChangeEvent} />;
  }
}
