import React from 'react'

const Alert = (props) => {

    const { mensaje } = props;

    return (
        <div className="alert alert-danger text-center" role="alert">
            {mensaje}
        </div>
    )
}

export default Alert