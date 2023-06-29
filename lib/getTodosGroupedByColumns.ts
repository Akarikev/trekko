import { database } from "@/appwrite"

export const getTododsGroupByColumns = async () => {
  const data = await database.listDocuments(
    process.env.NEXT_PUBLIC_TREKKO_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TREKKO_COLLECTION_ID!);

  const todos = data.documents;

  const columns = todos.reduce((acc, todo) => {
    if (!acc.get(todo.status)) {
      acc.set(todo.status, {
        id: todo.status,
        todos: []
      })
    }

    acc.get(todo.status)!.todos.push({
      $id: todo.$id,
      $createdAt: todo.$createdAt,
      title: todo.title,
      status: todo.status,
      //get image if it exists and is valid
      ...(todo.image && { image: JSON.parse(todo.image) })
    })

    return acc;
  }, new Map<TypedColumns, Columns>)

  // console.log(columns);

  // if columns doesnt have inprogress, todo and done and with empty todos.

  const columnTypes: TypedColumns[] = ["todo", "inprogress", "done"];
  for (const columnType of columnTypes) {
    if (!columns.get(columnType)) {
      columns.set(columnType, {
        id: columnType,
        todos: [],
      })
    }

  }
  console.log(columns);

  //sort columns by columns types


  const sortedColumns = new Map(
    Array.from(columns.entries()).sort(
      (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
    )
  );


  const board: Board = {
    columns: sortedColumns
  }

  return board;
}