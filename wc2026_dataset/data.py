# -*- coding: utf-8 -*-
"""
Datos de referencia del Mundial FIFA 2026 (recorridos de selecciones).
Fuentes: FIFA / NPR / US Soccer / NBC / Yahoo Sports / worldcupwiki / KickoffAdventures.
Estado al 9 de julio de 2026 (cuartos de final en curso).
"""

# ---------------------------------------------------------------------------
# 1) COORDENADAS DE CIUDADES  (lat, lon)
#    Sedes = coordenadas del estadio. Bases = centro de la ciudad/instalación.
# ---------------------------------------------------------------------------
CITY_COORDS = {
    # --- 16 sedes (host cities) ---
    "Mexico City":        (19.3030, -99.1505),   # Estadio Azteca
    "Guadalajara":        (20.6819, -103.4626),  # Estadio Akron (Zapopan)
    "Monterrey":          (25.6694, -100.2442),  # Estadio BBVA
    "Toronto":            (43.6332, -79.4185),   # BMO Field
    "Vancouver":          (49.2767, -123.1119),  # BC Place
    "Los Angeles":        (33.9535, -118.3392),  # SoFi Stadium (Inglewood)
    "Seattle":            (47.5952, -122.3316),  # Lumen Field
    "San Francisco Bay Area": (37.4033, -121.9694),  # Levi's Stadium (Santa Clara)
    "Boston":             (42.0909, -71.2643),   # Gillette Stadium (Foxborough)
    "Philadelphia":       (39.9008, -75.1674),   # Lincoln Financial Field
    "New York/New Jersey":(40.8128, -74.0742),   # MetLife Stadium (East Rutherford)
    "Atlanta":            (33.7553, -84.4006),   # Mercedes-Benz Stadium
    "Miami":              (25.9580, -80.2389),   # Hard Rock Stadium (Miami Gardens)
    "Dallas":             (32.7473, -97.0945),   # AT&T Stadium (Arlington)
    "Houston":            (29.6847, -95.4107),   # NRG Stadium
    "Kansas City":        (39.0489, -94.4839),   # Arrowhead Stadium

    # --- bases de entrenamiento (25 comunidades extra + varias en sedes) ---
    "Irvine":             (33.6846, -117.8265),
    "Mesa":               (33.4152, -111.8315),
    "Oakland":            (37.8044, -122.2712),
    "San Jose":           (37.3382, -121.8863),
    "Santa Barbara":      (34.4208, -119.6982),
    "Goleta":             (34.4358, -119.8276),
    "San Diego":          (32.7157, -117.1611),
    "Tampa":              (27.9506, -82.4572),
    "Boca Raton":         (26.3683, -80.1289),
    "Palm Beach Gardens": (26.8234, -80.1387),
    "Marietta":           (33.9526, -84.5499),
    "Kansas City KS":     (39.1235, -94.8250),   # Sporting KC training (Argentina)
    "Lawrence":           (38.9717, -95.2353),
    "Waltham":            (42.3765, -71.2356),
    "Galloway":           (39.4901, -74.4846),
    "Basking Ridge":      (40.7062, -74.5493),
    "Piscataway":         (40.5549, -74.4649),
    "Morris Township":    (40.7968, -74.4815),
    "Greensboro":         (36.0726, -79.7920),
    "Winston-Salem":      (36.0999, -80.2442),
    "Charlotte":          (35.2271, -80.8431),
    "Columbus":           (39.9612, -82.9988),
    "Portland":           (45.5152, -122.6784),
    "Chester":            (39.8496, -75.3557),
    "Smithfield":         (41.9223, -71.5490),
    "Nashville":          (36.1627, -86.7816),
    "Chattanooga":        (35.0456, -85.3097),
    "Austin":             (30.2672, -97.7431),
    "Frisco":             (33.1507, -96.8236),
    "Mansfield":          (32.5632, -97.1417),
    "Sandy":              (40.5649, -111.8389),
    "Alexandria":         (38.8048, -77.0469),
    "Renton":             (47.4829, -122.2171),
    "Spokane":            (47.6588, -117.4260),
    "White Sulphur Springs": (37.7973, -80.2990),
    "Tijuana":            (32.5149, -117.0382),
    "Pachuca":            (20.1011, -98.7591),
    "Santiago":           (25.4233, -100.1517),  # Nuevo Leon (Tunisia)
    "Playa del Carmen":   (20.6296, -87.0739),
    "New Tecumseth":      (44.1256, -79.7876),
}

