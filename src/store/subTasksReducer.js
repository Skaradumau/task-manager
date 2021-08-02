import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: [] }

const subTasksSlice = createSlice({
  name: 'subTasks',
  initialState,
  reducers: {
    addSubTask(state, action) {
      state.value = [...state.value, action.payload]
    },
    removeSubTask(state, action) {
      state.value = state.value.filter(task => task.id !== action.payload.id)
    },
    setSubTasks(state, action) {
      state.value = action.payload
    },
  },
})

export const { addSubTask, removeSubTask, setSubTasks } = subTasksSlice.actions
export default subTasksSlice.reducer
