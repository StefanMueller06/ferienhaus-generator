import React from 'react';

const TripManager = () => {
    return (
        <div className="trip-manager">
            <button className="create-trip">Create new Trip</button>
            <div className="edit-trips">
                <div className="trip">Trip 1: warm, south, south-africa <button>Detail</button></div>
                <div className="trip">Trip 2: cold, north, island <button>Detail</button></div>
                <div className="trip">Trip 3: cold, central, swiss-alps <button>Detail</button></div>
            </div>
        </div>
    );
};

export default TripManager;