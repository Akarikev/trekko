import { getTododsGroupByColumns } from '@/lib/getTodosGroupedByColumns';
import { create } from 'zustand'


interface BoardState {
  board: Board;
  getBoard: () => void;
}
export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumns, Columns>()
  },

  getBoard: async () => {
    // do something with the current board
    const board = await getTododsGroupByColumns()
    set({ board })

  }
}))