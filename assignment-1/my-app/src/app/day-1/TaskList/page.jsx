import TaskList from '@/app/day-1/components/TaskList'
export default function showGreeting(){
    const list = ["gym", "ppt", "assignment"];
    return(<>
         
      <div>
        <h1>TaskList Componet</h1>
        <TaskList list={list} />
      </div>
    </>);
}