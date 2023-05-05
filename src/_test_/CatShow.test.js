import { useParams } from 'react-router-dom'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import CatShow from '../pages/CatShow'
import mockCats from '../mockCats'

const renderShow = () =>{
    render(
        <MemoryRouter initialEntries = {["/catshow/1"]}>

            <Routes>
            <Route path="/catshow/:id" element={<CatShow cats = { mockCats }/>}/>
            </Routes>
        </MemoryRouter>) 
}
describe("<CatShow/>", () => {
    it("renders cat card", () => { renderShow()
    expect(screen.getByText(`${mockCats[0].name} likes to ${mockCats.enjoyments}`)).toBeInTheDocument()
    })
})
