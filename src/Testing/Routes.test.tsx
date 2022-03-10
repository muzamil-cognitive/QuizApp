import Form from "../Components/Form";
import App from '../App'
import Questions from "../Components/Questions";
import Results from "../Components/Results";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

// jest.mock('../Components/Form')
// jest.mock('../Components/Questions')
// jest.mock('../Components/Results')

// test are working fine but getting an error "Property 'mockImplementation' does not exist on type '() => Element'""

// test("Should render Form on Default Route",()=>{
//     Form.mockImplementation(() => <div>Form Page</div>);
//     render(
//         <MemoryRouter>
//           <App/>
//         </MemoryRouter>
//       );
//       expect(screen.getByText("Form Page")).toBeInTheDocument();
  
// })
// test("Should QuestionS page",()=>{
//     Questions.mockImplementation(() => <div>QuestionPage</div>);
//     render(
//         <MemoryRouter initialEntries={['/question/javascript']}>
//           <App />
//         </MemoryRouter>
//       );
//       expect(screen.getByText("QuestionPage")).toBeInTheDocument();
// })
// test("Should Results page",()=>{
//     Results.mockImplementation(() => <div>Results page</div>);
//     render(
//         <MemoryRouter initialEntries={['/result']}>
//           <App />
//         </MemoryRouter>
//       );
//       expect(screen.getByText("Results page")).toBeInTheDocument();
// })