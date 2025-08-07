function ListGroup() {
  const items = [
    'An item',
    'A second item',
    'A third item',
    'A fourth item',
    'And a fifth one'
  ];  
   
  return (
    <>
      {/* Fragment is used to avoid adding extra nodes to the DOM */}
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;