# ---------------------------------------------------------------------------
# 2) SELECCIONES: codigo, nombre, confederacion
# ---------------------------------------------------------------------------
TEAMS = {
    "MEX": ("Mexico", "CONCACAF"), "RSA": ("Sudafrica", "CAF"),
    "KOR": ("Corea del Sur", "AFC"), "CZE": ("Chequia", "UEFA"),
    "CAN": ("Canada", "CONCACAF"), "SUI": ("Suiza", "UEFA"),
    "QAT": ("Catar", "AFC"), "BIH": ("Bosnia y Herzegovina", "UEFA"),
    "BRA": ("Brasil", "CONMEBOL"), "MAR": ("Marruecos", "CAF"),
    "SCO": ("Escocia", "UEFA"), "HAI": ("Haiti", "CONCACAF"),
    "USA": ("Estados Unidos", "CONCACAF"), "AUS": ("Australia", "AFC"),
    "PAR": ("Paraguay", "CONMEBOL"), "TUR": ("Turquia", "UEFA"),
    "GER": ("Alemania", "UEFA"), "ECU": ("Ecuador", "CONMEBOL"),
    "CIV": ("Costa de Marfil", "CAF"), "CUW": ("Curazao", "CONCACAF"),
    "NED": ("Paises Bajos", "UEFA"), "JPN": ("Japon", "AFC"),
    "TUN": ("Tunez", "CAF"), "SWE": ("Suecia", "UEFA"),
    "BEL": ("Belgica", "UEFA"), "IRN": ("Iran", "AFC"),
    "EGY": ("Egipto", "CAF"), "NZL": ("Nueva Zelanda", "OFC"),
    "ESP": ("Espana", "UEFA"), "URU": ("Uruguay", "CONMEBOL"),
    "KSA": ("Arabia Saudita", "AFC"), "CPV": ("Cabo Verde", "CAF"),
    "FRA": ("Francia", "UEFA"), "SEN": ("Senegal", "CAF"),
    "NOR": ("Noruega", "UEFA"), "IRQ": ("Irak", "AFC"),
    "ARG": ("Argentina", "CONMEBOL"), "AUT": ("Austria", "UEFA"),
    "ALG": ("Argelia", "CAF"), "JOR": ("Jordania", "AFC"),
    "POR": ("Portugal", "UEFA"), "COL": ("Colombia", "CONMEBOL"),
    "UZB": ("Uzbekistan", "AFC"), "COD": ("RD Congo", "CAF"),
    "ENG": ("Inglaterra", "UEFA"), "CRO": ("Croacia", "UEFA"),
    "PAN": ("Panama", "CONCACAF"), "GHA": ("Ghana", "CAF"),
}

