import React from "react"
import { useCssHandles } from "vtex.css-handles"
import "../css/Department-Group.css"

type Props = {
    categories: [Category]
    handleSetSlugCategories: any,
    department: number | undefined
}

type Category = {
    id: number
    name: string
    slug: string
}

const CategoryGroup = ({ categories, handleSetSlugCategories, department }: Props) => {

    const handleChangeIdCategory = (event: any) => {
        handleSetSlugCategories(`?fq=C:${department}/${parseInt(event.target.value)}&ft=`)
    }

    const CSS_HANDLES = [
        "select--group",
        "options--group"
    ]
    const handles = useCssHandles(CSS_HANDLES)

    const categoryOptions: any = categories?.map((category: Category) => {
        return (
            <option
                value={category.id}
                key={category.id}
                className={`${handles["options--group"]}`}
            >
                {category.name}
            </option>
        )
    })

    return (
        <select
            onChange={handleChangeIdCategory}
            defaultValue="value0"
            className={`${handles["select--group"]}`}
        >
            <option disabled value="value0" className={`${handles["options--group"]}`}>Seleccione una categoria</option>
            {categoryOptions}
        </select>
    )
}

export default CategoryGroup;