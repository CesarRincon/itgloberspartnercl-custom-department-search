import React from 'react'
//@ts-ignore
import { useCssHandles } from 'vtex.css-handles';
import "./styles.css"

type Props = {
    departments: [Category],
    handleSetSlug: any
}

type Category = {
    id: number
    name: string
    slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
    const CSS_HANDLES = [
        "container__selectDepartment",
        "select__department"
    ]

    const handles = useCssHandles(CSS_HANDLES)

    const onHandleSetSLug = (e: any) => {
        // handleSetSlug(`${e.target.value}/$\{term\}`)
        handleSetSlug(`${e.target.value}/$\{term\}?_q=$\{term\}&map=ft`)
    }
    const departmentOptions: any = departments.map((department: Category) => {
        return (
            <option key={department.id} value={department.slug}>{department.name}</option>
        )
    })
    return (
        <div className={handles.container__selectDepartment}>
            <select
                defaultValue={"value0"}
                onChange={(e) => onHandleSetSLug(e)}
                className={`${handles.select__department} t-body`}
            >
                <option disabled value="value0">Seleccione una opción</option>
                {departmentOptions}
            </select>
        </div>
    )
}

export default DepartmentGroup;
