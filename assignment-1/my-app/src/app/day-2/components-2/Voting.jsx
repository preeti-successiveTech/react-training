import { useReducer } from "react"


    const initialState ={
        Aman : 0,
        Bob : 0,
        Carry : 0,
    };
    function VoteReducer(state = initialState,action)
    {
        switch(action.type)
        {
            case "vote_A" : 
            return{...state, Aman: state.Aman +1};
            case "vote_B" : 
            return{...state, Bob: state.Bob +1};
            case "vote_C" : 
            return{...state, Carry: state.Carry +1};
            case "default" : 
            return {...state};
        }
    }
    export default function VotingApp(){
        const [state,dispatch] = useReducer(VoteReducer, initialState);
    return(<>
    <div>
        <h1>Voting App</h1>
        <div>
            {console.log(state.Aman)};
            <h1>A: {state.Aman}</h1>
            <button onClick={()=>{
                dispatch({type: "vote_A"})
            }}>Vote A</button>
        </div>
         <div>
            <h1>B: {state.Bob}</h1>
            <button onClick={()=>{
                dispatch({type: "vote_B"})
            }}>Vote B</button>
        </div>
        <div>
            <h1>C: {state.Carry}</h1>
            <button onClick={()=>{
                dispatch({type: "vote_C"})
            }}>Vote C</button>
        </div>
    </div>
    </>);
}