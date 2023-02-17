import React, { useState } from "react"
import { useQuery } from "react-apollo";
import QUERY_VALUE from "../graphql/getDepartmentGroup.graphql"
import DepartmentGroup from "./DepartmentGroup";
import { SearchBar } from "vtex.store-components"
import { useCssHandles } from "vtex.css-handles"
import "../css/Department-Search.css"

const DepartmentSearch = () => {
    const [slugDepartment, setSlugDepartment] = useState()
    const { data, loading } = useQuery(QUERY_VALUE)

    const CSS_HANDLES = [
        "containerPrincipal",
        "containerCategory",
        "containerLoading",
        "textStyles"
    ]
    const handles = useCssHandles(CSS_HANDLES)

    return loading ?
        <div className={`${handles["containerLoading"]}`}>
            <p className={`${handles["textStyles"]}`}>Estamos cargando tu busqueda...</p>
            <img src="https://media.tenor.com/eL-cXQYmRjQAAAAM/loading-load.gif" alt="Cargando..." />
        </div>
        :
        <div className={`${handles["containerPrincipal"]}`}>
            <DepartmentGroup
                departments={data?.categories}
                handleSetSlug={setSlugDepartment}
            />
            {
                slugDepartment ? (
                    <SearchBar
                        customSearchPageUrl={slugDepartment}
                        placeholder="¿QUE BUSCAS?"
                        displayMode="search-and-clear-buttons"
                    />
                ) : <p className={`${handles["textStyles"]}`}>
                    Selecciona un Departamento
                </p>
            }
        </div>
}

export default DepartmentSearch;