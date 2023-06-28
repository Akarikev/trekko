import { database } from "@/appwrite"

export const getTododsGroupByColumns = async () => {
  const data = await database.listDocuments(
    process.env.NEXT_PUBLIC_TREKKO_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TREKKO_COLLECTION_ID!);

  const todos = data.documents;
}