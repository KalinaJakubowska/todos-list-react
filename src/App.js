import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./theme.js";
import { GlobalStyle } from "./GlobalStyle";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "./common/themeSlice";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink, Nav, NavItem } from "./styled.js";
const App = () => {
    const isDarkTheme = useSelector(selectDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
            <GlobalStyle />
            <HashRouter>
                <nav>
                    <Nav>
                        <NavItem>
                            <StyledNavLink to="/zadania">
                                Zadania
                            </StyledNavLink>
                        </NavItem>
                        <NavItem>
                            <StyledNavLink to="/o-autorze">
                                O autorze
                            </StyledNavLink>
                        </NavItem>
                    </Nav>
                    <Switch>
                        <Route path="/zadania/:id">
                            <TaskPage />
                        </Route>
                        <Route path="/zadania">
                            <TasksPage />
                        </Route>
                        <Route path="/o-autorze">
                            <AuthorPage />
                        </Route>
                        <Route path="/">
                            <Redirect to="/zadania" />
                        </Route>
                    </Switch>
                </nav>
            </HashRouter>
        </ThemeProvider>
    )
};
export default App;