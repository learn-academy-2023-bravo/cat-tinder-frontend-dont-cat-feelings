import { screen, render } from '@testing-library/react'
import Footer from '../components/Footer'

describe ("<Footer />", () => {
    it ("renders without crashing", () => {
        render (<Footer/>)
        screen.debug()
        const element = screen.getByText("What's wrong? ...Cat got your tongue?")
        expect(element).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
    })
})