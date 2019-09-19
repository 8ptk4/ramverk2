import React from "react";



const Login = ({updateTitle}) => {
    React.useEffect(() => {
        updateTitle('Sign in');
    }, [updateTitle]);

    return (
        <>
            <section>
                <p>Sign in</p>
            </section>
        </>
    );
};

export default Login;
