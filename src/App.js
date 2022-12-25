import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add code to import the components
import { AppProvider } from './context/AppContext';
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import Remaining from "./components/Remaining";
import AllocationForm from "./components/AllocationForm";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1>Company's Budget Allocation</h1>
                <Row>
                <Col><Budget/></Col>
                <Col><Remaining/></Col>
                <Col><ExpenseTotal/></Col>                
                </Row>
                <ExpenseList/>
                <h2>Change allocation</h2>
                <AllocationForm/>
            </div>
        </AppProvider>
    );
};
export default App;
