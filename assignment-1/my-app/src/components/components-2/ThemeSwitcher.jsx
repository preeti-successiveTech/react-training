// 9.Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.

import { Children, createContext, useContext, useState } from "react";
 const MyContext = createContext('light');
export default function themeSwitcher({Children}){
   
    const [theme, setTheme] = useState('light');
     function buttonTheme(){
        console.log(theme);
        setTheme(()=>{
            return theme == 'light'?'dark' : 'light';
        })     
    }
    <MyContext.Provider value={{theme, buttonTheme}}>
          {Children}
        </MyContext.Provider>

    const appStyle = {
        backgroundColor: theme ==='light' ? 'white' : 'Black',
        color:theme ==='light' ? 'Black' : 'white',
        display: 'flex',
        margin:'auto',
        
    }
   
    return(<><div style={appStyle}>
        <div><h1>Parent theme switcher hook</h1></div>
         <button style={{width : 100 , height : 20, margin: 'auto'}}onClick={buttonTheme}>theme</button>
    </div>
   
    </>
    );
}
