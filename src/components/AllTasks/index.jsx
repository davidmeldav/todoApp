import React, {useCallback} from 'react';
import {Task} from '../TaskText'
/*const task=[{
  text: "tarea 1"
},{
  text: "tarea nueva"
},{
  text: "tarea 3"
}]*/    

const Tasks = ({ tasks }) => {
    //const [inputTasks, setinputTasks] = useState(tasks);
  
	return (<div>
            {tasks && tasks.map((task, index) => <Task text={task.text}/>)              
               
            }

            </div>);

   /* prevTableData.map((item, i) =>
      i === index ? { ...item, [field]: value } : item,
    )*/
};

export const AllTasks = React.memo(Tasks,(prevProps, nextProps) => {
    const noRender=true;
    const reRender=false;
    const compareTasks =  (prevProps,nextProps) => {
         prevProps.tasks.forEach(
     
             (elem,index)=>{
         
             if(elem !== nextProps.tasks[index]){
                     return reRender
                 }
             }
             
         )
         return noRender
        }
    if (prevProps.tasks.length === nextProps.tasks.length && compareTasks(prevProps,nextProps)) {
       
        return noRender; 
    }
   else{
      
    return reRender;
   }
})
