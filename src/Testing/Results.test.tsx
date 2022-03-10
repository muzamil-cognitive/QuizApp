import { MemoryRouter } from 'react-router';
import { render, screen,fireEvent } from '@testing-library/react';
import Results from "../Components/Results"

test('Testing result page',()=>{
    const element =screen.getByTestId('result-id')
    render(<MemoryRouter >
        <Results/>
    </MemoryRouter>)
    expect(element).toBeInTheDocument()
})