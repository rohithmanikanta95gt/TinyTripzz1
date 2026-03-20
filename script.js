const destinations = [
    {
        id: 1,
        title: "Guindy National Park",
        category: "wildlife",
        image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8em9vfGVufDB8fDB8fHww",
        time: "09:00 AM - 05:30 PM",
        price: "₹90 per head",
        speciality: "Metro City Park",
        distance: "35 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start your journey from the college main gate.", icon: "location-dot" },
            { location: "Poonamallee Bus Terminus", type: "transit", mode: "Share Auto", time: "15 mins", description: "Take a shared auto heading towards Poonamallee junction.", icon: "truck-pickup" },
            { location: "Guindy Bus Stop", type: "transit", mode: "Bus 54", time: "45 mins", description: "Take bus number 54 from Poonamallee directly to Guindy.", icon: "bus" },
            { location: "Guindy National Park Entrance", type: "end", mode: "Share Auto", time: "10 mins", description: "A short auto (3 km) from Guindy bus stop to the park entrance.", icon: "person-walking" }
        ]
    },
    {
        id: 2,
        title: "Birla Planetarium",
        category: "museum",
        image: "https://indiano.travel/wp-content/uploads/2022/04/Beautiful-facade-at-the-Chennai-Government-Museum-Tamil-Nadu-India.jpg",
        time: "10:00 AM - 05:45 PM",
        price: "₹60 per head",
        speciality: "Science & Stars",
        distance: "28 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start your journey from the college gate.", icon: "location-dot" },
            { location: "Poonamallee Junction", type: "transit", mode: "Share Auto", time: "15 mins", description: "Share auto to Poonamallee junction.", icon: "truck-pickup" },
            { location: "Madhya Kailash", type: "transit", mode: "Bus", time: "55 mins", description: "AC bus (route 54 followed by 21G) towards Adyar.", icon: "bus" },
            { location: "Birla Planetarium", type: "end", mode: "Walk", time: "2 mins", description: "Walk inside the Periyar Science and Technology Centre campus.", icon: "building-columns" }
        ]
    },
    {
        id: 3,
        title: "Government Museum, Egmore",
        category: "museum",
        image: "https://indiano.travel/wp-content/uploads/2022/04/Beautiful-facade-at-the-Chennai-Government-Museum-Tamil-Nadu-India.jpg",
        time: "09:30 AM - 05:00 PM (Fri Closed)",
        price: "₹15 (Indians) / ₹250 (Foreigners)",
        speciality: "Heritage & Culture",
        distance: "26 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start your journey here.", icon: "location-dot" },
            { location: "Koyambedu (CMBT)", type: "transit", mode: "Bus", time: "40 mins", description: "Take a direct bus towards CMBT from Poonamallee High Road.", icon: "bus" },
            { location: "Egmore Metro", type: "transit", mode: "Metro", time: "20 mins", description: "Take the Green Line metro from CMBT directly to Egmore.", icon: "train" },
            { location: "Government Museum", type: "end", mode: "Walk", time: "10 mins", description: "Walk 500m to the museum complex.", icon: "person-walking" }
        ]
    },
    {
        id: 4,
        title: "Marina Beach",
        category: "beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
        time: "Open 24/7",
        price: "Free Entry",
        speciality: "India's Longest Beach",
        distance: "25 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start your journey here.", icon: "location-dot" },
            { location: "Poonamallee", type: "transit", mode: "Auto", time: "15 mins", description: "Auto to Poonamallee.", icon: "truck-pickup" },
            { location: "Vivekananda House", type: "transit", mode: "Bus 25", time: "60 mins", description: "Take bus 25 from Poonamallee directly to Vivekananda House near Marina.", icon: "bus" },
            { location: "Marina Beach", type: "end", mode: "Walk / Share Auto", time: "10 mins", description: "Short 600m walk or share auto to the beach shore.", icon: "umbrella-beach" }
        ]
    },
    {
        id: 5,
        title: "Mahabalipuram Shore Temple",
        category: "mountain",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop",
        time: "06:00 AM - 06:00 PM",
        price: "₹40 (Indians) / ₹600 (Foreigners)",
        speciality: "UNESCO World Heritage",
        distance: "55 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start your journey here.", icon: "location-dot" },
            { location: "Porur Toll Gate", type: "transit", mode: "Bus", time: "30 mins", description: "Head towards Porur junction.", icon: "bus" },
            { location: "Guindy / Tidel Park", type: "transit", mode: "Bus", time: "30 mins", description: "Take a bus towards the OMR/ECR stretch.", icon: "bus" },
            { location: "Mahabalipuram Bus Stand", type: "transit", mode: "AC Bus (109/588)", time: "1 hr 15 mins", description: "Take ECR buses (e.g., 109, 588) to Mahabalipuram.", icon: "bus" },
            { location: "Shore Temple", type: "end", mode: "Walk", time: "10 mins", description: "Explore the ancient rock-cut monuments.", icon: "landmark" }
        ]
    },
    {
        id: 6,
        title: "Covelong (Kovalam) Beach",
        category: "beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
        time: "Open 24/7",
        price: "Free Entry / Surfing Extra",
        speciality: "Surfing & Serenity",
        distance: "42 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start your journey here.", icon: "location-dot" },
            { location: "Koyambedu (CMBT)", type: "transit", mode: "Bus", time: "40 mins", description: "Bus to Koyambedu.", icon: "bus" },
            { location: "Kovalam Junction", type: "transit", mode: "AC Bus (109/588)", time: "1 hr 20 mins", description: "Take direct ECR bound buses (like 109 or 588) to Kovalam.", icon: "bus" },
            { location: "Covelong Beach Point", type: "end", mode: "Walk", time: "5 mins", description: "Walk down the street to the surfing school and beach.", icon: "umbrella-beach" }
        ]
    },
    {
        id: 7,
        title: "Arunachalam Temple – Tiruvannamalai",
        category: "temple",
        image: "https://t4.ftcdn.net/jpg/16/89/88/55/360_F_1689885560_mwtTwTxqyJHs0wwYSNToG9wpd9jS8gOb.jpg",
        time: "05:30 AM - 10:00 PM",
        price: "Free Entry",
        speciality: "Pancha Bhoota Sthalam",
        distance: "~190 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start your journey from the college gate.", icon: "location-dot" },
            { location: "Poonamallee Bus Terminus", type: "transit", mode: "Bus 153/153A/578", time: "30 mins", description: "Take bus 153, 153A or 578 to Koyambedu (CMBT).", icon: "bus" },
            { location: "Koyambedu (CMBT)", type: "transit", mode: "TNSTC / SETC Bus", time: "4–5 hrs", description: "From CMBT, board a TNSTC or SETC bus directly to Tiruvannamalai. Buses are frequent.", icon: "bus" },
            { location: "Annamalaiyar Temple", type: "end", mode: "Walk / Auto", time: "10 mins", description: "Reach the majestic Arunachaleswarar Temple — one of the Pancha Bhoota Sthalams (Fire/Agni).", icon: "place-of-worship" }
        ]
    },
    {
        id: 8,
        title: "Kapaleeshwarar Temple – Mylapore",
        category: "temple",
        image: "https://t4.ftcdn.net/jpg/16/89/88/55/360_F_1689885560_mwtTwTxqyJHs0wwYSNToG9wpd9jS8gOb.jpg",
        time: "05:30 AM - 12:00 PM, 04:00 PM - 09:30 PM",
        price: "Free Entry",
        speciality: "Ancient Shiva Temple",
        distance: "24.2 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Poonamallee Bus Terminus", type: "transit", mode: "Bus 49F", time: "15 mins", description: "Board bus 49F from Poonamallee heading to Mylapore.", icon: "bus" },
            { location: "Kapaleeshwarar Temple", type: "end", mode: "Walk", time: "5 mins", description: "Arrive at the iconic Kapaleeshwarar Temple, one of Chennai's most famous Shiva temples.", icon: "place-of-worship" }
        ]
    },
    {
        id: 9,
        title: "Parthasarathy Temple – Triplicane",
        category: "temple",
        image: "https://t4.ftcdn.net/jpg/16/89/88/55/360_F_1689885560_mwtTwTxqyJHs0wwYSNToG9wpd9jS8gOb.jpg",
        time: "07:00 AM - 12:00 PM, 04:00 PM - 08:30 PM",
        price: "Free Entry",
        speciality: "8th Century Krishna Temple",
        distance: "23.5 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Poonamallee Bus Terminus", type: "transit", mode: "Bus 25", time: "15 mins", description: "Take bus 25 from Poonamallee towards Triplicane. Alternatively, go via Broadway.", icon: "bus" },
            { location: "Triplicane Bus Stop", type: "transit", mode: "Walk / Share Auto", time: "55 mins", description: "Alight at Triplicane and walk 350m or take a short share auto to the temple.", icon: "truck-pickup" },
            { location: "Parthasarathy Temple", type: "end", mode: "Walk", time: "5 mins", description: "Visit the ancient Parthasarathyswamy Temple — an 8th century Vishnu temple of great historical importance.", icon: "place-of-worship" }
        ]
    },
    {
        id: 10,
        title: "Kamakshi Amman Temple – Kanchipuram",
        category: "temple",
        image: "https://t4.ftcdn.net/jpg/16/89/88/55/360_F_1689885560_mwtTwTxqyJHs0wwYSNToG9wpd9jS8gOb.jpg",
        time: "05:30 AM - 12:30 PM, 04:00 PM - 08:30 PM",
        price: "Free Entry",
        speciality: "Powerful Shakti Peetham",
        distance: "51.3 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Chennai Beach / Egmore Station", type: "transit", mode: "Train", time: "45 mins", description: "Head to Chennai Beach or Egmore station to board a train towards Chengalpattu.", icon: "train" },
            { location: "Chengalpattu Junction", type: "transit", mode: "Train", time: "45 mins", description: "Change train at Chengalpattu towards Kanchipuram.", icon: "train" },
            { location: "Kanchipuram Station", type: "transit", mode: "Auto / Walk", time: "30 mins", description: "Alight at Kanchipuram station and take an auto to the temple area.", icon: "truck-pickup" },
            { location: "Sri Kanchi Kamakshi Amman Temple", type: "end", mode: "Walk", time: "5 mins", description: "One of Tamil Nadu's biggest Shakti Peethas — the powerful Kamakshi Amman Temple.", icon: "place-of-worship" }
        ]
    },
    {
        id: 11,
        title: "Kundrathur Murugan Temple",
        category: "temple",
        image: "https://t4.ftcdn.net/jpg/16/89/88/55/360_F_1689885560_mwtTwTxqyJHs0wwYSNToG9wpd9jS8gOb.jpg",
        time: "06:00 AM - 12:00 PM, 04:00 PM - 08:30 PM",
        price: "Free Entry",
        speciality: "Hilltop Murugan Shrine",
        distance: "10.3 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate — very close!", icon: "location-dot" },
            { location: "Kundrathur Bus Stop", type: "transit", mode: "Bus 66P", time: "20 mins", description: "Board bus 66P from Poonamallee directly to Kundrathur.", icon: "bus" },
            { location: "Temple Foot Hill", type: "transit", mode: "Share Auto", time: "5 mins", description: "Take a share auto for the last 1.7 km to the temple foot hill.", icon: "truck-pickup" },
            { location: "Arulmigu Subramanya Swami Temple", type: "end", mode: "Walk / Steps", time: "10 mins", description: "Climb ~80 steps to reach the hilltop Lord Murugan temple with a wonderful view.", icon: "place-of-worship" }
        ]
    },
    {
        id: 12,
        title: "ISKCON Temple – Sholinganallur",
        category: "temple",
        image: "https://t4.ftcdn.net/jpg/16/89/88/55/360_F_1689885560_mwtTwTxqyJHs0wwYSNToG9wpd9jS8gOb.jpg",
        time: "04:30 AM - 01:00 PM, 04:30 PM - 08:30 PM",
        price: "Free Entry",
        speciality: "Grand Radha Krishna",
        distance: "32–41 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Guindy", type: "transit", mode: "Bus 154", time: "50 mins", description: "Take bus 154 from Poonamallee to Guindy, then change to bus 570 towards Sholinganallur.", icon: "bus" },
            { location: "Sholinganallur Bus Stop", type: "transit", mode: "Bus 570", time: "30 mins", description: "Alight at Sholinganallur bus stop.", icon: "bus" },
            { location: "ISKCON Chennai", type: "end", mode: "Share Auto", time: "5 mins", description: "Take a share auto for 2.4 km to reach the large and beautiful ISKCON temple complex.", icon: "place-of-worship" }
        ]
    },
    {
        id: 13,
        title: "Queensland Amusement Park",
        category: "amusement",
        image: "https://plus.unsplash.com/premium_photo-1687279092363-4358de4bb58c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW11c2VtZW50JTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
        time: "10:30 AM - 07:00 PM",
        price: "₹750–₹900 (Entry ticket)",
        speciality: "Water & Fun Rides",
        distance: "~8 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Queensland is just 8 km away — very close to college!", icon: "location-dot" },
            { location: "Queensland Amusement Park", type: "end", mode: "Share Auto", time: "15 mins", description: "Take a direct share auto from the college to Queensland. Best for group visits.", icon: "face-grin-stars" }
        ]
    },
    {
        id: 14,
        title: "Arignar Anna Zoological Park",
        category: "wildlife",
        image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8em9vfGVufDB8fDB8fHww",
        time: "09:00 AM - 05:00 PM (Tue Closed)",
        price: "₹80 (Adults) / ₹30 (Kids)",
        speciality: "India's Largest Zoo",
        distance: "~40 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Poonamallee Bus Terminus", type: "transit", mode: "Bus 297 / 66PX", time: "15 mins", description: "Board bus 297 or 66PX directly from Poonamallee to Vandalur Zoo.", icon: "bus" },
            { location: "Arignar Anna Zoological Park", type: "end", mode: "Walk", time: "5 mins", description: "Arrive at Vandalur Zoo — home to lion safari, elephants, tigers, reptiles and more.", icon: "paw" }
        ]
    },
    {
        id: 15,
        title: "Bharathiyar Nagar Beach (Ennore)",
        category: "beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
        time: "Open 24/7",
        price: "Free Entry",
        speciality: "Quiet & Scenic",
        distance: "~35 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "New Thiruvottiyur Ajax", type: "transit", mode: "Bus 101", time: "60 mins", description: "Take bus 101 from Poonamallee to New Thiruvottiyur Ajax bus stop.", icon: "bus" },
            { location: "Bharathiyar Nagar Beach", type: "end", mode: "Share Auto", time: "10 mins", description: "Take a share auto for 2 km to reach this quiet, less-crowded beach — great for photography.", icon: "umbrella-beach" }
        ]
    },
    {
        id: 16,
        title: "Semmozhi Poonga Botanical Garden",
        category: "garden",
        image: "https://media.istockphoto.com/id/157481806/photo/garden-flowers-xxxl.jpg?s=612x612&w=0&k=20&c=yGRrzhdpp1fprkEBl_5Dsctz6twbbD-gxVtZB1pTBUo=",
        time: "10:00 AM - 07:30 PM (Closed on Tuesdays)",
        price: "₹20 (Adults) / ₹10 (Children)",
        speciality: "500+ Plant Varieties",
        distance: "27.4 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Saidapet Police Station", type: "transit", mode: "Bus 154", time: "50 mins", description: "Take bus 154 from Poonamallee to Saidapet, then board bus 18A towards DMS.", icon: "bus" },
            { location: "DMS Bus Stop", type: "transit", mode: "Bus 18A", time: "15 mins", description: "Alight at DMS bus stop.", icon: "bus" },
            { location: "Semmozhi Poonga", type: "end", mode: "Share Auto", time: "5 mins", description: "Short share auto ride to the beautiful botanical garden with fountains and ponds.", icon: "leaf" }
        ]
    },
    {
        id: 17,
        title: "Kalaignar Centenary Park",
        category: "garden",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop",
        time: "06:00 AM - 08:00 PM",
        price: "₹100 (Adults) / ₹50 (Children)",
        speciality: "Modern Eco Park",
        distance: "19 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Chennai Central", type: "transit", mode: "Bus 101", time: "55 mins", description: "Take bus 101 from Poonamallee to Chennai Central, then board bus 18A towards US Embassy.", icon: "bus" },
            { location: "US Embassy Stop", type: "transit", mode: "Bus 18A", time: "15 mins", description: "Alight near US Embassy area.", icon: "bus" },
            { location: "Kalaignar Centenary Park", type: "end", mode: "Share Auto", time: "5 mins", description: "Short 500m share auto to the newly developed eco park built in honour of CM Kalaignar.", icon: "leaf" }
        ]
    },
    {
        id: 18,
        title: "Kovalam (Covelong) Beach",
        category: "beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
        time: "Open 24/7",
        price: "Free Entry",
        speciality: "Peaceful & Less Crowded",
        distance: "46 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Vandalur Gate", type: "transit", mode: "Bus 66X", time: "40 mins", description: "Take bus 66X from Poonamallee to Vandalur Gate.", icon: "bus" },
            { location: "Kovalam Bus Terminus", type: "transit", mode: "Bus 515B", time: "40 mins", description: "Board bus 515B from Vandalur Gate towards Kovalam BT.", icon: "bus" },
            { location: "Kovalam Beach", type: "end", mode: "Walk / Share Auto", time: "10 mins", description: "Walk 777m or take a share auto to the peaceful and less crowded Kovalam beach.", icon: "umbrella-beach" }
        ]
    },
    {
        id: 19,
        title: "Birla Planetarium – Science Centre",
        category: "museum",
        image: "https://indiano.travel/wp-content/uploads/2022/04/Beautiful-facade-at-the-Chennai-Government-Museum-Tamil-Nadu-India.jpg",
        time: "10:00 AM - 05:45 PM",
        price: "₹60 (Adults) / ₹30–₹40 (Students)",
        speciality: "3D Sky Theatre",
        distance: "35 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Guindy", type: "transit", mode: "Bus 54", time: "45 mins", description: "Take bus 54 from Poonamallee directly to Guindy.", icon: "bus" },
            { location: "B.M. Birla Planetarium", type: "end", mode: "Share Auto", time: "10 mins", description: "Share auto for 3 km to reach the Periyar Science & Technology Centre campus — home to space shows in Tamil & English.", icon: "star" }
        ]
    },
    {
        id: 20,
        title: "Government Museum – Egmore",
        category: "museum",
        image: "https://indiano.travel/wp-content/uploads/2022/04/Beautiful-facade-at-the-Chennai-Government-Museum-Tamil-Nadu-India.jpg",
        time: "09:30 AM - 05:00 PM (Fri Closed)",
        price: "₹15–₹25 (Adults) / ₹10–₹15 (Students)",
        speciality: "2nd Largest in India",
        distance: "20.3 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Egmore Bus Stop", type: "transit", mode: "Bus 101", time: "55 mins", description: "Take bus 101 from Poonamallee directly to Egmore.", icon: "bus" },
            { location: "Government Museum Chennai", type: "end", mode: "Share Auto", time: "10 mins", description: "Short 1.5 km share auto to the museum — famous for ancient sculptures, coins, fossils, and historic artifacts.", icon: "building-columns" }
        ]
    },
    {
        id: 21,
        title: "Vivekananda House Museum",
        category: "museum",
        image: "https://indiano.travel/wp-content/uploads/2022/04/Beautiful-facade-at-the-Chennai-Government-Museum-Tamil-Nadu-India.jpg",
        time: "10:00 AM - 12:30 PM, 03:00 PM - 07:00 PM",
        price: "₹20 (Adults) / ₹10–₹15 (Students)",
        speciality: "Swami Vivekananda Heritage",
        distance: "25 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Vivekananda House", type: "transit", mode: "Bus 25", time: "60 mins", description: "Take bus 25 from Poonamallee directly to Vivekananda House stop near Marina.", icon: "bus" },
            { location: "Vivekananda House", type: "end", mode: "Walk", time: "2 mins", description: "Historic building where Swami Vivekananda stayed in 1897 after returning from the Chicago Parliament of Religions.", icon: "landmark" }
        ]
    },
    {
        id: 22,
        title: "Natesan Park – T. Nagar",
        category: "garden",
        image: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?q=80&w=2076&auto=format&fit=crop",
        time: "06:00 AM - 08:00 PM",
        price: "Free Entry",
        speciality: "Peaceful City Garden",
        distance: "19.6 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Nandanam YMCA", type: "transit", mode: "Bus 54", time: "45 mins", description: "Take bus 54 from Poonamallee to Nandanam YMCA stop.", icon: "bus" },
            { location: "Dr. Natesan Park", type: "end", mode: "Share Auto", time: "8 mins", description: "Short 1 km share auto to one of the most peaceful parks in busy T. Nagar — beautiful trees, flowers, and green lawns.", icon: "leaf" }
        ]
    },
    {
        id: 23,
        title: "MGM Dizzee World",
        category: "amusement",
        image: "https://plus.unsplash.com/premium_photo-1687279092363-4358de4bb58c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW11c2VtZW50JTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
        time: "10:30 AM - 06:30 PM",
        price: "₹700–₹800 (Adults) / ₹500–₹600 (Children)",
        speciality: "Thrilling Water Rides",
        distance: "30.3 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "L.B. Road Jayanthi Theatre (Thiruvanmiyur)", type: "transit", mode: "Bus 49X", time: "60 mins", description: "Take bus 49X from Poonamallee to Thiruvanmiyur L.B. Road.", icon: "bus" },
            { location: "Muttukadu", type: "transit", mode: "Bus 109T / 588", time: "20 mins", description: "Board bus 109T or 588 towards Muttukadu.", icon: "bus" },
            { location: "MGM Dizzee World", type: "end", mode: "Walk", time: "2 mins", description: "100m walk to MGM Dizzee World — one of Chennai's most popular amusement parks with thrilling and water rides.", icon: "face-grin-stars" }
        ]
    },
    {
        id: 24,
        title: "VGP Universal Kingdom",
        category: "amusement",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
        time: "10:00 AM - 06:00 PM",
        price: "₹600–₹700 (Adults) / ₹500–₹550 (Children)",
        speciality: "Chennai's Oldest Theme Park",
        distance: "30.3 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Adyar", type: "transit", mode: "Bus 49F", time: "55 mins", description: "Take bus 49F from Poonamallee towards Adyar.", icon: "bus" },
            { location: "VGP Golden Beach", type: "transit", mode: "Bus 99", time: "20 mins", description: "Board bus 99 from Adyar towards VGP Golden Beach.", icon: "bus" },
            { location: "VGP Universal Kingdom", type: "end", mode: "Walk", time: "3 mins", description: "Walk to VGP Universal Kingdom — one of the oldest and most famous amusement parks in Chennai.", icon: "face-grin-stars" }
        ]
    },
    {
        id: 25,
        title: "Kishkinta Theme Park",
        category: "amusement",
        image: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?q=80&w=2076&auto=format&fit=crop",
        time: "10:00 AM - 06:00 PM",
        price: "₹700–₹800 (Adults) / ₹600–₹650 (Children)",
        speciality: "Wave Pools & Rides",
        distance: "14.4 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate — Kishkinta is close!", icon: "location-dot" },
            { location: "Varadharajapuram", type: "transit", mode: "Bus 297", time: "30 mins", description: "Take bus 297 from Poonamallee directly to Varadharajapuram.", icon: "bus" },
            { location: "Kishkinta Theme Park", type: "end", mode: "Share Auto", time: "8 mins", description: "Short 1.7 km share auto to Kishkinta — famous for wave pools, large water rides, and thrilling family rides.", icon: "face-grin-stars" }
        ]
    },
    {
        id: 26,
        title: "Pondy Bazaar – T. Nagar",
        category: "shopping",
        image: "https://images.unsplash.com/photo-1555529669-2269763671c0?q=80&w=2070&auto=format&fit=crop",
        time: "10:00 AM - 09:30 PM",
        price: "Free Entry",
        speciality: "Affordable Street Shopping",
        distance: "19.9 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Panagal Park", type: "transit", mode: "Bus 49A", time: "50 mins", description: "Take bus 49A from Poonamallee directly to Panagal Park in T. Nagar.", icon: "bus" },
            { location: "Pondy Bazaar", type: "end", mode: "Walk / Share Auto", time: "8 mins", description: "Walk 1 km or take a share auto to Pondy Bazaar — Chennai's most famous street for clothes, footwear, bags, and accessories at affordable prices.", icon: "bag-shopping" }
        ]
    },
    {
        id: 27,
        title: "Chennai Citi Centre Mall",
        category: "shopping",
        image: "https://images.unsplash.com/photo-1555529669-2269763671c0?q=80&w=2070&auto=format&fit=crop",
        time: "10:00 AM - 10:00 PM",
        price: "Free Entry",
        speciality: "Near Marina & Mylapore",
        distance: "25.8 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Vanavil", type: "transit", mode: "Bus 54", time: "45 mins", description: "Take bus 54 from Poonamallee towards Vanavil, then board bus 12B.", icon: "bus" },
            { location: "Kalyani Hospital Stop", type: "transit", mode: "Bus 12B", time: "20 mins", description: "Alight at Kalyani Hospital stop.", icon: "bus" },
            { location: "Chennai Citi Centre", type: "end", mode: "Walk / Share Auto", time: "5 mins", description: "250m walk or share auto to Chennai Citi Centre Mall — near Marina Beach and Mylapore, with shopping, restaurants, and entertainment.", icon: "bag-shopping" }
        ]
    },
    {
        id: 28,
        title: "Ampa Skywalk Mall",
        category: "shopping",
        image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2070&auto=format&fit=crop",
        time: "10:00 AM - 10:00 PM",
        price: "Free Entry",
        speciality: "Iconic Skywalk Design",
        distance: "15.8 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Arignar Anna Arch (Koyambedu)", type: "transit", mode: "Bus 101", time: "30 mins", description: "Take bus 101 from Poonamallee to Arignar Anna Arch at Koyambedu.", icon: "bus" },
            { location: "Ampa Skywalk Mall", type: "end", mode: "Walk / Share Auto", time: "8 mins", description: "600m walk or share auto to Ampa Skywalk Mall — known for its skywalk design connecting branded stores, electronics, and lifestyle shops.", icon: "bag-shopping" }
        ]
    },
    {
        id: 29,
        title: "Adyar Eco Park",
        category: "garden",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop",
        time: "06:00 AM - 07:00 PM",
        price: "₹100–₹150 (Adults) / ₹50–₹75 (Students)",
        speciality: "Mangrove & Bird Sanctuary",
        distance: "30.6 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Annamalaipuram Music College", type: "transit", mode: "Bus 49F", time: "60 mins", description: "Take bus 49F from Poonamallee to Annamalaipuram Music College stop.", icon: "bus" },
            { location: "Tholkappia Poonga (Adyar Eco-Park)", type: "end", mode: "Walk / Share Auto", time: "5 mins", description: "400m walk or share auto to the Adyar Eco Park — a mangrove restoration area near the Adyar River estuary, home to birds, butterflies, and diverse plants.", icon: "leaf" }
        ]
    },
    {
        id: 30,
        title: "Mayajaal Entertainment Complex",
        category: "amusement",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop",
        time: "10:00 AM - 11:00 PM",
        price: "Free Entry (Pay per activity)",
        speciality: "Mega Multiplex & Gaming",
        distance: "40.2 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "L.B. Road Jayanthi Theatre (Thiruvanmiyur)", type: "transit", mode: "Bus 49X", time: "60 mins", description: "Take bus 49X from Poonamallee to L.B. Road Thiruvanmiyur.", icon: "bus" },
            { location: "Kanathur", type: "transit", mode: "Bus 109", time: "20 mins", description: "Board bus 109 from Thiruvanmiyur towards Kanathur.", icon: "bus" },
            { location: "Mayajaal Multiplex", type: "end", mode: "Walk", time: "3 mins", description: "290m walk to Mayajaal — one of Chennai's largest entertainment complexes with a large multiplex, gaming zones, bowling, and restaurants.", icon: "film" }
        ]
    },
    {
        id: 31,
        title: "VR Gaming Zone – VR Mall",
        category: "amusement",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop",
        time: "10:00 AM - 10:00 PM",
        price: "₹150–₹300 per game / ₹400–₹500 (Premium VR)",
        speciality: "Immersive VR Experience",
        distance: "13.2 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Mettukulam", type: "transit", mode: "Bus 101 / 101CT / 553W", time: "30 mins", description: "Take bus 101, 101CT, 101X or 553W from Poonamallee to Mettukulam stop.", icon: "bus" },
            { location: "VR Chennai Mall", type: "end", mode: "Share Auto", time: "8 mins", description: "1.8 km share auto to VR Chennai — experience VR racing, shooting, roller coaster simulation, and adventure games with VR headsets.", icon: "vr-cardboard" }
        ]
    },
    {
        id: 32,
        title: "Blitz Go-Karting Track",
        category: "amusement",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
        time: "10:00 AM - 09:00 PM",
        price: "₹250–₹400 (per session, based on laps)",
        speciality: "Real Kart Racing",
        distance: "32.5 km",
        route: [
            { location: "Saveetha College (Simats)", type: "start", description: "Start from the college gate.", icon: "location-dot" },
            { location: "Tambaram", type: "transit", mode: "Bus 66P", time: "40 mins", description: "Take bus 66P from Poonamallee towards Tambaram.", icon: "bus" },
            { location: "Water Supply Headworks (Panaiyur)", type: "transit", mode: "Bus 99", time: "25 mins", description: "Board bus 99 from Tambaram towards Panaiyur Water Supply Headworks.", icon: "bus" },
            { location: "Kart Attack – Blitz Go-Karting", type: "end", mode: "Walk / Share Auto", time: "5 mins", description: "350m walk or share auto to one of Chennai's best go-kart tracks — real high-speed racing with professional track design and full safety gear.", icon: "flag-checkered" }
        ]
    },
    {
        id: 33,
        title: "Pulicat Lake & Bird Sanctuary (Pazhaverkadu)",
        category: "wildlife",
        image: "https://res.cloudinary.com/roundglass/image/upload/f_auto/v1616563702/roundglass/pulicat-lake-sunset-m-yuvan_ohkb0f.jpg",
        time: "06:00 AM - 05:00 PM",
        price: "Boating: ₹100–₹300",
        speciality: "2nd largest brackish water lake in India, Flamingos, Pelicans",
        distance: "68.4 km",
        route: [
            { location: "Poonamallee", type: "start", description: "Start your journey.", icon: "location-dot" },
            { location: "Red Hills", type: "transit", mode: "Bus 66", time: "45 mins", description: "Take bus 66 to Red Hills.", icon: "bus" },
            { location: "Pazhaverkadu (Pulicat)", type: "transit", mode: "Bus 558B", time: "1 hr", description: "Board 558B from Red Hills to Pulicat.", icon: "bus" },
            { location: "Pulicat Lake", type: "end", mode: "Walk / Auto", time: "5 mins", description: "Short 400m walk or auto to the lake for boating and bird watching.", icon: "water" }
        ]
    }
];

