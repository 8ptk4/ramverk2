import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLi = styled.li`
    margin-top: 20px;
`;

const ListReport = (props) => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const response = await axios.get('http://localhost:8080/titles');
        const items = await response.data;

        setItems(items.items);        
    };

    return (
        <>
            <h6>All Reports</h6>
            <ul>
                {items.map(item => (
                    <li key={item.title}>
                        <Link to={`/reports/edit/${item.title}`}> {item.title} </Link>
                    </li>
                ))}
                <StyledLi>
                    <Link to={`/reports/create`}> Create new report </Link>
                </StyledLi>
            </ul>
        </>
    );
};

export default ListReport;