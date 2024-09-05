import Output from "./Output";
function Outputss({ todoItems, onDeleteClick }) {
  return (
    <>
      <div>
        {todoItems.map((items) => (
          <Output
            key={items}
            name={items.name}
            date={items.dueDate}
            onDeleteClick={onDeleteClick}
          ></Output>
        ))}
      </div>
    </>
  );
}

export default Outputss;
