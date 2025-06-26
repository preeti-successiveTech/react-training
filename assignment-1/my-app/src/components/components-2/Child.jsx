export default function Child({count, incrementCount, resetCount}){
    return(<>
    <h2>child component</h2>
    <p>Count:  {count}</p>
    <button onClick={incrementCount}>Increment Count</button>
    <button onClick={resetCount}>Reset Count</button>

    </>)
}