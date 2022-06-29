import Task from '../tasks.entity'

export const updateTask = async (taskId, body ) => {
  const updatedTask = {
    ...body,
  }
  return Task.update(updatedTask, {where: {id: taskId }} ) 
}



