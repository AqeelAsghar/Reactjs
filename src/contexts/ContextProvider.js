import React, { createContext , useContext ,useState} from 'react';
// create a createContext function
const StateContext = createContext();

// set the initialState properties 
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

// pass a children as a prop
export const ContextProvider = ({ children }) => {
    // create a useState hook to detect activeMenu
    const [activeMenu, setActiveMenu] = useState(true);
    // use a state hook is Clicked to detect the Click and pass its initialState values 
    const [isClicked, setIsClicked] = useState(initialState);
    // make an other state hook to detect the screen size 
    const [screenSize, setScreenSize] = useState();
    // make an other state hook to detect the currentColor  
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    // make an other state hook to detect the CurrentMode  
    const [currentMode, setCurrentMode] = useState('Light');
    // make an other state hook to detect the setThemeSettings is open or closed 
    const [themeSettings, setThemeSettings] = useState(false);
    // funcrion tha set the currentMode &  store the value into the local storage 
    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        // when me set the mode we want to close theme setting that why we make it false 
        setThemeSettings(false)

    }
    // funcrion tha set the setColor &  store the value into the local storage 
    const setColor = (mode) => {
        // in this we use mode only because we cannot get a event this time we get a string so that why we set it simply 
        setCurrentColor(mode);
        localStorage.setItem('ColorMode', mode);
        // when me set the mode we want to close theme setting that why we make it false 
        setThemeSettings(false)

    }
    
    // make a handke Click base on clicked 
    const handleClick = (clicked) => {
        // we done this becuase we cannot set the object with string value 
        // that why we first copy all the initialState and just change the clicked value=true
        setIsClicked({...initialState, [clicked]:true});
    }
   

    return (
        // createContext function . provider to access all data between all the applications
        <StateContext.Provider
            // values which we want to sent and use later
            value={{
                activeMenu:activeMenu,
                setActiveMenu: setActiveMenu,
                isClicked: isClicked,
                setIsClicked: setIsClicked,
                handleClick: handleClick,
                screenSize:screenSize,
                setScreenSize: setScreenSize,
                currentColor: currentColor,
                currentMode: currentMode,
                setMode: setMode,
                setColor: setColor,
                themeSettings: themeSettings,
                setThemeSettings: setThemeSettings

            }}
        >
            {/* display the children prop to display the data */}
            {children}
        </StateContext.Provider>
    )
}


// to use the useState data into the whole application we use buil-in-function usestateContext as a arrow function that use createContext by using useContext hook
export const useStateContext = () => useContext(StateContext);

