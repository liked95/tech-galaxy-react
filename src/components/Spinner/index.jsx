import React from 'react'
import RingLoader from "react-spinners/RingLoader";

function Spinner() {
    const override = {
        display: "block",
        margin: "400px auto",
        borderColor: "red",
    };


    return (
        <RingLoader
            color={"#130325"}
            loading={true}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}

export default Spinner