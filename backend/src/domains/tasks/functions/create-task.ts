import Task from '../tasks.entity'

export const createTask = async (task ) => {
  const createdTask = Task.create(task)
  return createdTask
}
