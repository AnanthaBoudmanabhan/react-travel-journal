import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <div>
                <img className="card--image" src={`/images/${props.imageUrl}`} alt={props.title} />
            </div>
            <div className="card--info">
                <div className="card--location-details">
                    <p className="card--location">
                        <i className="fas fa-map-marker-alt card--location-icon"></i>
                        <span className="card--location-country">{props.location}</span>
                    </p>
                    <a className="card--googleMapUrl" href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;