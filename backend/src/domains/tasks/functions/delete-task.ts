import Task from '../tasks.entity'

export const deleteTask = async (taskId ) => {
  return Task.destroy( {where: {id: taskId }})
}


