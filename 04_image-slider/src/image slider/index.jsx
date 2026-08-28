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

        function handlePrevious() {
            setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
        }
        function handleNext() {
            setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
        }

        if (url !== '') fetchImages()
    }, [url, page, limit]);

    if (loading) { return <h1>Loading...</h1> }
    if (error != null) { return <h1>Error occured: {error}</h1> }
    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
            {
                images && images.length ?
                    images.map(imageItem, index => (
                        <img
                            key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                        ></img>
                    ))
                    : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
            <span className="circle-indicator">
                {
                    images && images.length ?
                        images.map((_, index) =>
                            <button
                                key={index}
                                className={currentSlide === index ? "current-indicator" :   "current-indicator inactive-current-indicator"}
                                onClick={()=> setCurrentSlide(index)}
                            ></button>
                        ) : null
 

                }</span>
        </div>


    )
}