export default function Todo({ data }) {
  console.log("inside todo component", data);

  return (
    <div>
      {data.map((todo, key) => (
        <div>
          <h2>{todo.task}</h2>
        </div>
      ))}
    </div>
  );
}
