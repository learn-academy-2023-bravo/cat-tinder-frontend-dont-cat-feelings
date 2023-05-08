import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Form, formGroup, Label, Input, Button} from "react-router-dom"
import { FormGroup } from "reactstrap"
            
const CatEdit = ({ cats, updateCat }) => {
        const { id } = useParams()
        let currentCat = cats?.find((cat) => cat.id === +id)
    }
    const [editCat, setEditCat] = useState({
        name: currentCat.name,
        age: currentCat.age,
        enjoyments: currentCat.enjoyments,
        image: currentCat.image,
        ideal_date: currentCat.ideal_date
    })
    const handleChange = (e) => {
        setEditCat({ ...editCat, [e.target.name]: e.target.value })
    }
    const handleSubmit =()=>{
        updateCat(editCat,currentCat.id)
    }

return(
    <>
    <Form>
<FormGroup>
    <Label for="name">Name</Label>
    <Input type="text" name="name" />
</FormGroup>
<FormGroup>
    <Label for="age">Age</Label>
    <Input type="number" name="age" />
</FormGroup>
<FormGroup>
    <Label for="enjoyments">Enjoys</Label>
    <Input type="text" name="enjoyments" />
</FormGroup>
<FormGroup>
    <Label for="image">Image URL</Label>
    <Input type="text" name="image" />
</FormGroup>
<FormGroup>
    <Label for="ideal date">Ideal Date </Label>
    <Input type="text" name="ideal_Date"/>
</FormGroup>
    </Form>
        
    </>
)
}

export default CatEdit