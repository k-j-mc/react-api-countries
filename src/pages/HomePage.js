import React from "react";

import SearchBar from "../components/SearchBar";
import ResultsTable from "../components/ResultsTable";


const HomePage = (props) => {

    return (
        <div>
            <SearchBar searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery} data={props.data} />
                
                {props.data.length > 0 && (

                    <ResultsTable data={props.data} searchQuery={props.searchQuery} />
                
                )}

        </div>
    );
};

export default HomePage;