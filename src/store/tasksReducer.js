import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: [] }

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.value = [...state.value, action.payload]
    },
    removeTask(state, action) {
      state.value = state.value.filter(task => task.id !== action.payload.id)
    },
    setTasks(state, action) {
      state.value = action.payload
    },
  },
})

export const { addTask, removeTask, setTasks } = tasksSlice.actions
export default tasksSlice.reducer