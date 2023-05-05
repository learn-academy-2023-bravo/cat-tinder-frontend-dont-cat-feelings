import { NavLink } from 'react-router-dom'
import { CardBody, CardTitle, CardSubtitle, Button, Card } from 'reactstrap'
const CatIndex= ({cats}) => {
    return(
        <main>
            {cats?.map((cat, index) => {
                return(
                    <Card
                        color="info"
                        inverse
                        style={{
                            width: '18rem'
                        }}
                        >
                        <img
                            alt="Sample"
                            src= {cat.image}>
                        </img>
                        <CardBody>
                            <CardTitle tag="h5">
                                {cat.name}
                            </CardTitle>
                            <CardSubtitle>
                                {cat.age}
                            </CardSubtitle>
                            <NavLink to={'/catshow/${cat.id}'}>
                                Let's Puuurrr....
                            </NavLink>
                        </CardBody>
                    </Card>
                    )
            })}
        </main>
    )
}

export default CatIndex