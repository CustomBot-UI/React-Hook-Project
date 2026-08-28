import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css"
export default function ImageSlider({ url, limit = 5, page = 1 }) {

    const [images, setimages] = useState([]);
    const [error, seterror] = useState(null);
    const [loading, setloading] = useState(false);


    useEffect(() => {
        async function fetchImages() {
            try {
                const response = await fetch(`${url}?page=${page}&limit=${limit}`);
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

        if (url !== '') fetchImages()
    }, [url, page, limit]);

    if (loading) { return <h1>Loading...</h1> }
    if (error != null) { return <h1>Error occured: {error}</h1> }
    return (
        <div className="container">
            <BsArrowLeftCircleFill className="arrow arrow-left" />
            {
                images && images.length ?
                    images.map(imageItem => (
                        <img
                            key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className="current-image"
                        ></img>
                    ))
                    : null
            }
            <BsArrowRightCircleFill className="arrow arrow-right" />
            <span className="circle-indicator"> 
            {
                images && images.length ?
                    images.map((_, index) =>
                        <button
                            key={index}
                            className="current-indicator"
                        ></button>
                    ) : null


            }</span> 
        </div>


    )
}