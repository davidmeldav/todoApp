import React, {useCallback, useState} from 'react'

export const useTaskList = (initialTask) => {
    const [tasks, setTasks] = useState(initialTask);
    const addTasks = useCallback(
      (taskText) => {
        setTasks((prevState) =>{
          return  [...prevState,{text:taskText}]
        } )
      },
      [],
    );
    return {tasks,addTasks}
}

