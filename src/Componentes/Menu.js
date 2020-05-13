import React, { Component } from "react";
import Search from "./Search";
import "./Menu.css";
import PanelAdd from "./PanelAdd";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { newItemPanel: false };
  }
  add = () => {
    this.setState({ newItemPanel: true });
  };

  onCancel = () => {
    this.setState({ newItemPanel: false });
  };

  render() {
    return (
      <div className="container">
        <div className="sub-container">
          <div className="logo">{this.props.title}</div>

          <div className="search">
            <Search onSearch={this.props.onSearch} />
          </div>

          <div className="actions">
            <button onClick={this.add} className="button btn-blue">
              + añadir nuevo libro
            </button>
          </div>
        </div>
        {this.state.newItemPanel ? (
          <PanelAdd onCancel={this.onCancel} onAdd={this.props.onAdd} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
