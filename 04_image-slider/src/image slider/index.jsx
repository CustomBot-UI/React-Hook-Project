import React, { useState } from "react";

export default function ImageSlider({ url, limit }) {

    const [images, setimages] = useState([]);
    const [currentslide, setcurrentslide] = useState(0);
    const [error, seterror] = useState(null);
    const [loading, setloading] = useState(false);
    async function fetchImages(getUrl) {
        try {
            const response = await fetch(getUrl);
            const data = await response.json();

            if (data) {
                setimages(data);
                setloading(false);
            }

        } catch (e) {
            seterror(e.message)
            setloading(false);
        }
    }

    useEffect(() => {
        if (url !== '') fetchImages(getUrl)
    }, [url]);
    if (loading) { return <h1>Loading...</h1> }
    if (error != null) { return <h1>Error occured: {error}</h1> }
    return (
        <div className="container">


        </div>


    )
}