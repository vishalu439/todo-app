function ListItem({ title, id, status, handleDelete }) {
  const style = { display: "flex", gap: 8, justifyContent: "center" };
  return (
    <div key={id} data-testid="list-container" style={style}>
      <p data-testid="list-item">
        <b data-testid="list-item-title">{title}</b>
        <span data-testid="list-item-status">
          {status ? "Done" : "Not Done"}
        </span>
      </p>
      <button onClick={handleDelete} data-testid="delete-btn">
        DELETE
      </button>
    </div>
  );
}

export default ListItem;
