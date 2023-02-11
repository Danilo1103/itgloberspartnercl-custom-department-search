import React, { useState, useEffect } from "react"
import { useQuery, useLazyQuery } from "react-apollo";
import QUERY_VALUE from "../graphql/getDepartmentGroup.graphql"
import getCategory from "../graphql/getCategoryGroup.graphql"
import DepartmentGroup from "./DepartmentGroup";
import CategoryGroup from "./CategoryGroup";
import { SearchBar } from "vtex.store-components"
import { useCssHandles } from "vtex.css-handles"
import "../css/Department-Search.css"

const DepartmentSearch = () => {
    const [slugDepartment, setSlugDepartment] = useState()
    const [slugCategory, setSlugCategory] = useState()

    const { data, loading } = useQuery(QUERY_VALUE)
    const [getLazyResults, lazyResults] = useLazyQuery(getCategory)

    useEffect(() => {
        getLazyResults({
            variables: {
                id: slugDepartment
            }
        })
    }, [slugDepartment])

    const CSS_HANDLES = [
        "containerPrincipal",
        "containerCategory",
        "containerLoading"
    ]
    const handles = useCssHandles(CSS_HANDLES)

    return loading ?
        <div className={`${handles["containerLoading"]}`}>
            <p>Estamos cargando tu busqueda...</p>
            <img src="https://media.tenor.com/eL-cXQYmRjQAAAAM/loading-load.gif" alt="Cargando..." />
        </div>
        :
        <div className={`${handles["containerPrincipal"]}`}>
            <DepartmentGroup
                departments={data?.categories}
                handleSetSlug={setSlugDepartment}
            />
            {
                lazyResults.data?.category?.children.length === 0 ? <div></div> : (
                    <div className={`flex ${handles["containerCategory"]}`}>
                        <CategoryGroup
                            categories={lazyResults.data?.category?.children}
                            handleSetSlugCategories={setSlugCategory}
                            department={slugDepartment}
                        />
                    </div>
                )
            }
            <SearchBar
                customSearchPageUrl={slugCategory}
                placeholder="¿QUE BUSCAS?"
                displayMode="search-and-clear-buttons"
            />
        </div>
}

export default DepartmentSearch;