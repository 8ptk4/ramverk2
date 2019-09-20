import React, { useState, useEffect } from "react";



const Playground = ({updateTitle}) => {
    useEffect(() => {
        updateTitle('Playground');
    }, [updateTitle]);

    const [count, setCount] = useState(0);
    
    const url = 'https://me-api.putte-karlsson.me';

    fetch(url)
        .then(response => {
            return response;
        })
        .then(data => {
            console.log('data:', data);
        })
        .catch(error => {
            console.log('error:', error);
        })
    

    return (
        <>
            <section>
                <h3>Hook counter</h3>
                <hr />
                <button onClick={() => setCount(count + 1)}>Count {count}</button>
            </section>
        </>
    );
};

export default Playground;
