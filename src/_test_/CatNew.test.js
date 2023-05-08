import {render,screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CatNew from '../pages/CatNew'

describe("<CatNew />", () =>{

    it("renders the new cat form",() => {
        render(
        <BrowserRouter>
        <CatNew/>
        </BrowserRouter>
        )
        const nameInput = screen.getByRole("textbox", {name:/name/id})
        expect(nameInput).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
        
        const ageInput = screen.getByRole("textbox", {name:/age/id})
        expect(ageInput).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
        
        const enjoymentsInput = screen.getByRole("textbox", {name:/enjoyments/id})
        expect(enjoymentsInput).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
        
        
        const imageInput = screen.getByRole("textbox", {name:/picture/id})
        expect(imageInput).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
        
        
        const ideal_dateInput = screen.getByRole("textbox", {name:/ideal date/id})
        expect(ideal_dateInput).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
        
    })
    
})
