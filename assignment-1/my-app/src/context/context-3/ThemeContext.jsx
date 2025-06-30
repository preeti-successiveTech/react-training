"use client"

const { createContext, useContext, useState, children } = require("react")

const ThemeContext = createContext();
export const useTheme = ()=>useContext(ThemeContext);

export const ThemeProvider= ({children})=>{
    const [theme, setTheme] = useState('light');
     const themeStyles =
    theme === "light"
      ? {
          backgroundColor: "#ffffff",
          color: "#333333",
          minHeight: "100vh",
          padding: "2rem",
        }
      : {
          backgroundColor: "#1a1a1a",
          color: "#f0f0f0",
          minHeight: "100vh",
          padding: "2rem",
        };
    const toggle =()=>
    {
        
            setTheme((prev)=>(prev==='light')?'dark' : 'light');
    }
    return(<div style={themeStyles}>
    <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>
    </div>);
}