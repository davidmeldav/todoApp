import React from 'react';

 const TaskText = ({text}) => {
  
    return  <p >{text}</p>
}
export const Task = React.memo(TaskText)