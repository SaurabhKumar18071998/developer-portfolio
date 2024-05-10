import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 2,
        name: 'Australian Tour Data Warehouse',
        description: "The Australian Tour Data Warehouse project was a collaborative effort where I contributed as a Full Stack Developer alongside my team. My role involved developing the frontend development using React.js and Next.js to create interactive data visualizations and dashboards according to given Figma design.",
        tools: ['Express', 'MongoDB', 'React', 'D3.js', 'OAuth 2.0', 'AWS EC2'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Madgical Kids Times',
        description: "Magical Kids-Times is a collaborative effort where I contributed as a Full Stack Developer alongside my team. I played a key role in developing the backend infrastructure, including building RESTful APIs using Express.js and setting up MongoDB for data storage. Additionally, I contributed to the frontend development using React.js and Redux for state management. Our team worked together to create a colorful and interactive user interface tailored for young audiences, ensuring a safe and engaging experience for children accessing age-appropriate news content. The application is deployed on AWS EC2 instances and served through Nginx for optimal performance.",
        tools: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt', 'HTML', 'CSS', 'JavaScript'],
        role: 'Full-stack Developer',
        code: '',
        demo: '',
        image: ayla,
    },
    {
        id: 4,
        name: 'E-commerce Cloth Shop',
        description: "The E-commerce Cloth Shop is a full-stack web application developed to facilitate online shopping for clothing items. My role as a frontend developer involved building frontend components of the platform. On the frontend, I utilized React.js to create a dynamic and user-friendly shopping interface, implementing features such as product browsing, filtering, and cart management. For the backend, My Team designed and implemented a RESTful API using Node.js and Express, with DynamoDB serving as the database to store product information, user profiles, and order history. Payment processing functionality was integrated using a secure third-party service. Additionally, I incorporated user authentication and authorization mechanisms to ensure a secure shopping experience.",
        tools: ['React.js', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'JavaScript', 'Stripe API'],
        role: 'Full-stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },