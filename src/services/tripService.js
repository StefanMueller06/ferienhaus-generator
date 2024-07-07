import { trips } from "@/data/trips";

// *** All Trips ***

export function getTripById(id) {
    return trips.find(trip => trip.id == id);
}

export function calculateBestTrip(preferences) {
    const { climate, budget, familyFriendly, petFriendly } = preferences;

    let bestTrip = null;
    let highestScore = 0;

    trips.forEach(trip => {
        let score = 0;

        if (trip.details.climate === climate) score += 3;
        //  if (trip.details.price_per_night_in_chf_per_person <= budget) score += 2;
        //  if (trip.details.family_friendly === familyFriendly) score += 2;
        //  if (trip.details.pet_friendly === petFriendly) score += 2;

        if (score > highestScore) {
            highestScore = score;
            bestTrip = trip;
        }
    });

    return bestTrip;
}

// *** Saved Trips for User Profile ***
export function saveTripInLocalStorage(id) {
    const idsString = localStorage.getItem('savedTripsIds');
    let ids = [];
    if (idsString) {
        ids = JSON.parse(idsString);

    }

    if (!ids.includes(id)) {
        ids.push(id + "")
    }

    localStorage.setItem('savedTripsIds', JSON.stringify(ids));
}

export function getSavedTrips() {
    const idsString = localStorage.getItem('savedTripsIds');
    let ids = [];
    if (idsString) {
        ids = JSON.parse(idsString);
    }

    return ids.map(id => getTripById(id)).filter(trip => trip !== undefined);
}

export function deleteSavedTrip(id) {
    const idsString = localStorage.getItem('savedTripsIds');
    let ids = [];
    if (idsString) {
        ids = JSON.parse(idsString);
    }

    ids = ids.filter(savedId => savedId !== id.toString());

    localStorage.setItem('savedTripsIds', JSON.stringify(ids));
}