# ---------------------------------------------------------------------------
# 3) BASE CAMPS: team -> (ciudad_base, instalacion, pais)
# ---------------------------------------------------------------------------
BASE_CAMPS = {
    "USA": ("Irvine", "Great Park Sports Complex", "USA"),
    "TUR": ("Mesa", "Arizona Athletic Grounds", "USA"),
    "AUS": ("Oakland", "Oakland Roots & Soul SC", "USA"),
    "PAR": ("San Jose", "San Jose State University", "USA"),
    "QAT": ("Santa Barbara", "Westmont College", "USA"),
    "AUT": ("Goleta", "UC Santa Barbara - Harder Stadium", "USA"),
    "NZL": ("San Diego", "University of San Diego - Torero Stadium", "USA"),
    "SUI": ("San Diego", "San Diego Jewish Academy", "USA"),
    "CPV": ("Tampa", "Waters Sportsplex", "USA"),
    "CUW": ("Boca Raton", "Florida Atlantic University", "USA"),
    "POR": ("Palm Beach Gardens", "Gardens North County District Park", "USA"),
    "UZB": ("Marietta", "Atlanta United Training Center", "USA"),
    "ARG": ("Kansas City KS", "Sporting KC Training Center", "USA"),
    "ALG": ("Lawrence", "University of Kansas", "USA"),
    "FRA": ("Waltham", "Bentley University", "USA"),
    "ENG": ("Kansas City", "Swope Soccer Village", "USA"),
    "NED": ("Kansas City", "KC Current Training Facility", "USA"),
    "HAI": ("Galloway", "Stockton University", "USA"),
    "MAR": ("Basking Ridge", "The Pingry School", "USA"),
    "SEN": ("Piscataway", "Rutgers University", "USA"),
    "BRA": ("Morris Township", "Columbia Park Training Facility (NY Red Bulls)", "USA"),
    "NOR": ("Greensboro", "UNC Greensboro", "USA"),
    "GER": ("Winston-Salem", "Wake Forest University", "USA"),
    "SCO": ("Charlotte", "Charlotte FC Training Ground", "USA"),
    "ECU": ("Columbus", "OhioHealth Performance Center (Columbus Crew)", "USA"),
    "JOR": ("Portland", "University of Portland", "USA"),
    "CIV": ("Chester", "Subaru Park (Philadelphia Union)", "USA"),
    "GHA": ("Smithfield", "Bryant University", "USA"),
    "JPN": ("Nashville", "Nashville SC Training Center", "USA"),
    "ESP": ("Chattanooga", "Baylor School", "USA"),
    "KSA": ("Austin", "Q2 Stadium (Austin FC)", "USA"),
    "COD": ("Houston", "Houston Sports Park", "USA"),
    "SWE": ("Frisco", "Toyota Stadium (FC Dallas)", "USA"),
    "CZE": ("Mansfield", "Mansfield Multipurpose Stadium", "USA"),
    "BIH": ("Sandy", "Real Salt Lake facilities", "USA"),
    "CRO": ("Alexandria", "Episcopal High School", "USA"),
    "BEL": ("Renton", "Seattle Sounders Performance Center", "USA"),
    "EGY": ("Spokane", "Gonzaga University", "USA"),
    "IRQ": ("White Sulphur Springs", "Greenbrier Sports Performance Center", "USA"),
    # Mexico (7)
    "COL": ("Guadalajara", "Academia Atlas FC", "Mexico"),
    "KOR": ("Guadalajara", "Chivas Verde Valle", "Mexico"),
    "IRN": ("Tijuana", "Centro Xoloitzcuintle", "Mexico"),
    "MEX": ("Mexico City", "Centro de Alto Rendimiento (CAR)", "Mexico"),
    "RSA": ("Pachuca", "CF Pachuca - Universidad del Futbol", "Mexico"),
    "TUN": ("Santiago", "Rayados Training Center", "Mexico"),
    "URU": ("Playa del Carmen", "Mayakoba Training Center", "Mexico"),
    # Canada (2)
    "CAN": ("Vancouver", "National Soccer Development Centre", "Canada"),
    "PAN": ("New Tecumseth", "Nottawasaga Training Site", "Canada"),
}

# ---------------------------------------------------------------------------
# 4) SEDES / ESTADIOS por ciudad
# ---------------------------------------------------------------------------
STADIUMS = {
    "Mexico City": "Estadio Azteca", "Guadalajara": "Estadio Akron",
    "Monterrey": "Estadio BBVA", "Toronto": "BMO Field", "Vancouver": "BC Place",
    "Los Angeles": "SoFi Stadium", "Seattle": "Lumen Field",
    "San Francisco Bay Area": "Levi's Stadium", "Boston": "Gillette Stadium",
    "Philadelphia": "Lincoln Financial Field", "New York/New Jersey": "MetLife Stadium",
    "Atlanta": "Mercedes-Benz Stadium", "Miami": "Hard Rock Stadium",
    "Dallas": "AT&T Stadium", "Houston": "NRG Stadium", "Kansas City": "Arrowhead Stadium",
}
CITY_COUNTRY = {
    "Mexico City": "Mexico", "Guadalajara": "Mexico", "Monterrey": "Mexico",
    "Toronto": "Canada", "Vancouver": "Canada",
}  # el resto -> USA (default)

