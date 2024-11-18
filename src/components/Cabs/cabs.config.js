
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

export const VisitingArea = [
    {
        img: "https://promos.makemytrip.com/store/GoaDT.JPG",
        title: "Cabs From Kathmandu To",
        description: ["Lalitpur", "Pokhara", "Chitwan", "Janakpur", "Dharan", "Morang", "Jhapa"]
    },
    {
        img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3872/Havelock_2.jpg?crop=50:50&downsize=50:50",
        title: "Cabs From Lalitpur To",
        description: ["Kathmandu", "Pokhara", "Chitwan", "Janakpur", "Dharan", "Morang", "Jhapa"]
    },
    {
        img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1185/leh01.jpg?crop=50:50&downsize=50:50",
        title: "Cabs from Chitwan to",
        description: ["Kathmandu", "Pokhara", "Lalitpur", "Janakpur", "Dharan", "Morang", "Jhapa"]
    },
    {
        img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1215/Gangtok.jpg?crop=50:50&downsize=50:50",
        title: "Cabs from Janakpur to",
        description: ["Kathmandu", "Pokhara", "Chitwan", "Lalitpur", "Dharan", "Morang", "Jhapa"]
    },
    {
        img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Y.jpg?crop=50:50&downsize=50:50",
        title: "Cabs from Dharan to",
        description: ["Kathmandu", "Pokhara", "Chitwan", "Janakpur", "Lalitpur", "Morang", "Jhapa"]
    },
    {
        img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1369/Serene%20Kerala.jpg?crop=50:50&downsize=50:50",
        title: "Cabs from Morang to",
        description: ["Kathmandu", "Pokhara", "Chitwan", "Janakpur", "Dharan", "Lalitpur", "Jhapa"]
    },
    {
        img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1993/Aerial%20view%20of%20Paradise%20Island%20Resort.jpg?crop=50:50&downsize=50:50",
        title: "Cabs from Jhapa to",
        description: ["Kathmandu", "Pokhara", "Chitwan", "Janakpur", "Dharan", "Morang", "Lalitpur"]
    },
    {
        img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/2887/Colombo1.jpg?crop=50:50&downsize=50:50",
        title: "Cabs from Sunsari to",
        description: ["Kathmandu", "Pokhara", "Chitwan", "Janakpur", "Dharan", "Morang", "Jhapa"]
    },
    {
        img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/Dubai-Marina-skyline.jpg?crop=50:50&downsize=50:50",
        title: "Cabs from Bhaktapur to",
        description: ["Kathmandu", "Pokhara", "Chitwan", "Janakpur", "Dharan", "Morang", "Jhapa", "Itahari"]
    },

]

export const FooterOffering = [
    {
        title: "Product Offering",
        description: [
            "Flights", "International Flights", "Charter Flights", "Hotels", "International Hotels", "Homestays and Villas",
            "Activities", "Holidays In India", "International Holidays", "Book Hotels From UAE", "myBiz for Corporate Travel",
            "Book Online Cabs", "Book Bus Tickets", "Book Train Tickets", "Cheap Tickets to India", "Book Flights From US",
            "Book Flights From UAE", "Trip Planner", "Forex Card", "Buy Foreign Currency", "Travel Insurance",
            "Travel Insurance Thailand", "Travel Insurance USA", "Travel Insurance Dubai", "Travel Insurance Canada",
            "Travel Insurance Singapore", "Gift Cards", "Gift", "Wedding Gift", "Anniversary Gift", "Birthday Gift",
            "Diwali Gift", "Valentines Gift", "Farewell Gift", "Christmas Gift", "New Year Gift", "Trip Money", "Trip Ideas",
            "Travel Blog", "PNR Status", "MakeMyTrip Advertising Solutions", "One Way Cab"
        ]
    },
    {
        title: "MakeMyTrip",
        description: [
            "About Us", "Investor Relations", "Careers", "MMT Foundation", "CSR Policy & Committee",
            "myPartner - Travel Agent Portal", "Foreign Exchange", "List your hotel", "Partners- Redbus",
            "Partners- Goibibo", "Partners- BookMyForex", "Advertise with Us"
        ]
    },
    {
        title: "About the Site",
        description: [
            "Customer Support", "Payment Security", "Privacy Policy", "User Agreement", "Terms of Service",
            "Franchise Offices", "Make A Payment", "Work From Home"
        ]
    },
    {
        title: "Important Links",
        description: [
            "Mumbai to Vadodara Cabs", "Mumbai to Pune Cabs", "Mumbai to Nashik Cabs", "Nashik to Mumbai Cabs",
            "Pune to Mumbai Cabs", "Delhi to Manali Cabs", "Delhi to Chandigarh Cabs", "Pune to Shirdi Cabs",
            "Delhi to Jaipur Cabs", "Mumbai to Surat Cabs", "Pune to Nashik Cabs", "Chandigarh to Manali Cabs",
            "Delhi to Shimla Cabs", "Pune to Lonavala Cabs", "Shimla to Chandigarh Cabs", "Agra to Delhi Cabs",
            "Delhi to Agra Cabs", "Kanpur to Lucknow Cabs", "Mumbai to Shirdi Cabs", "Mysore to Bangalore Cabs"
        ]
    },
    {
        title: "Quick Links",
        description: [
            "Taxi Services in Bangalore", "Taxi Services in Chennai", "Taxi Services in Delhi", "Taxi Services in Hyderabad",
            "Taxi service in Ahmedabad", "Taxi Services in Gurgaon", "Taxi Services in Chandigarh", "Taxi Services in Mumbai",
            "Taxi Services in Jaipur", "Taxi Services in Pune", "Taxi Services in Haridwar", "Taxi Services in Udaipur",
            "Taxi Services in Lucknow", "Taxi Services in Shimla", "Taxi Services In Dharamshala"
        ]
    }
]
