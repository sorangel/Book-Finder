export default (query = "Harry Potter", books = []) => {
  if (query === "") {
    return { copybooks: [...books] };
  } else {
    const temp = [...books];
    let res = [];

    temp.forEach(item => {
      if (item.title.toLocaleLowerCase().indexOf(query) > -1) {
        res.push(item);
      }
    });
    return { copyBooks: [...res] };
  }
};