# ---------------------------------------------------------------------------
# 5) FASE DE GRUPOS: (fecha ISO, grupo, teamA, teamB, ciudad)
#    72 partidos. Placeholders del sorteo ya resueltos a la seleccion real.
# ---------------------------------------------------------------------------
GROUP_MATCHES = [
    # Grupo A
    ("2026-06-11", "A", "MEX", "RSA", "Mexico City"),
    ("2026-06-11", "A", "KOR", "CZE", "Guadalajara"),
    ("2026-06-18", "A", "CZE", "RSA", "Atlanta"),
    ("2026-06-18", "A", "MEX", "KOR", "Guadalajara"),
    ("2026-06-24", "A", "CZE", "MEX", "Mexico City"),
    ("2026-06-24", "A", "RSA", "KOR", "Monterrey"),
    # Grupo B
    ("2026-06-12", "B", "CAN", "BIH", "Toronto"),
    ("2026-06-13", "B", "QAT", "SUI", "San Francisco Bay Area"),
    ("2026-06-18", "B", "SUI", "BIH", "Los Angeles"),
    ("2026-06-18", "B", "CAN", "QAT", "Vancouver"),
    ("2026-06-24", "B", "SUI", "CAN", "Vancouver"),
    ("2026-06-24", "B", "BIH", "QAT", "Seattle"),
    # Grupo C
    ("2026-06-13", "C", "BRA", "MAR", "New York/New Jersey"),
    ("2026-06-13", "C", "HAI", "SCO", "Boston"),
    ("2026-06-19", "C", "SCO", "MAR", "Boston"),
    ("2026-06-19", "C", "BRA", "HAI", "Philadelphia"),
    ("2026-06-24", "C", "SCO", "BRA", "Miami"),
    ("2026-06-24", "C", "MAR", "HAI", "Atlanta"),
    # Grupo D
    ("2026-06-12", "D", "USA", "PAR", "Los Angeles"),
    ("2026-06-13", "D", "AUS", "TUR", "Vancouver"),
    ("2026-06-19", "D", "USA", "AUS", "Seattle"),
    ("2026-06-19", "D", "TUR", "PAR", "San Francisco Bay Area"),
    ("2026-06-25", "D", "TUR", "USA", "Los Angeles"),
    ("2026-06-25", "D", "PAR", "AUS", "San Francisco Bay Area"),
    # Grupo E
    ("2026-06-14", "E", "GER", "CUW", "Houston"),
    ("2026-06-14", "E", "CIV", "ECU", "Philadelphia"),
    ("2026-06-20", "E", "GER", "CIV", "Toronto"),
    ("2026-06-20", "E", "ECU", "CUW", "Kansas City"),
    ("2026-06-25", "E", "ECU", "GER", "New York/New Jersey"),
    ("2026-06-25", "E", "CUW", "CIV", "Philadelphia"),
    # Grupo F
    ("2026-06-14", "F", "NED", "JPN", "Dallas"),
    ("2026-06-14", "F", "SWE", "TUN", "Monterrey"),
    ("2026-06-20", "F", "NED", "SWE", "Houston"),
    ("2026-06-20", "F", "TUN", "JPN", "Monterrey"),
    ("2026-06-25", "F", "JPN", "SWE", "Dallas"),
    ("2026-06-25", "F", "TUN", "NED", "Kansas City"),
    # Grupo G
    ("2026-06-15", "G", "IRN", "NZL", "Los Angeles"),
    ("2026-06-15", "G", "BEL", "EGY", "Seattle"),
    ("2026-06-21", "G", "BEL", "IRN", "Los Angeles"),
    ("2026-06-21", "G", "NZL", "EGY", "Vancouver"),
    ("2026-06-26", "G", "EGY", "IRN", "Seattle"),
    ("2026-06-26", "G", "NZL", "BEL", "Vancouver"),
    # Grupo H
    ("2026-06-15", "H", "ESP", "CPV", "Atlanta"),
    ("2026-06-15", "H", "KSA", "URU", "Miami"),
    ("2026-06-21", "H", "ESP", "KSA", "Atlanta"),
    ("2026-06-21", "H", "URU", "CPV", "Miami"),
    ("2026-06-26", "H", "CPV", "KSA", "Houston"),
    ("2026-06-26", "H", "URU", "ESP", "Guadalajara"),
    # Grupo I
    ("2026-06-16", "I", "FRA", "SEN", "New York/New Jersey"),
    ("2026-06-16", "I", "IRQ", "NOR", "Boston"),
    ("2026-06-22", "I", "FRA", "IRQ", "Philadelphia"),
    ("2026-06-22", "I", "NOR", "SEN", "New York/New Jersey"),
    ("2026-06-26", "I", "NOR", "FRA", "Boston"),
    ("2026-06-26", "I", "SEN", "IRQ", "Toronto"),
    # Grupo J
    ("2026-06-16", "J", "ARG", "ALG", "Kansas City"),
    ("2026-06-17", "J", "AUT", "JOR", "San Francisco Bay Area"),
    ("2026-06-22", "J", "ARG", "AUT", "Dallas"),
    ("2026-06-22", "J", "JOR", "ALG", "San Francisco Bay Area"),
    ("2026-06-27", "J", "ALG", "AUT", "Kansas City"),
    ("2026-06-27", "J", "JOR", "ARG", "Dallas"),
    # Grupo K
    ("2026-06-17", "K", "POR", "COD", "Houston"),
    ("2026-06-17", "K", "UZB", "COL", "Mexico City"),
    ("2026-06-23", "K", "POR", "UZB", "Houston"),
    ("2026-06-23", "K", "COL", "COD", "Guadalajara"),
    ("2026-06-27", "K", "COL", "POR", "Miami"),
    ("2026-06-27", "K", "COD", "UZB", "Atlanta"),
    # Grupo L
    ("2026-06-17", "L", "ENG", "CRO", "Dallas"),
    ("2026-06-17", "L", "GHA", "PAN", "Toronto"),
    ("2026-06-23", "L", "ENG", "GHA", "Boston"),
    ("2026-06-23", "L", "PAN", "CRO", "Toronto"),
    ("2026-06-27", "L", "PAN", "ENG", "New York/New Jersey"),
    ("2026-06-27", "L", "CRO", "GHA", "Philadelphia"),
]

