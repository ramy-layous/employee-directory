import React from 'react';
import EmployeeList from './components/EmployeeList';
import './index.css';

const App: React.FC = () => {
    return (
        <div className="container">
            <h1>The List of Employees</h1>
            <EmployeeList/>
        </div>

    );
};

export default App;
