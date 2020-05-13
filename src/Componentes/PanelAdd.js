import React, { Component } from "react";

export default class PanelAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      rating: 1
    };
  }
  onChangeRating = e => {
    const rating = parseInt(e.target.value);
    this.setState({ rating: rating });
  };
  onChangeImage = e => {
    this.setState({ image: e.target.value });
  };

  onChangeTitle = e => {
    this.setState({ title: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const rating = this.state.rating;
    const title = this.state.title;
    const image = this.state.image;

    this.props.onAdd({
      rating: rating,
      image: image,
      title: title
    });

    this.props.onCancel();
  };
  render() {
    return (
      <div className="new-item-panel-container">
        <div className="new-item-panel">
          <form onSubmit={this.onSubmit}>
            <p>
              <label>Titulo del libro</label>
              <br />
              <input
                onChange={this.onChangeTitle}
                type="text"
                name="title"
                className="input"
              />
            </p>

            <p>
              <label>Nombre de imagen </label>
              <br />
              <input
                onChange={this.onChangeImage}
                type="text"
                name="image"
                className="input"
              />
            </p>

            <p>
              <label>Calificacion</label>
              <br />
              <select className="calification" onChange={this.onChangeRating}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </p>
            <input
              type="submit"
              className="button btn-blue"
              value="Registrar libro"
            />
            <button onClick={this.props.onCancel} className="button btn-normal">
              Cancelar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
