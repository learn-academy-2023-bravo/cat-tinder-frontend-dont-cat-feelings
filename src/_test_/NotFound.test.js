import { screen, render } from '@testing-library/react'
import NotFound from '../pages/NotFound'

describe ("<NotFound />", () => {
    it ("renders without crashing", () => {
        render (<NotFound/>)
        // screen.debug()
        const element = screen.getByText("OOPS! No cats here.")
        expect(element).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
    })
})