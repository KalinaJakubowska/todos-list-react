import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./theme.js";
import { GlobalStyle } from "./GlobalStyle";
import Tasks from "./features/tasks/Tasks";
import { useSelector } from "react-redux";
import { selectTheme } from "./themeSlice.js";

const App = () => {
    const isDarkTheme = useSelector(selectTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
            <GlobalStyle />
            < Tasks />
        </ThemeProvider>
    )
};
export default App;