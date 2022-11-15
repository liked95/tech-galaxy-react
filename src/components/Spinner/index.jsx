import React from 'react'
import FadeLoader from "react-spinners/FadeLoader";

function Spinner() {
    const override = {
        display: "block",
        margin: "400px auto",
        borderColor: "red",
    };


    return (
        <FadeLoader
            color={"#130325"}
            loading={true}
            cssOverride={override}
            size={1000}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}

export default Spinner