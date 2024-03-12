import {render, screen, cleanup, fireEvent} from "@testing-library/react"
import Footer from "../Footer/index.js"


test('Should render message to Soy Henry', ()=>{
    render(<Footer/>);
    const msg = screen.getByTestId('messageHenry');
    expect(msg).toBeInTheDocument();
    expect(msg).toHaveTextContent("Henry")
})

test('Should render Social Media logos', ()=>{
    render(<Footer/>);
    const logos = screen.getByTestId('socialMedia');
    expect(logos).toBeInTheDocument();
})