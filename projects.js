window.PROJECTS = [
  {
    "id": "bracketbutler",
    "title": "BracketButler",
    "subtitle": "An autonomous waiter, built around a better physical interface.",
    "category": "Robotics",
    "label": "Robotics · Autonomous systems",
    "year": "2026",
    "image": "bracket-3.webp",
    "alt": "BracketButler lifting a loaded serving tray",
    "tags": [
      "Python",
      "OpenCV",
      "ArUco",
      "Visual servoing",
      "Finite-state machines"
    ],
    "intro": "A low-cost BracketBot turned into an autonomous waiter: find a tray, pick it up, navigate to a guest, and respond to a spoken command. Our team earned second place in the Robotics Track at Battle of the Schools.",
    "contribution": "I developed the ArUco localization pipeline using OpenCV’s PnP pose solver and fisheye camera calibration, and architected the visual-servo control loop and finite-state-machine logic for tray pickup and delivery.",
    "approach": "The head camera localizes markers at pickup and delivery points. Wrist cameras check tray alignment before lifting, while a repeatable docking position allows the arms to use a tuned joint pose. The team integrated locally transcribed voice commands over HTTP.",
    "learning": "When individual-object manipulation proved too ambitious for the hackathon timeline, we redesigned the task around a pre-loaded custom tray. A simpler physical interface made the complete autonomous sequence achievable.",
    "outcome": "A successful live demonstration with zero teleoperation. Dynamic mapping and arbitrary-object grasping remain future directions.",
    "gallery": [
      {
        "src": "bracket-2.webp",
        "caption": "BracketButler — project documentation."
      },
      {
        "src": "bracket-1.webp",
        "caption": "BracketButler — project documentation."
      },
      {
        "src": "bracket-0.webp",
        "caption": "BracketButler — project documentation."
      }
    ],
    "links": [
      [
        "Project story",
        "https://devpost.com/software/bracketbutler"
      ],
      [
        "Source code",
        "https://github.com/SK3720/BracketBot-Project"
      ]
    ]
  },
  {
    "id": "assistive",
    "title": "Assistive manipulation",
    "subtitle": "From a spoken request to a helping hand.",
    "category": "Robotics",
    "label": "Research · Embodied AI",
    "year": "2026",
    "image": "assistive-0.webp",
    "alt": "Five stages of a wheelchair-mounted robotic arm delivering a cup",
    "tags": [
      "SmolVLA",
      "Vision-language-action",
      "SO-101",
      "System integration"
    ],
    "intro": "At NYU Shanghai, I worked on a wheelchair-mounted robotic arm that translates task-level requests into camera-guided manipulation. The prototype explores how everyday object retrieval can become more accessible.",
    "contribution": "I architected the VLA pipeline, fine-tuned and deployed the SmolVLA action-generation module, and created architecture diagrams and co-authored the research poster manuscript.",
    "approach": "Speech is transcribed and routed into a structured task packet. A validation layer checks the request before passing it to the action module and arm controller. The demonstrated workflow grasps a cup and brings it near the user’s mouth.",
    "learning": "Robustness depends on the whole system: camera viewpoints, lighting, backgrounds, task validation, and the physical workspace. Familiar-scene success is a starting point for further evaluation.",
    "outcome": "A tray-centered drinking-assistance prototype, with ongoing questions around generalization and safe interaction.",
    "gallery": [
      {
        "src": "assistive-architecture.webp",
        "caption": "From speech to action: the assistive manipulation architecture.",
        "wide": true
      }
    ],
    "links": []
  },
  {
    "id": "sena",
    "title": "SENA",
    "subtitle": "Local sensing for communities facing wildfire smoke.",
    "category": "Systems",
    "label": "Embedded systems · Human-centered design",
    "year": "Design project",
    "image": "sena-0.webp",
    "alt": "SENA enclosure, sensor hardware, and monitoring dashboard",
    "tags": [
      "Raspberry Pi Pico W",
      "MQ-2",
      "BME680",
      "Flask",
      "Prototyping"
    ],
    "intro": "SENA explores localized smoke monitoring for Canadian wildland–urban interface communities. Our team built a single-node prototype that connects environmental sensing to a dashboard and tiered alerts.",
    "contribution": "A collaborative engineering design project bringing together structural, electrical, and software subsystems. The prototype combines a printed enclosure, sensor electronics, wireless telemetry, and a monitoring interface.",
    "approach": "An MQ-2 sensor and BME680 feed measurements through a Raspberry Pi Pico W to a Flask backend. Risk logic uses thresholds, rates of change, and a chemical gate to limit weather-driven false alarms.",
    "learning": "The build exposed practical trade-offs between airflow and protection, enclosure tolerances and component access, and early warning sensitivity and false alarms.",
    "outcome": "The report records 12/15 correct risk classifications and approximately 44-second transmission latency in prototype testing. The larger proposed network was not the tested prototype.",
    "gallery": [
      {
        "src": "sena-poster.webp",
        "caption": "SENA concept: sensing network and enclosure design.",
        "wide": true
      }
    ],
    "links": []
  },
  {
    "id": "aegis",
    "title": "AEGIS",
    "subtitle": "Seeing cyclists. Giving drivers time to react.",
    "category": "Systems",
    "label": "Computer vision · Road safety",
    "year": "2025",
    "image": "aegis-0.webp",
    "alt": "AEGIS intersection concept with a camera and cyclist warning sign",
    "tags": [
      "Computer vision",
      "YOLO",
      "Arduino",
      "Kinematic modeling"
    ],
    "intro": "A cyclist-detection and visual-alert concept addressing right-hook collisions at urban intersections. The work connects computer vision with human factors and stakeholder-informed engineering requirements.",
    "contribution": "I worked on the cyclist-detection design and its technical communication. In the requirements phase, I developed theoretical kinematic models for detection distance and reaction time, informed by the team’s engagement with cycling advocates.",
    "approach": "The team paired camera-based cyclist detection with a flashing visual warning. The design process considered placement, driver attention, reaction time, and the constraints of shared road infrastructure.",
    "learning": "A technically compelling detector is only one part of a safety system. Placement, warning interpretation, and deployment conditions need their own testing.",
    "outcome": "A demonstrated low-fidelity prototype and a proposal for further development. The complete system was not validated at the proposed intersection placement.",
    "gallery": [
      {
        "src": "aegis-2.webp",
        "caption": "AEGIS — project documentation."
      },
      {
        "src": "aegis-poster.webp",
        "caption": "Cyclist detection and alert-system concept.",
        "wide": true
      },
      {
        "src": "aegis-validation.webp",
        "caption": "Prototype verification, limitations, and next steps.",
        "wide": true
      },
      {
        "src": "aegis-demo-1.gif",
        "caption": "Cyclist-detection demonstration 1 from the AEGIS project.",
        "wide": true
      },
      {
        "src": "aegis-demo-2.gif",
        "caption": "Cyclist-detection demonstration 2 from the AEGIS project.",
        "wide": true
      },
      {
        "src": "aegis-demo-3.gif",
        "caption": "Cyclist-detection demonstration 3 from the AEGIS project.",
        "wide": true
      },
      {
        "src": "aegis-demo-4.gif",
        "caption": "Cyclist-detection demonstration 4 from the AEGIS project.",
        "wide": true
      },
      {
        "src": "aegis-demo-5.gif",
        "caption": "Cyclist-detection demonstration 5 from the AEGIS project.",
        "wide": true
      }
    ],
    "links": [
      [
        "Original case study",
        "https://oscarliangc.wixsite.com/oscarliang/general-clean"
      ]
    ]
  },
  {
    "id": "pinn",
    "title": "Learning the physics",
    "subtitle": "Comparing neural networks against an oscillating system.",
    "category": "Research",
    "label": "Scientific computing · Machine learning",
    "year": "Course research",
    "image": "pinn-1.webp",
    "alt": "Oscillating training loss in a Fourier Feature physics-informed neural network",
    "tags": [
      "PyTorch",
      "PINNs",
      "Fourier features",
      "SIREN",
      "Numerical analysis"
    ],
    "intro": "A comparative study of Vanilla, Fourier Feature, and SIREN physics-informed neural networks for modeling damped harmonic motion.",
    "contribution": "I co-authored the three-person analysis and worked on implementing and tuning PINN architectures, comparing the effects of loss weights, activation functions, and optimization choices.",
    "approach": "The networks are trained against an ordinary differential equation and initial conditions. We compare mean absolute error, training behavior, and runtime against the analytical solution.",
    "learning": "Low error at one checkpoint does not tell the whole story. Fourier Feature models showed fluctuating error, while SIREN converged early but incurred higher full-run runtime.",
    "outcome": "A documented comparison showing why model selection should account for convergence, stability, and computation as well as final error.",
    "gallery": [
      {
        "src": "pinn-0.webp",
        "caption": "Learning the physics — project documentation."
      },
      {
        "src": "pinn-2.webp",
        "caption": "Learning the physics — project documentation."
      }
    ],
    "links": []
  },
  {
    "id": "roll",
    "title": "Roll & Scroll",
    "subtitle": "Making a familiar tool work a little better.",
    "category": "Design",
    "label": "Mechanical design · Praxis I",
    "year": "2024",
    "image": "roll.webp",
    "alt": "Oscar’s Roll and Scroll team presenting its whiteboard eraser prototype",
    "tags": [
      "Mechanical prototyping",
      "Stakeholder research",
      "Pugh charts",
      "Iterative design"
    ],
    "intro": "A roller-and-gear whiteboard eraser designed to make collaborative work in the Engineering Science Common Room easier.",
    "contribution": "As part of a four-person team, I helped develop the concept through stakeholder observation, design comparison, prototyping, and communication.",
    "approach": "We identified issues with cleaning effort, material wear, and dust, then compared roller, magnetic, and lever-based concepts. Iterations refined the roller’s reach and ease of use.",
    "learning": "Small, everyday inconveniences can lead to worthwhile engineering opportunities when requirements come directly from the people using the tool.",
    "outcome": "A working course prototype, supported by design documentation and testing against force and setup-time criteria.",
    "gallery": [
      {
        "src": "roll-detail.webp",
        "caption": "Roll & Scroll — project documentation."
      },
      {
        "src": "roll-poster.webp",
        "caption": "Design opportunity and roller mechanism.",
        "wide": true
      },
      {
        "src": "roll-testing.webp",
        "caption": "Design development and prototype evaluation.",
        "wide": true
      },
      {
        "src": "roll-workshop.webp",
        "caption": "Roll & Scroll — from the project gallery.",
        "wide": true
      },
      {
        "src": "roll-process.webp",
        "caption": "Developing the whiteboard eraser prototype.",
        "wide": true
      }
    ],
    "links": [
      [
        "Original case study",
        "https://oscarliangc.wixsite.com/oscarliang/general-clean-1"
      ]
    ]
  },
  {
    "id": "bridge",
    "title": "95–96 Bulls bridge",
    "subtitle": "What happens when calculations meet the workshop.",
    "category": "Design",
    "label": "Structural design · CIV102",
    "year": "2024",
    "image": "bridge.webp",
    "alt": "Oscar and teammates holding their red MatBoard bridge",
    "tags": [
      "AutoCAD",
      "Python",
      "Structural analysis",
      "Fabrication"
    ],
    "intro": "A bridge spanning more than 1,250 mm, built from MatBoard and cement glue under strict material constraints.",
    "contribution": "I focused on AutoCAD technical drawings, layout planning, and virtual assembly to communicate the design and support fabrication.",
    "approach": "Our team used T-shaped sections for bending resistance, diaphragms against buckling, and reinforced joints. Hand calculations and Python informed the design before physical assembly.",
    "learning": "Fabrication tolerances, peeling material, and a difficult splice joint changed the outcome. The gap between predicted and measured capacity became the most valuable result.",
    "outcome": "The bridge supported 450 N in testing, compared with a predicted 950 N. The project strengthened my understanding of the relationship between modeling and build quality.",
    "gallery": [
      {
        "src": "bridge-drawing.webp",
        "caption": "95–96 Bulls bridge — project documentation."
      },
      {
        "src": "bridge-poster.webp",
        "caption": "Design concept, cross-section, and structural decisions.",
        "wide": true
      },
      {
        "src": "bridge-analysis.webp",
        "caption": "Structural analysis and design evaluation.",
        "wide": true
      },
      {
        "src": "bridge-test.webp",
        "caption": "Bridge testing — project documentation.",
        "wide": true
      },
      {
        "src": "bridge-process.webp",
        "caption": "From drawings to the physical bridge.",
        "wide": true
      }
    ],
    "links": [
      [
        "Original case study",
        "https://oscarliangc.wixsite.com/oscarliang/general-clean-2"
      ]
    ]
  }
];
