import React, { Component } from "react";
import Menu from "./Componentes/Menu";
import List from "./Componentes/List";
import "./App.css";
import searchBooks from "./utils/searchBooks";
import booksFake from "./fake/books";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: booksFake,
      copyBooks: []
    };
  }

  componentDidMount() {
    this.initBooks();
  }

  initBooks = () => {
    this.setState((state, props) => ({
      copyBooks: [...state.copyBooks]
    }));
  };

  onAddItem = item => {
    let temp = [...this.state.books];
    const id = temp.length;
    item["id"] = id;
    temp.push(item);

    this.setState({ books: [...temp] });
    this.initBooks();
  };

  onDeleteItem = itemId =>
    this.setState({
      books: this.state.books.filter(book => book.id !== itemId)
    });

  onSearch = query => {
    /*
    if (query === "") {
      this.setState({ copybooks: [...this.state.books] });
    } else {
      const temp = [...this.state.books];
      let res = [];

      temp.forEach(item => {
        if (item.title.toLocaleLowerCase().indexOf(query) > -1) {
          res.push(item);
        }
      });
      this.setState({ copyBooks: [...res] });
    }
    */

    const result = searchBooks(query, this.state.books);
    console.log(result);

  };

  render() {
    return (
      <div className="App">
        <Menu title="Amazon" onAdd={this.onAddItem} onSearch={this.onSearch} />

        <List onDeleteItem={this.onDeleteItem} items={this.state.books} />
      </div>
    );
  }
}
