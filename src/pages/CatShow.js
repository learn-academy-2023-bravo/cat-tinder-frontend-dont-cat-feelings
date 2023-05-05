import { useParams } from 'react-router-dom'

const CatShow = ({cats}) => {
const {id} = useParams()
let selectedCat = cats.find(cat => cat.id === +id) 
    return (
        <main>
        {selectedCat && (
            <>
            <img
            alt = "Cat Pic"
            src = {selectedCat.image}
            />
        <h3> {selectedCat.name} likes to {selectedCat.enjoyments} </h3>
        </>
        ) }
        </main>
    )
}

export default CatShow