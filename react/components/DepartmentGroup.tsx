import React from "react"
import { useCssHandles } from "vtex.css-handles"
import "../css/Department-Group.css"

type Props = {
    departments: [Category]
    handleSetSlug: any | undefined
}

type Category = {
    id: number
    name: string
    slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
    const handleChangeSlug = (event: any) => {
        handleSetSlug(`${event.target.value}/$\{term\}?_q=$\{term\}&map=ft`)
    }

    const CSS_HANDLES = [
        "select--group",
        "options--group"
    ]
    const handles = useCssHandles(CSS_HANDLES)

    const departmentOptions: any = departments.map((department: Category) => {
        return (
            <option
                key={department.id}
                value={department.slug}
                className={`${handles["options--group"]}`}
            >
                {department.name}
            </option>
        )
    })

    return (
        <select
            onChange={handleChangeSlug}
            defaultValue="value0"
            className={`${handles["select--group"]}`}
        >
            <option disabled value="value0" className={`${handles["options--group"]}`}>Seleccione un departamento</option>
            {departmentOptions}
        </select>
    )
}

export default DepartmentGroup;