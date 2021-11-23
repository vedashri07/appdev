const MENU_DATA = [
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
    },
    {
        header: 'Plumbing Services',
        items: [],
        hasAllButton: false,
        imageType: false,
        key: 'plumbingServices',
        positionCol: 0,
    },
    {
        header: 'Air Quality',
        items: [],
        hasAllButton: false,
        imageType: false,
        key: 'airQuality',
        positionCol: 0,
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
        positionCol: 1,
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
        positionCol: 1,
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
        positionCol: 2,
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
    },
]

const MENU_DATA_IMAGE_FULL_HEIGHT = [
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
        fullwidth: false
    },
    {
        header: 'Plumbing Services',
        items: [],
        hasAllButton: false,
        imageType: false,
        key: 'plumbingServices',
        positionCol: 0,
        fullwidth: false
    },
    {
        header: 'Air Quality',
        items: [],
        hasAllButton: false,
        imageType: false,
        key: 'airQuality',
        positionCol: 0,
        fullwidth: false
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
        positionCol: 1,
        fullwidth: false
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
        positionCol: 1,
        fullwidth: false
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
        positionCol: 2,
        fullwidth: false
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
        fullwidth: false
    },
    {
        header: 'Virtual Home Checkup',
        items: [],
        hasAllButton: false,
        imageType: false,
        key: 'virtualHomeCheckup',
        positionCol: 2,
        fullwidth: false
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
        positionCol: 1,
    },
    {
        header: 'EV Home Installation',
        items: [],
        hasAllButton: false,
        imageType: false,
        key: 'virtualHomeCheckup',
        positionCol: 2,
    },
    {
        header: 'Aliquam fermentum elit ex, bibendum',
        items: [
            'perspiciatis unde omnis',
            'consequuntur magni dolores',
            'iure reprehenderit qui',
        ],
        hasAllButton: false,
        imageType: true,
        key: 'loremIpsum',
        positionCol: 3,
        image: require('../assets/myimage1.jpg'),
        eyebrow: 'Aliquam fermentum elit',
        ctaText: 'Button',
        ctaLink: '#',
        helpText: ' Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure',
        fullwidth: -1
    },
];
const MENU_DATA_IMAGE_HALF_WIDTH = [
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
        fullwidth: false
    },
    {
        header: 'Plumbing Services',
        items: [],
        hasAllButton: false,
        imageType: false,
        key: 'plumbingServices',
        positionCol: 0,
        fullwidth: false
    },
    {
        header: 'Air Quality',
        items: [],
        hasAllButton: false,
        imageType: false,
        key: 'airQuality',
        positionCol: 0,
        fullwidth: false
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
        fullwidth: false
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
        positionCol: 1,
        fullwidth: false
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
        positionCol: 1,
        fullwidth: false
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
        positionCol: 1,
        fullwidth: false
    },
    {
        header: 'Virtual Home Checkup',
        items: [],
        hasAllButton: false,
        imageType: false,
        key: 'virtualHomeCheckup',
        positionCol: 1,
        fullwidth: false
    },
    {
        header: 'Aliquam fermentum elit ex, bibendum euismod dui',
        items: [
            'perspiciatis unde omnis',
            'consequuntur magni dolores',
            'iure reprehenderit qui',
        ],
        hasAllButton: false,
        imageType: true,
        key: 'loremIpsum',
        positionCol: 2,
        image: require('../assets/myimage1.jpg'),
        eyebrow: 'Aliquam fermentum elit',
        ctaText: 'Button',
        ctaLink: '#',
        helpText: ' Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure',
        fullwidth: 2
    },
];
const MENU_DATA_IMAGE = [
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
    },
    {
        header: 'Plumbing Services',
        items: [],
        hasAllButton: false,
        imageType: false,
        key: 'plumbingServices',
        positionCol: 0,
    },
    {
        header: 'Air Quality',
        items: [],
        hasAllButton: false,
        imageType: false,
        key: 'airQuality',
        positionCol: 0,
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
        positionCol: 1,
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
        positionCol: 1,
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
        positionCol: 2,
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
        header: 'Lorem ipsum dolor sit amet',
        items: [
            'perspiciatis unde omnis',
            'consequuntur magni dolores',
            'iure reprehenderit qui',
        ],
        hasAllButton: false,
        imageType: true,
        key: 'loremIpsum',
        positionCol: 3,
        image: require('../assets/myimage1.jpg'),
        helpText: ' Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure',
        fullwidth: false
    },
]
export {
    MENU_DATA,
    MENU_DATA_IMAGE,
    MENU_DATA_IMAGE_FULL_HEIGHT,
    MENU_DATA_IMAGE_HALF_WIDTH
}