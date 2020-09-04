import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../themeSlice";
import { Wrapper, Button } from "./styled";

const Header = ({ title }) => {
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <h1>{title}</h1>
            <Button onClick={() => dispatch(toggleTheme())}>Zmień styl</Button>
        </Wrapper>
    )
}
export default Header;