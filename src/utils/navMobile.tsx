const MAIN_NAV = [
  {
      header: 'Services',
      arrow: true
  },
  {
    header: 'Products',
    arrow: false,
  },
  {
    header: 'About Us',
    arrow: false,
  },
  {
    header: 'Blog',
    arrow: false
  }
];
const MENU_MOBILE_DATA = [
  {
      header: 'Cleaning Services',
      items: [
          'Area Rug',
          'Carpet Cleaning',
          'Dryer Vent',
          'Duct & Furnace Cleaning',
          'Junk Removal'
      ],
      hasAllButton: true,
      imageType: false,
      key: 'cleaningServices',
      positionCol: 0,
      arrow: true,
      level:1,
      child: [
        {
          header: 'Cleaning Services11',
          items: [],
          routeUrl:"",
          arrow: false,
          level:2,
        },
        {
          header: 'Cleaning Services2',
          items: [],
          routeUrl:"",
          arrow: false,
          level:2,
        }

      ]
  },
  {
      header: 'Plumbing Services',
      items: [],
      hasAllButton: false,
      imageType: false,
      key: 'plumbingServices',
      positionCol: 0,
      arrow: false,
      level:1,
      child: []
  },
  {
      header: 'Air Quality',
      items: [],
      hasAllButton: false,
      imageType: false,
      key: 'airQuality',
      positionCol: 0,
      arrow: false,
      level:1,
      child: []
  },
  {
      header: 'Heating and Cooling',
      items: [
          'Furnace Services',
          'Air Conditioning Services',
          'Thermostat Installation',
      ],
      hasAllButton: false,
      imageType: false,
      key: 'heatingAndCooling',
      positionCol: 0,
      arrow: false,
      level:1,
      child: []
  },
  {
      header: 'Electrical Services',
      items: [
          'Light and Fans Installation & Repair',
          'Electrical Panel Upgrades',
          'Wiring Installation & Repairs',
          'Smoke & Carbon Monoxide Detectors',
      ],
      hasAllButton: false,
      imageType: false,
      key: 'electricalServices',
      positionCol: 0,
      arrow: false,
      level:1,
      child: []
  },
  {
      header: 'Roofing & Exterior Services',
      items: [
          'Residential Roofing Services',
          'Soffit & Fascia',
          'Eavestroughs & Gutters',
          'Siding Installation',
      ],
      hasAllButton: false,
      imageType: false,
      key: 'roofingAndExterior',
      positionCol: 0,
      arrow: false,
      level:1,
      child: []
  },
  {
      header: 'Water Tank & Filteration System',
      items: [
          'Hot Water Tank',
          'Water Filteration & Softeners',
      ],
      hasAllButton: false,
      imageType: false,
      key: 'waterTankAndFilteration',
      positionCol: 2,
      arrow: true,
      level:1,
      child: [
        {
          header: 'Explore All',
          items: [],
          routeUrl:"",
          arrow: false,
          level:2,
        },
        {
          header: 'Hot Water Tank',
          items: [],
          routeUrl:"",
          arrow: false,
          level:2,
        },
        {
          header: 'water filteration & softeners',
          items: [],
          routeUrl:"",
          arrow: false,
          level:2,
        }

      ]
  },
  {
      header: 'Virtual Home Checkup',
      items: [],
      hasAllButton: false,
      imageType: false,
      key: 'virtualHomeCheckup',
      positionCol: 2,
  },
  {
      header: 'Tree and Shrub Services',
      items: [
          'Tree Removal',
          'Tree Pruning',
          'Shrub Removal and Pruning',
          'Tree and Shrub Fertilization',
          'Tree and Shrub Grinding',
      ],
      hasAllButton: true,
      imageType: false,
      key: 'treeAndShrub',
      positionCol: 3,
  },
  {
      header: 'EV Home Installation',
      items: [],
      hasAllButton: false,
      imageType: false,
      key: 'virtualHomeCheckup',
      positionCol: 3,
      arrow: false,
      level:1,
      child: []
  },
]

export {
  MAIN_NAV,
  MENU_MOBILE_DATA  
}