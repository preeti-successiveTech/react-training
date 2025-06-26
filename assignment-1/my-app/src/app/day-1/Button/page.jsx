import Button from '@/components/components/Button'
export default function showGreeting(){
    return(<>
       <div >
        <h1>Button Component</h1>
        <div id="container">
        <Button text={"button1"} color={"red"} />
        <Button text={"button2"} color={"yellow"} />
         <Button text={"button3"} color={"Green"} />
        </div>
      </div>
    </>);
}