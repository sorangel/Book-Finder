import React, { Component } from "react";

export default class DataBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 0,
          rating: 4,
          title: "Harry Potter y el caliz de fuego",
          image: "libro01.jpg"
        },
        {
          id: 1,
          rating: 3,
          title: "The shining",
          image: "libro02.jpg"
        },
        {
          id: 2,
          rating: 5,
          title: "Codigo da Vinci",
          image: "libro03.jpg"
        },
        {
          id: 3,
          rating: 5,
          title: "el principito",
          image: "libro04.jpg"
        },
        {
          id: 4,
          rating: 5,
          title: "El destino del Lobo",
          image: "libro05.jpg"
        },
        {
          id: 5,
          rating: 3,
          title: "Codigo de ladrones",
          image: "libro06.jpg"
        },
        {
          id: 6,
          rating: 5,
          title: "El Vals de las Hadas Malditas",
          image: "libro07.jpg"
        },
        {
          id: 7,
          rating: 5,
          title: "En los lugares de la Inocencia Perdida",
          image: "libro08.jpg"
        },
        {
          id: 8,
          rating: 5,
          title: "De ejecutivo a Trotamundos",
          image: "libro09.jpg"
        },
        {
          id: 9,
          rating: 5,
          title: "La Casa De Los Secretos",
          image: "libro10.jpg"
        },
        {
          id: 10,
          rating: 5,
          title: "Alicia e el Pais de la Maravillas ",
          image: "libro11.jpg"
        },
        {
          id: 11,
          rating: 5,
          title: "El Castillo Ambulante",
          image: "libro12.jpg"
        }
      ],
      copyBooks: []
    };
  }
}
