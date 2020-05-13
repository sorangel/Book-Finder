import React, { Component } from "react";
import "./Item.css";

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      image: "",
      rating: 1,
      stars: []
    };
  }

  componentDidMount() {
    this.setState({
      stars: Array(parseInt(this.props.rating)).fill(0)
    });
  }

  onChangeRating = (e)  => {
    const rating = parseInt(e.target.value);

    this.setState({
      rating: parseInt(e.target.value),
      stars: Array(parseInt(e.target.value)).fill(1)
    });
  };

  render() {
    return (
      <div className="Item">
        <div className="image">
          <img src={"img/" + this.props.image} />
        </div>

        <div className="title">{this.props.title}</div>

        <div className="rating">
          <p>
            {this.state.stars.map((x, key) => (
              <img key={key} src="img/star.jpg" width="40" />
            ))}
          </p>
          calificacion:
          <select value={this.props.rating} onChange={this.onChangeRating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="actions">
          <button onClick={() => this.props.onDelete(this.props.id)}>
            Eliminar
          </button>
        </div>
      </div>
    );
  }
}