const mapLinks = {
  "Guindy National Park": "https://maps.google.com/?q=Guindy+National+Park",
  "Birla Planetarium": "https://maps.google.com/?q=Birla+Planetarium+Chennai",
  "Government Museum, Egmore": "https://maps.google.com/?q=Government+Museum+Egmore",
  "Marina Beach": "https://maps.google.com/?q=Marina+Beach+Chennai",
  "Mahabalipuram Shore Temple": "https://maps.google.com/?q=Mahabalipuram",
  "Covelong (Kovalam) Beach": "https://maps.google.com/?q=Kovalam+Beach+Chennai",
  "Arunachalam Temple – Tiruvannamalai": "https://maps.google.com/?q=Annamalaiyar+Temple+Tiruvannamalai",
  "Kapaleeshwarar Temple – Mylapore": "https://maps.google.com/?q=Kapaleeshwarar+Temple+Mylapore",
  "Parthasarathy Temple – Triplicane": "https://maps.google.com/?q=Parthasarathy+Temple+Triplicane",
  "Kamakshi Amman Temple – Kanchipuram": "https://maps.google.com/?q=Kamakshi+Amman+Temple+Kanchipuram",
  "Kundrathur Murugan Temple": "https://maps.google.com/?q=Kundrathur+Murugan+Temple",
  "ISKCON Temple – Sholinganallur": "https://maps.google.com/?q=ISKCON+Temple+Chennai",
  "Queensland Amusement Park": "https://maps.google.com/?q=Queensland+Amusement+Park+Chennai",
  "Arignar Anna Zoological Park": "https://maps.google.com/?q=Arignar+Anna+Zoological+Park",
  "Bharathiyar Nagar Beach (Ennore)": "https://maps.google.com/?q=Bharathiyar+Nagar+Beach+Ennore",
  "Semmozhi Poonga Botanical Garden": "https://maps.google.com/?q=Semmozhi+Poonga",
  "Kalaignar Centenary Park": "https://maps.google.com/?q=Kalaignar+Centenary+Park",
  "Kovalam (Covelong) Beach": "https://maps.google.com/?q=Kovalam+Beach+Chennai",
  "Birla Planetarium – Science Centre": "https://maps.google.com/?q=Birla+Planetarium+Chennai",
  "Government Museum – Egmore": "https://maps.google.com/?q=Government+Museum+Egmore",
  "Vivekananda House Museum": "https://maps.google.com/?q=Vivekananda+House+Chennai",
  "Natesan Park – T. Nagar": "https://maps.google.com/?q=Dr+Natesan+Park+T+Nagar",
  "MGM Dizzee World": "https://maps.google.com/?q=MGM+Dizzee+World",
  "VGP Universal Kingdom": "https://maps.google.com/?q=VGP+Universal+Kingdom",
  "Kishkinta Theme Park": "https://maps.google.com/?q=Kishkinta+Theme+Park",
  "Pondy Bazaar – T. Nagar": "https://maps.google.com/?q=Pondy+Bazaar+T+Nagar",
  "Chennai Citi Centre Mall": "https://maps.google.com/?q=Chennai+Citi+Centre",
  "Ampa Skywalk Mall": "https://maps.google.com/?q=Ampa+Skywalk+Mall",
  "Adyar Eco Park": "https://maps.google.com/?q=Adyar+Eco+Park+Tholkappia+Poonga",
  "Mayajaal Entertainment Complex": "https://maps.google.com/?q=Mayajaal+Multiplex",
  "VR Gaming Zone – VR Mall": "https://maps.google.com/?q=VR+Chennai+Mall",
  "Blitz Go-Karting Track": "https://maps.google.com/?q=Kart+Attack+Chennai",
  "Pulicat Lake & Bird Sanctuary (Pazhaverkadu)": "https://maps.google.com/?q=Pulicat+Lake"
};

