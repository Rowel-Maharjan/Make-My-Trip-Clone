
export const cabsInfo = [
    {
        id: "outstationoneway",
        value: "Outstation One-Way"
    },
    {
        id: "outstationroundtrip",
        value: "Outstation Round-Trip"
    },
    {
        id: "airporttransfers",
        value: "Airport Transfers"
    },
    {
        id: "hourlyrentals",
        value: "Hourly Rentals"
    },
]


export const cabsOneWay = [
    {
        height: "90px",
        width: "325px",
        border: true,
        title: "From",
        ChevronDown: false,
        city: true,
        place: "Lalipur",
        selectablePlaces: ["Lalitpur", "Kathmandu", "Boudha", "Thecho", "Pokhara", "Dharan", "Hetauda"],
    },
    {
        height: "90px",
        width: "325px",
        border: true,
        title: "To",
        ChevronDown: false,
        city: true,
        place: "Kathmandu",
        selectablePlaces: ["Lalitpur", "Kathmandu", "Boudha", "Thecho", "Pokhara", "Dharan", "Hetauda"],
    },
    {
        height: "90px",
        width: "220px",
        border: true,
        title: "Departure",
        ChevronDown: true,
        dateInfo: true,
    },
    {
        height: "90px",
        width: "full",
        border: false,
        title: "Pickup-Time",
        ChevronDown: true,
        pickupTime: true,
    },

]


export const cabsRoundTrip = [
    {
        height: "90px",
        width: "250px",
        border: true,
        title: "From",
        ChevronDown: false,
        city: true,
        place: "Lalitpur",
        selectablePlaces: ["Lalitpur", "Kathmandu", "Boudha", "Thecho", "Pokhara", "Dharan", "Hetauda"],
    },
    {
        height: "90px",
        width: "250px",
        border: true,
        title: "To",
        ChevronDown: false,
        city: true,
        place: "Kathmandu",
        selectablePlaces: ["Lalitpur", "Kathmandu", "Boudha", "Thecho", "Pokhara", "Dharan", "Hetauda"],
    },
    {
        height: "90px",
        width: "150px",
        border: true,
        title: "Departure",
        ChevronDown: true,
        dateInfo: true,
    },
    {
        height: "90px",
        width: "165px",
        border: true,
        title: "Return",
        ChevronDown: true,
        dateInfo: true,
    },
    {
        height: "90px",
        width: "170px",
        border: true,
        title: "Pickup-Time",
        ChevronDown: true,
        pickupTime: true,
    },
    {
        height: "90px",
        width: "full",
        border: false,
        title: "Drop Time",
        ChevronDown: true,
        pickupTime: true,
    },

]

export const cabsAirportTransfer = [
    {
        height: "90px",
        width: "340px",
        border: true,
        title: "From",
        ChevronDown: false,
        city: true,
        place: "Tribhuvan Internation Airport, Kathmandu",
        selectablePlaces: ["Tribhuvan Internation Airport, Kathmandu", "Pokhara International Airport, Pokhara", "Chitwant National Airport, Chitwan", "Hetauda National Airport, Hetauda", "Lukla National Airport"],
    },
    {
        height: "90px",
        width: "340px",
        border: true,
        title: "To",
        ChevronDown: false,
        city: true,
        place: "Pokhara International Airport, Pokhara",
        selectablePlaces: ["Tribhuvan Internation Airport, Kathmandu", "Pokhara International Airport, Pokhara", "Chitwant National Airport, Chitwan", "Hetauda National Airport, Hetauda", "Lukla National Airport"],
    },
    {
        height: "90px",
        width: "165px",
        border: true,
        title: "Departure",
        ChevronDown: true,
        dateInfo: true,
    },
    {
        height: "90px",
        width: "245px",
        border: false,
        title: "Pickup-Time",
        ChevronDown: true,
        pickupTime: true,
        message: "pick up time as per journey city timezone"
    },
]

export const cabsHourlyRentals = [
    {
        height: "90px",
        width: "420px",
        border: true,
        title: "Pickup Location",
        ChevronDown: false,
        city: true,
        place: "Lalitpur",
        country: "Nepal",
        selectablePlaces: ["Lalitpur", "Kathmandu", "Boudha", "Thecho", "Pokhara", "Dharan", "Hetauda"],
    },
    {
        height: "90px",
        width: "222px",
        border: true,
        title: "Pickup Date",
        ChevronDown: true,
        dateInfo: true,
    },
    {
        height: "90px",
        width: "222px",
        border: true,
        title: "Pickup-Time",
        ChevronDown: true,
        pickupTime: true,
    },
    {
        height: "90px",
        width: "full",
        border: true,
        title: "Select Package",
        ChevronDown: true,
        selectPackage: true,
        selectablePackages: ["1hrs 10kms", "2hrs 20kms", "3hrs 30kms", "4hrs 40kms", "5hrs 50kms", "6hrs 60kms", "7hrs 70kms"]
    },
]