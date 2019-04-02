const cars = [{
    "make": "Abarth",
    "model": ["124 Spider", "500", "500C", "595", "695", "Grande Punto", "Punto Evo"]
}, {
    "make": "AC",
    "model": ["378 GT Zagato", "Ace", "Aceca", "Cobra"]
}, {
    "make": "Acura",
    "model": ["CL", "CSX", "EL", "ILX", "Integra", "Legend", "MDX", "NSX", "RDX", "RL", "RLX", "RSX", "SLX", "TL", "TLX", "TSX", "ZDX"]
}, {
    "make": "Alfa Romeo",
    "model": ["105/115", "145", "146", "147", "155", "156", "159", "164", "166", "1900", "2600", "33", "4C", "6", "6C", "75", "8C Competizione", "90", "Alfasud", "Alfetta", "Arna", "Brera", "Disco Volante", "Giulia", "Giulietta", "GT", "GTA Coupe", "GTV", "MiTo", "Montreal", "RZ", "Spider", "Sprint", "Stelvio", "SZ"]
}, {
    "make": "Alpina",
    "model": ["B10", "B11", "B12", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "C1", "C2", "D10", "D3", "D5", "Roadster", "XD3"]
}, {
    "make": "Alpine",
    "model": ["A110", "A310", "A610", "GTA"]
}, {
    "make": "AM General",
    "model": ["HMMWV (Humvee)"]
}, {
    "make": "AMC",
    "model": ["Hornet"]
}, {
    "make": "Ariel",
    "model": ["Atom"]
}, {
    "make": "Aro",
    "model": ["10", "24"]
}, {
    "make": "Aston Martin",
    "model": ["Bulldog", "Cygnet", "DB AR1", "DB11", "DB5", "DB7", "DB9", "DBS", "Lagonda", "One-77", "Rapide", "Tickford Capri", "V12 Vanquish", "V12 Vantage", "V12 Zagato", "V8 Vantage", "V8 Zagato", "Virage"]
}, {
    "make": "Audi",
    "model": ["100", "200", "50", "5000", "80", "90", "920", "A1", "A2", "A3", "A4", "A4 allroad", "A5", "A6", "A6 allroad", "A7", "A8", "Cabriolet", "Coupe", "e-tron", "NSU RO 80", "Q2", "Q3", "Q5", "Q7", "Q8", "quattro", "R8", "RS Q3", "RS2", "RS3", "RS4", "RS5", "RS6", "RS7", "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "SQ2", "SQ5", "SQ7", "TT", "TT RS", "TTS", "Typ R", "V8"]
}, {
    "make": "Aurus",
    "model": ["Senat"]
}, {
    "make": "Austin",
    "model": ["Allegro", "Ambassador", "Maestro", "Maxi", "Metro", "Mini", "Montego", "Princess", "Sprite"]
}, {
    "make": "Autobianchi",
    "model": ["A 112"]
}, {
    "make": "Bentley",
    "model": ["Arnage", "Azure", "Bentayga", "Brooklands", "Continental", "Continental Flying Spur", "Continental GT", "Eight", "Flying Spur", "Mark VI", "Mulsanne", "R Type", "S", "T-Series", "Turbo R"]
}, {
    "make": "BMW",
    "model": ["02 (E10)", "1er", "1M", "2000 C/CS", "2er", "2er Active Tourer", "2er Grand Tourer", "3/15", "315", "3200", "321", "326", "327", "340", "3er", "4er", "501", "502", "503", "507", "5er", "600", "6er", "700", "7er", "8er", "E3", "E9", "i3", "i8", "M2", "M3", "M4", "M5", "M6", "New Class", "X1", "X2 Concept", "X3", "X3 M", "X4", "X4 M", "X5", "X5 M", "X6", "X6 M", "X7", "Z1", "Z3", "Z3 M", "Z4", "Z4 M", "Z8"]
}, {
    "make": "Brabus",
    "model": ["7.3S", "M V12", "ML 63 Biturbo", "SV12"]
}, {
    "make": "Bugatti",
    "model": ["Chiron", "EB 110", "EB 112", "EB Veyron 16.4", "Type 55"]
}, {
    "make": "Buick",
    "model": ["Century", "Electra", "Enclave", "Encore", "Envision", "Estate Wagon", "Excelle", "GL8", "GS", "LaCrosse", "LeSabre", "Limited", "Lucerne", "Park Avenue", "Rainer", "Reatta", "Regal", "Rendezvous", "Riviera", "Roadmaster", "Skyhawk", "Skylark", "Special", "Super", "Terraza", "Verano", "Wildcat"]
}, {
    "make": "Cadillac",
    "model": ["Allante", "ATS", "ATS-V", "BLS", "Brougham", "Catera", "CT6", "CTS", "CTS-V", "De Ville", "DTS", "Eldorado", "ELR", "Escalade", "Fleetwood", "LSE", "Series 62", "Seville", "Sixty Special", "SRX", "STS", "XLR", "XT5", "XTS"]
}, {
    "make": "Chevrolet",
    "model": ["Alero", "Astra", "Astro", "Avalanche", "Aveo", "Bel Air", "Beretta", "Blazer", "Blazer K5", "Bolt", "C-10", "C/K", "Camaro", "Caprice", "Captiva", "Cavalier", "Celebrity", "Celta", "Chevelle", "Chevette", "Citation", "Classic", "Cobalt", "Colorado", "Corsa", "Corsica", "Corvair", "Corvette", "Cruze", "Cruze (HR)", "Deluxe", "El Camino", "Epica", "Equinox", "Evanda", "Express", "Fleetmaster", "HHR", "Impala", "Kalos", "Lacetti", "Lanos", "Lumina", "Lumina APV", "LUV D-MAX", "Malibu", "Master", "Matiz", "Metro", "Monte Carlo", "Monza", "MW", "Niva", "Nubira", "Omega", "Orlando", "Prizm", "Rezzo", "S-10 Pickup", "Sail", "Silverado", "Sonic", "Spark", "Special DeLuxe", "Spin", "SS", "SSR", "Starcraft", "Suburban", "Tacuma", "Tahoe", "Tavera", "Tracker", "TrailBlazer", "Trans Sport", "Traverse", "Uplander", "Van", "Vectra", "Venture", "Viva", "Volt", "Zafira"]
}, {
    "make": "Chrysler",
    "model": ["180", "200", "300", "300 Letter Series", "300C", "300C SRT8", "300M", "Aspen", "Cirrus", "Concorde", "Cordoba", "Crossfire", "Daytona", "Dynasty", "Fifth Avenue", "Imperial", "Imperial Crown", "Intrepid", "Le Baron", "LHS", "Nassau", "Neon", "New Yorker", "Newport", "Pacifica", "Prowler", "PT Cruiser", "Saratoga", "Sebring", "Stratus", "TC by Maserati", "Town & Country", "Viper", "Vision", "Voyager", "Windsor"]
}, {
    "make": "Citroen",
    "model": ["2 CV", "AMI", "AX", "Berlingo", "BX", "C-Crosser", "C-Elysee", "C-Quatre", "C-Triomphe", "C-ZERO", "C1", "C2", "C3", "C3 Aircross", "C3 Picasso", "C4", "C4 Aircross", "C4 Cactus", "C4 Picasso", "C4 SpaceTourer", "C5", "C5 Aircross", "C6", "C8", "CX", "DS", "DS3", "DS4", "DS5", "Dyane", "E-Mehari", "Evasion", "GS", "Jumpy", "LN", "Nemo", "Saxo", "SM", "Spacetourer", "Traction Avant", "Visa", "Xantia", "XM", "Xsara", "ZX"]
}, {
    "make": "Dacia",
    "model": ["1300", "1310", "1325", "1410", "Dokker", "Duster", "Lodgy", "Logan", "Nova", "Pick-Up", "Sandero", "Solenza", "SuperNova"]
}, {
    "make": "Dadi",
    "model": ["City Leading", "Shuttle", "Smoothing"]
}, {
    "make": "Daewoo",
    "model": ["Alpheon", "Arcadia", "Damas", "Espero", "G2X", "Gentra", "Kalos", "Korando", "Lacetti", "Lacetti Premiere", "Lanos", "Leganza", "LeMans", "Magnus", "Matiz", "Matiz Creative", "Musso", "Nexia", "Nubira", "Prince", "Racer", "Rezzo", "Royale", "Sens", "Tacuma", "Tico", "Tosca", "Winstorm"]
}, {
    "make": "Daimler",
    "model": ["DS420", "Sovereign (XJ6)", "SP250", "X300", "X308", "X350", "XJ40", "XJS"]
}, {
    "make": "Datsun",
    "model": ["240Z", "280ZX", "720", "Bluebird", "Cherry", "GO", "GO+", "Laurel", "mi-DO", "on-DO", "Stanza", "Sunny", "Urvan", "Violet"]
}, {
    "make": "Dodge",
    "model": ["600", "Aries", "Avenger", "Caliber", "Caravan", "Challenger", "Charger", "Charger Daytona", "Custom Royal", "D/W Series", "D8", "Dakota", "Dart", "Daytona", "Diplomat", "Durango", "Dynasty", "Intrepid", "Journey", "Lancer", "Magnum", "Mayfair", "Monaco", "Neon", "Nitro", "Omni", "Raider", "RAM", "Ramcharger", "Shadow", "Spirit", "Stealth", "Stratus", "Viper", "WC"]
}, {
    "make": "Ferrari",
    "model": ["208/308", "250 GTO", "328", "348", "360", "400", "412", "456", "458", "488", "512 BB", "512 M", "512 TR", "550", "575M", "599", "612", "812 Superfast", "California", "Dino 206 GT", "Dino 246 GT", "Enzo", "F12berlinetta", "F355", "F40", "F430", "F50", "F8 Tributo", "FF", "FXX K", "GTC4Lusso", "LaFerrari", "Mondial", "Portofino", "Testarossa"]
}, {
    "make": "Fiat",
    "model": ["124", "124 Spider", "124 Sport Spider", "125", "126", "127", "128", "130", "131", "132", "238", "500", "500L", "500X", "508", "600", "900T", "Albea", "Argenta", "Barchetta", "Brava", "Bravo", "Cinquecento", "Coupe", "Croma", "Doblo", "Duna", "Fiorino", "Freemont", "Fullback", "Idea", "Linea", "Marea", "Multipla", "Palio", "Panda", "Punto", "Qubo", "Regata", "Ritmo", "Scudo", "Sedici", "Seicento", "Siena", "Stilo", "Strada", "Tipo", "Ulysse", "Uno", "X 1/9"]
}, {
    "make": "Fisker",
    "model": ["Karma"]
}, {
    "make": "Ford",
    "model": ["Aerostar", "B-MAX", "Bronco", "Bronco-II", "C-MAX", "Capri", "Consul", "Contour", "Cougar", "Crown Victoria", "Custom", "Econoline", "EcoSport", "Edge", "Escape", "Escort", "Escort (North America)", "Everest", "Excursion", "Expedition", "Explorer", "Explorer Sport Trac", "F-150", "Fairlane", "Fairmont", "Falcon", "Festiva", "Fiesta", "Fiesta ST", "Five Hundred", "Flex", "Focus", "Focus (North America)", "Focus RS", "Focus ST", "Freda", "Freestar", "Freestyle", "Fusion", "Fusion (North America)", "Galaxie", "Galaxy", "GPA", "Granada", "Granada (North America)", "GT", "GT40", "Ikon", "Ixion", "KA", "Kuga", "Laser", "LTD Crown Victoria", "M151", "Mainline", "Maverick", "Model A", "Model T", "Mondeo", "Mondeo ST", "Mustang", "Orion", "Probe", "Puma", "Ranchero", "Ranger", "Ranger (North America)", "S-MAX", "Scorpio", "Sierra", "Spectron", "Taunus", "Taurus", "Taurus X", "Telstar", "Territory", "Thunderbird", "Torino", "Tourneo Connect", "Tourneo Courier", "Tourneo Custom", "V8", "Windstar", "Zephyr"]
}, {
    "make": "Genesis",
    "model": ["G70", "G80", "G90"]
}, {
    "make": "Geo",
    "model": ["Metro", "Prizm", "Spectrum", "Storm", "Tracker"]
}, {
    "make": "GMC",
    "model": ["Acadia", "Canyon", "Envoy", "Jimmy", "Safari", "Savana", "Sierra", "Sonoma", "Suburban", "Syclone", "Terrain", "Typhoon", "Vandura", "Yukon"]
}, {
    "make": "Honda",
    "model": ["145", "Accord", "Acty", "Airwave", "Ascot", "Ascot Innova", "Avancier", "Ballade", "Beat", "Brio", "Capa", "City", "Civic", "Civic Ferio", "Civic Type R", "Concerto", "CR-V", "CR-X", "CR-Z", "Crossroad", "Crosstour", "Domani", "Edix", "Element", "Elysion", "FCX Clarity", "Fit", "Fit Aria", "Fit Shuttle", "FR-V", "Freed", "Grace", "Horizon", "HR-V", "Insight", "Inspire", "Integra", "Integra SJ", "Jade", "Jazz", "Lagreat", "Legend", "Life", "Logo", "MDX", "Mobilio", "Mobilio Spike", "N-BOX", "N-One", "N-WGN", "N360", "NSX", "Odyssey", "Odyssey (North America)", "Orthia", "Partner", "Passport", "Pilot", "Prelude", "Quint", "Rafaga", "Ridgeline", "S-MX", "S2000", "S500", "S600", "S660", "Saber", "Shuttle", "Stepwgn", "Stream", "Street", "That'S", "Today", "Torneo", "Vamos", "Vezel", "Vigor", "Z", "Zest"]
}, {
    "make": "Hummer",
    "model": ["H1", "H2", "H3"]
}, {
    "make": "Hyundai",
    "model": ["Accent", "Aslan", "Atos", "Avante", "Azera", "Centennial", "Click", "Coupe", "Creta", "Dynasty", "Elantra", "Entourage", "EON", "Equus", "Excel", "Galloper", "Genesis", "Genesis Coupe", "Getz", "Grace", "Grand Starex Urban", "Grandeur", "H200", "i10", "i20", "i30", "i30 N", "i40", "IONIQ", "ix20", "ix35", "ix55", "Kona", "Lantra", "Lavita", "Marcia", "Matrix", "Maxcruz", "Palisade", "Pony", "Santa Fe", "Scoupe", "Solaris", "Sonata", "Starex", "Starex (H-1)", "Stellar", "Terracan", "Tiburon", "Trajet", "Tucson", "Tuscani", "Veloster", "Veracruz", "Verna", "XG"]
}, {
    "make": "Infiniti",
    "model": ["EX", "FX", "G", "I", "J", "JX", "M", "Q", "Q30", "Q40", "Q50", "Q60", "Q70", "QX30", "QX4", "QX50", "QX56", "QX60", "QX70", "QX80"]
}, {
    "make": "Invicta",
    "model": ["S1"]
}, {
    "make": "Isuzu",
    "model": ["117", "Amigo", "Ascender", "Aska", "Axiom", "Bighorn", "D-Max", "Fargo", "Fargo Filly", "Florian", "Gemini", "Hombre", "Impulse", "KB", "MU", "MU-7", "MU-X", "Piazza", "Rodeo", "Stylus", "TF (Pickup)", "Trooper", "VehiCross", "Wizard"]
}, {
    "make": "Jaguar",
    "model": ["E-Pace", "E-type", "F-Pace", "F-Type", "F-Type SVR", "I-Pace", "Mark 2", "S-Type", "X-Type", "XE", "XF", "XFR", "XJ", "XJ220", "XJR", "XJS", "XK", "XKR"]
}, {
    "make": "Jeep",
    "model": ["Cherokee", "CJ", "Commander", "Compass", "Grand Cherokee", "Grand Cherokee SRT8", "Grand Wagoneer", "Liberty (North America)", "Liberty (Patriot)", "Renegade", "Wrangler"]
}, {
    "make": "Kia",
    "model": ["Avella", "Cadenza", "Capital", "Carens", "Carnival", "Carstar", "Cee'd", "Cee'd GT", "Cerato", "Clarus", "Concord", "Elan", "Enterprise", "Forte", "Joice", "K3", "K5", "K7", "K9", "K900", "Lotze", "Magentis", "Mentor", "Mohave (Borrego)", "Morning", "Niro", "Opirus", "Optima", "Picanto", "Potentia", "Pregio", "Pride", "Quanlima", "Quoris", "Ray", "Retona", "Rio", "Sedona", "Sephia", "Shuma", "Sorento", "Soul", "Spectra", "Sportage", "Stinger", "Stonic", "Towner", "Venga", "Visto", "X-Trek"]
}, {
    "make": "Koenigsegg",
    "model": ["Agera", "CC8S", "CCR", "CCX", "One:1", "Regera"]
}, {
    "make": "Lamborghini",
    "model": ["350/400 GT", "Aventador", "Centanario", "Countach", "Diablo", "Egoista", "Espada", "Gallardo", "Huracán", "Islero", "Jalpa", "Jarama", "LM001", "LM002", "Miura", "Murcielago", "Reventon", "Sesto Elemento", "Silhouette", "Urraco", "Urus Concept", "Veneno"]
}, {
    "make": "Lancia",
    "model": ["A 112", "Appia", "Aurelia", "Beta", "Dedra", "Delta", "Flaminia", "Flavia", "Fulvia", "Gamma", "Hyena", "Kappa", "Lambda", "Lybra", "Monte Carlo", "Musa", "Phedra", "Prisma", "Rally 037", "Stratos", "Thema", "Thesis", "Trevi", "Voyager", "Y10", "Ypsilon", "Zeta"]
}, {
    "make": "Land Rover",
    "model": ["Defender", "Discovery", "Discovery Sport", "Freelander", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar", "Series I", "Series II", "Series III"]
}, {
    "make": "Lexus",
    "model": ["CT", "ES", "GS", "GS F", "GX", "HS", "IS", "IS F", "LC", "LFA", "LS", "LX", "NX", "RC", "RC F", "RX", "SC", "UX"]
}, {
    "make": "Lincoln",
    "model": ["Aviator", "Blackwood", "Capri", "Continental", "LS", "Mark III", "Mark IV", "Mark LT", "Mark VII", "Mark VIII", "MKC", "MKS", "MKT", "MKX", "MKZ", "Nautilus", "Navigator", "Premiere", "Town Car"]
}, {
    "make": "Lotus",
    "model": ["340R", "Eclat", "Elan", "Elise", "Elite", "Esprit", "Europa", "Europa S", "Evora", "Excel", "Exige"]
}, {
    "make": "Lucid",
    "model": ["Air Concept"]
}, {
    "make": "Maserati",
    "model": ["228", "3200 GT", "420", "4200 GT", "Barchetta Stradale", "Biturbo", "Bora", "Chubasco", "Ghibli", "GranTurismo", "Indy", "Karif", "Khamsin", "Kyalami", "Levante", "MC12", "Merak", "Mexico", "Quattroporte", "Royale", "Shamal"]
}, {
    "make": "Maybach",
    "model": ["57", "62", "Exelero"]
}, {
    "make": "Mazda",
    "model": ["1000", "121", "1300", "2", "3", "3 MPS", "323", "5", "6", "6 MPS", "616", "626", "818", "929", "Atenza", "Autozam AZ-3", "Axela", "AZ-1", "AZ-Offroad", "AZ-Wagon", "B-series", "Biante", "Bongo", "Bongo Friendee", "BT-50", "Capella", "Carol", "Chantez", "Cosmo", "Cronos", "CX-3", "CX-5", "CX-7", "CX-8", "CX-9", "Demio", "Efini MS-6", "Efini MS-8", "Efini MS-9", "Etude", "Eunos 100", "Eunos 300", "Eunos 500", "Eunos 800", "Eunos Cosmo", "Familia", "Flair", "Flair Crossover", "Lantis", "Laputa", "Luce", "Millenia", "MPV", "MX-3", "MX-5", "MX-6", "Navajo", "Persona", "Premacy", "Proceed", "Proceed Levante", "Protege", "R360", "Revue", "Roadster", "RX-7", "RX-8", "Scrum", "Sentia", "Spiano", "Tribute", "Verisa", "Xedos 6", "Xedos 9"]
}, {
    "make": "McLaren",
    "model": ["540C", "570GT", "570S", "650S", "675LT", "720S", "F1", "MP4-12C", "P1"]
},  {
    "make": "Mercedes-Benz",
    "model": ["190 (W201)", "190 SL", "A-klasse", "A-klasse AMG", "AMG GLC", "AMG GLC Coupe", "AMG GLE", "AMG GLE Coupe", "AMG GT", "B-klasse", "C-klasse", "C-klasse AMG", "Citan", "CL-klasse", "CL-klasse AMG", "CLA-klasse", "CLA-klasse AMG", "CLC-klasse", "CLK-klasse", "CLK-klasse AMG", "CLS-klasse", "CLS-klasse AMG", "E-klasse", "E-klasse AMG", "G-klasse", "G-klasse AMG", "G-klasse AMG 6x6", "GL-klasse", "GL-klasse AMG", "GLA-klasse", "GLA-klasse AMG", "GLC", "GLC Coupe", "GLE", "GLE Coupe", "GLK-klasse", "GLS-klasse", "GLS-klasse AMG", "M-klasse", "M-klasse AMG", "Maybach G 650 Landaulet", "Maybach S-klasse", "R-klasse", "R-klasse AMG", "S-klasse", "S-klasse AMG", "SL-klasse", "SL-klasse AMG", "SLC-klasse", "SLC-klasse AMG", "SLK-klasse", "SLK-klasse AMG", "SLR McLaren", "SLS AMG", "V-klasse", "Vaneo", "Viano", "Vito", "W100", "W105", "W108", "W110", "W111", "W114", "W115", "W120", "W121", "W123", "W124", "W128", "W136", "W142", "W186", "W188", "W189", "W29", "X-klasse Concept"]
}, {
    "make": "Mercury",
    "model": ["Capri", "Cougar", "Eight", "Grand Marquis", "Marauder", "Mariner", "Marquis", "Milan", "Montego", "Monterey", "Mountaineer", "Mystique", "Sable", "Topaz", "Tracer", "Villager"]
}, {
    "make": "MINI",
    "model": ["Cabrio", "Clubman", "Countryman", "Coupe", "Hatch", "Paceman", "Roadster"]
}, {
    "make": "Mitsubishi",
    "model": ["3000 GT", "500", "Airtrek", "Aspire", "ASX", "Attrage", "Carisma", "Celeste", "Challenger", "Chariot", "Colt", "Cordia", "Debonair", "Delica", "Delica D:2", "Delica D:3", "Delica D:5", "Diamante", "Dignity", "Dingo", "Dion", "Eclipse", "Eclipse Cross", "eK", "eK Active", "eK Classic", "eK Custom", "eK Space", "eK Sport", "Emeraude", "Endeavor", "Eterna", "Freeca", "FTO", "Galant", "Galant Fortis", "Grandis", "GTO", "i", "i-MiEV", "Jeep J", "L200", "L300", "L400", "Lancer", "Lancer Cargo", "Lancer Evolution", "Lancer Ralliart", "Legnum", "Libero", "Minica", "Minicab", "Mirage", "Montero", "Montero Sport", "Outlander", "Pajero", "Pajero iO", "Pajero Junior", "Pajero Mini", "Pajero Pinin", "Pajero Sport", "Pistachio", "Proudia", "Raider", "RVR", "Sapporo", "Savrin", "Sigma", "Space Gear", "Space Runner", "Space Star", "Space Wagon", "Starion", "Strada", "Toppo", "Town Box", "Tredia", "Triton", "Xpander"]
}, {
    "make": "Nissan",
    "model": ["100NX", "180SX", "200SX", "240SX", "280ZX", "300ZX", "350Z", "370Z", "AD", "Almera", "Almera Classic", "Almera Tino", "Altima", "Armada", "Auster", "Avenir", "Bassara", "BE-1", "Bluebird", "Bluebird Maxima", "Bluebird Sylphy", "Caravan", "Cedric", "Cefiro", "Cherry", "Cima", "Clipper", "Clipper Rio", "Crew", "Cube", "Datsun", "Dayz", "Dayz Roox", "Dualis", "Elgrand", "Expert", "Fairlady Z", "Figaro", "Fuga", "Gloria", "GT-R", "Homy", "Hypermini", "Juke", "Juke Nismo", "Kicks", "Kix", "Lafesta", "Langley", "Largo", "Latio", "Laurel", "Leaf", "Leopard", "Liberta Villa", "Liberty", "Livina", "Lucino", "March", "Maxima", "Micra", "Mistral", "Moco", "Murano", "Navara (Frontier)", "Note", "NP 300", "NV200", "NV350 Caravan", "NX Coupe", "Otti (Dayz)", "Pao", "Pathfinder", "Patrol", "Pino", "Pixo", "Prairie", "Presage", "Presea", "President", "Primastar", "Primera", "Pulsar", "Qashqai", "Qashqai+2", "Quest", "R'nessa", "Rasheen", "Rogue", "Roox", "Safari", "Sentra", "Serena", "Silvia", "Skyline", "Skyline Crossover", "Stagea", "Stanza", "Sunny", "Teana", "Terrano", "Terrano Regulus", "Tiida", "Tino", "Titan", "Urvan", "Vanette", "Versa", "Wingroad", "X-Terra", "X-Trail"]
}, {
    "make": "Oldsmobile",
    "model": ["Achieva", "Alero", "Aurora", "Bravada", "Cutlass", "Cutlass Calais", "Cutlass Ciera", "Cutlass Supreme", "Eighty-Eight", "Firenza", "Intrigue", "Ninety-Eight", "Omega", "Series 60", "Series 70", "Silhouette", "Starfire", "Toronado", "Vista Cruiser"]
}, {
    "make": "Opel",
    "model": ["Adam", "Admiral", "Agila", "Ampera", "Antara", "Ascona", "Astra", "Astra OPC", "Calibra", "Campo", "Cascada", "Combo", "Commodore", "Corsa", "Corsa OPC", "Crossland X", "Diplomat", "Frontera", "Grandland X", "GT", "Insignia", "Insignia OPC", "Kadett", "Kapitan", "Karl", "Manta", "Meriva", "Meriva OPC", "Mokka", "Monterey", "Monza", "Olympia", "Omega", "P4", "Rekord", "Senator", "Signum", "Sintra", "Speedster", "Super Six", "Tigra", "Vectra", "Vectra OPC", "Vita", "Vivaro", "Zafira", "Zafira OPC"]
}, {
    "make": "Pagani",
    "model": ["Huayra", "Zonda"]
}, {
    "make": "Panoz",
    "model": ["Esperante", "Roadster"]
}, {
    "make": "Peugeot",
    "model": ["1007", "104", "106", "107", "108", "2008", "201", "202", "203", "204", "205", "205 GTi", "206", "207", "208", "208 GTi", "3008", "301", "304", "305", "306", "307", "308", "308 GTi", "309", "4007", "4008", "402", "403", "404", "405", "406", "407", "408", "5008", "504", "505", "508", "604", "605", "607", "806", "807", "Bipper", "Expert", "iOn", "Partner", "RCZ", "Rifter", "Traveller"]
}, {
    "make": "Plymouth",
    "model": ["Acclaim", "Barracuda", "Breeze", "Caravelle", "Fury", "Horizon", "Laser", "Neon", "Prowler", "Reliant", "Road Runner", "Sundance", "Turismo", "Valiant", "Volare", "Voyager"]
}, {
    "make": "Pontiac",
    "model": ["6000", "Aztek", "Bonneville", "Catalina", "Fiero", "Firebird", "G4", "G5", "G6", "G8", "Grand AM", "Grand Prix", "GTO", "Laurentian", "LeMans", "Montana", "Parisienne", "Phoenix", "Solstice", "Sunbird", "Sunfire", "Tempest", "Torpedo", "Torrent", "Trans Sport", "Vibe"]
}, {
    "make": "Porsche",
    "model": ["356", "718 Boxster", "718 Cayman", "911", "911 GT2", "911 GT3", "911 R", "912", "914", "918 Spyder", "924", "928", "944", "959", "968", "Boxster", "Carrera GT", "Cayenne", "Cayman", "Cayman GT4", "Macan", "Panamera"]
}, {
    "make": "Qvale",
    "model": ["Mangusta"]
}, {
    "make": "Renault",
    "model": ["10", "11", "12", "14", "15", "16", "17", "18", "19", "20", "21", "25", "30", "4", "4CV", "5", "6", "8", "9", "Alaskan", "Avantime", "Captur", "Caravelle", "Clio", "Clio RS", "Clio V6", "Dauphine", "Dokker", "Duster", "Espace", "Floride", "Fluence", "Fregate", "Fuego", "Kadjar", "Kangoo", "Kaptur", "Koleos", "KWID", "Laguna", "Latitude", "Lodgy", "Logan", "Megane", "Megane RS", "Modus", "Rodeo", "Safrane", "Sandero", "Sandero RS", "Scenic", "Sport Spider", "Symbol", "Talisman", "Trafic", "Twingo", "Twizy", "Vel Satis", "Vivastella", "Wind", "ZOE"]
}, {
    "make": "Rimac",
    "model": ["C Two"]
}, {
    "make": "Rolls-Royce",
    "model": ["20/25", "Camargue", "Corniche", "Cullinan", "Dawn", "Ghost", "Park Ward", "Phantom", "Silver Cloud", "Silver Ghost", "Silver Seraph", "Silver Shadow", "Silver Spirit", "Silver Spur", "Silver Wraith", "Wraith"]
}, {
    "make": "Saab",
    "model": ["9-2X", "9-3", "9-4X", "9-5", "9-7X", "90", "900", "9000", "93", "95", "96", "99", "Sonett"]
}, {
    "make": "Saleen",
    "model": ["S7"]
}, {
    "make": "Saturn",
    "model": ["Astra", "Aura", "ION", "LS", "LW", "Outlook", "Relay", "SC", "Sky", "SL", "SW", "VUE"]
}, {
    "make": "Scion",
    "model": ["FR-S", "iA", "iM", "iQ", "tC", "xA", "xB", "xD"]
}, {
    "make": "SEAT",
    "model": ["133", "Alhambra", "Altea", "Arona", "Arosa", "Ateca", "Cordoba", "Exeo", "Fura", "Ibiza", "Ibiza Cupra", "Inca", "Leon", "Leon Cupra", "Malaga", "Marbella", "Mii", "Ronda", "Tarraco", "Toledo"]
}, {
    "make": "Skoda",
    "model": ["100 Series", "105, 120", "1200", "Citigo", "Fabia", "Fabia RS", "Favorit", "Felicia", "Forman", "Karoq", "Kodiaq", "Kodiaq RS", "Octavia", "Octavia RS", "Popular", "Rapid", "Roomster", "Scala", "Superb", "Yeti"]
}, {
    "make": "Smart",
    "model": ["Forfour", "Fortwo", "Roadster"]
}, {
    "make": "Spyker",
    "model": ["C12", "C8"]
}, {
    "make": "Subaru",
    "model": ["1000", "360", "Alcyone", "Ascent", "Baja", "Bighorn", "Bistro", "Brat", "BRZ", "Dex", "Dias Wagon", "Domingo", "Exiga", "Forester", "Impreza", "Impreza WRX", "Impreza WRX STi", "Justy", "Legacy", "Legacy Lancaster", "Leone", "Levorg", "Libero", "Lucra", "Outback", "Pleo", "R1", "R2", "Rex", "Sambar", "Stella", "SVX", "Traviq", "Trezia", "Tribeca", "Vivio", "WRX", "WRX STi", "XT", "XV"]
}, {
    "make": "Suzuki",
    "model": ["Aerio", "Alto", "Alto Lapin", "APV", "Baleno", "Cappuccino", "Cara", "Carry", "Celerio", "Cervo", "Cultus", "Equator", "Ertiga", "Escudo", "Esteem", "Every", "Forenza", "Grand Vitara", "Hustler", "Ignis", "Jimny", "Kei", "Kizashi", "Landy", "Liana", "MR Wagon", "Palette", "Reno", "Samurai", "Sidekick", "Solio", "Spacia", "Splash", "Swift", "SX4", "Twin", "Verona", "Vitara", "Wagon R", "Wagon R+", "X-90", "XL7"]
}, {
    "make": "Tesla",
    "model": ["Model 3", "Model S", "Model X", "Roadster"]
}, {
    "make": "Toyota",
    "model": ["2000GT", "4Runner", "Allex", "Allion", "Alphard", "Altezza", "Aqua", "Aristo", "Aurion", "Auris", "Avalon", "Avanza", "Avensis", "Avensis Verso", "Aygo", "bB", "Belta", "Blade", "Blizzard", "Brevis", "C-HR", "Caldina", "Cami", "Camry", "Camry (Japan)", "Camry Solara", "Carina", "Carina E", "Carina ED", "Cavalier", "Celica", "Celsior", "Century", "Chaser", "Classic", "Comfort", "Corolla", "Corolla II", "Corolla Rumion", "Corolla Spacio", "Corolla Verso", "Corona", "Corona EXiV", "Corsa", "Cressida", "Cresta", "Crown", "Crown Majesta", "Curren", "Cynos", "Duet", "Echo", "Esquire", "Estima", "Etios", "FJ Cruiser", "Fortuner", "FunCargo", "Gaia", "Grand HiAce", "Granvia", "GT86", "Harrier", "HiAce", "Highlander", "Hilux", "Hilux Surf", "Innova", "Ipsum", "iQ", "ISis", "Ist", "Kluger", "Land Cruiser", "Land Cruiser Prado", "LiteAce", "Mark II", "Mark X", "Mark X ZiO", "MasterAce Surf", "Matrix", "Mega Cruiser", "Mirai", "Model F", "MR-S", "MR2", "Nadia", "Noah", "Opa", "Origin", "Paseo", "Passo", "Passo Sette", "Picnic", "Pixis Epoch", "Pixis Mega", "Pixis Space", "Platz", "Porte", "Premio", "Previa", "Prius", "Prius Alpha", "Prius c", "Prius v (+)", "ProAce", "Probox", "Progres", "Pronard", "Publica", "Ractis", "Raum", "RAV 4", "Regius", "RegiusAce", "Rush", "Sai", "Scepter", "Sequoia", "Sera", "Sienna", "Sienta", "Soarer", "Soluna", "Spade", "Sparky", "Sports 800", "Sprinter", "Sprinter Carib", "Sprinter Marino", "Sprinter Trueno", "Starlet", "Succeed", "Supra", "Tacoma", "Tercel", "Touring HiAce", "TownAce", "Tundra", "Urban Cruiser", "Vanguard", "Vellfire", "Venza", "Verossa", "Verso", "Verso-S", "Vios", "Vista", "Vitz", "Voltz", "Voxy", "WiLL", "WiLL Cypha", "Windom", "Wish", "Yaris", "Yaris Verso"]
}, {
    "make": "Trabant",
    "model": ["1.1", "600", "P 601", "P50"]
}, {
    "make": "Volkswagen",
    "model": ["181", "Amarok", "Arteon", "Beetle", "Bora", "Caddy", "California", "Caravelle", "Corrado", "Derby", "Eos", "EuroVan", "Fox", "Gol", "Golf", "Golf Country", "Golf GTI", "Golf Plus", "Golf R", "Golf R32", "Golf Sportsvan", "Iltis", "Jetta", "K70", "Karmann-Ghia", "Lupo", "Lupo GTI", "Multivan", "Parati", "Passat", "Passat (North America)", "Passat CC", "Phaeton", "Pointer", "Polo", "Polo GTI", "Polo R WRC", "Quantum", "Routan", "Santana", "Scirocco", "Scirocco R", "Sharan", "T-Roc", "Taro", "Teramont", "Tiguan", "Touareg", "Touran", "Transporter", "Type 2", "Type 3", "Type 4", "up!", "Vento", "XL1"]
}, {
    "make": "Volvo",
    "model": ["120 Series", "140 Series", "164", "240 Series", "260 Series", "300 Series", "440", "460", "480", "66", "740", "760", "780", "850", "940", "960", "C30", "C70", "Laplander", "P1800", "P1900", "S40", "S60", "S60 Cross Country", "S70", "S80", "S90", "V40", "V40 Cross Country", "V50", "V60", "V60 Cross Country", "V70", "V90", "V90 Cross Country", "XC40", "XC60", "XC70", "XC90"]
}, {
    "make": "Zenvo",
    "model": ["ST1"]
}, {
    "make": "Zibar",
    "model": ["MK2"]
}, {
    "make": "ZIL",
    "model": ["111", "114", "117", "4104"]
}, {
    "make": "ZiS",
    "model": ["101", "110"]
}, {
    "make": "Zotye",
    "model": ["Coupa", "Nomad (RX6400)", "SR9", "T600", "Z100", "Z300"]
}, {
    "make": "ZX",
    "model": ["Admiral", "Grand Tiger", "Landmark"]
}]

module.exports = cars;