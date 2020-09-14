import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../Input";
import { selectQuery, setQuery } from "../../tasksSlice";

const Search = () => {
    const query = useSelector(selectQuery);
    const dispatch = useDispatch();

    return (
        <Input
            placeholder="Filtruj zadania"
            value={query}
            onChange={({ target }) => dispatch(setQuery(target.value))}
        />
    );
};

export default Search;