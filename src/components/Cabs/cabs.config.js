
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

export const aboutData = [
    {
        title: "Online Cab Booking Made Easy",
        description: ["Traveling to different destinations and exploring unknown places is the most fantastic feeling. People have recently started traveling a lot more than they used to. Moreover, there has been a surge in tourists who are taking road trips. One can simply make an online cab booking and travel to any part of the country. As more offbeat places are coming to limelight, travel enthusiasts are constantly in a rush to explore those hidden gems. Road trips are always fun and exciting as you not only enjoy the destination but also the journey. While on a road trip, you can enjoy the scenic landscapes, beautiful lanes, and fascinating sights throughout the journey. Choosing the right cab service makes all the difference. MakeMyTrip wants you to enjoy road trips without the stress of driving to long distances yourself. Whether you are planning a solo trip, a weekend getaway with friends, or a fun vacation with your family, MakeMyTrip can make your journey smooth. All you need to do is choose your preferred destination and make an online taxi booking with MakeMyTrip. The easy-to-navigate interface of MakeMyTrip ensures that you can make your booking within a few minutes."]
    },
    {
        title: "Ensure a Safe and Secure Trip",
        description:["When it comes to travelling, safety is always the topmost priority. A comfortable and secure journey can make a trip memorable. You can find the top-rated car rental services on MakeMyTrip that ensure a safe trip to your destination. While booking a cab on MakeMyTrip, you do not need to worry about the car routes, car hygiene, or pricing. MakeMyTrip’s cab booking services are very effective and reliable. Moreover, availing a cab facility is pretty easy with the user-friendly app of MakeMyTrip. While you make your cab booking, you can choose from a wide variety of options such as hatchbacks, sedans, or SUVs. Moreover, you will be picked from your location on time so that there are no delays in reaching the destination. Considering the current Covid-19 situation, all the safety measures are taken to ensure safe travel. The temperature of the drivers are checked before the journey. Moreover, the cab is sanitized before and after the journey. Not to mention, it is mandatory for passengers as well as drivers to wear their masks. GPS, safety alerts, and travel trackers are integrated in all the cars so that the passengers are well-informed about the drivers and the vehicle to avoid the last-minute hassle."]
    },
    {
        title: "Cab Booking Services by MakeMyTrip",
        description:["We operate in all major cities in India and connect people from different parts of the cities. Whether you want to take an airport taxi, a cab to the nearest railway station or bus station, or want to visit a different city, MakeMyTrip offers you a seamless cab booking experience. We provide you with dedicated cabs and taxis, waiting at the priority lane of airports and railways for you to have a comfortable ride. We understand the importance of your time and money, and we make sure that you reach your destination on time. For making your cab booking, you simply need to visit the official website or app of MakeMyTrip. Then you have to enter all the required details such as the city of origin, the destination, your departure date and time. You must also select whether you are booking the cab for a one-way trip or a round trip. Once you have filled in all the required information, you just need to click on the ‘Search’ option. You will be redirected to a new page where you can find all the available cab options."]
    },
    {
        title: "Book an Outstation Cab on MakeMyTrip",
        description:["Whether you wish to travel to popular tourist destinations such as Amritsar, Shimla and Agra or would like to explore the hidden gems of India, you can easily book outstation cab on MakeMyTrip. You can now book a one-way trip to your destination and enjoy your stay comfortably. If you want to explore the nearby cities, you can avail of services of our intercity car rentals category and choose among the top-rated chauffeurs for your vacation. A trusted car rental service can offer a wide variety of cab options so that you can choose a car that suits your travel needs. You can also book outstation cab facility and let our executives guide you for a memorable travel experience. The charges differ from one cab to another and it depends on a lot of factors. For example, if you are choosing a 4-seater instead of a 6-seater, the charges of the former will be less than the latter. Moreover, the prices also depend on the distance covered and the in-car amenities provided to you. Not to mention, the charges on some special days such as during a festival or a national holiday might be higher than usual days. We also offer pickup and drop-off services, one-way as well as round trips, outstation trips, airport taxi transfers, and more. You can share your itinerary while making an online taxi booking with MakeMyTrip and enjoy a comfortable ride."]
    },
    {
        title: "Special Offers and Discounts on MakeMyTrip",
        description:["MakeMyTrip has one of the most transparent and best pricing guaranteed models. We provide the best pricing in the market with no hidden charges. When you make an online taxi booking with us, we will inform you about every additional cost, toll charges, extra km charges, waiting charges, and other taxes. We believe in being totally transparent with our customers and provide them with accurate bills & invoices. With our intercity car rental service, you can avail of maximum benefits with our affordable and flexible hourly rental packages. We offer you top discounts, coupons, free rides, and cash backs on online cab booking services. We also provide priority car booking for our loyal customers. Now you can easily make a cab booking for a long trip or a short journey, a business trip, or a family vacation with the official app of MakeMyTrip or log in to the website. You can also connect with the 24/7 customer support service of MakeMyTrip and ride with the safest and trusted travel partners. MakeMyTrip is one of the leading online cab booking platforms in India. We connect people from over 1000+ cities in India with comfortable cab rides."]
    },
    {
        title: "Why MakeMyTrip?",
        description:["The leading player in online cab bookings in India, MakeMyTrip offers great offers on cab fares, exclusive discounts and a seamless online booking experience. Cabs, Bus, Flight, hotel and holiday bookings through the desktop or mobile site is a delightfully customer friendly experience, and with just a few clicks you can complete your booking."]
    },
    {
        title: "Booking Cabs with MakeMyTrip",
        description:["Book your cabs with India's leading online booking company since the year 2000. While booking cabs with MakeMyTrip, you can expect the ultimate online booking experience. With premium customer service, 24/7 dedicated helpline for support, and over 5 million delighted customers, MakeMyTrip takes great pride in enabling customer satisfaction. With a cheapest rates, book your cab at the lowest prices. Avail great offers, exclusive on app."]
    },
]

