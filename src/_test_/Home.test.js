import { screen, render } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import Home from '../pages/Home'

describe ("<Home />", () => {
    it ("renders to the home page for the user without crashing", () => {
        render(
        <BrowserRouter>
        <Home/>
        </BrowserRouter>)
        screen.debug()
        const element = screen.getByRole('heading', {
            name: /welcome to cattinder, where the cats come to find their nip! click to enter/i
          })
        expect(element).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
    })  
})

describe ("<Home />", () => {
    it ("has clickable link", () => {
        render(
        <BrowserRouter>
        <Home/>
        </BrowserRouter>)
        screen.debug()
        const indexLink = screen.getByText(/click to ENTER/i)
        expect(indexLink).toBeInTheDocument()
        })
        userEvent.click(screen.getByText(/Click to ENTER/i)).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
})