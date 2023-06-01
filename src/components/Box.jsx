import React from "react";
import Filter from "./Filter";
import Search from "./Search";

const Box = ({search, setSearch, filter, setFilter, sort, setSort, setTask, task}) => {
    return (
        <div>
            <Search
                search={search}
                setSearch={setSearch}
            />
            <Filter
                filter={filter}
                setFilter={setFilter}
                sort={sort}
                setSort={setSort}
                task={task}
                setTask={setTask}
            />
            
        </div>
    )
}

export default Box