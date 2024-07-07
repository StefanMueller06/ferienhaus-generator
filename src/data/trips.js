export const trips = [
    {
        id: 1,
        title: "European Adventure",
        description: "Experience a cozy hut in europe",
        details: {
            country: "Europe",
            price_per_night_in_chf_per_person: 150,
            number_of_beds: 1,
            climate: "cold",
            sightseeing_index: 0.9,
            local_cuisine: "Variety of European dishes",
            nearest_airport: "Heathrow Airport",
            transportation_options: ["Subway", "Bus", "Bike rental"],
            wifi_availability: "Available",
            pet_friendly: true,
            family_friendly: true,
            available_dates: {
                start_date: "2024-05-01",
                end_date: "2024-09-30"
            },
            activities: ["Museum Tours", "Historical Walks", "Cycling"],
            safety_index: 0.8,
            average_rating: 4.7,
            review_count: 200,
            host_name: "Jane Smith",
            host_contact: {
                email: "janesmith@example.com",
                phone: "+987654321"
            },
            language_spoken: ["English", "French", "German"],
            property_type: "Apartment",
            unique_features: ["Central location", "Modern amenities", "Balcony view"],
            check_in_time: "2:00 PM",
            check_out_time: "12:00 PM",
            cancellation_policy: "Free cancellation within 24 hours",
            additional_services: ["City tours", "Airport shuttle", "Breakfast included"]
        },
        images: [
            {
                url: "/houses/european.jpg",
                description: "Modern apartment in the city center"
            },

        ]
    },
    {
        id: 2,
        title: "Tropical Paradise",
        description: "Relax and unwind on the beautiful beaches of a tropical island.",
        details: {
            country: "Caribbean",
            price_per_night_in_chf_per_person: 200,
            number_of_beds: 2,
            climate: "warm",
            sightseeing_index: 0.7,
            local_cuisine: "Seafood and tropical fruits",
            nearest_airport: "Caribbean International Airport",
            transportation_options: ["Boat", "Taxi", "Bike rental"],
            wifi_availability: "Available",
            pet_friendly: false,
            family_friendly: true,
            available_dates: {
                start_date: "2024-06-01",
                end_date: "2024-12-31"
            },
            activities: ["Snorkeling", "Beach Volleyball", "Island Tours"],
            safety_index: 0.85,
            average_rating: 4.8,
            review_count: 250,
            host_name: "Carlos Martinez",
            host_contact: {
                email: "carlosmartinez@example.com",
                phone: "+1122334455"
            },
            language_spoken: ["English", "Spanish"],
            property_type: "Beach House",
            unique_features: ["Oceanfront", "Private beach", "Hammocks"],
            check_in_time: "4:00 PM",
            check_out_time: "10:00 AM",
            cancellation_policy: "Free cancellation within 72 hours",
            additional_services: ["Snorkeling gear rental", "Airport pickup", "Breakfast included"]
        },
        images: [
            {
                url: "/houses/tropical.avif",
                description: "Beach house with ocean view"
            },

        ]
    },
    {
        id: 3,
        title: "Asian Expedition",
        description: "Immerse yourself in the diverse cultures and traditions of Asia.",
        details: {
            country: "Asia",
            price_per_night_in_chf_per_person: 120,
            number_of_beds: 1,
            climate: "varied",
            sightseeing_index: 0.85,
            local_cuisine: "Variety of Asian dishes",
            nearest_airport: "Tokyo International Airport",
            transportation_options: ["Train", "Bus", "Scooter rental"],
            wifi_availability: "Available",
            pet_friendly: false,
            family_friendly: true,
            available_dates: {
                start_date: "2024-04-01",
                end_date: "2024-11-30"
            },
            activities: ["Temple Visits", "Street Food Tours", "Cultural Shows"],
            safety_index: 0.9,
            average_rating: 4.6,
            review_count: 180,
            host_name: "Hiroshi Tanaka",
            host_contact: {
                email: "hiroshitanaka@example.com",
                phone: "+6677889900"
            },
            language_spoken: ["English", "Japanese"],
            property_type: "Traditional House",
            unique_features: ["Tatami mats", "Zen garden", "Hot springs nearby"],
            check_in_time: "3:00 PM",
            check_out_time: "11:00 AM",
            cancellation_policy: "Free cancellation within 48 hours",
            additional_services: ["Guided cultural tours", "Airport shuttle", "Breakfast included"]
        },
        images: [
            {
                url: "/houses/asian.avif",
                description: "Traditional house with garden"
            },

        ]
    }
];
