import React from 'react'

type Props = {
    departments: [Category]
}

type Category = {
    id: number
    name: string
    slug: string
}


const DepartmentGroup = ({ departments }: Props) => {
    console.log("Mi grupo de departamentos es:", departments);
    const departmentOptions: any = departments.map((department: Category) => {
        return (
            <option key={department.id} value={department.slug}>{department.name}</option>
        )
    })
    return (
        <div>
            <select defaultValue={"value0"}>
                <option disabled value="value0">Seleccione una opción</option>
                {departmentOptions}
            </select>
        </div>
    )
}

export default DepartmentGroup;
