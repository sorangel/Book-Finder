import React, { Component } from "react";
import "./List.css";
import Item from "./Item";

export default class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.items.map((item, key) => (
          <Item
            onDelete={this.props.onDeleteItem}
            key={key}
            id={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
    );
  }
}
