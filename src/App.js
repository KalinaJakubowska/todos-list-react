import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";
import { GlobalStyle } from "./GlobalStyle";
import Tasks from "./features/tasks/Tasks";

const App = () => {

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                < Tasks />
            </ThemeProvider>
        </Provider>)
};
export default App;