import React from 'react';
import '../index.css';
interface EmployeeCardProps {
    employee: {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    };
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({employee}) => {
    return (
        <div className="employee-card">
            <div className="employee-image">
                <img src={employee.avatar} alt="Profile"/>
            </div>
            <p>{`${employee.first_name} ${employee.last_name}`}</p>
            <a href={`mailto:${employee.email}`}>Contact</a>
        </div>
    );
};

export default EmployeeCard;
