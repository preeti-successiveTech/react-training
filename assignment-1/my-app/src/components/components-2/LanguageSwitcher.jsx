
// 10.Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.

import { useContext } from "react";
import { LanguageContext, switchLanguage,toggle } from "../../context/context/LanguageContext";

export default function LanguageSwitcher(){
    const {language,toggle} = useContext(LanguageContext);
    return(<>
    <div>
        {console.log("language",language)}
        <h1>{language}</h1>
        <button onClick={toggle}>change</button>
    </div>
    </>)
}