// 5.Create a functional component named TaskList that accepts an array of task names as a prop.
// Use the map function to render each task name as a list item.
// Import and render the TaskList component in the App component with an array of tasks.

export default function TaskList({list}){

    return(
       <div id ="TaskList">
       {list.map((element,index)=>{
        return(
            <div key={index}>
                <ul style={{margin: 40}}>
                    <li>{element}</li>
                </ul>
            </div>
        )
       })}
       </div>
    );
}