# ---------------------------------------------------------------------------
# 6) ELIMINATORIAS: (matchNo, fecha, ronda, teamA, teamB, ciudad, ganador, marcador)
#    ganador=None y marcador=None => partido aun no jugado (cuartos en curso).
# ---------------------------------------------------------------------------
KO_MATCHES = [
    # Round of 32 (28 jun - 3 jul)
    (73, "2026-06-28", "Round32", "CAN", "RSA", "Los Angeles", "CAN", "1-0"),
    (74, "2026-06-29", "Round32", "GER", "PAR", "Boston", "PAR", "1-1 (3-4 pen)"),
    (75, "2026-06-29", "Round32", "NED", "MAR", "Monterrey", "MAR", "1-1 (2-3 pen)"),
    (76, "2026-06-29", "Round32", "BRA", "JPN", "Houston", "BRA", "2-1"),
    (77, "2026-06-30", "Round32", "FRA", "SWE", "New York/New Jersey", "FRA", "3-0"),
    (78, "2026-06-30", "Round32", "CIV", "NOR", "Dallas", "NOR", "1-2"),
    (79, "2026-06-30", "Round32", "MEX", "ECU", "Mexico City", "MEX", "2-0"),
    (80, "2026-07-01", "Round32", "ENG", "COD", "Atlanta", "ENG", "2-1"),
    (81, "2026-07-01", "Round32", "BEL", "SEN", "Seattle", "BEL", "3-2 (pr)"),
    (82, "2026-07-01", "Round32", "USA", "BIH", "San Francisco Bay Area", "USA", "2-0"),
    (83, "2026-07-02", "Round32", "ESP", "AUT", "Los Angeles", "ESP", "3-0"),
    (84, "2026-07-02", "Round32", "POR", "CRO", "Toronto", "POR", "2-1"),
    (85, "2026-07-02", "Round32", "SUI", "ALG", "Vancouver", "SUI", None),
    (86, "2026-07-03", "Round32", "EGY", "AUS", "Dallas", "EGY", "1-1 (pen)"),
    (87, "2026-07-03", "Round32", "ARG", "CPV", "Miami", "ARG", "3-2"),
    (88, "2026-07-03", "Round32", "COL", "GHA", "Kansas City", "COL", "1-0"),
    # Round of 16 (4-7 jul)
    (89, "2026-07-04", "Round16", "CAN", "MAR", "Houston", "MAR", "0-3"),
    (90, "2026-07-04", "Round16", "PAR", "FRA", "Philadelphia", "FRA", "0-1"),
    (91, "2026-07-05", "Round16", "BRA", "NOR", "New York/New Jersey", "NOR", "1-2"),
    (92, "2026-07-05", "Round16", "MEX", "ENG", "Mexico City", "ENG", "2-3"),
    (93, "2026-07-06", "Round16", "POR", "ESP", "Dallas", "ESP", "0-1"),
    (94, "2026-07-06", "Round16", "USA", "BEL", "Seattle", "BEL", "1-4"),
    (95, "2026-07-07", "Round16", "ARG", "EGY", "Atlanta", "ARG", "3-2"),
    (96, "2026-07-07", "Round16", "SUI", "COL", "Vancouver", "SUI", "0-0 (5-4 pen)"),
    # Quarterfinals (9-11 jul) - EN CURSO / pendientes
    (97, "2026-07-09", "Quarterfinal", "FRA", "MAR", "Boston", None, None),
    (98, "2026-07-10", "Quarterfinal", "ESP", "BEL", "Los Angeles", None, None),
    (99, "2026-07-11", "Quarterfinal", "NOR", "ENG", "Miami", None, None),
    (100, "2026-07-11", "Quarterfinal", "ARG", "SUI", "Kansas City", None, None),
]

ROUND_NAMES_ES = {
    "Group": "Fase de grupos",
    "Round32": "Dieciseisavos",
    "Round16": "Octavos de final",
    "Quarterfinal": "Cuartos de final",
    "Semifinal": "Semifinales",
    "ThirdPlace": "Tercer puesto",
    "Final": "Final",
}
