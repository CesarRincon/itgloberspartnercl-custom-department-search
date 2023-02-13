import React, { useState } from "react"
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql';
import DepartmentGroup from "./DepartmentGroup";
//@ts-ignore
import { SearchBar } from 'vtex.store-components'
import { useQuery } from "react-apollo";


const DepartmentSearch = () => {
    const { data, loading } = useQuery(QUERY_VALUE);
    const [slug, setSlug] = useState("");

    console.log("Mi slug seleccionado es:", slug);

    return (
        <div>
            {
                loading ?
                    <div>Loading...</div>
                    :
                    <div>
                        <DepartmentGroup
                            departments={data?.categories}
                            handleSetSlug={setSlug}
                        />
                        <SearchBar
                            customSearchPageUrl={slug}
                            placeholder="Que buscas?"
                            displayMode="search-and/clear-buttoms"
                        />
                    </div>

            }
        </div>
    )
}

export default DepartmentSearch;
