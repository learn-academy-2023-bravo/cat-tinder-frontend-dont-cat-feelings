import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
const CatNew= ({createCat}) => {
    const navigate = useNavigate()
    const [newCat,setNewCat] =useState({
        name:"",
        age:"",
        enjoyments:"",
        image:"",
       
    })


    const handleChange = (e) => {
        console.log(e.target)
        setNewCat({ ...newCat, [e.target.name]:e.target.value})
    }
    const handleClick =()=>{
        createCat(newCat)
        navigate("/catindex")
    }


    console.log(newCat)


    return(
        <>
        <Form>
            <FormGroup>
                <Label for="cat-name">Name</Label>
                <Input
                id="cat-name"
                name="name"
                placeholder="Enter cat's name"
                type="text"
                onChange={handleChange}
                value={newCat.name}
                />
            </FormGroup>
        </Form>
        <Form>
            <FormGroup>
                <Label for="cat-age">Age</Label>
                <Input
                id="cat-age"
                name="age"
                placeholder="Enter cat's age"
                type="text"
                onChange={handleChange}
                value={newCat.age}
                />
            </FormGroup>
        </Form>
        <Form>
            <FormGroup>
                <Label for="cat-enjoyments">Enjoyments</Label>
                <Input
                id="cat-enjoyments"
                name="enjoyments"
                placeholder="Enter cat's enjoys"
                type="text"
                onChange={handleChange}
                value={newCat.enjoyments}
                />
            </FormGroup>
        </Form>
        <Form>
            <FormGroup>
                <Label for="cat-image">Picture</Label>
                <Input
                id="cat-image"
                name="image"
                placeholder="Enter picture of the cat"
                type="text"
                onChange={handleChange}
                value={newCat.image}
                />
            </FormGroup>
        </Form>
        <Form>
            <FormGroup>
                <Label for="cat-ideal-date">Ideal Date</Label>
                <Input
                id="cat-ideal-date"
                name="ideal date"
                placeholder="Enter cat's ideal date"
                type="text"
                onChange={handleChange}
                value={newCat.ideal_date}
                />
            </FormGroup>
            <Button onClick={handleClick}>Submit</Button>
        </Form>
       </>
    )
}

export default CatNew