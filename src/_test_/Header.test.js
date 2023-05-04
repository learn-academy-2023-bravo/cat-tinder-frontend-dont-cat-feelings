import { screen, render } from '@testing-library/react'
import Header from '../components/Header'

describe ("<Header />", () => {
    it ("renders without crashing", () => {
        render (<Header/>)
        screen.debug()
        const element = screen.getByText("Don't Cat Feelings!")
        expect(element).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
    })
})