const grid = document.getElementById('destinationsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Modal elements
const modal = document.getElementById('routeModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalTimings = document.getElementById('modalTimings');
const modalPrice = document.getElementById('modalPrice');
const modalCategory = document.getElementById('modalCategory');
const modalDistance = document.getElementById('modalDistance');
const routeTimeline = document.getElementById('routeTimeline');


const categoryIcons = {
    'wildlife': '<i class="fa-solid fa-paw"></i>',
    'museum': '<i class="fa-solid fa-building-columns"></i>',
    'beach': '<i class="fa-solid fa-umbrella-beach"></i>',
    'mountain': '<i class="fa-solid fa-mountain-sun"></i>',
    'temple': '<i class="fa-solid fa-place-of-worship"></i>',
    'amusement': '<i class="fa-solid fa-face-grin-stars"></i>',
    'garden': '<i class="fa-solid fa-seedling"></i>',
    'shopping': '<i class="fa-solid fa-bag-shopping"></i>'
};

function renderDestinations(filter = 'all') {
    grid.innerHTML = '';
    
    const filtered = filter === 'all' ? destinations : destinations.filter(d => d.category === filter);
    
    filtered.forEach((dest, index) => {
        const delay = index * 0.1;
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animation = `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s backwards`;
        
        card.innerHTML = `
            <div class="card-img" onclick="this.parentElement.click()">
                <img src="${dest.image}" alt="${dest.title}">
                <span class="category-badge">${categoryIcons[dest.category] || ''} ${dest.category.charAt(0).toUpperCase() + dest.category.slice(1)}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title" onclick="this.parentElement.parentElement.click()">${dest.title}</h3>
                <div class="card-info" onclick="this.parentElement.parentElement.click()">
                    <div class="info-item"><i class="fa-solid fa-route"></i> ${dest.distance} away from Simats</div>
                    <div class="info-item"><i class="fa-regular fa-clock"></i> ${dest.time.split('-')[0].trim()} Onwards</div>
                    <div class="info-item"><i class="fa-solid fa-ticket"></i> ${dest.price.split('(')[0].trim()}</div>
                    ${dest.speciality ? `<div class="info-item speciality-item"><i class="fa-solid fa-star"></i> ${dest.speciality}</div>` : ''}
                </div>
                <div class="card-actions">
                    <a href="${mapLinks[dest.title] || '#'}" target="_blank" class="map-link-btn" onclick="event.stopPropagation()">
                        <i class="fa-solid fa-location-dot"></i>
                    </a>
                    <button class="view-route-btn" onclick="event.stopPropagation(); openModalText(${dest.id})">
                        <span>View Route</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(dest));
        grid.appendChild(card);
    });
}

function openModalText(id) {
    const dest = destinations.find(d => d.id === id);
    if(dest) openModal(dest);
}

function openModal(dest) {
    modalTitle.textContent = dest.title;
    modalImage.src = dest.image;
    modalTimings.textContent = dest.time;
    modalPrice.textContent = dest.price;
    modalDistance.textContent = dest.distance;
    
    // Set category badge
    modalCategory.innerHTML = `${categoryIcons[dest.category] || ''} ${dest.category}`;
    
    // Generate timeline
    routeTimeline.innerHTML = dest.route.map((step, index) => `
        <div class="timeline-item ${step.type} animate-timeline" style="animation-delay: ${0.2 + (index * 0.15)}s">
            <div class="timeline-icon">
                <i class="fa-solid fa-${step.icon || 'circle'}"></i>
            </div>
            <div class="timeline-content">
                <h4>${step.location}</h4>
                <p>${step.description}</p>

                ${step.mode ? `
                <div class="transport-meta">
                    <span class="transport-mode"><i class="fa-solid fa-ticket-simple"></i> ${step.mode}</span>
                    ${step.time ? `<span class="transport-time"><i class="fa-regular fa-clock"></i> ${step.time}</span>` : ''}
                </div>
                ` : ''}
            </div>
        </div>
    `).join('');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Use Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderDestinations(btn.dataset.filter);
    });
});



// Initial render
renderDestinations();
