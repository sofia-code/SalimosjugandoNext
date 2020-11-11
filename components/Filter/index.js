import React from 'react'

const Filter = props => {
    const {onFilterChange, name, escuelas = []} = props
    console.log("escuelas: ",escuelas)
    return(
        <select onChange={onFilterChange} name={name}>
            <option value="select">Todos</option>
            {escuelas.map(item => <option value={barrio} key={barrio}>{barrio}</option>)}
        </select>
    )
}

export default Filter