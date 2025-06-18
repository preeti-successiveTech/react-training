// 6.Create a functional component named Button that accepts props for text and color.
// Style the button using inline styles or CSS classes based on the color prop.
// Import and render the Button component in the App component with different text and color props.

export default function Button({text,color}){
    return(
        <div id="button">
            <button style={{backgroundColor:color, width: 130, height: 50,fontSize: 30}}>{text}</button>
        </div>
    );
}