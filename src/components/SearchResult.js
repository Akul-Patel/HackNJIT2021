import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function SearchResult({
    img,
    img2,
    img3,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className="searchResult">
            <div>
            <Carousel autoPlay axis="horizontal" infiniteLoop showThumbs="false" showIndicators="false">
                    <div>
                        <img src={img} />
                        
                    </div>
                    <div>
                        <img src={img2} />
                        
                    </div>
                    <div>
                        <img src={img3} />
                        
                    </div>
                </Carousel>
                </div>
            <FavoriteBorderIcon className="searchResult__heart" />
            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <h4>{location}</h4>
                    <h2>{title}</h2>
                    <p>____</p>
                    <h4>{description}</h4>
                    <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default SearchResult