export const FaqData = [
    {
        title: "How can I book cheap cabs online?",
        description: ["MMT helps you with online cab booking at the best prices from various cab service providers. Also, you can use promo codes and offers on the MMT website & app on online cab booking to get extra discounts."]
    },
    {
        title: "What are the advantages of online taxi booking?",
        description: ["Online taxi booking not only helps you find the best prices from different service providers but also helps you with the convenience of paying through multiple payment options (like Debit Card, Credit Card, eWallets etc.). You can easily compare prices and choose various categories of cabs like Hatchback cars, Sedan and SUV."]
    },
    {
        title: "Why should you book cabs from MMT?",
        description: ["MMT has a large number of service providers who list their cabs on MMT thereby increasing your chances of obtaining the most competitive prices for your cabs. You also have the added advantage of access to MMT’s customer care and an easy interface for booking with different payment modes with no hidden charges. While booking cabs online through MMT, you can choose the car based on your requirement and preferences, depending on the cars available with the relevant service providers. You can book Hatchback like Indica, Swift, Sedan like Dzire, Etios and SUV like Innova, Ertiga."]
    },
    {
        title: "What kind of cabs can you book from MMT?",
        description: ["You can book the following kinds of cabs from MMT: airport cabs and rentals / outstation cabs. You can book outstation cabs for both one-way transfers & round-trip transfers."]
    },
    {
        title: "Do I need to register on MMT to book a cab online?",
        description: ["No, you can successfully book the cab without registering on our website."]
    },
    {
        title: "What if the cab doesn't show up?",
        description: ["If the vehicle you booked does not arrive, we will immediately issue a complete refund."]
    },
    {
        title: "How is the total cab fare calculated for an intercity cab service?",
        description: ["For outstation trips (intercity), mostly X kms are included in fare. Route-wise charges will vary. Sometimes toll and state taxes might be included in the fare. In certain cases, these won't be part of the original fare, and the user would have to pay at trip end whatever extra charges are applicable. Extra charges can be waiting charges, extra KMs charges, extra hours charges, night charges, airport entry fee, airport parking charges, toll charges, state tax driver charges, parking charges, etc."]
    },
    {
        title: "Can I book a cab without credit/card or net banking option?",
        description: ["Yes, other payment options available are UPI (GPay, PhonePe), wallets (Paytm, Amazon Pay), and debit card."]
    },
    {
        title: "What happens if the vehicle breaks down?",
        description: ["Since we work with established service providers, the vehicles are usually reliable. In case of a breakdown, it is the service provider's responsibility to replace the vehicle during the journey. In case of any persisting issue, you may reach out to the helpline number provided to you by MMT, and we shall reach out to our vendor to arrange an alternate cab for you."]
    },
    {
        title: "How are the Kilometers calculated?",
        description: ["The 'Kilometers' are calculated based on the return trip distance between the boarding point and the destination."]
    },
    {
        title: "How is the total cab fare/price calculated for a local cab service?",
        description: ["Four packages are available (4hrs & 40 kms, 8hrs & 80 kms, 12hrs & 120 kms, 24hrs & 300kms). Extra kms & extra hours charges applicable if usage exceeds the package taken."]
    },
    {
        title: "What are the payment terms?",
        description: ["You can confirm your reservation by paying a small booking fee, typically up to 25% of the base fare. The balance can be paid directly to us through online modes until two days before the start of the journey or to the operator in cash at the time of completion of the trip."]
    },
    {
        title: "What if I need to cancel my trip?",
        description: ["The cancellation policy is specific to each service provider and is listed against the quotes on the quotations page."]
    },
    {
        title: "How are tolls & taxes calculated?",
        description: ["Tolls and interstate taxes are best estimates only. If these amounts are included in the fare, you'll be charged/reimbursed for any difference between the actuals and estimates, as applicable."]
    },
]
