// Q2 Trades & Digital Literacy Curriculum Data - 90 Complete Workorders
export const STATIONS = [
  { id: 'electrical', name: 'Station A: Electrical', code: 'A', icon: 'Zap' },
  { id: 'plumbing', name: 'Station B: Plumbing', code: 'B', icon: 'Droplet' },
  { id: 'hvac', name: 'Station C: HVAC', code: 'C', icon: 'Wind' },
  { id: 'automotive', name: 'Station D: Automotive', code: 'D', icon: 'Car' },
  { id: 'safety', name: 'Station E: Workplace Safety', code: 'E', icon: 'Shield' },
  { id: 'drafting', name: 'Station F: Drafting & Layout', code: 'F', icon: 'Compass' },
  { id: 'foamboard', name: 'Station G: Foam Board Framing', code: 'G', icon: 'Layers' },
  { id: 'precision', name: 'Station H: Precision Tools', code: 'H', icon: 'Sliders' },
  { id: 'digitallit', name: 'Station I: Digital Literacy', code: 'I', icon: 'Laptop' }
];

export const WORKORDERS = [
  // -------------------------------------------------------------
  // STATION E: SAFETY (WO 1, 13, 21, 29, 37, 45, 53, 65, 73)
  // -------------------------------------------------------------
  {
    num: 1, station: 'safety', title: 'OSHA Basics & Facility Hazard Sweep',
    youtubeId: '', // Sample YouTube Video ID
    studySheet: {
      overview: "The Occupational Safety and Health Administration (OSHA) was established under the OSH Act of 1970 to assure safe and healthful working conditions by setting and enforcing standards. The bedrock of safety enforcement is the General Duty Clause (Section 5(a)(1)), which mandates that employers furnish a place of employment free from recognized hazards that cause or are likely to cause death or serious physical harm.",
      keyConcepts: "Facility sweeps are systematic walk-throughs designed to identify and eliminate safety violations before they lead to workplace injuries. Key safety hazards include slips, trips, falls, blocked egress paths, exposed electrical wiring, and unlabelled chemicals. Tripping hazards account for a massive percentage of industrial claims and are easily mitigated by path audits.",
      codesSafety: "OSHA Standard 1910.22 requires all walking-working surfaces to be kept clean, orderly, and in a sanitary condition. Standard 1910.303 dictates that electrical equipment must have at least 36 inches of clearance in front of panels to allow rapid emergency shut-off access. Egress hallways must remain completely free of storage or blockages.",
      guidelines: "When performing a facility safety walk: check that paths are dry and clear of cords; verify that exit signs are illuminated; confirm fire doors are unlocked and unimpeded; and ensure electrical control panels are not blocked by storage bins."
    },
    q1: "In what year was OSHA established, and what is the primary goal of its General Duty Clause?",
    p1: "OSHA history General Duty Clause",
    a1: "Established in 1970. The General Duty Clause requires employers to provide a workplace free of recognized serious hazards.",
    q2: "What are the three physical phases of an official OSHA compliance site inspection?",
    p2: "three phases of OSHA inspection",
    a2: "1. Opening conference, 2. Walkthrough inspection, and 3. Closing conference.",
    q3: "Under OSHA guidelines, what type of workplace injury must be reported within exactly 8 hours?",
    p3: "OSHA injury reporting 8 hours",
    a3: "Any work-related employee fatality.",
    steps: [
      "Locate the official OSHA compliance poster in the training building. Record its wall location.",
      "Perform a visual hazard sweep of the classroom and breakroom pathways.",
      "Identify any loose electrical cords, blocking furniture, or wet floor spots.",
      "Document at least two potential trip hazards and outline steps to resolve them."
    ],
    signoff: ["OSHA poster located", "Classroom path audited", "Trip hazards documented", "Resolutions proposed"]
  },
  // -------------------------------------------------------------
  // STATION F: DRAFTING (WO 2, 14, 22, 30, 38, 46, 54, 66, 74)
  // -------------------------------------------------------------
  {
    num: 2, station: 'drafting', title: 'Tape Measure Reading & Scale Math',
    youtubeId: 'DqKIVmu6grM',
    studySheet: {
      overview: "In trades, precision measurement is crucial to avoid material waste and structural failures. Standard tapes divide an inch down to 1/16th segments. Blueprints display scaled-down versions of rooms, requiring mathematical conversions to verify sizes.",
      keyConcepts: "A standard tape measure utilizes graduated marks of varying heights: the longest line indicates the whole inch, the next is 1/2\", followed by 1/4\", 1/8\", and the shortest is 1/16\". Stud markers appear every 16\" (red numbers) and truss diamonds appear at 19.2\" intervals to layout framing spacing.",
      codesSafety: "Blueprints are scale representations. A common architectural scale is 1/4\" = 1'0\", meaning every 1/4\" on paper translates to 1 foot in the physical world. Converting a physical dimension to a scaled drawing line requires multiplying the real feet by the scale fraction.",
      guidelines: "To read a tape: align the hook end (the play in the hook accounts for its thickness on inside vs. outside readings), read from left to right, and record dimensions in feet and inches (e.g. 5' 3-3/16\"). Convert fractions by finding common denominators."
    },
    q1: "How many sixteenths of an inch are in 5/8 of an inch?",
    p1: "fraction conversion sixteenths in 5/8",
    a1: "10 sixteenths (5/8 = 10/16).",
    q2: "What does a red number or red diamond mark on a construction tape measure indicate?",
    p2: "red diamond on tape measure meaning",
    a2: "Standard stud spacing intervals (usually 16 inches or 19.2 inches) for wall framing layout.",
    q3: "If a room is 16 feet long, how long will its line be on a 1/4\" = 1'0\" scale blueprint?",
    p3: "scale conversion 1/4 inch equals 1 foot 16 feet",
    a3: "4 inches (16 feet * 0.25 inches/foot = 4 inches).",
    steps: [
      "Examine your tape measure. Identify the 1/2\", 1/4\", 1/8\", and 1/16\" tick marks.",
      "Measure the length and width of the workstation table. Record the dimensions to the nearest 1/16\".",
      "Calculate the scale dimensions of this table at 1/2\" = 1'0\" scale.",
      "Draw a precise scaled outline of the table on your workbook graph paper."
    ],
    signoff: ["Ticks correctly identified", "Table dimensions read to 1/16\"", "Scale math calculated", "Table outline drawn to scale"]
  },
  // -------------------------------------------------------------
  // STATION H: PRECISION TOOLS (WO 3, 16, 24, 32, 40, 48, 56, 68, 76)
  // -------------------------------------------------------------
  {
    num: 3, station: 'precision', title: 'Reading Dial Calipers',
    youtubeId: 'hNjiX-OKiWQ',
    studySheet: {
      overview: "Dial calipers are precision engineering tools used to verify machining tolerances, fitting wall thicknesses, and tool blade profiles. They can measure outside diameters, inside bores, step heights, and hole depths down to 1/1000th of an inch (0.001\").",
      keyConcepts: "The main slide beam is graduated in whole tenths of an inch (0.100\"). The round dial dial-face contains 100 graduations, where each mark represents 0.001\". One full rotation of the dial needle equals 0.100\" on the slide beam. Inside measurements use the top pointed horns, while depth uses the rear sliding rod.",
      codesSafety: "Dial calipers are highly sensitive. Even microscopic dust particles on the measuring jaw faces can cause reading errors of 0.003\" or more. Calipers must be zeroed before use by wiping the jaws clean, closing them, and rotating the bezel to align 0 with the needle.",
      guidelines: "To read a dial caliper: (1) Read the last exposed number on the slide beam (e.g. 1.3\"). (2) Read the number the needle points to on the dial face (e.g. 42). (3) Add the values: 1.300 + 0.042 = 1.342\". Store calipers in their protective cases when not in use."
    },
    q1: "What is the resolution of a standard dial caliper, and what are its four measurement capabilities?",
    p1: "dial caliper four measurements resolution",
    a1: "Resolution: 0.001 inches. Capabilities: Outside, inside, depth, and step measurements.",
    q2: "If the main slide scale reads 1.4 inches and the dial needle points to 38, what is the measurement?",
    p2: "how to read dial caliper inches",
    a2: "1.438 inches (1.4 + 0.038 = 1.438).",
    q3: "Why is it critical to wipe the caliper jaw faces clean before taking a measurement?",
    p3: "caliper zero calibration cleaning importance",
    a3: "Dust, grease, or grit on the jaws will prevent the jaws from closing fully, causing reading errors.",
    steps: [
      "Close the caliper jaws fully and verify that the dial is zeroed. Calibrate if needed.",
      "Take a scrap plastic pipe from the plumbing parts kit. Measure its outside diameter (OD).",
      "Measure the inside diameter (ID) of the same pipe using the upper caliper horns.",
      "Use the depth rod at the end of the slide to measure the depth of the pipe socket."
    ],
    signoff: ["Caliper zero calibrated", "Outside diameter measured", "Inside diameter measured", "Depth rod measured correctly"]
  },
  // -------------------------------------------------------------
  // STATION A: ELECTRICAL (WO 4, 9, 17, 25, 33, 41, 49, 57, 61, 69, 77)
  // -------------------------------------------------------------
  {
    num: 4, station: 'electrical', title: 'Romex Cable Stripping & Splicing',
    youtubeId: 'sLCxyD7xMFE',
    studySheet: {
      overview: "Romex is the trade name for non-metallic sheathed cable (Type NM), which is the standard wiring medium for residential wall outlets and switches. It bundles insulated conductors inside a flexible plastic jacket.",
      keyConcepts: "A standard 14/2 Romex cable contains a black wire (hot, transfers power), a white wire (neutral, completes return current path), and a bare copper wire (safety ground, routes stray currents to earth). Splicing joins wires using twist-on connectors (wire nuts) inside approved electrical junction boxes.",
      codesSafety: "National Electrical Code (NEC) Standard 314.16 outlines volume box fill limits, requiring a minimum wire tail length of 6 inches from the face of the box. Wires must be stripped using the exact wire stripper gauge slot (e.g. 14 AWG) to prevent scoring or nicking the copper core, which creates fire hazards.",
      guidelines: "To slice Romex: use a cable ripper or razor to score the outer jacket, pull back the jacket, and cut off the excess plastic. Strip exactly 3/4\" of insulation from individual wires, align them parallel, twist clockwise using pliers, and screw the wire nut on until tight."
    },
    q1: "What wire gauge size is standard for a 15-Amp residential electrical circuit?",
    p1: "standard wire size 15 amp circuit",
    a1: "14 AWG.",
    q2: "What color is the outer plastic sheath of standard 14/2 Romex cable, and what does the '/2' represent?",
    p2: "Romex sheathing color code gauge wires",
    a2: "White sheathing. The '/2' means there are 2 insulated current-carrying conductors (black and white) plus a bare ground.",
    q3: "Why must you avoid nicking the copper conductor when stripping plastic wire insulation?",
    p3: "why wire nicks are dangerous electrical",
    a3: "A nick reduces the wire's cross-sectional area, creating a local high-resistance spot and hot spot, and makes it brittle.",
    steps: [
      "Take a 6-inch piece of 14/2 Romex cable.",
      "Use a box cutter to score the outer jacket down the center. Peel back the sheathing and cut it off.",
      "Use the 14 AWG slot on wire strippers to strip 3/4\" of insulation off the black and white wires.",
      "Align the stripped ends, twist them together clockwise, and screw on a plastic wire nut until tight."
    ],
    signoff: ["Romex jacket cut safely", "Black/white stripped 3/4\"", "No copper nicks present", "Wire nut twisted tight"]
  },
  // -------------------------------------------------------------
  // STATION B: PLUMBING (WO 5, 10, 18, 26, 34, 42, 50, 58, 62, 70, 78)
  // -------------------------------------------------------------
  {
    num: 5, station: 'plumbing', title: 'Tracing Building Main Water Lines',
    youtubeId: '1SOtLlpKD8w',
    studySheet: {
      overview: "Potable water enters a building under high pressure from a municipal main. Tracing this system requires understanding key valves, meters, and pipe materials that direct and control flow throughout the building's infrastructure.",
      keyConcepts: "Potable water supply uses copper or PEX tubing. Copper pipe colors indicate wall thickness: Type K (thickest, green stripe, for underground supply), Type L (medium, blue stripe, for interior plumbing), and Type M (thinnest, red stripe, for low-pressure heat lines). Controls include shut-off ball valves (90-degree lever rotation, highly reliable) and gate valves (threaded screw stem, prone to seizing).",
      codesSafety: "Uniform Plumbing Code (UPC) mandates that incoming water pressure to fixtures must not exceed 80 PSI. A pressure regulator valve is installed right after the meter to reduce high municipal street pressure. Main valve locations must remain easily accessible in emergencies.",
      guidelines: "Locate where the water supply line penetrates the basement floor or wall. Identify the copper service pipe, the municipal water meter, the pressure regulator, and the primary shut-off lever. Trace cold water feeds through ceiling paths to bathroom fixtures."
    },
    q1: "What is the difference between a ball valve and a gate valve? Which is more reliable?",
    p1: "ball valve vs gate valve reliability differences",
    a1: "Ball valve uses a rotating ball with a hole (90-degree turn); gate valve uses a rising gate. Ball valve is much more reliable.",
    q2: "What is the purpose of a water pressure regulator valve, and where is it typically located?",
    p2: "water pressure regulator function location",
    a2: "It reduces high municipal street pressure to a safe level (under 60-80 PSI) to protect pipes. Located right after main shutoff.",
    q3: "What color is standard copper water supply pipe, and what do type 'M' and type 'L' colors represent?",
    p3: "copper pipe type L vs M color stripes",
    a3: "Copper pipe is copper/brown. Type L (blue stripe) is thicker-walled; Type M (red stripe) is thinner-walled.",
    steps: [
      "Locate the water service entry point where the main pipe enters the training facility building.",
      "Identify and sketch the location of the main water meter and the main shut-off valve.",
      "Trace the cold water lines from the inlet to the utility sink and bathroom fixtures.",
      "Verify if the main shutoff valve is a ball valve or a gate valve."
    ],
    signoff: ["Water entry point located", "Main shut-off valve sketched", "Copper line traced to sink", "Valve type verified"]
  },
  // -------------------------------------------------------------
  // STATION C: HVAC (WO 6, 11, 19, 27, 35, 43, 51, 59, 63, 71, 79)
  // -------------------------------------------------------------
  {
    num: 6, station: 'hvac', title: 'HVAC Filter Specifications & Benchtop Audits',
    youtubeId: '',
    studySheet: {
      overview: "Forced-air heating and cooling systems cycle air through a duct network to regulate indoor climates. A key component of this air handling process is the return air filter, which removes debris from the air stream to keep the blower motor clean.",
      keyConcepts: "Forced-air loops pull room air through high-volume return grilles, pass it through an air filter, heat or cool it at the indoor coil, and distribute it back through supply registers. Filters are rated by the MERV scale (Minimum Efficiency Reporting Value), from 1 (coarse fiberglass trapping lint) to 16 (fine pleats trapping viruses).",
      codesSafety: "Running an HVAC system with a dirty or clogged filter restricts airflow. This forces the blower motor to pull more electrical current, causing it to run hot and eventually burn out. In cooling mode, restricted airflow drops the coil temperature, causing condensed water to freeze solid.",
      guidelines: "Examine a loose, spare HVAC filter on the workstation table. Identify its width, length, and depth thickness. Look for the structural wire backing support mesh. Locate the printed airflow direction arrow on the cardboard frame margins."
    },
    q1: "What does the MERV rating on a replacement furnace filter measure?",
    p1: "furnace filter MERV rating meaning",
    a1: "Minimum Efficiency Reporting Value; measures the filter's ability to capture particles (larger MERV = finer capture).",
    q2: "What occurs to the HVAC system's energy consumption and airflow if a filter is left dirty?",
    p2: "dirty furnace filter effects on airflow motor",
    a2: "Airflow is restricted, forcing the blower motor to work harder, increasing energy consumption, and risking motor overheating.",
    q3: "Why must the airflow indicator arrow on a filter point toward the HVAC return plenum/blower?",
    p3: "furnace filter airflow arrow direction",
    a3: "Because the structural mesh backing of the filter is designed to face the blower to support the media under suction.",
    steps: [
      "Take the loose HVAC filter provided on your workstation table.",
      "Use a tape measure to measure the exact length, width, and thickness of the filter frame. Record the values.",
      "Locate and highlight the printed airflow direction arrow on the cardboard frame.",
      "Inspect the filter material (fiberglass vs pleated paper). Identify its structural mesh reinforcement."
    ],
    signoff: ["Loose filter measured", "Airflow arrow located", "Filter material identified", "Frame dimensions recorded"]
  },
  // -------------------------------------------------------------
  // STATION D: AUTOMOTIVE (WO 7, 12, 20, 28, 36, 44, 52, 60, 64, 72, 80)
  // -------------------------------------------------------------
  {
    num: 7, station: 'automotive', title: 'Engine Air Filter Inspection & Intake Audit',
    youtubeId: '',
    studySheet: {
      overview: "Internal combustion engines operate by burning a mixture of fuel and air. For every gallon of gasoline burned, an engine consumes approximately 10,000 gallons of air. This air must be cleaned of dust, sand, and debris before entering the cylinders to prevent engine wear.",
      keyConcepts: "The air intake system consists of the intake duct, the air filter housing box (plenum), the filter element, and the intake manifold. The air filter element is composed of pleated paper or cotton media. Dirt and abrasive silica particles will act as sandpaper on cylinder walls if not filtered out, causing scoring and compression loss.",
      codesSafety: "Engine air filters must be replaced at regular intervals (typically 12,000 to 15,000 miles). Running a vehicle with a severely clogged filter restricts airflow, which reduces fuel efficiency, causes engine running rough, and triggers diagnostic trouble codes (DTCs).",
      guidelines: "Locate the air filter housing box under the hood. Release the securing clips or screws. Pull out the filter, hold a work-light behind the pleats to check for dust blockage (Light-Penetration test). Clean the housing cavity of loose leaves, and reinstall the filter with a clean gasket seal."
    },
    q1: "Why does a clogged engine air filter cause a vehicle's fuel economy to drop?",
    p1: "how dirty air filter affects fuel economy engine",
    a1: "It restricts airflow, forcing the engine control computer to enrich the fuel mixture to compensate, wasting gas.",
    q2: "What is the physical function of a pleated air filter element? What are the pleats designed to do?",
    p2: "purpose of pleated filter media surface area",
    a2: "The pleats increase the surface area of the filter, allowing it to capture more dust without restricting airflow velocity.",
    q3: "What is the Light-Penetration Test, and what does it diagnose on a used filter?",
    p3: "air filter light penetration test inspection",
    a3: "Holding a light behind the filter; if light cannot pass through the pleats, the filter is fully loaded with fine dust and must be replaced.",
    steps: [
      "Open the vehicle hood. Locate the plastic engine air filter housing box.",
      "Release the securing metal clips or screws. Carefully lift the cover to expose the filter.",
      "Remove the filter element. Inspect the clean side vs. the dirty side for dirt accumulation.",
      "Perform a Light-Penetration test. Clean the empty box cavity, and reassemble the housing."
    ],
    signoff: ["Air filter housing located", "Filter element removed safely", "Light-Penetration test performed", "Housing reassembled secure"]
  },
  // -------------------------------------------------------------
  // STATION G: FOAM BOARD FRAMING (WO 8, 15, 23, 31, 39, 47, 55, 67, 75)
  // -------------------------------------------------------------
  {
    num: 8, station: 'foamboard', title: 'Foam Board Cutting, Scoring & Folding',
    youtubeId: '',
    studySheet: {
      overview: "Foam board, composed of a polystyrene foam core sandwiched between two layers of paper, is a primary medium used for trade layouts, structural prototyping, and physical modeling. It is lightweight, clean, and requires no heavy saws.",
      keyConcepts: "Cutting foam board requires sharp utility blades. A dull blade drags and tears the core. Straight cuts require a metal straightedge to guide the blade. Scoring is a technique where the blade cuts only the top paper face and half the foam core, leaving the bottom backing paper intact. This creates a flexible hinge that can fold into clean, tight corners.",
      codesSafety: "Utility knives present high cutting risks. Always pull the blade away from your body; never place fingers in the cutting path of the straightedge. When cutting foam, hold the knife at a low angle (about 30 degrees) to distribute the shear stress and prevent tearing the foam.",
      guidelines: "Layout your cutting line with a pencil. Place your metal ruler along the line, securing it with your non-dominant hand. Make 2 or 3 light passes with a box cutter instead of forcing the blade in one deep cut. For scoring, apply very light pressure to cut only the top paper."
    },
    q1: "Why is a metal straightedge preferred over plastic or wood when guiding a box cutter blade?",
    p1: "why use metal straightedge utility knife cutting safety",
    a1: "A metal edge resists being sliced or gouged by the utility knife blade, preventing slips and ensuring a perfectly straight cut.",
    q2: "What does 'scoring' foam board mean? How does it differ from a through-cut?",
    p2: "how to score foam board fold clean joint",
    a2: "Scoring cuts only the top paper layer and part of the foam core, leaving the backing paper intact so the board can be folded without splitting.",
    q3: "Why must you hold a utility knife blade at a low angle (approx. 30 degrees) when cutting through foam board?",
    p3: "running knife blade angle cutting foam board",
    a3: "A low angle distributes the cutting force, preventing the foam core from tearing or bunching and ensuring smooth edges.",
    steps: [
      "Mark a 6\" x 12\" rectangle on your foam board sheet using a pencil and ruler.",
      "Align a metal ruler along the line. Make 2-3 light passes with a box cutter to cut all the way through.",
      "Mark a line down the center at 6\". Score the top paper face only along this line.",
      "Gently bend the foam board along the score line to create a clean, sturdy 90-degree corner joint."
    ],
    signoff: ["Straight line marked", "Clean through-cut completed", "Top paper layer scored", "90-degree corner folded cleanly"]
  },
  // WO 9
  {
    num: 9, station: 'electrical', title: 'MyHome Kit - Series & Parallel Circuits',
    youtubeId: '',
    studySheet: {
      overview: "Electric circuits are loops of conductive material that allow electrons to flow from a power source to loads and back. The physical layout of these loops determines how voltage and current are distributed.",
      keyConcepts: "In a series circuit, components are connected in a single line. Current has only one path to flow; if one component fails, the loop opens and all loads shut off. In a parallel circuit, components are connected on separate branches. Each branch has a direct path to the power source, allowing independent operation.",
      codesSafety: "Ohm's Law governs electrical properties: V = I * R. In series, total resistance increases as loads are added, reducing current. In parallel, total resistance decreases as branches are added, which increases overall current draw at the source. Short circuits occur when a low-resistance wire bypasses the loads, creating dangerous current spikes.",
      guidelines: "Using the MyHome kit grid base, snap power lines from the battery pack to the switch, then to the light bulb, and back to the source to build a series loop. Modify by adding a fan motor in series to observe how voltage divides, dimming the light and slowing the fan."
    },
    q1: "If two identical light bulbs are wired in series, what happens to the brightness compared to parallel?",
    p1: "series vs parallel circuit bulb brightness explanation",
    a1: "They will be dimmer in series because they share the source voltage, whereas in parallel each receives full voltage.",
    q2: "How does current behavior differ in a series circuit compared to a parallel circuit?",
    p2: "current law series vs parallel circuit current path",
    a2: "Current is the same at all points in a series circuit; current divides among parallel branches based on branch resistance.",
    q3: "What is a short circuit, and what protective component is designed to trip during a short?",
    p3: "short circuit definition fuse circuit breaker function",
    a3: "A low-resistance path bypassing the load, causing high current. A fuse or circuit breaker trips to cut power.",
    steps: [
      "Locate the MyHome electrical kit board and manual.",
      "Assemble Project #1: Wire a battery source, a switch, and a light bulb in a single series loop.",
      "Modify the circuit to add a second light bulb in series. Toggle the switch and note the brightness change.",
      "Rebuild the circuit to place the two light bulbs in parallel. Compare their brightness to the series loop."
    ],
    signoff: ["Series circuit built", "brightness difference noted", "Parallel circuit built", "Independent control verified"]
  },
  // WO 10
  {
    num: 10, station: 'plumbing', title: 'Faucet Flow Rate (GPM) Calculation',
    youtubeId: '',
    studySheet: {
      overview: "Potable water conservation is a critical requirement of modern plumbing engineering and building codes. System flow rates are calculated in Gallons Per Minute (GPM) to verify efficiency compliance.",
      keyConcepts: "Water flow is determined by water pressure (measured in PSI) and the size of the orifice opening. Faucet aerators are small mesh screens installed at the spout outlet that introduce air bubbles into the water stream, expanding the visual flow profile while significantly reducing actual water volume usage.",
      codesSafety: "EPA WaterSense standards set strict maximum flow limits. Residential bathroom sink faucets are restricted to a maximum of 1.2 GPM at 60 PSI, while kitchen faucets are restricted to 1.8 GPM or 2.2 GPM. Lowering flow rates decreases water utility bills and reduces municipal wastewater treatment loads.",
      guidelines: "To perform a flow test: place a 5-gallon bucket under a faucet. Turn the cold water valve fully open while starting a stopwatch. Run the water for exactly 15 seconds, then close the valve. Measure the collected water volume in cups. Convert: 16 cups = 1 gallon, and multiply by 4 to get the GPM flow rate."
    },
    q1: "What is the maximum allowed flow rate for residential bathroom sink faucets under federal EPA standards?",
    p1: "EPA WaterSense bathroom faucet GPM limit",
    a1: "1.2 Gallons Per Minute (GPM).",
    q2: "How does a faucet aerator reduce water flow rate while maintaining spray pressure?",
    p2: "how faucet aerator works flow rate pressure",
    a2: "It mixes air into the water stream, expanding the stream volume so less water is used while maintaining velocity.",
    q3: "What is the formula to convert volume collected in seconds into Gallons Per Minute?",
    p3: "faucet GPM calculation formula from seconds",
    a3: "GPM = (Volume in Gallons / Time in Seconds) * 60.",
    steps: [
      "Place a 5-gallon bucket under the utility sink faucet.",
      "Prepare your stopwatch. Turn the cold water faucet valve fully open and start the timer.",
      "Run the water at full capacity for exactly 15 seconds, then shut the valve off.",
      "Measure the collected water volume using a measuring cup. Calculate the faucet's GPM rate."
    ],
    signoff: ["Stopwatch timed for 15s", "Water volume measured in cups", "GPM calculated correctly", "Calculated value recorded"]
  },
  // WO 11
  {
    num: 11, station: 'hvac', title: 'Thermostat Sub-base Mounting & Terminals',
    youtubeId: 'La9IyRWrRVk',
    studySheet: {
      overview: "Thermostats act as the command center for HVAC systems, using low-voltage signals to communicate temperature demands to control boards located inside furnaces and air handlers.",
      keyConcepts: "Thermostats operate on 24-Volt Alternating Current (24VAC), which is stepped down from 120V line power by an internal transformer. Wires use a standard color-code terminal standard: Red (24V Hot power), White (Heating control), Yellow (Cooling control), Green (Blower Fan control), and Blue/Common (Ground return path).",
      codesSafety: "Control circuits use 18 AWG solid copper wire. Wires must be stripped to exactly 1/4\" to prevent bare copper from touching adjacent terminals. If the Red (R) wire contacts the Blue/Common (C) wire directly without a load, it creates a direct short, instantly blowing the low-voltage fuse on the furnace board.",
      guidelines: "Use a level to mount the thermostat sub-base wall plate to the test block, securing it with screws. Feed the 18/5 thermostat cable through the center port, strip 2 inches of outer casing, strip 1/4\" of the small inner wires, and tighten them into terminals R, W, Y, G, and C."
    },
    q1: "What is the function of the 'C' terminal wire in a modern thermostat installation?",
    p1: "thermostat common wire C wire purpose",
    a1: "Common wire; provides continuous 24VAC ground path to power smart thermostats without relying on batteries.",
    q2: "What gauge and type of copper wire is standard for connecting thermostats to furnace control boards?",
    p2: "thermostat wire standard gauge type solid",
    a2: "18 AWG solid copper wire (typically multi-conductor thermostat cable).",
    q3: "What occurs if the Red (R) wire touches the Blue/Common (C) wire directly?",
    p3: "what happens if R touches C wire thermostat control board",
    a3: "It creates a short circuit, blowing the 3-Amp or 5-Amp fuse on the furnace control board.",
    steps: [
      "Mount a thermostat sub-base wall plate to the training block using screws and a level.",
      "Take a length of 18/5 thermostat wire. Strip 2 inches of the outer jacket.",
      "Strip 1/4\" of insulation from each of the small conductors (Red, White, Yellow, Green, Blue).",
      "Insert each wire into its corresponding terminal screw (R, W, Y, G, C) and tighten."
    ],
    signoff: ["Sub-base mounted level", "18/5 wire outer jacket stripped", "Individual wires stripped 1/4\"", "Wires screwed to correct terminals"]
  },
  // WO 12
  {
    num: 12, station: 'automotive', title: 'Tire Sidewall Specifications & Pressure Check',
    youtubeId: 'xDxFIISCNpY',
    studySheet: {
      overview: "Tires are the only contact point between a vehicle and the road, making proper inspection and inflation essential for vehicle control, braking performance, and passenger safety.",
      keyConcepts: "A tire sidewall displays a standard specifications string (e.g. 225/50R17). '225' is the tire width in millimeters, '50' is the aspect ratio (sidewall height is 50% of width), 'R' is radial construction, and '17' is the wheel diameter in inches. The Department of Transportation (DOT) code displays a 4-digit date stamp (e.g. 1223 means the 12th week of 2023).",
      codesSafety: "Tires dry rot and degrade over time. Industry standards recommend replacing any tire that is 6 years or older, regardless of tread wear. Recommended tire pressures are cold inflation targets printed on the door jamb placard sticker, not the maximum inflation pressure stamped on the tire sidewall.",
      guidelines: "Locate the driver's door jamb placard to find the target front and rear cold tire inflation PSI. Inspect tire sidewalls for cracks (dry rot), check tread depth with a penny, locate the DOT code to calculate the tire age, and use a pressure gauge to measure the actual tire pressure."
    },
    q1: "For a tire marked 225/50R17, what do the numbers '225' and '50' represent?",
    p1: "tire size width aspect ratio numbers meaning 225 50",
    a1: "225 is the tread width in mm. 50 is the aspect ratio (profile height is 50% of the width).",
    q2: "If a tire's DOT code ends in '1223', in what month and year was the tire manufactured?",
    p2: "decode tire DOT code 4 digits date week year",
    a2: "March 2023 (12th week of 2023).",
    q3: "Where is the correct inflation pressure for a vehicle's tires found (do not say the tire sidewall)?",
    p3: "where to find recommended tire pressure placard door jamb",
    a3: "On the tire placard sticker located on the driver's door jamb.",
    steps: [
      "Locate a vehicle in the parking lot. Record its complete tire size string from the sidewall.",
      "Locate the tire's DOT code. Record the 4-digit manufacture date code.",
      "Find the tire pressure placard on the driver's door jamb. Record the recommended front/rear PSI.",
      "Use a tire pressure plunger gauge to measure the actual cold tire pressure. Check if it matches."
    ],
    signoff: ["Tire size string decoded", "DOT code date decoded", "Door placard PSI verified", "Actual tire pressure measured"]
  },
  // WO 13
  {
    num: 13, station: 'safety', title: 'Warehouse 5S Sorting (Playing Card Drill)',
    youtubeId: '',
    studySheet: {
      overview: "5S is a lean workplace organization methodology developed in Japan. It stands for five steps: Sort, Set in order, Shine, Standardize, and Sustain. Implementing 5S reduces travel times, cuts operational wastes, and eliminates hidden safety hazards.",
      keyConcepts: "A messy workspace contains waste, hides tools, and causes walking delays. In logistics, inventory slotting organizes parts by usage frequency: placing high-demand items close to shipping lanes and on waist-level racks reduces picking path times and lowers physical worker fatigue.",
      codesSafety: "Work-In-Progress (WIP) refers to inventory sitting between production steps. High WIP clogs walkways and creates fire and tripping hazards. Standardizing tool locations using shadow boards ensures tools are immediately available and missing items are noticed.",
      guidelines: "Scatter a deck of cards face down on a table to represent a disorganized warehouse. Time how long it takes to pick 5 specific cards. Then, gather the cards, sort them by suit, order them numerically, and repeat the pick. Compare how organization impacts access speed."
    },
    q1: "What are the five steps of the 5S organization methodology?",
    p1: "five steps of 5S lean manufacturing definitions",
    a1: "Sort, Set in order, Shine, Standardize, Sustain.",
    q2: "How does inventory slotting (sorting items by frequency of pick) improve safety in a warehouse?",
    p2: "inventory slotting warehouse safety benefits ergonomics",
    a2: "It places high-frequency items on middle racks at waist height, reducing worker bending, stretching, and lifting strains.",
    q3: "What is work-in-progress (WIP) inventory, and why is high WIP considered a waste in logistics?",
    p3: "lean logistics work in progress WIP waste explanation",
    a3: "WIP is inventory waiting to be processed. High WIP clogs warehouse floors, blocks aisles, and ties up capital.",
    steps: [
      "Spread a standard deck of 52 playing cards face down on a desk in a messy, scattered pile.",
      "Timer starts: search the pile and retrieve exactly 5 cards: King of Hearts, Ace of Spades, 3 of Clubs, 10 of Diamonds, and 7 of Spades. Record the time.",
      "Collect the cards. Sort the deck by suit (Spades, Hearts, Diamonds, Clubs) and order numerically. Stack them.",
      "Timer starts: pick the same 5 cards from the sorted deck. Record the time. Compare the search efficiency."
    ],
    signoff: ["Messy deck pick timed", "Deck sorted by suit/value", "Sorted deck pick timed", "Search time reduction calculated"]
  },
  // WO 14
  {
    num: 14, station: 'drafting', title: 'Room Mapping & Single Room Floor Plan',
    youtubeId: '',
    studySheet: {
      overview: "A floor plan is a scaled, horizontal cut view of a room looking down from above. It shows wall boundaries, door swings, window openings, and built-in fixtures, serving as the blueprint base for structural modifications.",
      keyConcepts: "Architectural drawings use standard symbols to represent features: swinging doors are drawn as a straight panel line with a curved swing arc; sliding windows are drawn as thin double-lines inside walls. Legends and schedules define the symbols and line styles used across drawing sheets.",
      codesSafety: "Residential interior passage doors are typically 30\" to 32\" wide (2'6\" to 2'8\"), while main exterior egress doors must be at least 36\" wide (3'0\") under modern safety codes. Measuring rooms requires tracking total wall runs and the exact distances of openings from corners.",
      guidelines: "Use a 25' tape measure to measure the overall length and width of the classroom. Measure door and window widths, noting their distances from wall corners. Apply a scale of 1/2\" = 1'0\" to convert feet to inches. Draft the scaled room layout on graph paper."
    },
    q1: "What is the standard width of a residential passage door on a building floor plan?",
    p1: "standard residential interior door width inches",
    a1: "30 to 32 inches (or 2'6\" to 2'8\"). Entry doors are typically 36 inches (3'0\").",
    q2: "How are sliding windows and swinging doors visually represented on an architectural drawing?",
    p2: "window and door blueprint symbols plan view",
    a2: "Windows are drawn as thin double lines in the wall. Swinging doors are drawn as a straight line showing the door slab and a curved arc showing the swing direction.",
    q3: "What does a blueprint legend contain, and why is it critical for trades?",
    p3: "blueprint legend symbol schedule importance construction",
    a3: "It defines the specific symbols, shorthand codes, and line styles used on the drawing sheets.",
    steps: [
      "Using a tape measure, measure the interior length and width of your classroom/office room.",
      "Measure the width of the main entry door and the window openings. Note their distances from the corners.",
      "Select a scale of 1/2\" = 1'0\". Convert all your real measurements into scale drawing lengths.",
      "Use a pencil and straightedge to draw the room's floor plan on graph paper, marking door swings and window zones."
    ],
    signoff: ["Room interior measured", "Door/window openings mapped", "Scale math calculated", "Scaled floor plan drafted"]
  },
  // WO 15
  {
    num: 15, station: 'foamboard', title: 'T-Square Layout & Base Frame Assembly',
    youtubeId: '',
    studySheet: {
      overview: "T-squares and speed squares are basic geometry tools used in carpentry, drafting, and framing layouts to establish perpendicular lines and ensure wall junctions meet at exact 90-degree angles.",
      keyConcepts: "A T-square has two parts: the crosshead (placed flat against the board edge) and the blade (guides the pencil). Sliding the head along the board edge allows drawing parallel or perpendicular lines. A frame is 'square' when all corners are exactly 90 degrees. This is verified by checking that opposite diagonal measurements are equal.",
      codesSafety: "Pinning joints using steel T-pins allows dry-fitting structural assemblies to check for squareness before permanent glue is applied. Hot glue or pins represent structural welds or framing fasteners in scaled modeling workflows.",
      guidelines: "Slide the head of your T-square along the edge of your layout board to draw a perfect 10\" x 10\" square. Cut four 10\" rails from foam board. Position the rails along the lines, pin the corners, measure both diagonals to confirm they are equal, and secure with glue."
    },
    q1: "How does a standard T-square ensure perpendicular lines on a layout board?",
    p1: "how to use T-square drawing perpendicular line",
    a1: "The crosshead of the T-square slides flat against the straight edge of the board, forcing the blade to align at exactly 90 degrees.",
    q2: "What does it mean for a frame to be 'square' in construction? What is the diagonal measurement test?",
    p2: "how to check if frame is square diagonal measurements",
    a2: "A frame is square if all corners are exactly 90 degrees. If the two diagonal corner-to-corner measurements are equal, the frame is square.",
    q3: "Why are T-pins used to dry-fit joint assemblies in foam board before applying adhesive?",
    p3: "why use pins modeling foam board joint assembly",
    a3: "They hold pieces in position temporarily so the alignment can be checked and adjusted before committing to permanent glue.",
    steps: [
      "Use a T-square to draw a perfect 10\" x 10\" square outline on your layout board.",
      "Cut four 1\" wide by 10\" long strips of foam board to act as frame wall rails.",
      "Align the rails on the drawn square, verifying that the corner joints meet at exactly 90 degrees.",
      "Use T-pins (or a thin line of glue) to secure the four rails together to build a rigid square base frame."
    ],
    signoff: ["10x10 square drawn with T-square", "4 wall rails cut to size", "Perpendicular corners verified", "Square base frame assembled secure"]
  },
  // WO 16
  {
    num: 16, station: 'precision', title: 'Torque Wrench Calibration & Operation',
    youtubeId: '',
    studySheet: {
      overview: "Threaded fasteners clamp parts together. If tightened too little, they will loosen under vibration; if tightened too much, they will stretch, strip threads, or snap. Torque wrenches allow tightening fasteners to exact tension specs.",
      keyConcepts: "Torque is a rotational force calculated as Force multiplied by Distance (T = F * D). Standard units are Foot-Pounds (ft-lbs) or Inch-Pounds (in-lbs). A click-type torque wrench uses an adjustable internal spring sleeve. When the set torque is reached, an internal pivot slips, producing an audible 'click' and a physical release.",
      codesSafety: "Bolts stretch when tightened, acting like stiff springs to clamp joints. Exceeding torque ratings permanently deforms the bolt threads or strips threads out of soft metal blocks like aluminum. Torque wrenches are precision tools; they must never be used to break stuck bolts loose.",
      guidelines: "Unlock the torque wrench handle collar. Rotate the handle to set the sleeve line to the target value (e.g. 15 ft-lbs) and lock the collar. Place the socket on the bolt, pull with steady pressure, and stop pulling immediately when the wrench clicks. Reset the wrench to zero before storage."
    },
    q1: "Why is it important to use a torque wrench instead of a standard hand wrench on automotive engine bolts?",
    p1: "why use torque wrench automotive engine assembly bolts",
    a1: "To ensure even tension across clamping surfaces (like cylinder heads) to prevent gasket leaks, block warping, or bolt snapping.",
    q2: "How do you convert 240 inch-pounds (in-lbs) of torque into foot-pounds (ft-lbs)?",
    p2: "how to convert inch pounds to foot pounds formula",
    a2: "20 ft-lbs (240 / 12 = 20 ft-lbs).",
    q3: "Why must a click-type torque wrench always be dialed back to its lowest setting before being stored?",
    p3: "why store torque wrench at lowest setting",
    a3: "To relieve tension on the internal spring, preventing the spring from taking a set and losing calibration accuracy.",
    steps: [
      "Examine a click-type torque wrench. Locate the locking knob and sleeve dial.",
      "Unlock the sleeve. Turn the handle to set the torque to exactly 15 ft-lbs (or equivalent in-lbs). Lock the sleeve.",
      "Fit the socket onto a bolt on the training engine block or fixture board.",
      "Tighten the bolt clockwise, pulling with steady force. Stop pulling immediately when you feel and hear the wrench 'click.'"
    ],
    signoff: ["Torque scale set to 15 ft-lbs", "Wrench locked secure", "Bolt tightened to click", "Tension reset to zero for storage"]
  },
  // WO 17
  {
    num: 17, station: 'electrical', title: 'MyHome Kit - Wiring a 3-Way Switch',
    youtubeId: '',
    studySheet: {
      overview: "A 3-way switch circuit controls a single light load from two separate locations (e.g., lighting at both the top and bottom of a staircase, or at both ends of a hallway).",
      keyConcepts: "A standard single-pole switch has two terminals and simply opens or closes the line wire. A 3-way switch has three terminals: one Common terminal (colored black or labeled COM) and two Traveler terminals (brass colored). The Common terminal acts as the input/output hub, while the traveler terminals provide two alternate paths for current to travel.",
      codesSafety: "National Electrical Code (NEC) rules require the hot wire to connect to the Common terminal of Switch 1, a pair of traveler wires to run between the traveler terminals of both switches, and the Common terminal of Switch 2 to connect to the hot wire of the light fixture. Switches must be grounded for safety.",
      guidelines: "Identify the terminals on the MyHome 3-way switch blocks. Connect a battery pack line to Switch 1 COM. Run two jumper wires between the traveler terminals of Switch 1 and Switch 2. Connect Switch 2 COM to the light bulb. Confirm the bulb toggles from either switch."
    },
    q1: "Explain the difference in terminals between a standard single-pole switch and a 3-way switch.",
    p1: "single pole vs 3 way switch terminals differences",
    a1: "Single-pole has 2 terminals (opens/closes one line); 3-way has 3 terminals (1 common and 2 travelers) to reroute current.",
    q2: "What are traveler wires in a 3-way switch circuit? Where do they connect?",
    p2: "traveler wires 3-way switch function connection",
    a2: "A fraction of wire loops running between the two traveler terminals of the switches, providing alternate paths.",
    q3: "Why is the common terminal screw on a 3-way switch distinct (usually black)? What connects to it?",
    p3: "common terminal 3-way switch black screw connects to",
    a3: "It is the input/output hub. On Switch 1, it connects to line power; on Switch 2, it connects to the light load.",
    steps: [
      "Locate the MyHome electrical kit board and manuals.",
      "Identify the two 3-way switch blocks in the kit. Note the three terminal dots.",
      "Assemble the 3-way switch circuit project, connecting the battery supply to Switch 1 COM, travelers between switches, and Switch 2 COM to the bulb.",
      "Test toggle both switches independently. Confirm that the light can be turned on and off from either switch."
    ],
    signoff: ["3-way switches identified", "Traveler wires connected", "Bulb wired to COM terminal", "Independent toggling verified"]
  },
  // WO 18
  {
    num: 18, station: 'plumbing', title: 'Small Parts Kit - Sink P-Trap Assembly',
    youtubeId: 'u0BgA1tVPaM',
    studySheet: {
      overview: "Sewer systems emit toxic and flammable sewer gases. Plumbing codes require every drain fixture to have a barrier trap that blocks these gases from venting into interior spaces.",
      keyConcepts: "A P-trap features a curved U-bend that holds standing water, creating a water seal barrier. The depth of the trap seal must be between 2\" (minimum) and 4\" (maximum). Traps must connect to a vent pipe downstream to introduce air, preventing vacuum forces from siphoning the seal water out when fixtures drain.",
      codesSafety: "Uniform Plumbing Code (UPC) forbids double-trapping (installing two traps on one line) because it air-binds the line, stopping drainage. Slip joints join drain pipes, using beveled plastic wash washers compressed by threaded slip nuts to create friction seals.",
      guidelines: "Assemble the U-bend trap and the wall discharge arm from the small parts kit. Slide a slip nut and a beveled plastic washer onto the pipe, ensuring the beveled edge faces the fitting opening. Align the joints without forcing them, and tighten the nuts hand-tight."
    },
    q1: "What is the minimum required water seal depth inside a standard drainage trap under plumbing codes?",
    p1: "minimum plumbing P-trap water seal depth IPC UPC",
    a1: "2 inches (maximum is typically 4 inches).",
    q2: "What is trap siphonage, and what venting component prevents it?",
    p2: "trap siphonage drainage sewer gas vent valve function",
    a2: "Siphonage occurs when a vacuum pulls the seal water out of the trap. A plumbing vent pipe introduces air to prevent vacuums.",
    q3: "How does a plastic slip-joint washer seal a drain connection when the nut is tightened?",
    p3: "how slip joint washer seals plumbing drain pipe",
    a3: "The nut compresses the beveled plastic washer against the pipe wall, forming a water-tight friction seal.",
    steps: [
      "Open the plumbing small parts kit. Gather the U-bend trap, wall arm tube, slip-joint nuts, and washers.",
      "Position a plastic slip-joint washer onto the wall tube, ensuring the beveled edge faces the fitting opening.",
      "Assemble the slip joints together, adjusting the alignment of the U-bend to match the wall discharge height.",
      "Tighten the slip-joint nuts by hand. Check that the assembly is straight and secure."
    ],
    signoff: ["U-bend and wall tube gathered", "Beveled washers oriented correctly", "Slip joints aligned without binding", "Nuts tightened hand-secure"]
  },
  // WO 19
  {
    num: 19, station: 'hvac', title: 'HVAC Temperature Split (Delta T) Audit',
    youtubeId: '',
    studySheet: {
      overview: "Air conditioners and heat pumps cool air by extracting thermal energy at the indoor evaporator coil. Monitoring system performance requires auditing the temperature split (Delta T) across the air handler.",
      keyConcepts: "The temperature split is the difference in temperature between the air entering the system through the return duct and the conditioned air leaving through supply registers. In cooling mode, a properly operating AC evaporator coil will absorb enough heat to drop air temperatures by a specific thermodynamic split range.",
      codesSafety: "Under standard operating conditions, a healthy AC system has a Delta T split of 16 to 20 degrees Fahrenheit. A low split (under 15°F) indicates weak heat transfer (low refrigerant charge or compressor cylinder wear). A high split (over 22°F) indicates restricted airflow (clogged filter or slow blower fan).",
      guidelines: "Verify the system has run for at least 10 minutes. Use a digital thermometer probe to measure return air temperature inside the return intake duct. Measure supply air temperature inside a nearby supply register. Subtract supply from return to find the Delta T split."
    },
    q1: "What is the typical normal cooling temperature split range for a standard residential AC system?",
    p1: "normal AC cooling temperature split delta T supply return",
    a1: "16 to 20 degrees F.",
    q2: "What system problems are indicated if the cooling temperature split is under 15 degrees F?",
    p2: "AC temperature split low causes refrigerant airflow",
    a1: "Low refrigerant charge, a dirty evaporator coil, or a compressor valve failing to pump.",
    q3: "What system problems are indicated if the cooling temperature split is over 22 degrees F?",
    p3: "high AC temperature split causes airflow restrictions",
    a3: "Low airflow across the coil (caused by a dirty filter, blocked ducts, or blower fan issues).",
    steps: [
      "Verify the building heating or cooling system is currently running.",
      "Locate the nearest main air return grille. Use a digital probe thermometer to measure the return air temperature.",
      "Locate the nearest air supply register (duct vent). Measure the air temperature leaving the register.",
      "Subtract the supply temperature from the return temperature. Record the resulting Delta T split."
    ],
    signoff: ["HVAC system verified active", "Return air temperature measured", "Supply air temperature measured", "Delta T split calculated correctly"]
  },
  // WO 20
  {
    num: 20, station: 'automotive', title: 'Under-Hood Fluids Quality & Level Audit',
    youtubeId: 'qOYXklWjuXA',
    studySheet: {
      overview: "Automotive systems rely on chemical fluids to lubricate gears, absorb combustion heat, translate hydraulic control pressures, and wash wind-shield glass. Checking these fluids regularly prevents mechanical breakdowns.",
      keyConcepts: "Fluid checks evaluate both level and condition. Fresh engine oil is amber/yellow; dark black indicates carbon soot buildup; a milky white color indicates coolant contamination (blown head gasket). Coolant levels are checked in translucent overflow reservoirs. Brake fluid must remain clear; dark amber indicates water absorption.",
      codesSafety: "Brake fluids are glycol-based (DOT 3, 4) and hygroscopic (they absorb water from the air over time, lowering their boiling point). DOT 5 is silicone-based, hydrophobic, and must never be mixed with DOT 3 or 4, as they will separate and gum up valves. Never open a hot radiator cap; system pressure will spray boiling steam.",
      guidelines: "Open the hood. Pull the oil dipstick, wipe it, reinsert, pull again, and read level against the MIN/MAX lines. Note oil color. Verify coolant levels in the recovery reservoir. Wipe the brake reservoir cap clean before opening to check level and fluid clarity."
    },
    q1: "What does a dark brown/black color on an automatic transmission fluid (ATF) check indicate?",
    p1: "dark burnt transmission fluid meaning gear slip",
    a1: "Oxidation and burnt clutches; requires replacement to prevent transmission failure.",
    q2: "Why must you check coolant level in the radiator overflow reservoir when the engine is cold?",
    p2: "why open radiator cap cold safety expansion",
    a2: "Hot coolant is highly pressurized and can spray out, causing severe steam burns.",
    q3: "What is the chemical difference between DOT 3/4 brake fluids and DOT 5 brake fluid?",
    p3: "DOT 3 DOT 4 glycol vs DOT 5 silicone brake fluid",
    a3: "DOT 3 and 4 are glycol-based (hygroscopic, absorb water); DOT 5 is silicone-based (hydrophobic, does not mix).",
    steps: [
      "Locate a vehicle in the parking lot. Pull the latch to open the engine hood.",
      "Locate the engine oil dipstick. Pull it, wipe it, reinsert, pull again, and check the oil level and color.",
      "Locate the engine coolant overflow tank. Check the level against the MIN/MAX lines.",
      "Locate the brake fluid reservoir. Wipe the exterior cover, and check the fluid level and color."
    ],
    signoff: ["Oil level and color verified", "Coolant overflow level checked", "Brake fluid reservoir inspected", "Fluid findings recorded"]
  },
  // WO 21
  {
    num: 21, station: 'safety', title: 'Personal SDS / MSDS Compilation using AI',
    youtubeId: '',
    studySheet: {
      overview: "The OSHA Hazard Communication Standard requires employers to maintain Safety Data Sheets (SDSs) for all commercial chemicals on site. These sheets are organized into 16 GHS standardized sections to provide clear safety and disposal instructions.",
      keyConcepts: "The Globally Harmonized System (GHS) uses standard pictograms to communicate chemical risks at a glance. Signal words indicate severity: 'Danger' for severe hazards, and 'Warning' for less severe hazards. Section 8 of the SDS outlines the Personal Protective Equipment (PPE) required to handle the chemical safely.",
      codesSafety: "SDS Section 4 outlines First-Aid measures, Section 5 covers Fire-Fighting actions, and Section 8 covers Exposure Controls/PPE. GHS pictograms include: a skull and crossbones (acute toxicity), a silhouette of a person with a chest burst (health hazards like carcinogens), and a flame (flammable liquids).",
      guidelines: "Locate 3 chemicals in the building (cleaners, soaps, spray paints). Open a Chromebook and use the AI assistant to search for the specific SDS: 'GHS SDS properties for [Product]. List signal word, pictograms, first aid, and Section 8 PPE.' Record the values in your workbook."
    },
    q1: "Which specific section of an SDS contains instructions for firefighting and extinguishing agents?",
    p1: "firefighting measures section SDS GHS",
    a1: "Section 5.",
    q2: "What GHS pictogram represents health hazards like carcinogens or respiratory sensitizers?",
    p2: "GHS pictogram health hazard meaning symbol",
    a2: "The Silhouette of a person with a white starburst shape across the chest.",
    q3: "Why is a manufacturer required to provide an SDS sheet with every bulk chemical shipment?",
    p3: "OSHA requirements chemical manufacturer supply SDS",
    a3: "To comply with the OSHA Hazard Communication Standard, ensuring employers can train workers on chemical risks.",
    steps: [
      "Search the classroom or facility for 3 household/commercial chemical products (e.g. cleaner, soap, paint).",
      "Open a Chromebook. Instruct the AI assistant: 'Find the GHS Safety Data Sheet parameters for [Product Name]. Extract GHS pictograms, signal word, and Section 8 PPE.'",
      "Write down the GHS pictograms and the signal word (Danger/Warning) for each product.",
      "Write the recommended glove, eye, and skin protection for each chemical in your workbook."
    ],
    signoff: ["3 facility chemicals cataloged", "AI queries formulated", "GHS signal words recorded", "PPE recommendations documented"]
  },
  // WO 22
  {
    num: 22, station: 'drafting', title: 'Wall Thickness Mapping & Blueprint Drawing',
    youtubeId: '',
    studySheet: {
      overview: "Wall thicknesses must be represented accurately on architectural drawings to align structural frames, size door jamb casings, and plan plumbing/HVAC chases inside partition spaces.",
      keyConcepts: "Walls are drafted as double lines rather than single lines to represent their actual physical thickness. Interior partition walls are framed with 2x4 studs (3.5\" actual width) plus 1/2\" drywall on each side, yielding a 4.5\" finished thickness. Exterior walls use 2x6 studs (5.5\" actual width) plus sheathing, drywall, and siding.",
      codesSafety: "Blueprints use double lines to define layout spaces. If a wall is drawn as a single line, it hides the physical width, causing door frames or pipe runs to collide with structural framing during installation. Measuring door jamb casings reveals the wall thickness.",
      guidelines: "Measure the thickness of an interior wall partition by measuring across a doorway casing jamb. Do the same for an exterior structural wall. Convert these dimensions to a scale of 1/2\" = 1'0\". Draw a layout segment showing an interior wall intersecting with an exterior wall."
    },
    q1: "What is the typical actual finished thickness of a residential interior partition wall built with 2x4 wood studs and 1/2\" drywall?",
    p1: "actual finished thickness of 2x4 drywall partition wall",
    a1: "4.5 inches (stud is 3.5\" wide + two 0.5\" sheets of drywall = 4.5\").",
    q2: "What is the actual finished thickness of an exterior wall framed with 2x6 studs?",
    p2: "finished exterior wall thickness 2x6 framing drywall",
    a2: "6.5 inches (stud is 5.5\" wide + drywall and exterior sheathing/siding/drywall).",
    q3: "Why are walls drawn as double lines on blueprints rather than single lines?",
    p3: "why walls are drawn as double lines on blueprints",
    a3: "To represent the actual physical thickness of the wall, allowing space for doors, windows, and utility piping layouts.",
    steps: [
      "Take a tape measure. Measure the thickness of an interior wall doorway casing in your building.",
      "Measure the thickness of an exterior wall doorway casing. Record both values.",
      "Convert these thickness values to a scale of 1/2\" = 1'0\".",
      "Draw a scale layout segment on graph paper showing an interior partition wall intersecting with an exterior wall."
    ],
    signoff: ["Interior wall thickness measured", "Exterior wall thickness measured", "Scale calculations recorded", "Double-line wall joint drawn to scale"]
  },
  // WO 23
  {
    num: 23, station: 'foamboard', title: 'Diagonal Truss Bracing & Pythagorean Math',
    youtubeId: 'uthjpYKD7Ng',
    studySheet: {
      overview: "Frames built with perpendicular rails (rectangles) are vulnerable to lateral forces that cause them to tilt or skew, a structural deformation known as racking. Triangulation is the primary technique used to stabilize structures.",
      keyConcepts: "A triangle is the only geometric shape that is inherently rigid; its angles cannot change without changing the lengths of its sides. Adding diagonal braces across corners transfers lateral shear forces into compression and tension loads along the brace. Diagonal lengths are calculated using the Pythagorean theorem.",
      codesSafety: "The Pythagorean theorem is stated as: a^2 + b^2 = c^2, where a and b are the vertical and horizontal leg lengths, and c is the diagonal hypotenuse length. In construction, speed squares are used to quickly mark brace angles, commonly at 45 degrees.",
      guidelines: "Take the square frame from Workorder 15. Measure 4 inches out from a corner along both rails. Use the Pythagorean formula to compute the diagonal distance c. Cut a 1\" wide foam board brace to that length, cut 45-degree bevels on both ends, and pin it to reinforce the frame."
    },
    q1: "Why is a triangle structurally rigid while a rectangle can collapse under a side load?",
    p1: "why triangle is strongest shape geometry structure",
    a1: "A triangle's angles cannot be changed without changing its side lengths, making it resist deformation under compression or tension.",
    q2: "What is the Pythagorean theorem formula, and how is it used to find the length of a diagonal brace?",
    p2: "Pythagorean theorem formula diagonal brace construction",
    a2: "a^2 + b^2 = c^2 (where a and b are the horizontal/vertical legs, and c is the diagonal brace length).",
    q3: "If a diagonal brace has vertical and horizontal legs of 6 inches each, what is the calculated length of the brace?",
    p3: "calculate diagonal of 6 by 6 square hypotenuse",
    a3: "8.49 inches (c = sqrt(6^2 + 6^2) = sqrt(72) = 8.49).",
    steps: [
      "Locate the square base frame assembled in Workorder 15.",
      "Measure and mark 4 inches from one corner along both intersecting rails.",
      "Calculate the diagonal brace length between these two marks using the Pythagorean theorem.",
      "Cut a 1\" wide diagonal brace from foam board to this length, beveling the ends at 45 degrees, and install it."
    ],
    signoff: ["Frame racking tendency observed", "Diagonal legs marked at 4\"", "Diagonal brace length calculated", "Diagonal brace cut and installed"]
  },
  // WO 24
  {
    num: 24, station: 'precision', title: 'Precision Gasket Fabrication',
    youtubeId: '',
    studySheet: {
      overview: "Mating metal surfaces in plumbing fittings, automotive water pumps, and engines have microscopic imperfections that can leak under pressure. Gaskets are compressible barriers installed between these flanges to create reliable seals.",
      keyConcepts: "A gasket is cut from soft sheets of paper, cork, or rubber. When the flange bolts are tightened, the gasket material compresses to fill the surface gaps. Precision fabrication requires copying the flange outline and bolt hole patterns onto the gasket material.",
      codesSafety: "Gasket bolt holes must be cut cleanly and centered. If holes are too small, the gasket will pinch and bunch when bolts are pushed through, creating a leak path. Exhaust joints use high-temperature graphite/metal gaskets, while water pumps use cork/rubber sheets.",
      guidelines: "Take a metal fitting cap or pipe flange from the kit. Clean the face. Place it face down on a gasket sheet, trace the outer profile and bolt holes with a pencil. Cut the outer line with scissors, and use a hole punch to cut clean bolt holes. Test fit the gasket."
    },
    q1: "What is the purpose of a gasket in a pressurized mechanical pipe or engine connection?",
    p1: "gasket function mechanical pressurized flange connection",
    a1: "To fill microscopic irregularities in mating metal surfaces, preventing fluid or gas leaks under pressure.",
    q2: "What occurs if you cut gasket bolt holes too small or off-center from the flange bolts?",
    p2: "effects of cut gasket bolt holes too small",
    a2: "The gasket will bunch, tear, or pinch when bolts are pushed through, creating a path for fluid leaks.",
    q3: "What type of material is standard for high-temperature exhaust gaskets compared to low-temperature water pumps?",
    p3: "exhaust gasket vs water pump gasket material differences",
    a3: "Exhaust uses graphite, metal-reinforced, or MLS gaskets; water pumps use cork, rubber, or paper gaskets.",
    steps: [
      "Take a pipe flange or a mechanical fitting cap from the parts kit.",
      "Place the flange face down on a piece of gasket paper (or scrap card stock). Trace the outer edge and bolt holes.",
      "Use scissors to cut out the outer shape of the gasket.",
      "Use a gasket hole punch (or utility knife) to cut precise bolt holes. Test fit the gasket on the flange."
    ],
    signoff: ["Flange profile traced", "Outer shape cut clean", "Bolt holes punched cleanly", "Gasket test-fit verified"]
  },
  // WO 25
  {
    num: 25, station: 'electrical', title: 'MyHome Kit - Circuit Fault Diagnostics',
    youtubeId: '',
    studySheet: {
      overview: "Troubleshooting electrical issues requires a systematic diagnostic workflow to locate open paths (breaks), short circuits (bypasses), or high-resistance connections.",
      keyConcepts: "An open circuit is a break in a conductor that stops current flow; voltage drop across the break equals the source voltage. A short circuit is an unintended low-resistance connection that bypasses the load, causing current to spike and fuses or breakers to trip.",
      codesSafety: "Always test resistance (Ohms) on completely de-energized circuits. Multimeters measure resistance by sending out a small internal current; external circuit voltage will blow the meter's fuse. Voltage checks are performed on live circuits.",
      guidelines: "Locate a pre-built MyHome circuit with a hidden fault introduced by the facilitator. Set your multimeter to Volts. Step through the circuit from power input to load, checking voltage at each connection to find the open loop. Fix the connection."
    },
    q1: "What does a reading of '0.00V' across a closed switch in a live circuit indicate?",
    p1: "voltage drop across closed switch live circuit multimeter",
    a1: "It indicates a healthy, closed switch with zero resistance (no voltage drop).",
    q2: "What does a reading of source voltage (e.g. 120V or 9V) across an open switch indicate?",
    p2: "voltage reading across open switch live circuit explanation",
    a2: "It indicates the switch is open, blocking current flow so the full circuit potential drops across it.",
    q3: "Why is testing resistance (Ohms) performed only on completely de-energized circuits?",
    p3: "why test resistance ohms on dead circuits only multimeter",
    a3: "Because the multimeter sends its own small current to measure resistance; external voltage will destroy the meter fuse.",
    steps: [
      "Locate the MyHome electrical kit board and select a working project circuit.",
      "The facilitator will secretly introduce a 'fault' (e.g., unplugging a jumper, adding a paper isolator).",
      "Trace the circuit path using visual checks. Use a test light or meter to check power points.",
      "Isolate the broken terminal, remove the fault, and verify the circuit operates normally again."
    ],
    signoff: ["Circuit fault introduced", "Diagnostic trace performed", "Fault isolated and identified", "Circuit operation restored"]
  },
  // WO 26
  {
    num: 26, station: 'plumbing', title: 'Water Conservation Flow Audit of Breakroom Faucet',
    youtubeId: '',
    studySheet: {
      overview: "Modern facility maintenance audits focus heavily on utility flow calculations. Measuring faucet outputs ensures water conservation guidelines are active and plumbing fixtures remain highly efficient.",
      keyConcepts: "Flow rates are measured in Gallons Per Minute (GPM). Measuring faucet flow does not require disassembling fixtures. Running water into a measured container for a timed interval allows direct math calculations. Mineral scale inside aerators can reduce flow rates, requiring cleaning.",
      codesSafety: "Building conservation standards require kitchen utility faucets to stay under 2.2 GPM and restroom lavatory sinks under 1.2 GPM. Lowering GPM decreases water bills and reduces wastewater processing demands on local grids.",
      guidelines: "Place a plastic liquid measuring container under the breakroom sink faucet. Open the valve fully for exactly 15 seconds. Measure volume in ounces (128 ounces = 1 gallon). Convert to GPM = (Ounces / 128) * 4."
    },
    q1: "Under commercial water conservation standards, what is the maximum allowed flow rate for public lavatory sinks?",
    p1: "commercial lavatory faucet GPM code limits",
    a1: "0.5 GPM to 1.2 GPM depending on public vs private status.",
    q2: "What are the common visual signs of calcium buildup on a faucet outlet mesh screen?",
    p2: "hard water calcium scale buildup signs faucet",
    a2: "White, chalky crust deposits around the mesh outlet, which blocks individual spray holes and causes uneven spray.",
    q3: "Why are low-flow aerators preferred over simply closing the shut-off valves halfway under the sink?",
    p3: "why aerators are better than throttling water valves GPM",
    a3: "Aerators introduce air to maintain spray pressure at low flows, whereas throttling valves just drop pressure, causing weak flow.",
    steps: [
      "Place a plastic measuring cup under the breakroom faucet nozzle.",
      "Open the cold water line fully while starting a stopwatch timer.",
      "Run the water at full flow for exactly 15 seconds, then shut the line.",
      "Measure the volume of water collected. Convert ounces to gallons, and calculate the GPM."
    ],
    signoff: ["Measuring cup positioned", "Water timed for exactly 15s", "Collected volume recorded in oz", "Faucet GPM calculated correctly"]
  },
  // WO 27
  {
    num: 27, station: 'hvac', title: 'Multi-meter Capacitance Audits of Loose Capacitors',
    youtubeId: '',
    studySheet: {
      overview: "Electric motors in HVAC equipment require electrical capacitors to provide starting torque and keep motors running efficiently. Testing these components must be done under safe benchtop conditions.",
      keyConcepts: "Run and start capacitors hold electrical charges and are rated in microfarads (uF). Multimeters with capacitance settings measure this value. Physical defects include bulging tops or leaking oil. Capacitors must be discharged using an insulated screwdriver before handling.",
      codesSafety: "Working on capacitors presents high shock risks. Always confirm the capacitor is fully discharged before touching terminals. Never connect a capacitor to active line power when testing. Compare the measured uF against the label tolerances (typically +/- 5% or 6%).",
      guidelines: "Bridge capacitor terminals with an insulated screwdriver to discharge. Set the digital multimeter to the Capacitance mode (marked with a capacitor symbol or -||-). Attach the meter leads to the capacitor terminals, read the microfarad rating, and check if it is within tolerances."
    },
    q1: "What unit of measurement is used for electrical capacitance in HVAC motor start/run capacitors?",
    p1: "capacitance unit of measurement run capacitor HVAC",
    a1: "Microfarads (mfd or uF).",
    q2: "Why must you discharge an HVAC capacitor before touching its terminal contacts, even if the system is turned off?",
    p2: "why discharge capacitor safety hazard shock",
    a2: "Capacitors store high-voltage electrical charges, which can deliver a fatal shock if touched.",
    q3: "How do you calculate if a capacitor labeled '35 uF +/- 6%' is within specification limits?",
    p3: "calculate capacitor tolerance range microfarads percentage",
    a3: "35 * 0.06 = 2.1 uF. The acceptable range is 32.9 uF to 37.1 uF.",
    steps: [
      "Gather the loose, safe capacitors provided at the workstation table.",
      "Ensure the capacitor terminals are bridged with an insulated screwdriver to verify they are dead.",
      "Configure your digital multimeter to the capacitance setting.",
      "Connect the red and black probes to the capacitor terminals. Record the microfarad reading and compare to the label."
    ],
    signoff: ["Loose capacitors gathered", "Capacitor discharged safely", "Multimeter capacitance mode selected", "Microfarad values verified against labels"]
  },
  // WO 28
  {
    num: 28, station: 'automotive', title: 'OBD-II Code Scanning & Freeze Frame Data',
    youtubeId: '',
    studySheet: {
      overview: "On-Board Diagnostics (OBD-II) is a standardized digital system that monitors emissions and powertrain components. The Engine Control Unit (ECU) monitors sensors and records errors.",
      keyConcepts: "When a fault is detected, the ECU stores a 5-character Diagnostic Trouble Code (DTC) starting with a letter: P (Powertrain), C (Chassis), B (Body), or U (Network). A Freeze Frame is a snapshot of sensor data (engine RPM, coolant temp, speed) logged at the exact second the code was tripped.",
      codesSafety: "Standard OBD-II interfaces use a 16-pin Diagnostic Link Connector (DLC) located under the dashboard within three feet of the steering column. Reading codes identifies fault areas, but technicians must verify the physical components before replacing parts.",
      guidelines: "Locate the DLC port. Connect the OBD-II scan tool. Turn the ignition key to the ON position (engine off). Retrieve stored active codes. Navigate to the Freeze Frame menu and record critical sensor readings to diagnose operating conditions at failure."
    },
    q1: "What does a diagnostic trouble code starting with the letter 'U' indicate?",
    p1: "OBD2 code letter categories powertrain chassis network U",
    a1: "Network or communication module fault (e.g., loss of communication between computers).",
    q2: "Where is the OBD-II Diagnostic Link Connector (DLC) typically located in a vehicle?",
    p2: "OBD2 DLC port standard location vehicle",
    a2: "Under the driver's side dashboard (within 3 feet of the steering wheel).",
    q3: "What information does Freeze Frame data provide that is not shown by a standard DTC code alone?",
    p3: "importance of freeze frame data engine diagnostics",
    a3: "The exact engine operating parameters (RPM, coolant temp, speed, fuel trim) when the fault was tripped.",
    steps: [
      "Locate the 16-pin OBD-II DLC connector under the driver's side steering column of your vehicle.",
      "Plug in the OBD-II hand scanner. Turn the vehicle key to the RUN position (engine off).",
      "Navigate the scan tool menu to read diagnostic trouble codes (DTCs). Record any active or pending codes.",
      "Select 'Freeze Frame Data' on the scanner menu. Record engine coolant temp, RPM, and fuel trim values."
    ],
    signoff: ["DLC port located", "Scanner connected and powered", "DTC code read performed", "Freeze Frame data retrieved"]
  },
  // WO 29
  {
    num: 29, station: 'safety', title: 'Mock OSHA Facility Inspection',
    youtubeId: '',
    studySheet: {
      overview: "Commercial and industrial facilities are subject to OSHA inspection standards to ensure safe working environments. Regular internal audits maintain safety compliance.",
      keyConcepts: "Inspections focus on key risk areas: egress pathways, walking surfaces, chemical labeling, and electrical clearance. Walking paths must remain clear to prevent trip hazards. Chemical secondary containers must display GHS labels indicating warnings.",
      codesSafety: "Egress hallways must have a minimum clear width of 28 inches (exit routes usually require 36 inches). Electrical control panels must have at least 36 inches of clear depth in front of them to allow emergency access. Fire doors must never be chained shut.",
      guidelines: "Walk the facility with an inspection clipboard. Check exit paths for obstructions. Confirm fire extinguisher tags show monthly checks. Verify that electrical panels are clear, secondary chemical bottles are labeled, and compile a citation report."
    },
    q1: "What is the minimum allowed width of an emergency egress hallway in a commercial building?",
    p1: "OSHA minimum commercial egress hallway width exit route",
    a1: "28 inches (standard exit routes require at least 36 inches or 3 feet of clear path).",
    q2: "Why is storing items in front of electrical circuit panels an OSHA violation? What is the clearance limit?",
    p2: "OSHA electrical panel clearance storage regulation",
    a2: "It blocks emergency cut-off access. Requires 36 inches (3 feet) of clear depth in front of the panel.",
    q3: "What is an OSHA Form 300 log used for in commercial facilities?",
    p3: "OSHA Form 300 log purpose reporting",
    a3: "To record all recordable work-related injuries, illnesses, and details.",
    steps: [
      "Take a clipboard and a safety inspection checklist sheet.",
      "Perform a walkthrough audit of the building breakroom, warehouse, and classrooms.",
      "Inspect exits, walkways, fire doors, fire extinguisher tags, and utility closets.",
      "Document at least three safety violations or areas of improvement and draft warning citation forms."
    ],
    signoff: ["Inspection checklist gathered", "Facility walkthrough completed", "3 safety items audited", "Warning citation forms drafted"]
  },
  // WO 30
  {
    num: 30, station: 'drafting', title: 'Warehouse Order Picking (Card Zone game)',
    youtubeId: '',
    studySheet: {
      overview: "Order picking is a core process in warehouse logistics. It involves retrieving items from storage locations to fulfill orders, with travel time accounting for the majority of picking costs.",
      keyConcepts: "To improve efficiency, warehouses use organized layouts. Key picking methods include: zone picking (pickers retrieve items only within assigned aisles) and batch picking (pickers retrieve items for multiple orders in one run). Slotting places high-frequency items close to main lanes to cut walking distances.",
      codesSafety: "Optimized picking paths reduce travel distances, which improves order throughput and lowers physical fatigue on workers. Keeping aisles clear and clean prevents collision risks between pickers and heavy equipment like forklifts.",
      guidelines: "Map the workspace into 4 card suit zones (Spades, Hearts, Diamonds, Clubs) representing warehouse storage aisles. Bins represent location numbers. Receive a card hand (order slip), plan the shortest picking path, and retrieve the cards in order to measure travel times."
    },
    q1: "What is the difference between zone picking and batch picking in a distribution warehouse?",
    p1: "zone picking vs batch picking warehouse logistics",
    a1: "Zone picking assigns workers to specific aisles; batch picking has one picker gather items for multiple orders.",
    q2: "How does path routing optimization software reduce wear on warehouse worker bodies?",
    p2: "warehouse path optimization ergonomics worker fatigue",
    a2: "It calculates the shortest path, reducing total daily walking distances and heavy load transport fatigue.",
    q3: "What is a picking slip, and what standard information must it contain?",
    p3: "order picking slip warehouse standard columns",
    a3: "A document listing item SKU/description, quantities, and bin locations.",
    steps: [
      "Designate warehouse aisles as Card suits (Spades = Zone A, Hearts = Zone B, Diamonds = Zone C, Clubs = Zone D).",
      "Pockets/Bins along the aisles represent locations. Place card decks in matching numerical pockets.",
      "Receive a random hand of 3 cards (this is your 'Picking Slip').",
      "Timer starts: navigate the lanes to pick the matching cards in numerical sequence. Record your time."
    ],
    signoff: ["Card suit zones mapped", "Card order slip received", "Pick path completed in sequence", "Pick time recorded"]
  },
  // WO 31
  {
    num: 31, station: 'foamboard', title: '3D Wall Stud & Sill Plate Framing',
    youtubeId: '',
    studySheet: {
      overview: "Wood light-frame construction is the standard framing method for residential and commercial walls. Spacing and aligning studs is key to ensuring structural walls can carry weight and support drywall panels.",
      keyConcepts: "A standard wall frame consists of a bottom sill plate, vertical wall studs, and a top plate. Studs are spaced 16 inches on-center (OC) in full-scale walls to align with the standard 4' x 8' dimensions of drywall sheets.",
      codesSafety: "Load-bearing walls support the weight of roofs or floors above, while non-load-bearing partition walls only divide rooms. Headers are horizontal beams installed over door and window rough openings to transfer structural loads to adjacent trimmer studs.",
      guidelines: "Cut two 12\" foam board strips to act as plates. Mark stud layout locations at 3\" intervals. Cut four 8\" studs. Align the studs perpendicular to the plates, secure with pins or glue, and verify that the framed wall section is square and stable."
    },
    q1: "What does the term '16 inches on-center' mean in wall framing layout?",
    p1: "16 inches on center framing layout meaning",
    a1: "The distance from the center of one vertical stud to the center of the next stud is exactly 16 inches.",
    q2: "What is the difference between a load-bearing wall and a non-load-bearing partition wall?",
    p2: "load bearing wall vs partition wall differences framing",
    a2: "A load-bearing wall supports structural weight from floors/roofs above; a partition wall only divides interior space.",
    q3: "What is the function of a wall header in door and window rough openings?",
    p3: "wall framing header purpose door window opening",
    a3: "A heavy beam that spans the opening to transfer structural loads around the door or window to adjacent studs.",
    steps: [
      "Cut two 12\" long strips of foam board (1\" wide) to act as your top plate and bottom sill plate.",
      "Mark stud locations on both plates at 3\" intervals (simulating scale stud spacing).",
      "Cut four 8\" long vertical studs (1\" wide) from foam board.",
      "Assemble the plates and studs together perpendicular using pins/glue to create a flat wall framing section."
    ],
    signoff: ["Top/bottom plates cut", "Stud locations marked at 3\"", "4 vertical studs cut", "Wall framing section assembled flat"]
  },
  // WO 32
  {
    num: 32, station: 'precision', title: 'Blade Swaps & Preventative Tool Care',
    youtubeId: '',
    studySheet: {
      overview: "Hand tools are investments that require regular maintenance to remain safe, precise, and efficient. Proper care extends tool life and reduces workplace injuries.",
      keyConcepts: "Utility knives, hacksaws, and scrapers rely on sharp blades. A dull blade requires excessive pressure to cut, increasing the risk of the blade slipping. Hacksaw blades must be installed with teeth pointing forward and tensioned to prevent twisting during cuts.",
      codesSafety: "Applying a light coating of machine oil (or WD-40) to steel tool joints protects them from rust. The oil acts as a hydrophobic barrier, blocking humidity and oxygen from corroding the metal surfaces.",
      guidelines: "Open retractable utility knife casings to replace dull blades. Inspect hacksaw blade teeth direction (must point forward, away from handle), mount the blade, and tighten the wingnut. Apply a drop of machine oil to the pivots of steel pliers and wipe away excess."
    },
    q1: "What is the safety risk of using a dull blade in a utility knife or hacksaw?",
    p1: "danger of using dull utility knife blade slip hazard",
    a1: "A dull blade requires excessive force to cut, increasing the risk of the blade slipping and causing severe lacerations.",
    q2: "What are the standard safety steps to replace a blade on a retractable utility knife?",
    p2: "how to change utility knife blade retract safety",
    a2: "Retract blade, open casing with screwdriver/button, lift old blade, flip or insert new blade, close casing securely.",
    q3: "How does applying a light coating of machine oil (or WD-40) protect tools from corrosion?",
    p3: "how lubricant machine oil prevents rust corrosion tools",
    a3: "It creates a hydrophobic barrier, blocking oxygen and humidity from reacting with the steel.",
    steps: [
      "Take a retractable utility knife. Carefully open the casing and replace the blade with a fresh one.",
      "Take a standard hand hacksaw. Inspect the blade teeth direction (teeth should point forward, away from handle).",
      "Loosen the blade wingnut, remove the hacksaw blade, insert a new blade, and tighten the tension wingnut.",
      "Apply a small drop of machine lubricating oil to the pivot pins of a pair of pliers. Wipe clean."
    ],
    signoff: ["Utility knife blade swapped", "Hacksaw blade direction verified", "Hacksaw blade tension adjusted", "Pliers pivot lubricated"]
  },
  // WO 33
  {
    num: 33, station: 'electrical', title: 'Wiring a Duplex Outlet Receptacle',
    youtubeId: 'tlYzrUKJDcQ',
    studySheet: {
      overview: "Duplex outlets are the standard points of connection for electrical appliances. Wiring them safely requires following polarization rules to ensure circuit currents travel along safe paths.",
      keyConcepts: "Polarization uses color-coded screws to ensure proper connections: Hot wires (black) connect to brass screws, Neutral wires (white) connect to silver screws, and Ground wires (bare copper) connect to the green screw on the outlet frame.",
      codesSafety: "Reversing hot and neutral polarities keeps voltage active on appliance parts that should be neutral, creating severe shock hazards. Wires must be wrapped clockwise around terminal screws so they tighten with the screw thread. The wider slot on a standard outlet is the neutral terminal.",
      guidelines: "Mount a plastic electrical outlet box. Feed sheathed Romex wire in. Strip 3/4\" of insulation from conductors. Form a J-hook at the end of each wire, loop them clockwise around the screws (black to brass, white to silver, ground to green), and tighten the screws."
    },
    q1: "Why is the polarization of outlet wiring critical? What occurs if hot and neutral are reversed?",
    p1: "hot neutral reversed polarity outlet safety hazard",
    a1: "Reversed polarity keeps voltage active on parts of an appliance that should be neutral, creating a shock hazard.",
    q2: "What is the purpose of the break-off tab located between the two brass screws on an outlet?",
    p2: "outlet break off tab purpose split receptacle",
    a2: "It separates the top and bottom sockets, allowing them to be powered by different circuits or switched individually.",
    q3: "Which terminal screw (brass or silver) is connected to the wider slot on a standard outlet socket?",
    p3: "outlet socket wide slot neutral hot silver brass",
    a3: "The wide slot is neutral, which connects to the silver terminal screws.",
    steps: [
      "Mount a plastic single-gang outlet box onto your plywood backing board.",
      "Feed your stripped 14/2 Romex cable through the rear box tab, leaving 6 inches of wire.",
      "Strip 3/4\" of insulation from the black and white wires. Form 'J-hooks' at the wire ends.",
      "Wrap the hooks clockwise around the terminal screws: black to brass, white to silver, ground to green. Tighten."
    ],
    signoff: ["Outlet box mounted securely", "Romex fed into box with clamp", "Wires wrapped clockwise around screws", "Black to brass / White to silver / Ground verified"]
  },
  // WO 34
  {
    num: 34, station: 'plumbing', title: 'Small Parts Kit - Piping Manifold Layout',
    youtubeId: 'FLhddKA1lfQ',
    studySheet: {
      overview: "Potable water systems can use traditional trunk-and-branch layouts (where a large pipe runs through the house with smaller pipes branching off to individual fixtures) or modern manifold layouts.",
      keyConcepts: "A manifold plumbing layout splits a main water service line into multiple dedicated ports. Each fixture receives a dedicated, continuous line directly from the central manifold, similar to an electrical breaker panel. This reduces pressure drops when multiple fixtures are used at once.",
      codesSafety: "Water lines must never run through uninsulated exterior walls in cold climates because water will freeze, expand, and split the pipe. Dedicated manifold lines allow shut-off valves to isolate single fixtures for repairs without shutting down water to the entire building.",
      guidelines: "Gather your small parts plumbing kit. Connect the 3/4\" main inlet pipe to the multi-outlet manifold distribution chamber. Assemble four separate 1/2\" branch lines from the manifold outlets. Install a mock shut-off ball valve on each branch line."
    },
    q1: "What is the primary operational advantage of a manifold plumbing system over a traditional trunk-and-branch layout?",
    p1: "plumbing manifold vs trunk and branch benefits",
    a1: "It provides dedicated lines to each fixture, reducing pressure drops and allowing isolation of individual lines.",
    q2: "What occurs to water pressure at a bathroom sink faucet if a washing machine filling cycle starts on the same branch?",
    p2: "water pressure drop shared branch plumbing",
    a2: "The pressure drops because both fixtures are sharing the flow capacity of a single pipe branch.",
    q3: "Why is keeping water supply pipes out of exterior uninsulated walls a code requirement in northern climates?",
    p3: "why plumbing pipes cannot be run exterior walls cold climate",
    a3: "To prevent water from freezing, expanding, and bursting the pipes.",
    steps: [
      "Gather your small parts plumbing kit. Locate the multi-outlet manifold fitting (or build one with tees).",
      "Connect the 3/4\" main inlet pipe to the manifold distribution chamber.",
      "Assemble four separate 1/2\" branch lines leading from the manifold outlets.",
      "Install a mock shut-off ball valve on each of the branch lines. Arrange the assembly flat on the table."
    ],
    signoff: ["Manifold chamber located", "3/4\" main inlet connected", "4 dedicated branch lines run", "Mock shut-off valves aligned"]
  },
  // WO 35
  {
    num: 35, station: 'hvac', title: 'Duct Sizing Calculations & Velocity Friction Losses',
    youtubeId: 'Iy6oIm0eX2M',
    studySheet: {
      overview: "Air ducts act as the highways for forced-air systems. If duct diameters are too small, the air velocity spikes, producing loud airflow whistling and raising duct system static pressure.",
      keyConcepts: "Duct design balances cross-sectional area against target airflow. Circular ducts are aerodynamically efficient because they minimize friction perimeter contact. Aspect ratio describes the width-to-height ratio of rectangular ducts; larger aspect ratios increase duct steel surface friction, dropping air speed.",
      codesSafety: "To prevent blower motor stress, standard friction charts calculate pressure drops per 100 feet of duct run. Recommended maximum velocity for main trunks is 700-900 Feet Per Minute (FPM) in residential systems. Circular ducts require less material than rectangular runs of equivalent CFM capacity.",
      guidelines: "Review the formulas for circular and rectangular duct cross-sectional area: A = pi * r^2, and A = W * H. Calculate equivalent areas on paper to match target CFM ratings, verifying how changing shapes alters duct friction perimeters."
    },
    q1: "Why does a circular duct run have lower friction resistance than a rectangular duct run with the same volume capacity?",
    p1: "round vs rectangular duct friction loss contact perimeter",
    a1: "Circular ducts have the minimum perimeter surface area per unit of cross-sectional area, reducing air friction contact.",
    q2: "What occurs to the velocity of air if a duct run splits from a 12-inch main line into a single 6-inch branch?",
    p2: "air velocity change duct diameter decrease flow",
    a2: "The velocity increases dramatically in the smaller line, raising noise levels and static back-pressure.",
    q3: "What is the equivalent cross-sectional area in square inches of a 10-inch diameter round duct?",
    p3: "calculate area 10 inch round duct square inches",
    a3: "78.54 square inches (Area = pi * 5^2 = 25 * 3.1416 = 78.54).",
    steps: [
      "Review the circular and rectangular duct cross-sectional area formulas.",
      "Given a 10\" circular duct, calculate its total cross-sectional area in square inches.",
      "Determine the dimensions of a rectangular duct that provides the exact same square inch area.",
      "Calculate and compare the perimeter length of both the circular duct and the rectangular duct."
    ],
    signoff: ["Circular area calculated", "Rectangular dimensions determined", "Perimeters calculated", "Friction difference documented"]
  },
  // WO 36
  {
    num: 36, station: 'automotive', title: 'Used Car Pre-Purchase Inspection',
    youtubeId: 'CeJULC9fSMA',
    studySheet: {
      overview: "Pre-purchase inspections evaluate a used vehicle's mechanical and structural condition to identify hidden issues and prevent purchasing vehicles with costly damage.",
      keyConcepts: "Check structural panel gaps: uneven gaps suggest previous collision repairs. Inspect belts for cracks or glazing, and check radiator hoses for swelling or crusty scales that indicate cooling system leaks. Inspect battery terminals for acidic corrosion.",
      codesSafety: "Bondo is a plastic filler used to repair body panels. Technicians use magnets to test body panels; the magnet will not stick to areas filled with thick Bondo instead of steel. Listen for engine cold start squeals indicating worn belts.",
      guidelines: "Walk around the vehicle and inspect all panel alignments. Open the hood to check radiator hoses, check for battery terminal corrosion, check oil and coolant levels, start the engine, and listen for abnormal noises."
    },
    q1: "What does uneven paint coloring or mismatching paint between body panels suggest on a used car?",
    p1: "mismatched body panel paint meaning used car accident",
    a1: "It suggests the panel was replaced or repaired due to a previous collision.",
    q2: "What visual signs indicate that an serpentine belt requires replacement?",
    p2: "signs of worn serpentine belt cracks wear",
    a2: "Fraying edges, cracking across the rubber ribs, or a glazed, shiny surface.",
    q3: "What is a Bondo magnet test, and what does it detect on vehicle body panels?",
    p3: "Bondo body filler magnet test automotive body repair",
    a3: "A magnet test checks for body filler (Bondo); the magnet will not stick to zones covered in thick plastic filler.",
    steps: [
      "Walk around your vehicle. Check all body panel gaps. Verify that gaps are even and straight.",
      "Open the hood. Inspect the radiator hoses for cracks, swelling, or crusty coolant deposits at hose clamps.",
      "Inspect the battery terminals for white/green acidic corrosion crust.",
      "Start the engine. Listen for any clicking, ticking, or squealing noises. Check for tailpipe smoke."
    ],
    signoff: ["Body panel gaps inspected", "Radiator hoses checked for scale", "Battery terminal oxidation checked", "Engine cold start noise audit completed"]
  },
  // WO 37
  {
    num: 37, station: 'safety', title: 'Facility Fire Safety & Extinguisher Check',
    youtubeId: '',
    studySheet: {
      overview: "Fire safety protocols and regular equipment inspections are essential for protecting lives and property in industrial and warehouse facilities.",
      keyConcepts: "Class ABC fire extinguishers are standard for general workspaces, designed to extinguish wood/paper (A), flammable liquids (B), and electrical (C) fires. Extinguishers must have a valid inspection tag showing they have been checked in the last year.",
      codesSafety: "Fire extinguishers must display a pressure gauge in the green zone. If the needle drops into the red zone, the extinguisher has lost pressure and must be serviced. The PASS method governs operation: Pull pin, Aim nozzle at the base of the fire, Squeeze trigger, and Sweep side to side.",
      guidelines: "Locate the nearest fire extinguisher. Confirm the pressure needle is in the green zone, verify the locking pin and tamper seal are intact, check the inspection tag dates, and perform a mock PASS drill aiming at the base of a target."
    },
    q1: "What class of fire extinguisher is standard for general office areas? What hazards does it cover?",
    p1: "Class ABC fire extinguisher office standards hazards",
    a1: "Class ABC. Covers wood/paper (A), flammable liquids (B), and electrical fires (C).",
    q2: "What are the four steps of the PASS method for operating a fire extinguisher?",
    p2: "PASS method steps fire extinguisher definition",
    a2: "P: Pull the pin, A: Aim at the base of the fire, S: Squeeze the handle, S: Sweep side to side.",
    q3: "Why should you never aim a fire extinguisher at the top of the flames?",
    p3: "why aim at base of fire extinguisher PASS",
    a3: "Because aiming at the top will not extinguish the source; you must aim at the base to smother the burning fuel.",
    steps: [
      "Locate the nearest fire extinguisher in the building.",
      "Inspect the pressure gauge. Confirm that the needle points to the green zone. If not, record the fault.",
      "Check the plastic seal and metal locking pin. Verify that the pin is locked in place.",
      "Locate the inspection tag. Check the dates, and verify it has been inspected within the last 12 months."
    ],
    signoff: ["Extinguisher located", "Pressure gauge verified", "Locking pin checked", "Inspection tag date validated"]
  },
  // WO 38
  {
    num: 38, station: 'drafting', title: 'Calculating Square Footage & Building Blueprint',
    youtubeId: '',
    studySheet: {
      overview: "Blueprints use plan views (top-down views), elevations (side views), and sections (cutaway details) to represent building structures. Sizing floor area is necessary to plan HVAC and electrical loads.",
      keyConcepts: "Blueprints are scaled representations, with 1/4\" = 1'0\" being the standard for US residential structures. Measuring irregular building layouts requires dividing the space into smaller rectangular zones, calculating the area of each (Length x Width), and adding them together.",
      codesSafety: "Total square footage calculations determine code requirements for emergency exits, fresh air exchange ventilation rates, and the required sizing of electrical panels to support building operations.",
      guidelines: "Measure the outer perimeter walls of the facility using a tape measure. Sketch the outer layout. Measure and add interior partition walls, doors, and main utility panels. Calculate the total floor square footage and record it on the sheet."
    },
    q1: "How do you calculate the square footage of an irregular, L-shaped building floor plan?",
    p1: "how to calculate square footage L shaped building",
    a1: "Split the L-shape into two separate rectangles, calculate the area of each (length x width), and add the areas together.",
    q2: "What is the difference between a Plan view and an Elevation view on architectural drawings?",
    p2: "plan view vs elevation view blueprints definitions",
    a2: "Plan view is a top-down cut view; elevation view is a flat side/face view showing building heights.",
    q3: "What scale is standard for residential blueprints in the United States?",
    p3: "standard residential blueprint scale US inches feet",
    a3: "1/4 inch equals 1 foot (1/4\" = 1'0\").",
    steps: [
      "Measure the outer perimeter walls of the training facility building (or designated section).",
      "Sketch the outer boundary layout on graph paper.",
      "Measure and add interior partition walls, doors, and main electrical/plumbing points.",
      "Calculate the total square footage of the mapped building layout. Write the area on your drawing sheet."
    ],
    signoff: ["Outer walls measured", "Interior details sketched", "Scale conversions completed", "Total square footage calculated correctly"]
  },
  // WO 39
  {
    num: 39, station: 'foamboard', title: 'Roof Truss & Common Rafter Assembly',
    youtubeId: '',
    studySheet: {
      overview: "Roof structures protect buildings from weather, using triangular trusses to span distances and transfer structural loads down to exterior load-bearing walls.",
      keyConcepts: "A roof truss consists of two diagonal rafters, a bottom horizontal tie beam (ceiling joist), and internal web braces. The tie beam is critical because it acts as a tension member, preventing the rafters from spreading outward under loads. Rafter pitch represents vertical rise over a 12\" horizontal run.",
      codesSafety: "Rafters require vertical 'plumb cuts' at the top peak to fit flush against a central ridge board. Modeling trusses helps teach truss triangulation physics, load distribution, and the importance of solid wall-to-truss connector ties.",
      guidelines: "Cut a 12\" horizontal tie beam and two 8.5\" diagonal rafters from foam board. Use a speed square to mark and cut a 45-degree angle (12/12 pitch) on the top ends of the rafters. Join the peak, secure the rafter bases to the tie beam, and mount the truss on the wall model."
    },
    q1: "What does a '4/12 pitch' roof slope represent in construction drafting?",
    p1: "roof pitch 4/12 rise and run meaning",
    a1: "The roof rises 4 inches vertically for every 12 inches of horizontal run.",
    q2: "What is the purpose of the bottom tie beam (ceiling joist) in a standard A-frame roof truss?",
    p2: "ceiling joist tie beam roof truss horizontal tension function",
    a2: "It prevents the diagonal rafters from pushing outward under downward loads, tying the wall tops together.",
    q3: "What is a plumb cut on a rafter? Why is it necessary?",
    p3: "plumb cut rafter definition roofing pitch",
    a3: "A vertical cut at the top of a rafter where it meets the ridge board, ensuring a flush surface.",
    steps: [
      "Cut a 12\" long horizontal tie beam (1\" wide) and two 8.5\" diagonal rafters from foam board.",
      "Use a speed square to mark and cut a 45-degree angle (12/12 pitch) on the top ends of the rafters.",
      "Join the rafters at the peak. Secure the bottom ends to the horizontal tie beam.",
      "Glue or pin this completed roof truss on top of the wall framing section built in Workorder 31."
    ],
    signoff: ["Tie beam and rafters cut", "45-degree pitch angles cut", "Rafter peak and tie beam joined", "Roof truss mounted to wall section"]
  },
  // WO 40
  {
    num: 40, station: 'precision', title: 'Final Trades Verification & Tool Inventory',
    youtubeId: '',
    studySheet: {
      overview: "Performing inventory and cleaning the workspace at the end of a shift are core professional policies for contractors, ensuring tool accountability, efficiency, and workplace safety.",
      keyConcepts: "Tool control prevents tools from being left behind inside structures, where they can jam moving parts or cause electrical short circuits. Clean toolboxes protect steel tools from humidity, which causes rust and corrosion.",
      codesSafety: "Inspect hand tools for safety: discard or repair screwdrivers with chipped tips, hammers with loose heads, or pliers with cracked insulated handles. Keeping tools dry and organized ensures they remain safe to use for future shifts.",
      guidelines: "Gather all tools at your workstation. Inspect each hand tool for wear, chips, or rust. Clean tools of any grease or dust using a dry rag. Verify that all components are present against the master inventory, and organize them into their storage bins."
    },
    q1: "Why is tool control (performing inventory at the end of every shift) a critical safety and security policy?",
    p1: "tool control inventory check importance safety security contract",
    a1: "It prevents leaving tools behind inside structures (which can cause machinery damage or fires) and stops theft.",
    q2: "What are the common visual signs of wear that indicate a hand tool (like a flathead screwdriver or pliers) is unsafe?",
    p2: "signs of worn unsafe hand tools screwdrivers pliers",
    a2: "Chipped screwdriver tips, cracked handles, rusted pivots, or dull/damaged cutting jaws.",
    q3: "Why is keeping hand tools dry and stored in closed toolboxes a preventative maintenance practice?",
    p3: "why store hand tools dry toolboxes corrosion prevention",
    a3: "It prevents moisture exposure, which causes steel tool surfaces to oxidize and rust.",
    steps: [
      "Take all tools from your workstation. Inspect each hand tool for wear, chips, or rust.",
      "Clean the tools of any grease or dust using a dry rag.",
      "Check the master tool inventory list. Verify that all tape measures, squares, knives, and kits are present.",
      "Neatly organize and place all tools back into their designated storage locations."
    ],
    signoff: ["All tools inspected for wear", "Tools wiped clean", "Master inventory verified", "Storage organized correctly"]
  },
  // WO 41
  {
    num: 41, station: 'electrical', title: 'MyHome Kit - Residential Solar & Green Grid Integration',
    youtubeId: '',
    studySheet: {
      overview: "Solar energy systems capture photons from sunlight to generate Direct Current (DC) electricity. To use this power in standard residential structures, DC power must be stored in chemical batteries or converted into Alternating Current (AC) using electrical inverters.",
      keyConcepts: "Photovoltaic cells use semiconductor materials to release electrons when exposed to light. A solar charge controller regulates voltage fed into batteries to prevent overcharging. Net metering allows homes to send excess power back to the municipal grid, spinning utility meters backward.",
      codesSafety: "National Electrical Code (NEC) Article 690 governs solar PV safety. Because solar panels generate voltage whenever light is present, a rapid shutdown switch must be installed on the exterior of the house to de-energize lines quickly for emergency responders.",
      guidelines: "Using the MyHome kit, locate the solar collector module and chemical battery storage box. Construct the charging circuit on the 3D frame, run wires from solar panel terminals to the battery charging contacts, and check charging indicators."
    },
    q1: "What is the difference between Direct Current (DC) and Alternating Current (AC)? Which is produced by solar panels?",
    p1: "DC vs AC current differences solar panel output",
    a1: "DC flows in one continuous direction (produced by solar panels); AC periodically reverses direction (used in standard outlets).",
    q2: "What is the function of a solar charge controller in a residential battery backup system?",
    p2: "solar charge controller function battery protection",
    a2: "It regulates incoming voltage and current to prevent batteries from overcharging and draining backward at night.",
    q3: "What does a grid-tied solar system's net metering agreement accomplish for a homeowner?",
    p3: "solar net metering grid-tied benefits utility meter",
    a3: "It credits the homeowner for excess solar power sent back to the municipal grid, reducing billing costs.",
    steps: [
      "Identify the solar PV cell module and battery charger block in the MyHome kit.",
      "Wire the solar panel output terminals directly to the battery charger inputs.",
      "Position the panel under a bright desk lamp (simulating sunlight). Check the LED charging indicator.",
      "Disconnect the battery charger and wire a small DC fan directly to the solar panel to test direct drive solar power."
    ],
    signoff: ["Solar PV module identified", "Panel wired to charger block", "LED charging indicator verified under light", "Direct drive motor tested successfully"]
  },
  // WO 42
  {
    num: 42, station: 'plumbing', title: 'Building Fixture Flow Audit & Pressure Calcs',
    youtubeId: '',
    studySheet: {
      overview: "Water pressure is determined by the height of the water column (head) or the municipal pumping supply. As water travels through pipes and fittings, friction creates resistance that drops flow pressure, known as friction head loss.",
      keyConcepts: "Static pressure is the pressure when water is not moving. Dynamic pressure is the pressure at a fixture when water is flowing. Water pressure increases by 0.433 PSI for every 1 foot of vertical water column height. Sizing supply pipes correctly ensures multiple fixtures can run concurrently without losing flow.",
      codesSafety: "Uniform Plumbing Code (UPC) requires water supply systems to maintain a minimum residual pressure of 8 PSI at all fixtures. Running a flow audit on multiple sinks simultaneously tests if the building piping manifold size is sufficient to prevent starvation.",
      guidelines: "Locate a sink on the ground floor and one on the upper floor of the building. Measure the vertical elevation height difference between them. Compute the static pressure difference: Height x 0.433. Turn on the ground floor sink fully and record if the upstairs sink pressure drops."
    },
    q1: "How much pressure (in PSI) is generated by a vertical water column of exactly 10 feet?",
    p1: "water column height pressure calculation PSI per foot",
    a1: "4.33 PSI (10 feet * 0.433 PSI/foot = 4.33 PSI).",
    q2: "What is friction head loss, and how does pipe diameter affect it?",
    p2: "plumbing friction head loss pipe diameter flow",
    a2: "Head loss is pressure lost due to water friction against pipe walls; smaller pipe diameters increase friction and head loss.",
    q3: "What is a water hammer, and what device is installed to prevent it in copper lines?",
    p3: "water hammer plumbing cause water hammer arrestor",
    a3: "A shockwave caused by water stopping suddenly when a valve closes; water hammer arrestors (air chambers) cushion the shock.",
    steps: [
      "Estimate the elevation height difference between the utility sink and the highest faucet in the building.",
      "Calculate the vertical pressure drop between the two locations using the 0.433 multiplier.",
      "Perform a simultaneous flow test: run the primary sink fully and check the flow rate of the secondary faucet.",
      "Document if any fixture starvation or noticeable flow drop occurs during the audit."
    ],
    signoff: ["Vertical height estimated", "Pressure drop calculated", "Simultaneous flow test completed", "Flow drop outcomes documented"]
  },
  // WO 43
  {
    num: 43, station: 'hvac', title: 'Air Balancing Math & Heat Load CFM Calculations',
    youtubeId: '',
    studySheet: {
      overview: "Air balancing is the process of adjusting an HVAC system to deliver the target quantity of conditioned air to each room. This is calculated based on the room's thermal heating and cooling loads.",
      keyConcepts: "To calculate the volume of air (CFM) required to heat or cool a space, technicians use the Sensible Heat Equation: CFM = BTU/h / (1.08 * TempDiff). TempDiff is the temperature split between the supply air and the room design temperature. Correct balancing prevents hot or cold spots.",
      codesSafety: "System air balance reports are required by building energy conservation codes before final occupancy permits are issued. Incorrect room air CFM delivery causes temperature swings, drafts, and high utility bills.",
      guidelines: "Given a mock classroom with a heating load of 25,000 BTU/h and a supply air temperature split of 30°F (95°F supply air entering a 65°F room), calculate the required airflow using the Sensible Heat Equation: CFM = 25,000 / (1.08 * 30)."
    },
    q1: "What is the Sensible Heat Equation used to calculate target airflow volume in CFM?",
    p1: "sensible heat equation CFM BTU temperature difference formula",
    a1: "CFM = BTU/h / (1.08 * TempDiff).",
    q2: "Why does a room with large south-facing glass windows require more CFM of cooling air than an interior room?",
    p2: "solar heat gain cooling CFM load window calculation",
    a2: "High solar heat gain increases the cooling load (BTU/h), requiring a higher volume of cold air to maintain set temperature.",
    q3: "What is the calculated target CFM for a room with a cooling load of 12,000 BTU/h and a cooling TempDiff of 20 degrees F?",
    p3: "calculate cooling CFM load 12000 BTU 20 temp diff",
    a3: "555.56 CFM (12,000 / (1.08 * 20) = 12,000 / 21.6 = 555.56).",
    steps: [
      "Review the Sensible Heat Equation variables (BTU, CFM, TempDiff).",
      "Given a heating load of 25,000 BTU/h and a TempDiff of 30°F, calculate the required room airflow (CFM).",
      "Recalculate the CFM needed if the TempDiff decreases to 20°F (e.g. cooler supply air).",
      "Compare both values on paper and explain the thermodynamic relationship between air volume and temperature split."
    ],
    signoff: ["Variables reviewed", "Heating CFM calculated for 30F split", "CFM recalculated for 20F split", "Airflow-temperature relationship explained"]
  },
  // WO 44
  {
    num: 44, station: 'automotive', title: 'Windshield Wiper Blade Auditing & Connector Swaps',
    youtubeId: '',
    studySheet: {
      overview: "Windshield wiper systems are critical for maintaining visibility during bad weather. The wiper blade's rubber element degrades rapidly due to UV exposure, ozone, and temperature changes, requiring regular inspections and replacements.",
      keyConcepts: "Wiper assemblies consist of a motorized wiper arm, a metal/plastic blade frame, and a flexible rubber squeegee element. Wiper arms use standard connection styles: the J-hook (most common), side-pin, bayonet, or push-button. Blade sizes often differ between the driver and passenger sides to maximize glass coverage.",
      codesSafety: "Wiper blades must be checked during safety inspections. Torn or streaking blades fail inspection because they impair driver visibility. When swapping blades, always place a protective rag on the windshield glass; the bare metal wiper arm is spring-loaded and can snap down, cracking the windshield.",
      guidelines: "Measure both wiper blade lengths. Inspect the rubber squeegee for splits or dry rot. Press the small lock tab on the blade connector, slide the blade down off the J-hook, identify the connection style, and slide the replacement blade on until it clicks."
    },
    q1: "Why are driver-side and passenger-side wiper blades often different lengths on the same vehicle?",
    p1: "why windshield wiper blades are different lengths",
    a1: "To maximize the cleared window surface area while preventing the blades from colliding or hitting the window frame.",
    q2: "What are the four common types of wiper arm attachment connectors used on vehicles?",
    p2: "types of windshield wiper arm connectors J hook",
    a2: "J-hook, side-pin, bayonet, and push-button.",
    q3: "Why is it critical to place a towel or rag on the windshield glass when removing a wiper blade?",
    p3: "why protect windshield when changing wiper blades snap",
    a3: "The spring-loaded metal wiper arm can snap back down onto the glass, easily cracking it if the rubber blade is absent.",
    steps: [
      "Locate the windshield wiper arms on the vehicle. Lift them to the service position.",
      "Use a tape measure to measure the length of both the driver and passenger side blades.",
      "Audit the rubber element by running a finger along the edge to check for splits or dry rot.",
      "Press the connector release tab, slide the blade off the wiper arm hook, and slide it back on until locked."
    ],
    signoff: ["Driver/passenger blade lengths measured", "Rubber edge inspected for splits", "Blade removed from arm joint", "Blade reinstalled and locked secure"]
  },
  // WO 45
  {
    num: 45, station: 'safety', title: 'Hazard Communication Chemical Spill Plan',
    youtubeId: '',
    studySheet: {
      overview: "Accidental chemical spills present severe inhalation, chemical burn, and environmental safety risks in warehouse and commercial facilities. Proper spill response requires structured plans.",
      keyConcepts: "Hazard communication standard requires keeping SDS catalogs readily accessible. When a spill occurs, the responder must evaluate the chemical using SDS Section 6 (Accidental Release Measures). Responses depend on chemical properties: flammables require cutting power to prevent spark ignition, while corrosives require chemical neutralizers.",
      codesSafety: "OSHA Standard 1910.120 outlines HAZWOPER parameters for spill control. Spill kits must contain absorbent pads, neutralizing agents, waste containment bags, and specific PPE (goggles, gloves, respirators) as listed in SDS Section 8.",
      guidelines: "Review the chemical safety sheets compiled in Workorder 21. Select the chemical that presents the highest hazard (e.g. acidic cleaner or solvent). Draft a step-by-step chemical spill containment plan including isolation, PPE, containment, and neutralizers."
    },
    q1: "Which section of a Safety Data Sheet (SDS) outlines the accidental release measures and spill containment steps?",
    p1: "accidental release measures section SDS GHS",
    a1: "Section 6.",
    q2: "What is the difference between an absorbent and an adsorbent material in chemical spill cleanup?",
    p2: "absorbent vs adsorbent chemical spill cleanup differences",
    a2: "Absorbents soak liquid into their core volume (like a sponge); adsorbents bind liquid molecules to their exterior surface.",
    q3: "Under OSHA standards, who is authorized to clean up a large, highly toxic chemical spill?",
    p3: "OSHA Hazwoper trained spill response authority",
    a3: "Only designated, properly equipped employees who have completed HAZWOPER training certification.",
    steps: [
      "Review the 3 chemicals cataloged in Workorder 21. Select the most hazardous chemical.",
      "Use Chromebook search to read SDS Section 6 (Release) and Section 13 (Disposal) for that chemical.",
      "Write a step-by-step Facility Spill Response plan detailing evacuations, PPE, and absorption steps.",
      "Designate a mock spill zone on the floor, and practice setting up containment boundaries."
    ],
    signoff: ["SDS Section 6/13 reviewed", "Spill Response plan drafted", "PPE requirements documented", "Mock spill boundary set up"]
  },
  // WO 46
  {
    num: 46, station: 'drafting', title: 'Wall Framing Layout & Elevation Blueprint',
    youtubeId: 'RIGOU5KUxf0',
    studySheet: {
      overview: "Wall framing blueprints display vertical layout elevations of wall structures. They show the arrangement of vertical studs, horizontal plates, and structural reinforcement paths around doors and windows.",
      keyConcepts: "Elevation drawings show wall heights and layouts. Wall elements include: king studs (full-height studs running plate-to-plate), jack studs (cut-down studs supporting headers), headers (horizontal beams spanning openings), and cripple studs (short studs filling gaps).",
      codesSafety: "Framing codes require double top plates on load-bearing walls to transfer roof loads safely. Stud spacing is typically 16\" on-center. To frame a door opening, a header is sized to transfer weight to the jack studs, which rest on the bottom sill plate.",
      guidelines: "Draft a wall elevation blueprint on graph paper. Scale: 1\" = 1'0\". The wall segment is 12 feet long and 8 feet high, containing a 3-foot wide door opening. Use symbols to mark king studs, jack studs, header beam, and top plates."
    },
    q1: "In wall framing, what is the specific function of a jack stud compared to a king stud?",
    p1: "jack stud vs king stud framing function differences",
    a1: "A king stud runs full-height from plate to plate; a jack stud is cut shorter to support the bottom face of the header.",
    q2: "Why must load-bearing walls feature a double top plate instead of a single top plate?",
    p2: "double top plate purpose load bearing wall framing",
    a2: "To transfer structural weight from rafters or joists that do not align directly over the vertical wall studs.",
    q3: "How is a header's thickness constructed for a standard 2x4 framed door opening using wood dimensional lumber?",
    p3: "how to build 2x4 wall header dimensional lumber sandwich",
    a3: "Sandwich two 2x pieces of wood (e.g. 2x6) with a 1/2\" plywood spacer in the middle to match the 3.5\" stud depth.",
    steps: [
      "Review the blueprint symbols for wall studs, sill plates, jack studs, and headers.",
      "Mark a 12-foot long wall outline at 1\" = 1'0\" scale on graph paper.",
      "Add a 3-foot wide door opening. Calculate header width and layout jack/king studs.",
      "Draw the complete wall elevations, labeling plates, king studs, jack studs, and the header beam."
    ],
    signoff: ["Drafting symbols reviewed", "Wall outline drawn to scale", "Door opening framed correctly", "Wall elevations labeled"]
  },
  // WO 47
  {
    num: 47, station: 'foamboard', title: 'Multi-Story Joint Assembly & Floor Joist Prototyping',
    youtubeId: '',
    studySheet: {
      overview: "Multi-story construction requires transferring gravity loads down through intermediate floors to vertical walls. Floor platforms are framed using floor joists and sub-floors to span spaces.",
      keyConcepts: "Floor framing uses parallel wood joists secured to perimeter rim joists. The joists support a subfloor deck (typically plywood or OSB). Where vertical walls join intermediate floor joists, blocking and plates are required to prevent structural shifting under load.",
      codesSafety: "Floor joists must have a minimum bearing surface where they rest on sill plates to prevent slipping. Modeling this teaches platform framing structural layout: the subfloor deck must be glued flat to provide a diaphragm seal that prevents racking.",
      guidelines: "Build a floor joist deck. Cut two 12\" long rim joists and six 6\" joist members from foam board. Assemble them parallel spaced at 2\" intervals. Glue a flat 6\" x 12\" subfloor sheet on top. Mount the deck onto the wall model from Workorder 31."
    },
    q1: "What is the structural difference between a common floor joist and a perimeter rim joist?",
    p1: "floor joist vs rim joist framing structural differences",
    a1: "Common joists span interior spaces to carry floor loads; rim joists run perpendicular along the outer edges to cap the joist ends.",
    q2: "Why must floor joist spans be capped with a subfloor deck sheet? What mechanical purpose does the deck serve?",
    p2: "subfloor deck diaphragm shear strength framing racking",
    a2: "It creates a horizontal diaphragm, binding the joists together to resist lateral shear loads and prevent the floor from racking.",
    q3: "What is floor joist blocking, and why is it installed between joists at mid-span?",
    p3: "joist blocking purpose floor framing twisting deflection",
    a3: "Short wood blocks inserted between joists to keep them vertical, preventing joist twisting and sharing concentrated loads.",
    steps: [
      "Cut two 12\" long strips of foam board to act as rim joists.",
      "Cut six 6\" long common joist members (1\" wide).",
      "Assemble the common joists perpendicular between the rim joists, spacing them at 2\" intervals. Glue the joints.",
      "Cut and glue a 6\" x 12\" foam board sheet on top to act as a subfloor deck. Mount on your Wall Section."
    ],
    signoff: ["Rim/common joists cut", "Parallel spacing assembled square", "Subfloor deck sheet glued flush", "Platform mounted to wall section"]
  },
  // WO 48
  {
    num: 48, station: 'precision', title: 'Dial Indicators & Rotating Shaft Runout Check',
    youtubeId: '',
    studySheet: {
      overview: "Rotating shafts (crankshafts, camshafts, drive-shafts) must spin without warpage or eccentricity to prevent vibration and bearing destruction. Dial indicators are precision tools used to measure shaft runout.",
      keyConcepts: "Runout is the deviation of a rotating part from a perfect circle or cylinder axis. Dial indicators use a spring-loaded probe. Deflections move a needle around a dial graduated in 1/1000th increments. The indicator is mounted on a magnetic stand to maintain stability.",
      codesSafety: "Dial indicators are delicate. The probe must touch the test surface perpendicular to prevent cosine errors. Mechanical specifications list maximum runout limits (often under 0.002\" for crankshafts); exceeding this limits requires replacement.",
      guidelines: "Clamp the magnetic indicator stand to a flat bench. Position the indicator probe against the center journal of a rotating shaft. Zero the dial bezel. Turn the shaft slowly through one full 360-degree rotation. Record the maximum deflection dial reading."
    },
    q1: "What does a dial indicator measure? How does it differ from a dial caliper?",
    p1: "dial indicator vs dial caliper measurement differences",
    a1: "A dial indicator measures relative surface deflection (displacement) during rotation; dial calipers measure absolute static dimensions.",
    q2: "What is shaft runout? What are the mechanical consequences of excessive runout in high-speed shafts?",
    p2: "shaft runout mechanical consequences vibration bearing wear",
    a2: "Runout is shaft wobble/out-of-roundness. Excessive runout causes severe vibration, rapid bearing wear, and seal leaks.",
    q3: "What does the term 'TIR' stand for on a dial indicator inspection specification sheet?",
    p3: "TIR dial indicator measurement definition total indicator reading",
    a3: "Total Indicator Reading (the absolute difference between the minimum and maximum deflection values during a full rotation).",
    steps: [
      "Mount a rotating shaft (camshaft or spindle shaft) in the V-blocks or block jig.",
      "Position the dial indicator on its stand so the contact probe rests perpendicular against the shaft center journal.",
      "Rotate the bezel ring to zero the dial needle. Slowly rotate the shaft 360 degrees.",
      "Record the maximum dial deflection. Calculate the Total Indicator Reading (TIR) runout."
    ],
    signoff: ["Shaft mounted in V-blocks", "Dial indicator probe aligned perpendicular", "Dial zeroed successfully", "TIR runout deflection recorded"]
  },
  // WO 49
  {
    num: 49, station: 'electrical', title: 'Wiring a Single-Pole Switch & Light Combo',
    youtubeId: 'rYj5QTBjeK4',
    studySheet: {
      overview: "Single-pole toggle switches control lights by breaking and closing the hot line conductor. Neutral and ground lines bypass the switch to complete circuits at the load fixture.",
      keyConcepts: "In switch wiring, power runs from the source panel to the switch box. The switch breaks the hot line (black wire). Traveler loops feed switch output hot legs to the light fixture. The neutral wire (white) must connect directly to the light socket screw terminal.",
      codesSafety: "NEC regulations forbid switches from breaking neutral lines. Breaking a neutral leaves high voltage active at the light socket even when the switch is turned off, creating shock hazards. Switch bodies must be grounded to the metal/plastic wall boxes.",
      guidelines: "Mount a single-gang switch box and a light junction box onto your plywood board. Feed Romex cable in. Wire power hot (black) to switch bottom terminal, switch top terminal to light socket hot. Tie neutral wires directly together with wire nuts."
    },
    q1: "Why must wall switches never cut or break the neutral (white) conductor in a 120V lighting circuit?",
    p1: "why light switch breaks hot not neutral wire safety",
    a1: "Cutting neutral leaves live voltage at the light socket even when off, presenting a shock hazard to someone changing a bulb.",
    q2: "What is a switch loop? How is a white wire marked if used as a hot wire in a switch loop?",
    p2: "electrical switch loop white wire tape reidentification",
    a2: "A wiring path bringing power from the light to the switch and back. The white wire must be wrapped in black tape to mark it hot.",
    q3: "Under the NEC, how many ground connections must be made inside a plastic switch wall box?",
    p3: "ground wire connections electrical box plastic NEC code",
    a3: "All ground wires (incoming, outgoing, and switch ground screw) must be connected together using a wire nut or crimp sleeve.",
    steps: [
      "Mount a single-gang switch box and a round light socket box to your board. Feed Romex wire between them.",
      "Wire the switch: connect the incoming black power wire to the bottom terminal screw of the toggle switch.",
      "Connect the outgoing black wire to the top switch screw. Wrap the bare ground wire to the switch green screw.",
      "At the light socket box, connect the black wire to the brass terminal, and neutral (white) to the silver terminal."
    ],
    signoff: ["Switch/light boxes mounted", "Romex wires fed through box clamps", "Switch wired to hot line", "Light socket brass/silver polarity checked"]
  },
  // WO 50
  {
    num: 50, station: 'plumbing', title: 'Small Parts Kit - pegboard Waste Pipe Assemblies',
    youtubeId: '',
    studySheet: {
      overview: "Dual-basin sinks require specialized drainage piping to combine waste water from two separate bowls into a single P-trap downstream without backup or siphonage.",
      keyConcepts: "Dual-basin drains use vertical tailpieces from each sink sink strainer leading to a horizontal slip waste arm. The waste arms connect at a sanitary tee fitting, which routes water down to the P-trap. Connections use slip joint washers to seal.",
      codesSafety: "Uniform Plumbing Code (UPC) limits the distance between the two basin centers to a maximum of 30 inches to ensure proper drainage velocity. Baffle tees (tees containing internal directional diverter plates) must be used at the joint to prevent basin flow backup.",
      guidelines: "Assemble the dual-basin drain piping from the small parts kit flat on the workbench pegboard. Mount brackets to represent standard tailpiece outlets. Connect the horizontal waste arms to the baffle tee, leading to the P-trap."
    },
    q1: "What is a baffle tee (sanitary directional tee) in kitchen drainage? Why is it required on dual-basin sinks?",
    p1: "baffle tee kitchen drain dual basin purpose water backup",
    a1: "A tee with an internal curve that directs water down, preventing water from one basin from spraying across into the other basin.",
    q2: "What is the maximum allowed horizontal distance between sink strainers on a dual-basin installation under plumbing codes?",
    p2: "maximum horizontal distance dual basin kitchen sink strainers code",
    a2: "30 inches.",
    q3: "Why is it code-prohibited to install a separate P-trap on each of the two kitchen sink basins before combining the lines?",
    p3: "why prohibit double P-trap dual basin sink code",
    a3: "Double trapping creates air locks between the traps, causing slow drainage and increasing clogging risk.",
    steps: [
      "Gather two tailpiece couplings, horizontal waste tubes, a baffle sanitary tee, and a P-trap from the kit.",
      "Establish two mounting hooks on your pegboard spaced exactly 18 inches apart (simulating basins).",
      "Assemble the slip joints together, adjusting the alignment of the horizontal arms to meet at the baffle tee.",
      "Attach the P-trap to the bottom of the baffle tee. Tighten slip-joint nuts hand-tight."
    ],
    signoff: ["Pegboard mount hooks established", "Directional baffle tee oriented correctly", "Waste arms horizontal run aligned", "P-trap secured to tee output"]
  },
  // WO 51
  {
    num: 51, station: 'hvac', title: 'Reading HVAC Control Board Circuit Schematics',
    youtubeId: '3pIqbjv1MTQ',
    studySheet: {
      overview: "Modern forced-air heating and cooling equipment utilizes solid-state circuit boards to coordinate motor starts, ignition steps, and safety checks. Reading electrical schematics is a core HVAC skill.",
      keyConcepts: "HVAC wiring diagrams use standard electrical drafting symbols. Switches are shown as open/closed bridges; transformer coils show voltage step-down lines; relays show electromagnetic controls. Understanding legends ensures wire routes can be tracked during diagnostics.",
      codesSafety: "System schematics list the sequence of limits and safety controls in series (e.g. rollout switch, high limit control). If any safety switch opens, control board relays immediately close the gas valve to prevent fire or explosion.",
      guidelines: "Study the printed gas furnace electrical schematic on your workstation table. Locate the 120V line input terminals and trace them to the 24V step-down transformer coils. Trace the low-voltage control terminals (R, W, Y, G, C) to their relays."
    },
    q1: "On an HVAC wiring diagram, what does a switch symbol with a closed bridge marked 'HLC' represent?",
    p1: "HVAC wiring diagram HLC high limit control symbol",
    a1: "High Limit Control switch; a normally closed safety switch that opens if heat exchanger temperatures exceed safe levels.",
    q2: "How is a transformer coil visually represented on an electrical schematic diagram?",
    p2: "transformer electrical schematic symbol winding",
    a2: "By two adjacent sets of coiled loops representing the primary and secondary copper windings.",
    q3: "What does a broken/dashed line indicate on an automotive or HVAC electrical wiring schematic?",
    p3: "broken dashed line meaning electrical schematic wiring",
    a3: "Field-installed wiring (wiring completed by the installer on-site), whereas solid lines represent factory-installed internal wiring.",
    steps: [
      "Examine the printed gas furnace schematic layout provided on the table.",
      "Locate the low-voltage control strip. Highlight terminals R, W, Y, G, and C with color markers.",
      "Trace the path from the Red (R) hot wire through the high-limit safety switches on the page.",
      "Identify and record the symbol for the combustion inducer fan motor coil on the schematic."
    ],
    signoff: ["Low-voltage strip located", "R, W, Y, G, C terminals highlighted", "High-limit safety path traced", "Inducer fan coil symbol identified"]
  },
  // WO 52
  {
    num: 52, station: 'automotive', title: 'Vehicle Fuse Block Audits & Diagnostics',
    youtubeId: '',
    studySheet: {
      overview: "Automotive electrical networks route power through multiple control circuits. Fuses are safety devices designed to protect these circuits from overcurrent damage caused by short circuits or component overloads.",
      keyConcepts: "A fuse contains a low-resistance metal wire bridge designed to melt and open the circuit when current exceeds its rating. Blade fuses are standard in vehicles, color-coded by amperage: Red (10A), Blue (15A), Yellow (20A). Fuse boxes include legends printed on the cover lids listing fuse numbers and circuit labels.",
      codesSafety: "Replacing a blown fuse with one of a higher amperage rating is a severe safety violation. If a short circuit occurs, the larger fuse will not blow, causing the wire harness to overheat, melt insulation, and trigger vehicle fires.",
      guidelines: "Locate both the under-hood power distribution box and the interior dashboard fuse panel. Use a fuse puller tool to remove a fuse. Hold it to the light to check the bridge wire (blown fuses show a broken bridge and black residue). Re-seat the fuse."
    },
    q1: "Why is it dangerous to replace a blown 10-Amp fuse with a 20-Amp fuse?",
    p1: "danger of replacing fuse with higher amperage rating",
    a1: "The wires can overheat and melt before the fuse blows, creating a high risk of an electrical fire.",
    q2: "What are the physical visual differences between a healthy blade fuse and a blown blade fuse?",
    p2: "how to identify blown blade fuse visual check",
    a2: "A healthy fuse has an intact metal loop; a blown fuse has a melted, broken metal loop and dark scorch marks.",
    q3: "Where are the two standard physical locations for automotive fuse blocks on most modern passenger vehicles?",
    p3: "typical locations for car fuse boxes interior engine",
    a3: "Under the driver's side dashboard (cabin box) and in the engine compartment (power distribution center).",
    steps: [
      "Locate the vehicle's engine compartment fuse box and the cabin fuse panel under the steering column.",
      "Open the box lids. Study the printed legends to locate the radio or horn fuse.",
      "Use a plastic fuse puller tool to extract the target fuse from its slot.",
      "Inspect the metal bridge wire inside the plastic casing. Verify the fuse rating and reinsert it securely."
    ],
    signoff: ["Under-hood & cabin panels located", "Fuse legend diagram read", "Target fuse extracted safely", "Bridge wire condition verified"]
  },
  // WO 53
  {
    num: 53, station: 'safety', title: 'Emergency Fire Egress Map & Sign Audit',
    youtubeId: '',
    studySheet: {
      overview: "OSHA regulations require commercial and warehouse facilities to establish clear Emergency Action Plans (EAPs), detailing escape routes, assembly points, and alarm systems.",
      keyConcepts: "Egress routes consist of three parts: (1) Exit access (hallways leading to the door). (2) Exit (the fire door enclosure). (3) Exit discharge (exterior path leading to public ways). Exit paths must remain unobstructed. Emergency lighting systems use backup batteries to light paths during power failures.",
      codesSafety: "OSHA Standard 1910.37 mandates that exit doors must remain unlocked from the inside at all times. Exit signs must be illuminated continuously. Emergency backup batteries must be tested monthly for 30 seconds and annually for 90 minutes.",
      guidelines: "Walk the building. Locate all exit signs and emergency battery backup lights. Press the 'TEST' button on the emergency light casings to verify the lamps illuminate. Draft a facility emergency evacuation map showing exit paths and extinguisher stations."
    },
    q1: "What are the three distinct components of an emergency exit route under OSHA standards?",
    p1: "three parts of exit route OSHA exit access discharge",
    a1: "1. Exit access, 2. Exit, and 3. Exit discharge.",
    q2: "What is panic hardware on a commercial exit door, and why is it code-required in high-occupancy spaces?",
    p2: "panic hardware fire door push bar code requirements",
    a2: "A horizontal crash bar that unlatches the door when pressed, allowing occupants to exit quickly without turning a handle in a panic.",
    q3: "How often must emergency backup lighting battery systems be tested by facility maintenance under life safety codes?",
    p3: "emergency lighting battery test requirements monthly annual code",
    a3: "Tested monthly for 30 seconds and annually for 90 minutes.",
    steps: [
      "Walk the facility paths. Locate all exit doorways and emergency wall-mounted backup lights.",
      "Locate the 'TEST' button on 3 emergency light fixtures. Press and hold for 5 seconds to verify the bulbs illuminate.",
      "Inspect exit sign faces to verify they are lit. Ensure exit doors swing open easily from the inside.",
      "Draw a detailed layout evacuation map of the building, showing exit paths, doors, and assembly zones."
    ],
    signoff: ["Exit pathways surveyed", "Emergency lights battery tested", "Exit doors checked for locks", "Evacuation map drafted to scale"]
  },
  // WO 54
  {
    num: 54, station: 'drafting', title: 'Stair Stringer Geometry & Rise-Run Math',
    youtubeId: '',
    studySheet: {
      overview: "Stair construction requires precise math and drafting to ensure steps are uniform, comfortable, and safe. A minor difference in riser heights presents major tripping hazards.",
      keyConcepts: "A staircase consists of the stringer (the sawtooth structural support), tread (horizontal step surface), and riser (vertical step back). Total Rise is the vertical height between finished floor surfaces. Total Run is the horizontal distance spanned by the stairs.",
      codesSafety: "International Residential Code (IRC) Standard R311.7 sets strict dimensional limits: maximum rise height is 7-3/4 inches, and minimum tread run depth is 10 inches. The 7/11 rule is a standard guidelines target. Step rise heights must not vary by more than 3/8\" across the staircase.",
      guidelines: "Given a mock floor-to-floor vertical rise of 36 inches, calculate the required number of steps: Divide 36 by the target rise (7\"). Round to get the step count (5 steps). Divide 36 by 5 to calculate individual step rise (7.2\"). Draft the stair stringer cutout template profile."
    },
    q1: "Under building codes, what are the standard maximum step rise height and minimum step tread depth limits?",
    p1: "maximum riser height minimum tread run IRC stair code",
    a1: "Maximum rise height: 7-3/4 inches. Minimum tread depth: 10 inches (often targeted as 7/11 rule).",
    q2: "Why must all steps in a single staircase have uniform rise heights and tread depths? What is the maximum allowed variation?",
    p2: "stair riser height variation tolerance limit trip hazard",
    a2: "Irregular step heights disrupt walking rhythms, creating major trip hazards. The maximum variation limit is 3/8 inch.",
    q3: "If the total floor-to-floor rise of a room is 70 inches, how many steps are required? What is the rise per step?",
    p3: "stair calculation 70 inch rise step count riser height",
    a3: "10 steps are required (70 / 7 = 10 steps). The rise per step is exactly 7 inches (70 / 10 = 7).",
    steps: [
      "Assume a total staircase rise of 36 inches. Calculate the step count by dividing by 7 (round to nearest whole number).",
      "Divide 36 by the step count to determine individual step riser heights. Record the decimal value.",
      "Select a scale of 1\" = 1'0\". Calculate the horizontal tread run dimensions (assume 10\" runs).",
      "Draw the side profile layout of the stair stringer on graph paper, showing step rises and runs."
    ],
    signoff: ["Step count calculated", "Step rise height calculated", "Stair geometry scale math completed", "Stringer profile drafted to scale"]
  },
  // WO 55
  {
    num: 55, station: 'foamboard', title: 'Staircase Model Construction & Assembly',
    youtubeId: '',
    studySheet: {
      overview: "Building models of stairs is an excellent way to practice cutting angles, verifying rise and run steps, and understanding how stairs are supported structurally.",
      keyConcepts: "Stair stringers are cut from dimensional lumber. In model building, a T-square and speed square align rise/run cuts at 90-degree angles. Treads and risers glue to the stringer teeth. The top of the stringer is cut to lock onto floor joists.",
      codesSafety: "Staircases must attach to floor joists securely to prevent structural failure under weight loads. Building models using foam board teaches precise layout techniques: cut stringer lines with steady utility knife passes to ensure edges remain flat.",
      guidelines: "Take your stringer drafting layout from Workorder 54. Trace the sawtooth profile onto a sheet of foam board. Cut out two identical stringer rails using a box cutter. Cut horizontal treads and vertical risers. Pin and glue the assembly to the platform built in WO 47."
    },
    q1: "What is a stair stringer in wood framing? How does it support staircase loads?",
    p1: "stair stringer structural support function framing",
    a1: "A diagonal sawtooth beam that runs along the sides of the stairs to carry the weight of treads, risers, and occupants.",
    q2: "Why must you use a speed square or framing square when marking riser and tread lines on a stringer board?",
    p2: "why use framing square layout stair stringer angles",
    a2: "To ensure the riser cuts and tread cuts meet at exact 90-degree angles, keeping treads horizontal and risers vertical.",
    q3: "Explain the difference between an open stringer and a closed housed stringer staircase.",
    p3: "open stringer vs closed housed stringer stairs differences",
    a3: "Open stringers have cut-out teeth exposing the steps; closed stringers have solid outer side boards containing the steps in routed grooves.",
    steps: [
      "Trace the stair stringer profile from Workorder 54 onto a sheet of foam board twice.",
      "Use a box cutter and metal straightedge to cut out the two sawtooth stringer rails.",
      "Cut five treads (1\" wide by 3\" long) and five risers (0.7\" wide by 3\" long) from foam board.",
      "Glue the stringer rails parallel, attach the risers and treads, and mount the staircase model to the floor platform from WO 47."
    ],
    signoff: ["2 identical stringers cut cleanly", "Treads and risers cut to size", "Staircase assembled square", "Staircase mounted to floor deck model"]
  },
  // WO 56
  {
    num: 56, station: 'precision', title: 'Micrometer Operations & Shaft Diameter Checks',
    youtubeId: '',
    studySheet: {
      overview: "Micrometers measure dimensions with high precision, reading down to one ten-thousandth of an inch (0.0001\"). They are standard in automotive and machining shops to verify cylinder bores, shaft wear, and bearing clearances.",
      keyConcepts: "A micrometer contains an anvil, spindle, sleeve scale, thimble scale, and a ratchet stop. The sleeve contains main barrel markings representing 0.025\" intervals. The rotating thimble contains 25 markings, where each mark represents 0.001\" of spindle travel.",
      codesSafety: "Never over-tighten a micrometer spindle against a part; excessive pressure will damage the internal threads. Use the ratchet stop at the end of the thimble; the ratchet slips when correct measuring contact tension is achieved.",
      guidelines: "Clean the micrometer anvil faces. Place the test shaft between the jaws. Turn the thimble until the spindle contacts the shaft, then use the ratchet stop until it clicks 3 times. Read the barrel lines, thimble line, and Vernier lines to calculate diameter."
    },
    q1: "Identify the primary parts of an outside micrometer, and explain the function of the ratchet stop.",
    p1: "outside micrometer parts diagram ratchet stop function",
    a1: "Anvil, spindle, lock, sleeve, thimble, and ratchet stop. The ratchet stop prevents over-tightening to ensure consistent pressure.",
    q2: "If the micrometer sleeve displays 0.350\" and the thimble line points to 17, what is the measured diameter?",
    p2: "how to read outside micrometer thimble sleeve",
    a2: "0.367 inches (0.350 + 0.017 = 0.367).",
    q3: "What is a Vernier scale on a micrometer barrel, and what extra decimal resolution does it provide?",
    p3: "micrometer vernier scale resolution decimal places",
    a3: "A secondary scale on the barrel that reads to the fourth decimal place (ten-thousandths of an inch, or 0.0001\").",
    steps: [
      "Clean the micrometer measuring faces. Zero the micrometer by closing it using the ratchet stop.",
      "Place a metal shaft or bolt from the kit between the anvil and spindle.",
      "Rotate the thimble until the spindle touches the shaft, then rotate the ratchet stop until it clicks 3 times.",
      "Read the sleeve, thimble, and Vernier scales. Record the shaft diameter to 4 decimal places."
    ],
    signoff: ["Micrometer zero tested", "Ratchet stop clicked 3 times", "Sleeve/thimble values read", "Shaft diameter calculated to 0.0001\""]
  },
  // WO 57
  {
    num: 57, station: 'electrical', title: 'MyHome Kit - Home Security Alarm System',
    youtubeId: '',
    studySheet: {
      overview: "Home security systems use sensor loops to monitor access points. Understanding how these sensors communicate with buzzers and warning indicators teaches digital logic and relay controls.",
      keyConcepts: "Security loops use Normally Closed (NC) or Normally Open (NO) switch contacts. In an NC loop, current flows continuously; opening a door breaks the loop, triggering the alarm control relay. Buzzers and warning lights are wired as parallel alarm outputs.",
      codesSafety: "System sensors are low-voltage DC signals (typically 12VDC or 9VDC). Relays isolate these low-voltage control loops from high-voltage AC sirens or building lights, protecting control boards from damage.",
      guidelines: "Using the MyHome kit, locate the buzzer block, warning light block, and touch/slide switches. Wire the battery pack to a control loop where opening the switch (breaking the loop) routes current to the buzzer and warning light.",
    },
    q1: "What is the difference between a Normally Open (NO) and a Normally Closed (NC) electrical contact?",
    p1: "normally open vs normally closed switch contacts differences",
    a1: "Normally Open contacts block current until activated; Normally Closed contacts conduct current until activated.",
    q2: "Why do commercial security alarm systems use Normally Closed loops for window/door sensors?",
    p2: "why security systems use normally closed sensor loops safety",
    a2: "Because cutting the sensor wire opens the loop, immediately triggering the alarm to detect tampering.",
    q3: "What is the role of an electromagnetic relay switch in a control circuit?",
    p3: "electromagnetic relay function control circuit isolation",
    a3: "It uses low-power control currents to magnetize a coil, pulling contacts to switch high-power circuits safely.",
    steps: [
      "Identify the buzzer block, LED warning block, battery pack, and slide switch in the MyHome kit.",
      "Build an alarm circuit where the slide switch acts as a window sensor.",
      "Wire the switch so that sliding it open completes the power path to both the warning light and buzzer in parallel.",
      "Test the circuit. Verify that opening the switch sounds the buzzer and lights the LED simultaneously."
    ],
    signoff: ["Buzzer and LED blocks located", "Slide switch wired as door sensor", "Parallel output alarm circuit built", "Alarm warning function verified"]
  },
  // WO 58
  {
    num: 58, station: 'plumbing', title: 'Kitchen Faucet Spray Head Maintenance & Washer Gaskets',
    youtubeId: '',
    studySheet: {
      overview: "Sink spray nozzles and faucet heads contain removable connection joints. Maintenance requires checking safety gaskets and cleaning structural spray orifices to ensure clean streams.",
      keyConcepts: "Loose faucet spray nozzles screw onto flexible rubber hoses. A rubber washer gasket seals the joint; if the washer splits or falls out, water will spray backward into the cabinet. Hard water deposits block spray nozzles, causing uneven spray angles.",
      codesSafety: "Replacing worn washer gaskets prevents major water leaks inside sink cabinets. Plumbers must inspect connection washers before tightening hose collar nuts to prevent thread deformation.",
      guidelines: "Examine a loose kitchen spray head assembly on the workstation table. Unscrew the spray collar from the hose fitting. Retrieve and check the black rubber washer gasket for wear. Clear scale from plastic spray jets, and reassemble."
    },
    q1: "What is the physical function of a flat rubber washer gasket inside a faucet spray hose connection?",
    p1: "flat rubber washer gasket function sink hose connection",
    a1: "It forms a compressible water seal between the metal hose collar and the spray head plastic threads.",
    q2: "What are the common visual signs of a damaged or split washer gasket?",
    p2: "split cracked damaged rubber washer gasket visual signs",
    a2: "Visible cracks along the perimeter, flattening, hardening, or small tears in the rubber ring.",
    q3: "Why should plumbers avoid using thread sealant tape (Teflon tape) on faucet hose joints containing compression washers?",
    p3: "why not use teflon tape on washer compression joint",
    a3: "Because the seal is made by the compressed rubber washer, not the threads; Teflon tape can prevent full compression.",
    steps: [
      "Take the loose faucet spray hose and nozzle assembly on your table.",
      "Unscrew the spray nozzle collar counterclockwise from the hose fitting.",
      "Locate the internal black rubber sealing washer. Remove it and inspect for splits.",
      "Inspect the plastic spray jets. Tap clean, reinsert the washer gasket, and screw back together."
    ],
    signoff: ["Nozzle collar unscrewed", "Rubber washer located", "Washer checked for tears", "Nozzle reassembled leak-free"]
  },
  // WO 59
  {
    num: 59, station: 'hvac', title: 'Sealing Mock Duct Joints on Cardboard Tubes/Ducts',
    youtubeId: '',
    studySheet: {
      overview: "Duct joints must be sealed airtight to prevent conditioned air from leaking into attics or walls. Sealing represents a core energy conservation code requirement.",
      keyConcepts: "Standard duct joints leak under static pressure. The primary methods for sealing ducts include: paint-on duct mastic paste or UL 181-approved foil tape. Foil tape contains high-tack acrylic adhesives designed to withstand temperature cycles without drying out.",
      codesSafety: "Cloth-backed duct tape is prohibited by modern building energy codes because it dries out and fails under temperature variations. Duct leaks cause higher utility bills and draw dust or crawlspace insulation fibers into the room air loops.",
      guidelines: "Assemble two short cardboard sleeves or metal duct sections on the workstation table. Apply a continuous layer of UL 181-approved foil tape along the center joint seam. Use a plastic squeegee tool to rub the tape flat, ensuring no wrinkles remain."
    },
    q1: "Why does the building code require using UL 181-approved foil tape instead of standard duct tape for sealing duct joints?",
    p1: "UL 181 foil tape vs standard duct tape longevity code",
    a1: "UL 181 tape features high-tack acrylic adhesive that resists temperature cycling without drying out and peeling.",
    q2: "What does a squeegee tool achieve when applying foil tape to a duct seam?",
    p2: "foil tape squeegee tool application adhesion pressure",
    a2: "It applies firm pressure to activate the pressure-sensitive acrylic adhesive, ensuring a strong, airtight bond.",
    q3: "Why does a leaking return air duct in a basement crawlspace pose a health risk to occupants?",
    p3: "leaking return air duct crawlspace health risk dust",
    a3: "The vacuum inside the return duct draws basement dust, humidity, mold spores, and fiberglass particles into the room air loops.",
    steps: [
      "Take two short cardboard shipping tubes (or loose sheet metal ducts) on your table.",
      "Butt the ends together. Secure them temporarily using a small piece of masking tape.",
      "Cut a strip of UL 181-approved aluminum foil tape. Center it over the butt joint seam.",
      "Wrap the tape around the joint. Use a plastic card or squeegee to press out all wrinkles to form a clean seal."
    ],
    signoff: ["Joint sections aligned", "UL 181 foil tape applied", "Squeegee tool rubbed flat", "Joint sealed airtight"]
  },
  // WO 60
  {
    num: 60, station: 'automotive', title: 'Halogen Bulb Replacement & Harness Safety',
    youtubeId: '',
    studySheet: {
      overview: "Vehicle lighting systems are essential for night driving and safety signaling. Replacing burned-out headlight and taillight bulbs is a standard maintenance task that requires correct handling of high-pressure halogen envelopes.",
      keyConcepts: "Halogen bulbs contain high-pressure gas envelopes that operate at intense temperatures. The quartz glass envelope is highly sensitive to contamination. Skin contact leaves oils that create hot spots during operation, causing the bulb glass to bubble, crack, and fail prematurely.",
      codesSafety: "Technicians must wear clean gloves or hold the bulb base to prevent touching the quartz glass during bulb swaps. Wiring harnesses use lock collars or tab clips that must be released before pulling connectors to avoid pulling wires out of terminals.",
      guidelines: "Access the rear panel of the headlight housing under the hood. Press the locking tab to release the electrical connector. Turn the bulb base counterclockwise to remove it. Wearing gloves, place the bulb back in, twist clockwise, and re-seat the harness."
    },
    q1: "Why must you never touch the quartz glass of a halogen headlight bulb with bare fingers?",
    p1: "why not touch halogen bulb glass skin oils failure",
    a1: "Skin oils create hot spots on the hot quartz glass, causing it to bubble, crack, and burn out prematurely.",
    q2: "What should you do to clean a halogen bulb if you accidentally touch the glass envelope?",
    p2: "how to clean halogen bulb touched glass rubbing alcohol",
    a2: "Clean the glass envelope thoroughly using a lint-free cloth dampened with rubbing alcohol, and let it dry.",
    q3: "Why do headlight wiring harness plugs feature latch locks or release collars?",
    p3: "purpose of automotive wiring harness connector locks latch",
    a3: "To prevent road vibrations from loosening the connection, which would cause flickering or open circuits.",
    steps: [
      "Open the vehicle hood. Locate the rear access panel of the headlight housing.",
      "Locate the electrical wiring harness connector. Press the plastic locking tab and pull to disconnect the plug.",
      "Twist the bulb locking collar or bulb base counterclockwise to remove the bulb from the housing.",
      "Wear clean nitrile gloves. Align the bulb indexing tabs, insert it, twist clockwise to lock, and reconnect the harness."
    ],
    signoff: ["Headlight rear housing accessed", "Harness plug lock released safely", "Halogen bulb removed counterclockwise", "Gloves worn for reinstallation"]
  },
  // WO 61
  {
    num: 61, station: 'electrical', title: 'Wiring a GFCI Safety Receptacle Outlet',
    youtubeId: 'inpvNt6591E',
    studySheet: {
      overview: "Ground Fault Circuit Interrupters (GFCIs) are safety devices designed to protect people from electrical shocks by monitoring the balance of current between the hot and neutral conductors.",
      keyConcepts: "A GFCI monitors the current exiting the hot terminal and returning to the neutral terminal. If it detects a difference of 4-6 milliamps (indicating current is escaping to ground, possibly through a person), it trips and cuts power in under 1/30th of a second.",
      codesSafety: "NEC code requires GFCI protection in areas near water (kitchens, bathrooms, garages). GFCIs feature 'LINE' terminals (for incoming power) and 'LOAD' terminals (for protecting downstream regular outlets). If wired backward, the GFCI will not protect downstream lines.",
      guidelines: "Mount a plastic electrical box on the board. Feed 14/2 Romex in. Connect incoming power to the 'LINE' hot (brass) and neutral (silver) screws. Wrap ground to the green screw. Test the reset button."
    },
    q1: "How does a GFCI outlet detect a ground fault? What current difference triggers it?",
    p1: "how GFCI outlet works ground fault trip milliamps",
    a1: "It compares hot and neutral currents; a difference of 4 to 6 milliamps triggers an electromagnetic trip in 25 milliseconds.",
    q2: "What is the difference between the 'LINE' and 'LOAD' terminals on a GFCI receptacle?",
    p2: "GFCI line vs load terminals wiring differences",
    a2: "LINE receives incoming panel power; LOAD extends GFCI trip protection to downstream regular outlets.",
    q3: "Why does the NEC mandate GFCI outlets in bathrooms and kitchens but not in standard bedrooms?",
    p3: "why NEC requires GFCI kitchens bathrooms water hazard",
    a3: "Water nearby increases the risk of a ground path through wet skin/surfaces, making rapid shock protection essential.",
    steps: [
      "Mount a single-gang outlet box to your board. Feed 14/2 Romex cable into the box.",
      "Identify the 'LINE' label tape covering the rear contacts. Remove it to expose the LINE screws.",
      "Wire the LINE terminals: connect black to brass, white to silver, ground to green. Tighten.",
      "Secure the GFCI in the box, apply power, and verify the reset/test buttons function correctly."
    ],
    signoff: ["GFCI outlet box mounted", "LINE terminals correctly identified", "Hot/neutral/ground wires screwed securely", "Reset/test button mechanical trip verified"]
  },
  // WO 62
  {
    num: 62, station: 'plumbing', title: 'Compression Fitting Assembly & Copper Tubing Prep',
    youtubeId: 'bedg1qp-F4M',
    studySheet: {
      overview: "Compression fittings allow joining copper or plastic pipes without solder flux or flames. They are standard for connecting appliance water supply lines and shut-off valves.",
      keyConcepts: "A compression joint consists of three parts: the compression nut, the brass ring (ferrule), and the fitting body. Tightening the nut compresses the ferrule around the pipe wall, forming a high-pressure friction seal.",
      codesSafety: "Copper tubing must be cut square and deburred (removing internal/external sharp metal burrs) before assembly. If the pipe is cut at an angle or has burrs, the ferrule will seat unevenly, causing slow drips under pressure.",
      guidelines: "Slide the compression nut onto the copper tube first, then slide the ferrule. Insert the tube fully into the fitting body. Slide the ferrule flush to the body, thread the nut by hand, and use two wrenches to tighten 1 full turn past hand-tight."
    },
    q1: "Identify the three physical parts of a standard brass compression fitting joint.",
    p1: "three parts compression fitting joint brass plumbing",
    a1: "1. Compression nut, 2. Ferrule (compression ring), and 3. Fitting body.",
    q2: "Why must you deburr the inside and outside edges of a copper tube after cutting it with a wheel cutter?",
    p2: "why deburr copper pipe cutting plumbing turbulence",
    a2: "Burrs restrict water flow, cause turbulence leading to erosion, and prevent the ferrule from sealing correctly.",
    q3: "What tool and technique should you use to tighten a compression nut without twisting the copper pipe?",
    p3: "how to tighten compression fitting two wrenches back up",
    a3: "Use two wrenches: one open-ended wrench to hold the fitting body steady, and a second wrench to turn the compression nut.",
    steps: [
      "Take a 4-inch piece of copper tubing. Use a mini tubing cutter to cut it square.",
      "Use a deburring tool to clean the inside and outside edges of the cut pipe.",
      "Slide the compression nut, then the brass ferrule, onto the clean pipe end.",
      "Insert the pipe fully into a shut-off valve body. Tighten the compression nut using two wrenches."
    ],
    signoff: ["Copper pipe cut square", "Pipe edges deburred clean", "Nut and ferrule oriented correctly", "Nut tightened securely using two wrenches"]
  },
  // WO 63
  {
    num: 63, station: 'hvac', title: 'Refrigerant Cycle & Pressure-Temperature (P-T) Chart Math',
    youtubeId: '',
    studySheet: {
      overview: "Air conditioners transfer heat using refrigerant chemicals that cycle between liquid and gas states. Troubleshooting refrigerant levels requires evaluating pressures against temperature charts.",
      keyConcepts: "The refrigeration cycle uses four main components: evaporator (absorbs heat, vaporizes liquid), compressor (pumps vapor, raises pressure), condenser (rejects heat, condenses vapor), and expansion valve (throttles liquid, drops pressure). Saturated temperature is the boiling point of a refrigerant at a given pressure.",
      codesSafety: "EPA Section 608 regulations forbid venting refrigerants into the atmosphere. Technicians use Pressure-Temperature (P-T) charts to translate gauge pressures into saturated evaporator/condenser temperatures to check superheat levels.",
      guidelines: "Study the printed R-410A refrigerant P-T chart. Locate the measured pressure values (e.g. 118 PSI on low side, 340 PSI on high side). Convert these pressures to saturated boiling temperatures on the chart, and record them."
    },
    q1: "What are the four primary mechanical components of a closed-loop refrigeration cycle?",
    p1: "four main components refrigeration cycle hvac",
    a1: "1. Compressor, 2. Condenser, 3. Expansion Valve (TXV/orifice), and 4. Evaporator.",
    q2: "What does 'saturated temperature' mean when referencing an HVAC refrigerant P-T chart?",
    p2: "saturated temperature definition refrigerant PT chart boiling",
    a2: "The boiling point temperature of the refrigerant where liquid and vapor exist together at a specific pressure.",
    q3: "If a technician measures R-410A pressure at 118 PSI, what is the saturated evaporator temperature according to the P-T chart?",
    p3: "R410A saturated temperature at 118 PSI pressure",
    a3: "Exactly 40 degrees Fahrenheit.",
    steps: [
      "Examine the printed R-410A Pressure-Temperature (P-T) chart on your table.",
      "Find the saturated temperature for a low-side pressure of 118 PSI. Record it.",
      "Find the saturated temperature for a high-side pressure of 340 PSI. Record it.",
      "Calculate the target superheat if the actual suction line temperature is measured at 52°F (Actual Temp - Sat Temp)."
    ],
    signoff: ["R-410A chart located", "Low-side sat temp recorded", "High-side sat temp recorded", "Superheat calculated correctly"]
  },
  // WO 64
  {
    num: 64, station: 'automotive', title: 'Serpentine Accessory Belt Inspection & Routing Diagrams',
    youtubeId: '',
    studySheet: {
      overview: "Serpentine belts transfer mechanical power from the rotating engine crankshaft to accessories like the alternator, power steering pump, water pump, and air conditioning compressor.",
      keyConcepts: "A serpentine belt is a continuous rubber belt featuring multi-grooved ribs. Pulleys are either driven (connected to accessories) or idler/tensioner pulleys (spring-loaded to maintain belt tension). Belts wear down over time, slipping or snapping if not replaced.",
      codesSafety: "Inspect belts for cracks (more than 3 cracks in a 3-inch span indicates replacement is due), rib chunking, or a glazed backing (shiny surface suggesting slippage and heat damage). Keep hands away from belts when the engine is running.",
      guidelines: "Locate the vehicle serpentine belt routing decal under the hood. Sketch the pulley arrangement and belt path. Use a belt wear gauge tool to measure rib wear depth, and inspect the belt backing for glazing or cracks."
    },
    q1: "What is the function of a spring-loaded automatic belt tensioner pulley in a serpentine belt system?",
    p1: "serpentine belt automatic tensioner pulley function",
    a1: "It applies constant spring pressure to the belt to prevent slippage under varying engine load conditions.",
    q2: "What visual signs indicate that an accessory drive belt is glazed and slipping?",
    p2: "glazed serpentine belt visual signs slipping heat",
    a2: "A shiny, glassy, or smooth appearance on the flat backing of the belt, often accompanied by squealing noises.",
    q3: "Why is a serpentine belt routing diagram printed on a decal under the hood of most vehicles?",
    p3: "why serpentine belt routing diagram decal under hood",
    a3: "Because the belt weaves through multiple pulleys in a complex path; the diagram ensures correct re-routing during replacement.",
    steps: [
      "Open the vehicle hood. Locate the serpentine belt routing diagram decal.",
      "Locate the serpentine belt running along the side of the engine block.",
      "Draw the belt routing path on paper, marking the alternator, crankshaft, and tensioner pulleys.",
      "Inspect the grooved ribs for cracks or wear. Document the belt condition."
    ],
    signoff: ["Accessory belt routing diagram located", "Serpentine belt path inspected", "Belt routing path sketched", "Rib crack audit completed"]
  },
  // WO 65
  {
    num: 65, station: 'safety', title: 'Workplace First-Aid Station Inspection',
    youtubeId: '',
    studySheet: {
      overview: "OSHA regulations mandate that employers provide medical and first aid supplies for employee safety. Regular audits ensure first-aid stations remain stocked with unexpired, code-compliant items.",
      keyConcepts: "Workplace first-aid kits are categorized by ANSI/ISEA Z308.1 standards. Class A kits contain basic supplies (bandages, antiseptics, scissors) for common minor injuries. Class B kits contain broader supplies (burn dressings, splints) for higher-risk industrial environments.",
      codesSafety: "OSHA Standard 1910.151 requires first-aid kits to be readily accessible. Supplies have expiration dates (especially eyewash solutions, burn creams, and antiseptic wipes); expired items lose sterile properties and must be replaced.",
      guidelines: "Locate the facility first-aid kit. Perform a systematic inventory audit against the ANSI Class A standard list. Check expiration dates on all ointments and pads, document missing items, and compile a restocking order form."
    },
    q1: "Under ANSI/ISEA Z308.1 standards, what is the difference between a Class A and a Class B first-aid kit?",
    p1: "Class A vs Class B first aid kit ANSI standards",
    a1: "Class A covers basic minor workplace injuries; Class B contains larger quantities and extra tools (splints, tourniquets) for high-risk zones.",
    q2: "Why do sterile bandages and antiseptic wipes have printed expiration dates?",
    p2: "why sterile first aid supplies expire packaging",
    a2: "The sterile packaging seals degrade over time, risking contamination of the bandages and drying out of antiseptics.",
    q3: "What does OSHA standard 1910.151 require if a workplace processes corrosive chemicals?",
    p3: "OSHA 1910.151 emergency eyewash shower requirements",
    a3: "Mandates that clean facilities for quick drenching or flushing of the eyes and body be provided within the work area.",
    steps: [
      "Locate the wall-mounted first-aid station in the facility.",
      "Open the cabinet. Audit the contents against the ANSI Class A checklist.",
      "Examine ointments, eyewash bottles, and burn dressings. Record all expiration dates.",
      "Draft a replenishment log listing any expired or low-stock items requiring reorder."
    ],
    signoff: ["First-aid cabinet located", "Inventory checklist completed", "Expiration dates audited", "Restock log drafted"]
  },
  // WO 66
  {
    num: 66, station: 'drafting', title: 'Electrical Symbols & Schematic Drafting',
    youtubeId: '_HZ-EQ8Hc8E',
    studySheet: {
      overview: "Electrical blueprints use standardized symbols to represent outlet locations, switch connections, and wiring runs. Drafting these plans is necessary to guide field wire installations.",
      keyConcepts: "Standard symbols represent components: a circle with two horizontal lines is a duplex outlet; a circle with an 'S' is a single-pole switch; 'S3' is a 3-way switch; a circle with radial spikes is a ceiling light. Wiring paths are drawn as curved, dashed lines.",
      codesSafety: "Electrical plans must follow design rules. In residential codes, outlets must be spaced so no point along a wall is more than 6 feet from an outlet (12-foot spacing rule). Drafting layouts ensures compliance before construction.",
      guidelines: "Draft a single-room electrical blueprint layout on graph paper. Scale: 1/2\" = 1'0\". The room is 12' x 16'. Draw the wall boundaries, and place symbols for a ceiling light, two 3-way switches, a GFCI near a mock sink, and four standard outlets."
    },
    q1: "Draw or describe the standard blueprint drafting symbols for a duplex receptacle and a 3-way switch.",
    p1: "duplex receptacle 3-way switch blueprint symbol",
    a1: "Duplex receptacle is a circle with two parallel lines through it; 3-way switch is an S with a subscript 3 (S3).",
    q2: "What does a curved, dashed line running between a switch symbol and a light symbol represent on an electrical plan?",
    p2: "curved dashed line electrical blueprint wiring loop",
    a2: "It represents the electrical control path (switch leg wire route) connecting the switch to the light fixture.",
    q3: "What is the residential 12-foot receptacle spacing rule under the National Electrical Code?",
    p3: "NEC residential outlet wall spacing 12 foot rule",
    a3: "Outlets must be placed so that no point along a floor wall line is more than 6 feet from an outlet, requiring outlets every 12 feet.",
    steps: [
      "Study the electrical symbol schedule (outlets, switches, lights, panels).",
      "Draw a 12' x 16' room outline at 1/2\" = 1'0\" scale on graph paper.",
      "Place symbols for 4 outlets (spacing compliant), 1 ceiling light, and two 3-way wall switches.",
      "Draw the control path lines showing the switches controlling the ceiling light. Label all symbols."
    ],
    signoff: ["Room outline scaled", "Outlets placed within code limits", "3-way switch symbols drafted", "Wiring control paths mapped"]
  },
  // WO 67
  {
    num: 67, station: 'foamboard', title: 'Window Rough Opening & Jack Stud Assembly',
    youtubeId: 'TmJJfLlZgaQ',
    studySheet: {
      overview: "Wall framing must include openings to accommodate windows and doors. The structural framing around these openings must transfer load weight from the roof down to the foundation.",
      keyConcepts: "A window opening assembly consists of: king studs (full-height), jack studs (coped/cut to support the header), a header beam spanning the top, a horizontal sill plate forming the window bottom, and short cripple studs installed below the sill and above the header.",
      codesSafety: "Rough Opening (RO) dimensions are specified by the window manufacturer and are slightly larger than the actual window unit to allow for plumbing, leveling, and squaring during window installation.",
      guidelines: "Cut a wall plate segment from foam board. Cut two king studs and two jack studs. Cut a window sill plate and a header. Assemble the window rough opening frame on your layout table, checking that the opening is square."
    },
    q1: "Why is the window Rough Opening (RO) framed slightly larger than the actual window unit?",
    p1: "why window rough opening larger than window size leveling",
    a1: "To allow space for leveling, plumbing, squaring, and insulating the window unit during installation.",
    q2: "What stud component directly supports the bottom face of the window header beam in framing?",
    p2: "framing stud supports window header beam load",
    a2: "The jack stud (or trimmer stud).",
    q3: "What is the function of cripple studs installed below a window sill plate?",
    p3: "window sill cripple studs function framing load",
    a3: "They transfer vertical gravity loads from the sill plate down to the bottom sill plate of the wall.",
    steps: [
      "Cut foam board pieces: two 8\" king studs, two 5\" jack studs, one 4\" header, and one 4\" window sill.",
      "Assemble the king and jack studs parallel, ensuring the jacks face inward.",
      "Fit the header beam across the top of the jack studs, and the sill plate across the bottom of the window opening.",
      "Pin the assembly together, measure the interior opening diagonals to verify squareness, and secure with glue."
    ],
    signoff: ["Window frame parts cut to spec", "Jack/king studs aligned parallel", "Header and sill plates fitted flush", "Rough opening squareness verified"]
  },
  // WO 68
  {
    num: 68, station: 'precision', title: 'Dial Indicators & Disc Rotor Lateral Runout',
    youtubeId: '',
    studySheet: {
      overview: "Brake disc rotors must rotate with minimal lateral runout. Excessive lateral runout causes brake pedal pulsation, steering wheel shake, and uneven brake pad wear during stopping.",
      keyConcepts: "Lateral runout is the side-to-side wobble of a rotating disc relative to its axis. It is measured in thousandths of an inch using a dial indicator. The indicator is mounted to a magnetic base clamped to a solid suspension component.",
      codesSafety: "Standard automotive specifications limit brake rotor lateral runout to under 0.002 inches (two thousandths). Exceeding this limit requires resurfacing the rotor (cutting it flat) or replacing it. Clean mating hubs before checking.",
      guidelines: "Mount a mock disc rotor on a spindle stand (or access a car wheel hub). Clamp the dial indicator magnetic stand to the base. Align the plunger probe perpendicular to the outer rotor face. Zero the dial, rotate the disc 360 degrees, and record deflections."
    },
    q1: "What is lateral runout on a vehicle brake rotor? What driver symptom does it cause?",
    p1: "brake rotor lateral runout symptom pedal pulsation",
    a1: "A side-to-side wobble of the rotor; causes brake pedal pulsation and steering wheel vibration during braking.",
    q2: "What is the standard maximum allowed lateral runout tolerance for passenger vehicle disc brakes?",
    p2: "maximum allowed brake rotor runout tolerance limit",
    a2: "Typically under 0.002 inches (0.05 mm).",
    q3: "Why must the dial indicator contact probe point perpendicular (90 degrees) to the surface being measured?",
    p3: "dial indicator probe alignment cosine error perpendicular",
    a3: "To avoid cosine errors, which cause the indicator to read less deflection than actual displacement.",
    steps: [
      "Mount the mock disc rotor onto the table spindle fixture.",
      "Set the dial indicator magnetic base on the table, aligning the plunger tip against the outer edge of the rotor disc.",
      "Preload the plunger slightly, then rotate the bezel dial to zero the needle.",
      "Slowly rotate the rotor one full revolution. Record the maximum high and low readings to determine runout."
    ],
    signoff: ["Rotor disc mounted flat", "Indicator plunger preloaded perpendicular", "Bezel zeroed successfully", "Total runout value calculated"]
  },
  // WO 69
  {
    num: 69, station: 'electrical', title: 'Wiring a Switch-Controlled Split-Duplex Outlet',
    youtubeId: 'tYinqtVDNcA',
    studySheet: {
      overview: "Split-duplex receptacles are outlets where one socket is switched (controlled by a wall switch) while the other socket remains constantly live (hot). This is common for switching floor lamps in residential rooms.",
      keyConcepts: "A standard duplex receptacle has a brass connecting tab bridging the two hot terminals. Removing this tab separates the electrical paths of the top and bottom plugs. Neutral terminals (silver) must keep their tab intact.",
      codesSafety: "Neutral wires must always remain shared between split-receptacles. Switched hot legs (usually red or black wire loops) run from the switch to the switched outlet terminal, while constant power runs to the other terminal.",
      guidelines: "Use pliers to bend and break off the brass tab on the hot (brass screw) side of the outlet. Wire constant line power (black) to the bottom brass screw. Wire the switched hot leg (red) to the top brass screw. Wire neutral to the silver screw."
    },
    q1: "How do you physically modify a standard duplex outlet receptacle to isolate the top plug from the bottom plug?",
    p1: "split receptacle break off tab isolation outlet brass",
    a1: "Break off the small metal tab bridging the two brass (hot) terminal screws using pliers.",
    q2: "Why must you leave the connecting tab intact on the silver (neutral) side of a split-duplex receptacle?",
    p2: "why leave neutral tab intact split outlet receptacle",
    a2: "Both the switched and constant plugs must share the same return neutral path to complete the circuits safely.",
    q3: "What color wire is standard in residential trade wiring to represent a switched hot leg wire?",
    p3: "residential wiring switched hot leg wire color standard",
    a3: "Red.",
    steps: [
      "Take a standard duplex receptacle outlet. Locate the small brass tab between the brass screws.",
      "Use needle-nose pliers to bend and snap the brass tab off. Verify the silver tab remains intact.",
      "Wire the board: connect constant power (black) to the bottom brass screw, and a switched hot wire (red/black) to the top screw.",
      "Connect the neutral (white) wire to the silver screw. Apply power and test both plug halves."
    ],
    signoff: ["Duplex outlet hot tab removed", "Neutral tab verified intact", "Switched leg wired to top screw", "Constant hot wired to bottom screw"]
  },
  // WO 70
  {
    num: 70, station: 'plumbing', title: 'Small Parts Kit - PEX Piping Loops & Crimp Fittings',
    youtubeId: '6uNezbvSRYQ',
    studySheet: {
      overview: "Cross-linked polyethylene (PEX) is a flexible plastic piping material that has largely replaced traditional copper in residential plumbing due to its lower cost, freeze resistance, and ease of routing.",
      keyConcepts: "PEX connections use barbed insert fittings. Connections are secured using metal crimp rings compressed with a PEX crimping tool, or stainless steel pinch cinch clamps. PEX expansion joints are common in commercial plumbing.",
      codesSafety: "PEX connections must be verified using a Go/No-Go gauge. If the crimped ring is too large (No-Go), the crimp was weak; if too small (Go), it was over-crimped. Over-crimping crushes the fitting, while under-crimping causes leaks.",
      guidelines: "Gather PEX tubes, fittings (tees, elbows), and metal crimp rings. Slide the ring onto the PEX pipe, insert the barbed fitting body, position the ring 1/8\" from the pipe end, and compress with the crimping tool. Check with the gauge."
    },
    q1: "What are the three common classifications of PEX tubing (A, B, C)? What is PEX-A known for?",
    p1: "PEX A vs PEX B vs PEX C differences flexibility expansion",
    a1: "PEX-A (highest flexibility, memory shape), PEX-B (silane method, stiffer), PEX-C (radiation method).",
    q2: "What is the function of a plumbing Go/No-Go gauge when checking PEX copper crimp rings?",
    p2: "crimp gauge PEX go no-go check tool use",
    a2: "It verifies that the crimp ring diameter is compressed to the correct mechanical specification limits.",
    q3: "Why is PEX tubing less susceptible to bursting in freezing temperatures compared to rigid copper pipe?",
    p3: "why PEX resists freeze burst copper pipe comparison",
    a3: "PEX is flexible and can expand up to 15% of its diameter to accommodate ice expansion, then return to size.",
    steps: [
      "Gather PEX tubing segments, barbed fittings, and crimp rings from the plumbing kit.",
      "Slide a copper crimp ring onto the PEX pipe. Push the barbed elbow fitting fully into the pipe.",
      "Position the crimp ring 1/8\" from the cut end of the tube.",
      "Use the PEX crimping tool to compress the ring. Use the Go/No-Go gauge to verify a correct seal."
    ],
    signoff: ["PEX tubing cut square", "Barbed fitting inserted fully", "Crimp ring aligned 1/8\"", "Crimp ring verified with Go/No-Go gauge"]
  },
  // WO 71
  {
    num: 71, station: 'hvac', title: 'Low-Voltage Control Board Wiring & Jumper Tests',
    youtubeId: '',
    studySheet: {
      overview: "HVAC control boards route low-voltage (24VAC) signals to relays that control high-voltage motors and gas valves. Understanding terminal jumpers is critical for diagnosing system control issues.",
      keyConcepts: "Control strips feature standard screw terminals: R (24VAC power), W (heat call), Y (cool call), G (indoor fan), and C (common ground). Thermostats operate by bridging R to the other terminals. Jumpers simulate thermostat requests.",
      codesSafety: "Always disconnect 120V line power before jumping control terminals to avoid shock. Low-voltage circuits are protected by a small automotive-style fuse (usually 3A or 5A); shorts will blow this fuse.",
      guidelines: "On a de-energized training control board, trace the terminals. Connect a jumper wire between R and G to test fan relays. Connect R to W to test heating sequence control. Measure voltage across R and C to verify 24VAC power."
    },
    q1: "What happens inside a furnace control board when a jumper wire is connected between the 'R' and 'G' terminals?",
    p1: "jumper R to G HVAC control board fan relay",
    a1: "It sends 24VAC directly to the indoor blower fan relay, turning the fan blower motor on.",
    q2: "What electrical component protects the low-voltage control circuit on a furnace board from current shorts?",
    p2: "low voltage fuse furnace control board protection",
    a2: "A small blade-style fuse (typically 3-Amp or 5-Amp, plastic automotive type).",
    q3: "If a voltmeter reads 0.00V across terminals R and C, what does this suggest about the transformer?",
    p3: "zero volts across R and C HVAC transformer diagnostic",
    a3: "The transformer has failed, lost primary 120V power, or its internal thermal fuse has blown.",
    steps: [
      "Ensure the training control board block has no external power connected.",
      "Set your multimeter to the AC Volts mode.",
      "Use alligator jumpers to connect terminal 'R' to terminal 'G'. This simulates a fan manual request.",
      "Remove the jumper. Connect 'R' to 'W'. Identify the circuit path for the heating relay."
    ],
    signoff: ["Control board de-energized verified", "R-to-G jumper installed", "R-to-W jumper installed", "Relay circuit paths mapped on paper"]
  },
  // WO 72
  {
    num: 72, station: 'automotive', title: 'Battery Voltage Diagnostics & Charging Audit',
    youtubeId: '',
    studySheet: {
      overview: "Automotive electrical systems rely on lead-acid batteries to start engines and alternators to charge batteries and power electrical components when running.",
      keyConcepts: "A fully charged 12V lead-acid battery reads 12.6V static (2.1V per cell). A reading below 12.0V indicates a dead battery. During cranking, high starter current causes voltage to drop (should stay above 9.6V). Alternator charging output must read between 13.5V and 14.7V.",
      codesSafety: "Batteries contain corrosive sulfuric acid and generate explosive hydrogen gas during charging. Always wear safety glasses when testing. Connect the red voltmeter lead to the positive terminal first, then the black lead to the negative terminal.",
      guidelines: "Configure a digital multimeter to DC Volts. Measure static battery voltage with the engine off. Have a helper start the vehicle; record the lowest cranking voltage drop. Measure voltage with the engine running to check alternator output."
    },
    q1: "What is the static voltage reading of a fully charged 12-Volt automotive battery?",
    p1: "static voltage fully charged car battery 12.6",
    a1: "12.6 Volts (2.1 Volts per cell).",
    q2: "If battery voltage drops to 7.5 Volts during engine cranking, what does this diagnose?",
    p2: "car battery voltage drop cranking 7.5 diagnostic starter",
    a1: "A weak or failing battery that cannot sustain current loads under crank resistance.",
    q3: "What is the normal charging voltage range produced by a functioning alternator when the engine is idling?",
    p3: "normal alternator charging voltage range engine running",
    a3: "13.5 to 14.7 Volts.",
    steps: [
      "Configure your digital multimeter to the DC Volts mode (20V scale).",
      "Measure static battery voltage across the positive (+) and negative (-) terminals. Record the value.",
      "Start the engine. Record the lowest voltage reached during cranking.",
      "Measure and record the battery voltage with the engine idling to verify alternator charging output."
    ],
    signoff: ["Multimeter set to DC Volts", "Static voltage recorded", "Cranking drop recorded", "Alternator charging output verified"]
  },
  // WO 73
  {
    num: 73, station: 'safety', title: 'Lock-Out / Tag-Out (LOTO) Energy Isolation Drill',
    youtubeId: '',
    studySheet: {
      overview: "Lock-Out/Tag-Out (LOTO) is an essential OSHA safety procedure used to ensure that machines and electrical panels are completely shut off and isolated from energy sources before maintenance is performed.",
      keyConcepts: "LOTO prevents accidental start-up of machinery during repairs. The steps are: (1) Notify affected employees. (2) Shut down the equipment. (3) Isolate all energy sources (breakers, valves). (4) Apply LOTO padlocks and tags. (5) Verify zero energy state.",
      codesSafety: "OSHA Standard 1910.147 governs LOTO control. Padlocks must be individually keyed so only the technician working on the machine holds the key. Verification of a zero energy state (using a voltmeter) is the final safety step.",
      guidelines: "Perform a mock LOTO drill on a training breaker disconnect box. Turn the switch to the off position, apply a LOTO lockout hasp clamp, secure it with your padlock, place a warning tag with your name, and verify the terminals are dead."
    },
    q1: "What are the five primary chronological steps of an OSHA Lock-Out / Tag-Out procedure?",
    p1: "five steps lockout tagout LOTO OSHA procedure",
    a1: "1. Preparation/notification, 2. Shutdown, 3. Isolation, 4. Application of lock/tag, 5. Verification of zero energy.",
    q2: "Why must LOTO locks be keyed-different (individually keyed) for every technician on a worksite?",
    p2: "why LOTO padlocks keyed different safety OSHA",
    a2: "To ensure no other employee can accidentally remove a lock and energize equipment while a tech is working.",
    q3: "What is the final, critical step of a LOTO procedure before beginning physical work on a machine?",
    p3: "final step LOTO verification zero energy state testing",
    a3: "Verification of a zero energy state (testing with a voltmeter or attempting to cycle the start switch).",
    steps: [
      "Locate the training electrical disconnect switch box.",
      "Switch the lever to the 'OFF' position.",
      "Install a multi-lock lockout hasp clamp through the lever locking pin hole.",
      "Secure the hasp with a padlock and a filled-out warning tag. Verify the lever cannot be moved."
    ],
    signoff: ["Disconnect switch turned off", "Lockout hasp clamp installed", "Padlock locked secure", "Warning tag completed and attached"]
  },
  // WO 74
  {
    num: 74, station: 'drafting', title: 'HVAC System Duct Schematic Drawing',
    youtubeId: 'tLZzXtnrZuc',
    studySheet: {
      overview: "HVAC blueprints use duct schematics to represent return and supply lines, air volume settings, and register diffusers. Drafting these paths ensures correct duct sizing and air balance.",
      keyConcepts: "Duct schematics use standard symbols: a solid rectangle is a main sheet metal supply trunk; a dashed or colored rectangle is the return air path; a square containing an 'X' is a register diffuser. Air CFM targets are labeled near register symbols.",
      codesSafety: "Duct routing must minimize bends and flex duct drops to reduce static pressure losses. Trunks are sized to drop in width as branches are added to maintain air velocity. This is called reducing trunk sizing design.",
      guidelines: "Draft a single-line duct routing layout plan on graph paper. Scale: 1/2\" = 1'0\". Draw a small house floor plan (20' x 24'). Map the furnace location, the main supply trunk line, four branch lines to registers, and a single return register."
    },
    q1: "On a duct layout blueprint, how are main supply ducts distinguished from return air ducts?",
    p1: "supply vs return duct blueprint drawing symbols differences",
    a1: "Supply ducts are drawn as solid line rectangular shapes; return ducts are drawn with dashed boundaries or diagonal hash marks.",
    q2: "Why does a main supply duct trunk reduce in size (e.g. from 12x8 down to 10x8) as it runs down a hallway?",
    p2: "why duct trunk reduces size branch takeoffs velocity",
    a2: "As air branches off to rooms, the remaining air volume drops; reducing duct size maintains constant FPM velocity.",
    q3: "What symbol represents a supply register diffuser on an HVAC layout plan?",
    p3: "hvac supply diffuser register blueprint symbol X",
    a3: "A square containing an internal diagonal 'X' pattern or showing radial grille louvers.",
    steps: [
      "Review the drafting symbols for supply trunks, branch ducts, and grilles.",
      "Draw a small 20' x 24' floor layout at 1/2\" = 1'0\" scale.",
      "Mark a central utility closet representing the indoor furnace/air handler.",
      "Draw the main supply duct running down the center, and add 4 branch lines leading to registers."
    ],
    signoff: ["Floor layout scaled", "Furnace closet marked", "Supply trunk line drawn", "4 branch grilles positioned and labeled"]
  },
  // WO 75
  {
    num: 75, station: 'foamboard', title: 'Hip and Valley Roof Rafter Geometry',
    youtubeId: 'P0USmxLAHtA',
    studySheet: {
      overview: "Hip roofs slope downward to the walls on all four sides of a building. Framing a hip roof requires complex rafter calculations to join intersecting slopes at exact angles.",
      keyConcepts: "A hip roof frame consists of: a central ridge board, common rafters (run perpendicular from plates to ridge), hip rafters (run diagonally from corners to ridge), and jack rafters (short rafters connecting plates to hip rafters). Hip rafters run at a 45-degree angle to the walls.",
      codesSafety: "Hip rafters must be cut at a compound angle to seat flat against the ridge and plates. Modeling hip roofs teaches structural carpentry physics, load distribution, and compound bevel cutting calculations.",
      guidelines: "Draw a 10\" x 10\" square wall plate layout. Cut a 4\" central ridge board from foam board. Cut two diagonal hip rafters and four jack rafters. Assemble the rafters to form a hip roof corner section, securing joints with pins and glue."
    },
    q1: "What is the structural difference between a common rafter and a hip rafter in roof framing?",
    p1: "common rafter vs hip rafter structural differences framing",
    a1: "Common rafters run perpendicular from plates to ridge; hip rafters run diagonally from wall corners to the ridge board.",
    q2: "Why do hip rafters run at a 45-degree angle relative to the exterior building wall lines?",
    p2: "hip rafter angle corner connection roof framing",
    a2: "Because they span diagonally from the 90-degree corner joints of the wall plates up to the perpendicular ridge board.",
    q3: "What is a jack rafter in roof construction? Where does it connect?",
    p3: "jack rafter definition roof framing connection points",
    a3: "A shortened rafter that spans from the wall plate to a hip rafter (hip jack) or from a valley rafter to the ridge (valley jack).",
    steps: [
      "Draw a 10\" x 10\" square wall frame boundary on your layout board.",
      "Cut a 4\" long horizontal ridge board and two 7.5\" diagonal hip rafters from foam board.",
      "Set the ridge board horizontally above the center line.",
      "Glue the hip rafters diagonally from the corners to the ridge. Cut and install 2 short jack rafters."
    ],
    signoff: ["Hip roof components cut to size", "Ridge board positioned horizontally", "Diagonal hip rafters glued corner-to-ridge", "Jack rafters installed flush"]
  },
  // WO 76
  {
    num: 76, station: 'precision', title: 'Thread Pitch Gauges & Bolt Grade Identification',
    youtubeId: '',
    studySheet: {
      overview: "Threaded fasteners must match their threaded holes precisely to hold joints secure. Matching thread sizes requires checking the diameter, pitch, and grade strength of bolts.",
      keyConcepts: "Thread pitch is the distance between adjacent thread peaks. Standard Unified National threads are measured in Threads Per Inch (TPI) as either coarse (UNC) or fine (UNF). Metric threads measure distance in millimeters. Bolt strength is marked by lines on the bolt head.",
      codesSafety: "SAE grades determine bolt strength limits. Grade 2 is mild steel (no lines on head); Grade 5 is medium carbon steel (3 lines); Grade 8 is alloy steel (6 lines, highest strength). Substituting a low-grade bolt in a high-stress joint (like engine suspension) will cause it to snap under shear loads.",
      guidelines: "Select three bolts from the precision tool kit. Hold a thread pitch gauge against the bolt threads until the gauge teeth mesh perfectly with the threads. Read the pitch value stamped on the gauge blade. Check the head lines to decode the grade strength."
    },
    q1: "How do you calculate the thread pitch of a metric bolt compared to a standard SAE bolt?",
    p1: "metric vs standard SAE thread pitch calculation differences",
    a1: "SAE measures TPI (threads per inch); metric measures distance in mm between thread peaks.",
    q2: "How many radial lines are stamped on the head of an SAE Grade 8 high-strength bolt?",
    p2: "SAE Grade 8 bolt head lines markings strength",
    a2: "6 radial lines (Grade 5 has 3 lines; Grade 2 has 0 lines).",
    q3: "Why is using an SAE Grade 2 bolt in a structural suspension connection a severe safety hazard?",
    p3: "danger of using grade 2 bolt in suspension automotive",
    a3: "Grade 2 is mild steel with low tensile strength; it will stretch or shear off under vehicle suspension loads.",
    steps: [
      "Gather three different bolts (various sizes/marks) from the tool kit.",
      "Match the thread pitch gauge blades to the bolt threads until they fit flush with no gaps. Record the TPI/pitch.",
      "Use a dial caliper to measure the outside diameter (OD) of the bolt threads. Record the diameter.",
      "Inspect the bolt head markings. Decode and record the SAE strength grade for each bolt."
    ],
    signoff: ["3 test bolts gathered", "Thread pitch gauge meshed correctly", "Bolt diameters measured to 0.001\"", "Bolt strength grades decoded correctly"]
  },
  // WO 77
  {
    num: 77, station: 'electrical', title: 'Receptacle Outlet Tester & GFI Tripping Tests',
    youtubeId: '6JpJv1AK8kg',
    studySheet: {
      overview: "Receptacle testers are diagnostic plug-in tools used to quickly verify that wall outlets are wired correctly. They indicate wiring errors using three colored indicator lamps.",
      keyConcepts: "A standard tester checks the continuity and wiring orientation of the hot, neutral, and ground contacts. Diagnostic readouts include: Correct wiring, Open Ground (no ground path), Open Neutral (no neutral path), Open Hot (no power), Hot/Ground Reversed, and Hot/Neutral Reversed.",
      codesSafety: "Outlets showing wiring errors are severe shock and fire hazards. An open ground stops GFCI devices from working correctly. Advanced testers include a GFCI trip button that leaks 6mA of current to ground to verify the GFCI physically trips.",
      guidelines: "Configure 3 mock wiring configurations on the plywood board. Plug the tester into each outlet. Read the indicator light pattern, decode the fault using the printed label on the tester body, and document the corrective wiring steps."
    },
    q1: "What wiring error is indicated on a receptacle tester if only the center amber lamp illuminates?",
    p1: "receptacle tester center light only error open neutral ground",
    a1: "Open Ground (no ground wire connection is active at the outlet).",
    q2: "What does a 'Hot / Neutral Reversed' reading on an outlet tester suggest? What needs to be corrected?",
    p2: "hot neutral reversed tester diagnostic corrections",
    a2: "The hot wire is connected to the silver terminal screw, and the neutral wire is connected to the brass screw. Swap them.",
    q3: "How does a plug-in GFCI tester verify that a GFCI outlet is working correctly?",
    p3: "how GFCI tester button works leak current ground",
    a3: "It simulates a ground fault by leaking a small current (6-8mA) to ground, checking if the GFCI detects it and trips.",
    steps: [
      "Confirm that your plywood wiring board is connected to a safe power supply.",
      "Plug the receptacle tester into the standard duplex outlet. Record the light indicators.",
      "The facilitator will configure a wiring fault (e.g. swapping hot and neutral on a secondary outlet).",
      "Plug the tester into the faulted outlet. Read the code on the body label and document the fault."
    ],
    signoff: ["Duplex outlet tested static", "Receptacle light code recorded", "Wiring fault diagnosed correctly", "GFCI trip test button verified"]
  },
  // WO 78
  {
    num: 78, station: 'plumbing', title: 'Dry-Fitting a Washing Machine Standpipe & Trap',
    youtubeId: 'cPeUJt_Imz8',
    studySheet: {
      overview: "Washing machine standpipes receive high-volume waste water discharged from washing machine drain pumps. Sizing and venting the standpipe correctly prevents waste water overflows.",
      keyConcepts: "A standpipe drainage assembly consists of: a vertical standpipe tube, a P-trap, and a sanitary tee connection to the main waste line. The vertical tube must be long enough to contain the initial surge of pumped water without backing up.",
      codesSafety: "Uniform Plumbing Code (UPC) requires the standpipe height to be between 18 inches (minimum) and 30 inches (maximum) above the trap seal. The standpipe must connect to an active vent downstream to prevent siphoning of the P-trap water barrier.",
      guidelines: "Mount brackets on your pegboard. Dry-fit a vertical standpipe tube to the inlet of a P-trap. Connect the P-trap outlet to a horizontal sanitary tee branch. Verify all pipe heights and horizontal slope (1/4\" per foot)."
    },
    q1: "Under building codes, what are the minimum and maximum height limits for a washing machine standpipe tube?",
    p1: "washing machine standpipe minimum maximum height UPC code",
    a1: "Minimum height: 18 inches. Maximum height: 30 inches above the trap weir.",
    q2: "Why does a washing machine drain require a standpipe instead of hooking directly to a closed drain line?",
    p2: "why washing machine needs air gap standpipe backup sewer",
    a2: "An open standpipe provides an air gap to prevent dirty wastewater from being siphoned back into the washing machine.",
    q3: "What plumbing code slope rate is standard for horizontal drainage pipes running from a sanitary tee?",
    p3: "standard drainage pipe slope drop per foot code",
    a3: "1/4 inch of vertical drop per horizontal foot (2% slope).",
    steps: [
      "Gather standpipe tubes, a U-bend trap, and a sanitary tee from the plumbing small parts kit.",
      "Establish mounting points on the workstation pegboard to secure the pipes vertically.",
      "Fit the 18\" standpipe tube to the inlet of the P-trap U-bend.",
      "Connect the P-trap outlet to the sanitary tee branch. Check heights with a tape measure."
    ],
    signoff: ["Standpipe components gathered", "Pegboard mounts secured", "18\" standpipe height verified", "Drain tee sloped downward correctly"]
  },
  // WO 79
  {
    num: 79, station: 'hvac', title: 'Airflow Static Pressure Drop Calculation',
    youtubeId: 'DAiZnEel7cI',
    studySheet: {
      overview: "Duct static pressure is the resistance to airflow within the ducts. If resistance is too high, airflow volume drops. Technicians measure pressure drops across filters and coils to assess duct health.",
      keyConcepts: "Static pressure is measured in Inches of Water Column (in. w.c.) using a digital manometer. Total External Static Pressure (TESP) is the sum of the supply duct static pressure and return duct static pressure. Excessive TESP indicates duct restrictions.",
      codesSafety: "Blower motors are rated for a maximum static pressure (typically 0.50 in. w.c. in residential units). Operating above this limit reduces airflow, raises motor current draw, and can burn out the motor windings.",
      guidelines: "Given static pressure measurements from a system: Return static = -0.20 in. w.c. (vacuum), Supply static = +0.15 in. w.c. Calculate TESP = |Return| + |Supply| = 0.20 + 0.15 = 0.35 in. w.c. Compare to the motor limit."
    },
    q1: "What unit of measurement is standard in the HVAC trade for duct static pressure?",
    p1: "unit of measurement static pressure HVAC ducts water column",
    a1: "Inches of Water Column (in. w.c. or iwc).",
    q2: "How do you calculate the Total External Static Pressure (TESP) of a residential air handler blower?",
    p2: "how to calculate TESP total external static pressure hvac",
    a2: "TESP = Absolute value of Return Static Pressure + Absolute value of Supply Static Pressure.",
    q3: "If a furnace blower motor has a maximum rating of 0.50 in. w.c., what does a measured TESP of 0.72 in. w.c. diagnose?",
    p3: "high static pressure TESP 0.72 blower motor damage",
    a3: "Severe restriction in the system (e.g. dirty filter, closed dampers, or undersized ducts), risking motor failure.",
    steps: [
      "Review the definitions of static pressure and Inches of Water Column.",
      "Given return static pressure of -0.22 in. w.c. and supply static of +0.18 in. w.c., calculate TESP.",
      "Given a pressure drop of 0.15 in. w.c. across a dirty filter, calculate the drop percentage of a 0.50 in. w.c. limit.",
      "Document the typical causes of excessive return duct static pressure (e.g., undersized return grilles)."
    ],
    signoff: ["Pressure units reviewed", "TESP calculated correctly", "Filter drop percentage calculated", "High return static causes documented"]
  },
  // WO 80
  {
    num: 80, station: 'automotive', title: 'Engine Vacuum Leak Diagnostics & Hoses Audit',
    youtubeId: '',
    studySheet: {
      overview: "Internal combustion engines generate vacuum pressure inside the intake manifold as pistons travel down on intake strokes. This vacuum pulls the fuel/air charge into the cylinders and powers accessories.",
      keyConcepts: "Engine manifold vacuum is measured in Inches of Mercury (in. Hg) using a vacuum gauge. Rubber vacuum lines route this suction to sensors (MAP sensor), fuel regulators, and brake boosters. Cracks or leaks in these lines leak air in, leaning out the fuel mixture.",
      codesSafety: "Vacuum leaks cause high idle speeds, engine hesitation, and DTC cylinder lean codes (e.g., P0171/P0174). Vacuum audits check the rubber hose paths for dry rot, split ends, or loose fitting clamps.",
      guidelines: "Locate the vehicle engine compartment. Identify the intake manifold vacuum ports. Trace the rubber vacuum lines leading to the brake booster and purge valves. Check for split fittings, and sketch the vacuum path."
    },
    q1: "What unit of measurement is standard for engine manifold vacuum pressure?",
    p1: "engine vacuum pressure unit measurement inches mercury",
    a1: "Inches of Mercury (in. Hg).",
    q2: "What diagnostic trouble codes (DTCs) are typically triggered when an engine vacuum leak is present?",
    p2: "engine vacuum leak DTC codes lean P0171 P0174",
    a2: "P0171 and P0174 (System Too Lean Bank 1 & 2), caused by unmetered air entering the engine.",
    q3: "Why do vacuum line leaks cause engine idle speeds to fluctuate or run rough?",
    p3: "why vacuum leaks cause rough engine idle fuel mixture lean",
    a3: "Leaks allow extra air to enter the cylinders, throwing off the fuel-air ratio and causing lean misfires.",
    steps: [
      "Open the vehicle hood. Locate the upper intake manifold cover.",
      "Identify at least 3 separate thin rubber vacuum hoses routing off the intake manifold port tree.",
      "Trace each vacuum line to its destination sensor or accessory. Check the rubber ends for cracks.",
      "Sketch the manifold vacuum line routing on paper, marking the locations of all ports."
    ],
    signoff: ["Intake manifold located", "3 vacuum lines identified", "Rubber hose ends checked for dry rot", "Vacuum routing path sketched"]
  },
  // -------------------------------------------------------------
  // STATION I: DIGITAL LITERACY (WO 81 TO 90) [NEW]
  // -------------------------------------------------------------
  {
    num: 81, station: 'digitallit', title: 'Creating a Professional Cover Letter (Google Docs)',
    youtubeId: '',
    studySheet: {
      overview: "Cover letters are formal business documents introducing job candidates to potential employers. They must use standard font scaling, line spacing, margins, and professional signatures.",
      keyConcepts: "Key formatting properties in Google Docs include: font selection (standard choices like Arial or Times New Roman, 11-12pt size), line spacing (1.15 or single space for letters), alignment (left-aligned paragraphs), margins (1-inch standard borders), and page layout. The document structure requires: contact headers, date, employer information, salutation, body paragraphs, and professional closing signature blocks.",
      codesSafety: "Documents representing you to employers must be free of spelling and grammar errors. Google Docs features built-in spelling, grammar, and auto-correct tools. Exporting your completed Docs to PDF format (Portable Document Format) is the trade standard; it freezes formatting so the document renders identically on any device or screen.",
      guidelines: "Open Google Docs on your Chromebook. Start a new blank document. Type a professional cover letter following the template: contact header, date, formal employer address, salutation, 3-paragraph body (introducing yourself, detailing trade qualifications, and requesting an interview), and formal closing sign-off. Run the spellchecker, and download the document as a PDF."
    },
    q1: "Why is exporting a cover letter or resume to PDF format preferred over sharing a raw Google Doc or Word file?",
    p1: "why export resume PDF formatting alignment compatibility",
    a1: "PDF freezes the formatting, ensuring fonts, margins, and page layouts render identically on any computer or screen.",
    q2: "What is the standard margin width (in inches) for a professional business letter layout?",
    p2: "standard margin width professional letter inches",
    a2: "1 inch (1.0\") on all four sides.",
    q3: "Name three standard, professional fonts recommended for business correspondence and resumes.",
    p3: "best professional fonts resumes business letters",
    a3: "Arial, Times New Roman, and Calibri.",
    steps: [
      "Open your Google Drive on your Chromebook. Click 'New' -> 'Google Docs' to create a blank page.",
      "Enter your name, professional email, and phone number as a clean header at the top.",
      "Draft a 3-paragraph letter: (1) Applying for a Trades Apprentice role, (2) Detailing your safety/tool certifications (e.g. OSHA 10), and (3) Formally requesting an interview.",
      "Click 'File' -> 'Download' -> 'PDF Document (.pdf)' and save it to your local files."
    ],
    signoff: ["Google Docs blank page opened", "Header and date typed", "3 body paragraphs drafted spelling-free", "Document downloaded as PDF file"]
  },
  {
    num: 82, station: 'digitallit', title: 'Tool Sourcing Expense spreadsheet (Google Sheets)',
    youtubeId: '',
    studySheet: {
      overview: "Spreadsheets organize, calculate, and format numerical data. Sourcing lists and material budgets are managed in Google Sheets to automate math calculations and prevent errors.",
      keyConcepts: "Spreadsheets use a grid of columns (labeled A, B, C...) and rows (labeled 1, 2, 3...). The intersection of a column and row is a cell (e.g. B4). Formulas are mathematical instructions that start with an equals sign (=). The SUM function (`=SUM(range)`) adds a range of cells automatically.",
      codesSafety: "Currency values must be formatted as currency ($0.00) rather than plain numbers. Automatic formulas recalculate instantly if unit prices change, allowing contractors to adjust budgets dynamically without manually re-adding columns of figures.",
      guidelines: "Open Google Sheets. In Row 1, create headers: Item Name, Required Qty, Unit Cost, and Line Total. Enter 5 tools from your procurement list. Use the formula `=B2*C2` to calculate the Line Total. Use the `=SUM(D2:D6)` formula at the bottom to calculate the total investment."
    },
    q1: "What character must always be typed first to start any mathematical formula in a spreadsheet cell?",
    p1: "character to start formula Excel Google Sheets",
    a1: "The equals sign (=).",
    q2: "What is the purpose of the '=SUM(D2:D6)' formula? What cells does it calculate?",
    p2: "SUM formula function spreadsheet cell range explanation",
    a2: "It adds up the numerical values in all cells from D2 through D6, outputting the total sum in the target cell.",
    q3: "How do you auto-fit a column width in Google Sheets if the text in cells is cut off or truncated?",
    p3: "how to auto fit column width Google Sheets double click border",
    a3: "Double-click the line divider border between the column letters at the top of the grid.",
    steps: [
      "Open Google Sheets and create a blank sheet. Set column headers: Item, Qty, Cost, Line Total.",
      "Enter 5 tools from your Q2 tool list (e.g. Dial Caliper, Wrench, Thermometer, Multimeter, Hacksaw).",
      "In the first Line Total cell (D2), enter: `=B2*C2`. Drag the blue corner down to copy the formula for all items.",
      "At the bottom of column D, write the formula: `=SUM(D2:D6)` to calculate the total budget."
    ],
    signoff: ["Blank spreadsheet opened", "Column headers entered", "Formula =B2*C2 entered and copied", "Formula =SUM() calculated total budget"]
  },
  {
    num: 83, station: 'digitallit', title: 'Building a Professional Service Invoice (Google Sheets)',
    youtubeId: '',
    studySheet: {
      overview: "Invoices are bills sent to clients to collect payments for services rendered. Building automated invoice templates in Google Sheets prevents errors in hours, rates, and tax calculations.",
      keyConcepts: "Professional invoices contain: business contact info, unique invoice number, client details, itemized billing lines (description, hours, hourly rate, line total), subtotal, sales tax or service tax percentages, and grand total. Formulas link rates, taxes, and subtotals.",
      codesSafety: "Service rates must be calculated consistently. Sales tax calculations multiply the subtotal by a decimal percentage (e.g., `=Subtotal * 0.08`). Cells containing formulas must be locked or highlighted to prevent accidental overwrites.",
      guidelines: "Create a clean invoice layout in Google Sheets. Create item lines: 4 hours of electrical labor at $45/hour, and 1 duplex receptacle part at $15. Calculate totals using multiplication formulas. Add a subtotal, multiply by 8% tax, and sum the grand total."
    },
    q1: "If an invoice subtotal is in cell D15, what formula calculates an 8% sales tax in cell D16?",
    p1: "calculate 8 percent sales tax formula spreadsheet cell D15",
    a1: "`=D15*0.08`.",
    q2: "What is an invoice number? Why is it critical to use unique numbers for client billing?",
    p2: "purpose of invoice number billing records tracking audit",
    a2: "A unique identifier used for tracking payments, accounting audits, and matching records.",
    q3: "How do you format a number as a currency value ($) in Google Sheets?",
    p3: "format currency button Google Sheets toolbar dollar sign",
    a3: "Select the cell(s) and click the dollar sign button ($) on the top toolbar.",
    steps: [
      "Open Google Sheets. Type 'INVOICE' at the top, and add mock business contact details.",
      "Enter item rows: 'Electrical Repair Labor', 4 Qty, $45.00 Cost. 'Grounded Outlet Part', 1 Qty, $15.00 Cost.",
      "Use formulas to calculate row totals: `=Qty * Cost`. Sum the row totals in cell D12 for the Subtotal: `=SUM(D10:D11)9`.",
      "Enter the tax formula: `=D12*0.08` in D13. Calculate the Grand Total in D14: `=D12+D13`. Format as currency."
    ],
    signoff: ["Invoice headers typed", "Labor and parts rows entered", "Subtotal formula verified", "Sales tax and Grand Total formulas calculated"]
  },
  {
    num: 84, station: 'digitallit', title: 'Organizing a Safety Sweep Task List (Google Sheets)',
    youtubeId: '',
    studySheet: {
      overview: "Project tracking requires managing task assignments and statuses. Google Sheets utilizes data validation dropdown menus to standardize inputs, preventing spelling and status formatting errors.",
      keyConcepts: "Data validation limits what can be typed into a cell. Dropdown menus are created by setting validation rules (e.g., matching a list of values like 'Not Started, In Progress, Completed'). Color-coding tasks by status improves tracking.",
      codesSafety: "Unorganized tasks lead to missed safety hazards. Status dropdown lists keep team updates uniform, allowing managers to filter, sort, and identify delayed tasks quickly during meetings.",
      guidelines: "Create a spreadsheet tracking a facility safety sweep. Headers: Task, Assigned To, Status, Priority, Date. Use Data Validation to insert dropdown selections in the Status column. Add 4 task rows and update their progress."
    },
    q1: "What is data validation in spreadsheets? What benefit does it provide for team trackers?",
    p1: "data validation spreadsheet benefit dropdown list standard",
    a1: "It restricts inputs to a specific set of rules or list of values, preventing typos and standardizing inputs.",
    q2: "What are three common task statuses used in project management tracking?",
    p2: "standard project task statuses list PM",
    a2: "Not Started, In Progress, and Completed.",
    q3: "How do you open the data validation menu options in Google Sheets?",
    p3: "how to add data validation dropdown list Google Sheets menu",
    a3: "Select cell(s), click 'Data' in the top menu, and select 'Data validation' (or 'Add rule').",
    steps: [
      "Create a new Google Sheet. Set column headers: Task, Assigned To, Status, Priority, Date.",
      "Enter 4 safety sweep tasks (e.g. Check Extinguisher Tags, Clear Electrical Panel, Sweep Aisle A, Test Exit Lights).",
      "Select the cells under the Status column. Open 'Data' -> 'Data validation' -> 'Add rule'.",
      "Select 'Dropdown' criteria, and enter options: 'Not Started', 'In Progress', and 'Completed'. Test the dropdowns."
    ],
    signoff: ["Task list sheet created", "4 safety tasks entered", "Data validation dropdown rule applied", "Dropdown selections tested successfully"]
  },
  {
    num: 85, station: 'digitallit', title: 'Professional Biography Drafting (Google Docs)',
    youtubeId: '',
    studySheet: {
      overview: "A professional biography is a short paragraph summary of a tradesperson's background, training, and career achievements. It is used on contractor websites, bid proposals, and resumes.",
      keyConcepts: "Key styling principles in Google Docs include: font pairings, line spacing (1.15 or 1.5 standard), paragraph indents, and bulleted lists. Bulleted lists organize credentials, licenses, and tool proficiencies cleanly.",
      codesSafety: "A bio must remain clear, concise, and professional. Certification listings (OSHA 10, CPR, local trade certs) must use clear bolding to stand out. Regular formatting updates keep documents clean and readable.",
      guidelines: "Open Google Docs and create a blank page. Write a 3-paragraph professional bio: Paragraph 1 introduces your name, trade domain, and years of experience. Paragraph 2 highlights your training, tools, and certifications. Paragraph 3 outlines your career goals."
    },
    q1: "What is a professional biography? Where is it typically used in commercial trades?",
    p1: "professional bio trades contract proposal website",
    a1: "A short summary of a worker's experience and skills; used on trade contractor bid proposals and company websites.",
    q2: "Why are bulleted lists preferred over long paragraphs for listing trade certifications on a document?",
    p2: "why use bullet lists document readability scans",
    a2: "Bullet points are easier for recruiters and clients to scan quickly.",
    q3: "How do you adjust the line spacing of a document in Google Docs?",
    p3: "line spacing adjust menu button Google Docs toolbar",
    a3: "Select the text, click the Line & paragraph spacing button (double arrow with horizontal lines) on the toolbar, and select a spacing value.",
    steps: [
      "Create a new Google Doc. Set title: 'Professional Biography - [Your Name]'.",
      "Write Paragraph 1: Introduce yourself as a Trades Trainee specializing in your chosen rotation domain.",
      "Write Paragraph 2: Detail your safety credentials (OSHA basics, LOTO drills). Use a bulleted list to format these entries.",
      "Write Paragraph 3: State your immediate career goals. Adjust line spacing to 1.15, and check spelling."
    ],
    signoff: ["Google Doc created and titled", "3 paragraphs written", "Certification list formatted with bullets", "Line spacing set to 1.15 and spellchecked"]
  },
  {
    num: 86, station: 'digitallit', title: 'Safety Sign Flyer Design (Google Docs)',
    youtubeId: '',
    studySheet: {
      overview: "Workplace warning signs and flyers must communicate critical safety hazards clearly. Designing signs in Google Docs teaches formatting layout, table structures, and margin alignments.",
      keyConcepts: "Warning signs must stand out. Key elements include: bold titles, contrasting color borders, centered text, and tables to organize columns of safety steps. Text sizes must scale so signs are readable from a distance.",
      codesSafety: "OSHA Standard 1910.145 governs accident prevention signs. Danger signs must use red, black, and white for immediate hazards. Warning signs use orange and black. Caution signs use yellow and black.",
      guidelines: "Open Google Docs. Change the page orientation to Landscape if needed. Design a CAUTION sign for a wet floor or hazard zone: insert a 1x1 table to act as a thick outer border, type CAUTION in large bold yellow-on-black text, and center warning steps."
    },
    q1: "According to OSHA standards, what color combinations are required for Danger, Warning, and Caution signs?",
    p1: "OSHA safety sign color codes danger warning caution",
    a1: "Danger: Red, black, and white. Warning: Orange and black. Caution: Yellow and black.",
    q2: "What is the benefit of inserting a 1x1 table inside a Google Doc when designing a flyer?",
    p2: "purpose of 1x1 table layout flyer border cell",
    a2: "It serves as a clean, adjustable border framing the outer edges of the sign.",
    q3: "How do you change the background color of a table cell in Google Docs?",
    p3: "how to change table cell background color Google Docs",
    a3: "Right-click in the cell, select 'Table properties' (or click the paint bucket icon on the toolbar), and select a cell background color.",
    steps: [
      "Create a new Google Doc. Open 'File' -> 'Page setup' and set orientation to Landscape.",
      "Go to 'Insert' -> 'Table' -> select a 1x1 grid size. Drag the table borders close to the page margins.",
      "Right-click inside the cell, open 'Table properties', and set the cell background to Yellow.",
      "Type 'CAUTION' in 60pt bold centered text. Underneath, add: 'WET FLOOR - WALK SLOWLY' in 24pt bold black text."
    ],
    signoff: ["Landscape Google Doc created", "1x1 table inserted as border", "Cell background set to Yellow", "Large Caution warning text centered and styled"]
  },
  {
    num: 87, station: 'digitallit', title: 'Material Order Purchase Order (Google Sheets)',
    youtubeId: '',
    studySheet: {
      overview: "Purchase Orders (POs) are formal documents sent from buyers to sellers authorizing material shipments. They track ordered items, unit prices, taxes, and total costs.",
      keyConcepts: "Key formatting tools in Google Sheets include: cell merging (combining cells across columns), borders, and numeric formats. PO layouts require an itemized grid, subtotal, sales tax rate, and grand total calculated using formulas.",
      codesSafety: "Incorrect PO totals lead to shipping delays, billing disputes, and cost overruns. Automating calculations using multiplication and sum formulas ensures accuracy. Cells must display currency formatting.",
      guidelines: "Open Google Sheets. Merge cells A1 to D1 and type 'PURCHASE ORDER' in bold. Enter item rows: 10 foam boards at $2.00 each, and 1 T-square ruler at $6.00. Write formulas to calculate line totals, 8% sales tax, and the grand total."
    },
    q1: "What does merging cells accomplish in a spreadsheet layout? When is it used?",
    p1: "merging cells spreadsheet layout headers titles",
    a1: "It combines multiple adjacent cells into one large cell, commonly used to center titles across columns.",
    q2: "If an item quantity is in B10 and the unit price is in C10, what formula calculates the line total in D10?",
    p2: "line total formula quantity unit price cells B10 C10",
    a1: "`=B10*C10`.",
    q3: "Why should you avoid typing raw numbers like '$20.00' directly into formula cells in spreadsheets?",
    p3: "why use formulas instead of typing raw numbers spreadsheet",
    a3: "Raw numbers do not auto-calculate; using cell formulas allows totals to update automatically if quantities change.",
    steps: [
      "Create a new Google Sheet. Select cells A1 to D1 and click the 'Merge cells' button. Type 'PURCHASE ORDER'.",
      "Enter column headers: Description, Qty, Unit Price, Line Total.",
      "Enter items: 'Foam Board Sheets', 10 Qty, $2.00 Price. '12\" Metal T-Square', 1 Qty, $6.00 Price.",
      "Write the line formulas, calculate the Subtotal, add an 8% sales tax, and sum the Grand Total. Format all totals as currency."
    ],
    signoff: ["Header cells merged and styled", "Purchase order item rows entered", "Line formulas and Subtotal calculated", "Sales tax and Grand Total formulas verified"]
  },
  {
    num: 88, station: 'digitallit', title: 'Professional Email Drafting (Google Docs)',
    youtubeId: '',
    studySheet: {
      overview: "Email is the primary channel for business communications. Professional emails require formal structures, clear subject lines, greetings, concise body text, and professional signature blocks.",
      keyConcepts: "Key email components include: Subject line (must be concise and descriptive), Salutation (formal greeting), Body text (paragraphs separated by single blank lines), Closing sign-off, and Signature block (name, title, contact details).",
      codesSafety: "Emails represent your professional reputation. Slang, typing in all caps, or omitting subject lines is unprofessional. Reading and editing email drafts in Google Docs before copying them to mail clients prevents accidental sends.",
      guidelines: "Open Google Docs and create a blank page. Write a professional email draft: include 'SUBJECT:' followed by a clear topic, a formal salutation to a hiring manager, a 2-paragraph body requesting an interview follow-up, and a professional closing signature."
    },
    q1: "What are the five key structural components of a professional business email?",
    p1: "structural parts professional business email list",
    a1: "1. Subject line, 2. Salutation (greeting), 3. Body paragraphs, 4. Professional closing, and 5. Signature block.",
    q2: "Why is a subject line like 'Job Application: John Doe - Trades Apprentice' preferred over 'hi' or leaving it blank?",
    p2: "importance of email subject line professional recruitment",
    a2: "It tells the recipient exactly what the email contains, preventing it from being ignored or marked as spam.",
    q3: "What is the purpose of draft reviewing an email in a document editor before pasting it into a mail client?",
    p3: "why draft email in document editor before sending accident",
    a3: "It allows you to spellcheck and proofread without the risk of accidentally hitting the send button mid-sentence.",
    steps: [
      "Open a new Google Doc. Set title: 'Email Draft - Job Follow-up'.",
      "Type a Subject Line: 'Subject: Application Follow-up - [Your Name] - Apprentice'.",
      "Write a formal greeting (e.g. 'Dear Mr. Smith,') followed by a blank line.",
      "Write a 2-paragraph body thanking them for their time and expressing interest in the role. Add a closing and signature."
    ],
    signoff: ["Google Doc created", "Professional subject line typed", "Formal greeting and closing signature drafted", "Email text proofread and spellchecked"]
  },
  {
    num: 89, station: 'digitallit', title: 'Weekly Work Timesheet Tracker (Google Sheets)',
    youtubeId: '',
    studySheet: {
      overview: "Timesheets track worker hours to ensure accurate payroll. Google Sheets automates timesheet tracking by calculating elapsed time and summing weekly totals.",
      keyConcepts: "Time calculation subtracts start times from end times. In spreadsheets, time values are entered with AM/PM indicators (e.g., 8:00 AM). The formula to calculate hours worked (excluding a 30-minute unpaid lunch break) is: `=(End Time - Start Time) * 24 - 0.5`.",
      codesSafety: "Incorrect time sheets cause payroll errors. Automating totals using sum formulas ensures accuracy. Time cells must be formatted using custom number formats to display hours as decimal values.",
      guidelines: "Open Google Sheets. Headers: Day, Clock In, Clock Out, Total Hours. Enter a standard week (Monday to Friday, 8:00 AM to 4:30 PM). Write the hour calculation formula, and use the SUM function at the bottom to calculate total weekly hours."
    },
    q1: "Why must you multiply time subtraction by 24 when calculating total hours as a decimal in spreadsheets?",
    p1: "time calculation spreadsheet multiply by 24 hours decimal",
    a1: "Spreadsheets store time as fractions of a 24-hour day; multiplying by 24 converts the fraction into decimal hours.",
    q2: "What does the formula '=(C2-B2)*24 - 0.5' accomplish if B2 is Clock In and C2 is Clock Out?",
    p2: "timesheet formula lunch break subtraction math",
    a2: "It calculates the total hours worked between clock-in and clock-out, then subtracts 0.5 hours (30 minutes) for lunch.",
    q3: "How do you format a cell in Google Sheets to display numeric values with exactly two decimal places?",
    p3: "format decimal places button Google Sheets toolbar",
    a3: "Select the cell and click the 'Decrease decimal places' or 'Increase decimal places' button on the formatting toolbar.",
    steps: [
      "Open Google Sheets and create a blank sheet. Set headers: Day, Clock In, Clock Out, Hours Worked.",
      "Enter rows for Monday to Friday, entering start times as '8:00 AM' and end times as '4:30 PM'.",
      "In the Hours Worked cell (D2), enter: `=(C2-B2)*24-0.5`. Copy the formula down for all 5 days.",
      "Underneath, use `=SUM(D2:D6)` to calculate total weekly hours. Format the totals with 2 decimal places."
    ],
    signoff: ["Timesheet layout created", "Daily times entered with AM/PM", "Hours worked formula calculated", "Weekly sum total verified"]
  },
  {
    num: 90, station: 'digitallit', title: 'Master Tool Inventory Tracker (Google Sheets)',
    youtubeId: '',
    studySheet: {
      overview: "Inventory sheets track stock levels. Google Sheets utilizes conditional formatting to highlight cells automatically when quantities drop below minimum levels, alert managers to reorder items.",
      keyConcepts: "Conditional formatting changes a cell's appearance (fill color, text color) based on rules. An example rule is: 'Format cells if less than 2, fill color light red'. Filters allow users to sort inventory lists alphabetically or numerically.",
      codesSafety: "Out-of-stock tools halt training and construction projects. Setting up conditional formatting alerts ensures that low stock levels are visible, preventing project delays.",
      guidelines: "Open Google Sheets. Headers: Tool Name, Total Stock, Status. Enter the 8 tools from your procurement list. Set conditional formatting on the Stock column to highlight cells in light red if the value is less than 2."
    },
    q1: "What is conditional formatting in spreadsheet applications? What is its primary usage?",
    p1: "conditional formatting spreadsheet definition alert colors",
    a1: "It changes a cell's styling (colors, borders) automatically based on the cell's value or rules, used to highlight alerts.",
    q2: "What conditional formatting rule would highlight an inventory cell red if stock levels drop below 2?",
    p2: "conditional formatting rule less than 2 stock alert red",
    a2: "Rule: 'Format cells if... Less than' with a value of '2', setting fill color to red.",
    q3: "What is the function of sheet filters in Google Sheets? How do they help track inventory?",
    p3: "sheet filters function sorting tracking spreadsheet",
    a3: "Filters allow users to temporarily isolate specific rows or sort items (e.g., sorting lowest stock to the top).",
    steps: [
      "Create a Google Sheet. Set column headers: Tool Name, Total Stock, Unit Cost, Status.",
      "Enter the 8 tools from your list, entering mock stock values (e.g. Calipers: 2, Wrenches: 1, Hacksaws: 3, etc.).",
      "Select the Stock column, open 'Format' -> 'Conditional formatting'. Set rule: 'Less than' -> value '2' -> set fill to Red.",
      "Select the header row and click the 'Create a filter' funnel icon on the toolbar to enable column filters."
    ],
    signoff: ["Inventory spreadsheet created", "8 tools and stock counts entered", "Conditional formatting alert rule applied", "Funnel filters enabled on headers"]
  }
];
