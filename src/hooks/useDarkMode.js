import useLocalStorage from './useLocalStorage';

function useDarkMode(){
    const [darkMode, setDarkMode] = useLocalStorage('DarkMode', false);

    return(
        [darkMode, setDarkMode]
    )
}

export default useDarkMode