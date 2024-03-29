import React,{useState} from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function ToDoList() {
    // State setup
    const [ tasks,setTasks ] = useState([])     // Array to store tasks
    const [ newTask,setNewTask ] = useState('')     // State to track new task input

    // Input change handler
    function handleInputChange(event){
        // Update newTask state as user types in the input field
        setNewTask(event.target.value)
    }
    // Add task function
    function addTask() {
        // Check if new task input is not empty
        if( newTask.trim() !==  "" ){
            // Add new task to the tasks array
            setTasks( t =>[ ...t,newTask ])
            // Clear the new task input field
            setNewTask('')
        } 
    }
    // Delete task function
    function deleteTask(index) {
        // Filter out the task with the specified index
        const updatedTask = tasks.filter(( _,i ) => i !== index )
        // Update tasks state with the filtered tasks array
        setTasks(updatedTask)
    }
    // Move task up function
    function moveTaskUp(index){
        // Check if the task is not already at the top
        if(index>0){
            // Create a copy of tasks array
            const updatedTasks = [...tasks]
            // Swap the task at index with the task above it
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index - 1]
            updatedTasks[index - 1] = temp
            // Update tasks state with the new order
            setTasks(updatedTasks)
        }
    }
    // Move task down function
    function moveTaskDown(index){
        // Check if the task is not already at the bottom
        if( index< tasks.length-1 ){
            // Create a copy of tasks array
            const updatedTasks = [...tasks]
            // Swap the task at index with the task below it
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index + 1];
            updatedTasks[index + 1] = temp;
            // Update tasks state with the new order
            setTasks(updatedTasks)
        }
    }

    // Render the component
    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text"
                 placeholder="Enter a task..."
                 value={newTask} 
                 onChange={handleInputChange} />
                 <button
                 className="add-button" 
                 onClick={addTask}>
                 Add
                 </button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button 
                        className="delete-button"
                        onClick={() => deleteTask(index)}>        
                        <DeleteIcon />
                        </button>
                        <button 
                        className="move-button"
                        onClick={() => moveTaskUp(index)}>
                        <ArrowUpwardIcon/>        
                        </button>
                        <button 
                        className="move-button"
                        onClick={() => moveTaskDown(index)}> 
                        <ArrowDownwardIcon/>       
                        </button>
                    </li>
                )}
            </ol>
        </div>
        )

}

export default ToDoList