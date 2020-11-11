import React from 'react' 
import Filter from '../Filter'
import {Container} from './styled'

const Filters = (props) => {
    const {searchResults, barrio} = props

    return(
        <Container>
            <h2>Filtrar por barrio: </h2>
      
            <Filter/>
        </Container>
    )
}
export default Filters