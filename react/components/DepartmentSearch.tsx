import React from "react"
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql';
import DepartmentGroup from "./DepartmentGroup";
// import { SearchBar } from 'vtex.store-components'
import { useQuery } from "react-apollo";

const DepartmentSearch = () => {
    const { data, loading } = useQuery(QUERY_VALUE);
    console.log(data?.categories)
    return (
        <div>
            {
                loading ?
                    <div>Loading...</div>
                    :
                    <div>
                        <DepartmentGroup departments={data?.categories} />
                    </div>

            }
        </div>
    )
}

export default DepartmentSearch;
