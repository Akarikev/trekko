

interface Board {
  columns: Map<TypedColumns, Columns>
}

type TypedColumns = "todo" | "inprogress" | "done"

interface Columns {
  id: TypedColumns
  todos: Todo[]
}

interface Todo {
  $id: string,
  $createdAt: string,
  title: string,
  image?: string,
  status: TypedColumns,
}

interface Images {
  bucketId: string,
  fileId: string,
}