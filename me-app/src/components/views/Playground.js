import React, { useState } from "react";
import styled from "styled-components";



const Playground = ({updateTitle}) => {
    React.useEffect(() => {
        updateTitle('Playground');
    }, [updateTitle]);

    const [count, setCount] = useState(0);

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
