import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EmployeeCard from './EmployeeCard';
import '../index.css';

interface Employee {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

const EmployeeList: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
                setEmployees(response.data.data as Employee[]);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };
        fetchEmployees()
            .catch(error => {
                console.error(error);
            });

    }, [page]);

    const handlePrevPage = () => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const renderEmployees = () => {
        return employees.map((employee: Employee) => (
            <EmployeeCard key={employee.id} employee={employee}/>
        ));
    };

    return (
        <div>
            <div className="employees-container">{renderEmployees()}</div>
            <p className="page-number">{page} / {totalPages}</p>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={page === 1}>
                    Previous Page
                </button>
                <button onClick={handleNextPage} disabled={page === totalPages}>
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default EmployeeList;
