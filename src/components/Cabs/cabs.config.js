
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
        width: "275px",
        border: true,
        title: "From",
        ChevronDown: false,
        city: true,
        place: "Pokhara",
    },
    {
        height: "90px",
        width: "275px",
        border: true,
        title: "To",
        ChevronDown: false,
        city: true,
        place: "Kathmandu",
    },
    {
        height: "90px",
        width: "165px",
        border: true,
        title: "Departure",
        ChevronDown: true,
        dateInfo: true,
        date: 11,
        month: "Nov",
        year: 24,
        day: "Monday"
    },
    {
        height: "90px",
        width: "full",
        border: true,
        title: "Return",
        ChevronDown: true,
        addReturnDate: true,
        message: "Tap to add a return date for bigger discounts"
    },
    {
        height: "90px",
        width: "230px",
        border: false,
        title: "Pickup-Time",
        ChevronDown: true,
        pickupTime: true,
        hour: "10",
        minute: "00",
        shift: "AM"
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
        place: "Pokhara",
    },
    {
        height: "90px",
        width: "250px",
        border: true,
        title: "To",
        ChevronDown: false,
        city: true,
        place: "Kathmandu",
    },
    {
        height: "90px",
        width: "150px",
        border: true,
        title: "Departure",
        ChevronDown: true,
        dateInfo: true,
        date: 11,
        month: "Nov",
        year: 24,
        day: "Monday"
    },
    {
        height: "90px",
        width: "165px",
        border: true,
        title: "Return",
        ChevronDown: true,
        dateInfo: true,
        date: 12,
        month: "Nov",
        year: 24,
        day: "Tuesday"
    },
    {
        height: "90px",
        width: "170px",
        border: true,
        title: "Pickup-Time",
        ChevronDown: true,
        pickupTime: true,
        hour: "10",
        minute: "20",
        shift: "AM"
    },
    {
        height: "90px",
        width: "full",
        border: false,
        title: "Drop Time",
        ChevronDown: true,
        pickupTime: true,
        hour: "12",
        minute: "20",
        shift: "PM"
    },

]

export const cabsAirportTransfer = [
    {
        height: "90px",
        width: "250px",
        border: true,
        title: "From",
        ChevronDown: false,
        city: true,
        place: "Tribhuvan Internation Airport, Kathmandu",
        fullplacename: "Tribhuvan Internation Airport, Kathmandu",
    },
    {
        height: "90px",
        width: "250px",
        border: true,
        title: "To",
        ChevronDown: false,
        city: true,
        place: "Pokhara International Airport, Pokhara",
        fullplacename: "Pokhara International Airport, Pokhara",
    },
    {
        height: "90px",
        width: "165px",
        border: true,
        title: "Departure",
        ChevronDown: true,
        dateInfo: true,
        date: 11,
        month: "Nov",
        year: 24,
        day: "Monday"
    },
    {
        height: "90px",
        width: "245px",
        border: false,
        title: "Pickup-Time",
        ChevronDown: true,
        pickupTime: true,
        hour: "10",
        minute: "20",
        shift: "AM",
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
        place: "Pokhara",
        country: "Nepal"
    },
    {
        height: "90px",
        width: "222px",
        border: true,
        title: "Pickup Date",
        ChevronDown: true,
        dateInfo: true,
        date: 11,
        month: "Nov",
        year: 24,
        day: "Monday"
    },
    {
        height: "90px",
        width: "222px",
        border: true,
        title: "Pickup-Time",
        ChevronDown: true,
        pickupTime: true,
        hour: "10",
        minute: "20",
        shift: "AM",
    },
    {
        height: "90px",
        width: "full",
        border: true,
        title: "Pickup-Time",
        ChevronDown: true,
        selectPackage: true,
        distance: "1hrs 10kms"
    },
]