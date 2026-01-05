export interface ProjectType {
    id: string,
    name: string,
    description: string,
    keyFeatures: string[],
    techStacks: string[],
    screenshots: { nameFile: string, description: string }[],
    urlDeploy?: string,
    repoGitHub?: string,
    isFeatured: boolean,
}

export const projects: ProjectType[] = [
    {
        id: 'asl-detect',
        name: 'ASL Detect',
        description: 'ASL Detect is a machine learning web app related to computer vision. It aims to predict ASL hand gestures using Mediapipe to capture 21 hand coordinates and train a model directly in the browser using TensorFlow.js.',
        keyFeatures: [
            'Generate dataset',
            'Training custom model',
            'Realtime detection',
            'Installable and offline mode',
            'Support two language, Indonesian and English',
            'Interactive visual chart'
        ],
        techStacks: [
            'tensorflow-js',
            'mediapipe',
            'react',
            'tailwind-css',
            'chart-js',
            'typescript',
            'sweetalert2',
            'vite',
            'firebase',
        ],
        screenshots: [
            {
                nameFile: 'image-1.jpg',
                description: 'Jumbotron Website',
            },
            {
                nameFile: 'image-2.jpg',
                description: 'Process Generate Dataset',
            },
            {
                nameFile: 'image-3.jpg',
                description: 'Process Upload Dataset for Training Model',
            },
            {
                nameFile: 'image-4.jpg',
                description: 'Process Split Data for Training Model',
            },
            {
                nameFile: 'image-5.jpg',
                description: 'Process Create Sequential Model for Training Model',
            },
            {
                nameFile: 'image-6.jpg',
                description: 'Process Compile Model',
            },
            {
                nameFile: 'image-7.jpg',
                description: 'Process Training Model',
            },
            {
                nameFile: 'image-8.jpg',
                description: 'Chart Accuracy and Training Model',
            },
            {
                nameFile: 'image-9.jpg',
                description: 'Detection',
            },
        ],
        urlDeploy: 'https://asldetect.web.app',
        isFeatured: true,
    },
    {
        id: 'royal-islamic-school',
        name: 'Royal Islamic School',
        description: 'The school website for Royal Islamic School is a result of the Regional Higher Education Service Institution 2 (LLDIKTI Region 2) internship program. The website is designed to help the school promote its identity and strengthen its branding. A dedicated private admin dashboard is designed to simplify manage displayed content such as achievements, events, information, teachers, galleries, etc.',
        keyFeatures: [
            'Identity school such as vision mission, academic, teacher, and more',
            'Integrate Instagram and YouTube embed video',
            'Dashboard admin to manage content',
            'Events and information like a blog',
        ],
        techStacks: [
            'laravel',
            'filament',
            'tailwind-css',
            'alpine-js',
            'mysql',
        ],
        screenshots: [
            {
                nameFile: 'image-1.jpg',
                description: 'Jumbotron Website',
            },
            {
                nameFile: 'image-2.jpg',
                description: 'FAQ Section',
            },
            {
                nameFile: 'image-3.jpg',
                description: 'Vision Mission Page',
            },
            {
                nameFile: 'image-4.jpg',
                description: 'Facility Page',
            },
            {
                nameFile: 'image-5.jpg',
                description: 'Gallery Photo Page',
            },
            {
                nameFile: 'image-6.jpg',
                description: 'Gallery Video Page',
            },
        ],
        isFeatured: true,
        urlDeploy: 'https://royalislamic.sch.id',
    },
    {
        id: 'notepadly',
        name: 'Notepadly',
        description: 'Notepadly is a simple web application for managing notes efficiently. It offers a clean interface with essential features to enhance note-taking experience. This project uses the public Notes API provided by Dicoding: https://notes-api.dicoding.dev/v1.',
        keyFeatures: [
            'User authentication (Login & Register)',
            'Single Page Application(SPA) for smooth navigation',
            'Light and dark theme support',
            'Localization in two languages: English and Indonesian',
        ],
        techStacks: [
            'react',
            'react-router-dom',
            'typescript',
            'tailwind-css',
            'sweetalert2',
            'vite',
            'firebase',
        ],
        screenshots: [
            {
                nameFile: 'image-1.jpg',
                description: 'Home Page Notepadly in Light Mode',
            },
            {
                nameFile: 'image-2.jpg',
                description: 'Home Page Notepadly in Dark Mode',
            },
            {
                nameFile: 'image-3.jpg',
                description: 'Create Note Page with Indonesian Language',
            },
            {
                nameFile: 'image-4.jpg',
                description: 'View Detail Note',
            },
            {
                nameFile: 'image-5.jpg',
                description: 'Register Page',
            },
            {
                nameFile: 'image-6.jpg',
                description: 'Login Page',
            },
        ],
        isFeatured: false,
        repoGitHub: 'https://github.com/KevinWinardi/notepadly',
        urlDeploy: 'https://notepadly.web.app',
    },
    {
        id: 'elisa-thrift-shop-import',
        name: 'Elisa Thrift Shop Import',
        description: 'A business profile website for Elisa\'s shop, a thrifting clothing store. This project was carried out by four people: myself Kevin Winardi, William Liu, I Komang Darmawan, and Johannes. I was responsible for developing the admin dashboard and integrating it with the database model, including deployment.',
        keyFeatures: [
            'Information profile bussiness',
            'Display product with custom filter',
            'Login and register with email verification OTP',
            'Support forgot password by email',
            'Cart and favorite product',
            'Dashboard admin to manage categories, products, users, and identity website'
        ],
        techStacks: [
            'laravel',
            'mysql',
            'bootstrap',
        ],
        screenshots: [
            {
                nameFile: 'image-1.jpg',
                description: 'Jumbotron Website',
            },
            {
                nameFile: 'image-2.jpg',
                description: 'Product Page',
            },
            {
                nameFile: 'image-3.jpg',
                description: 'Tutorial Order Page',
            },
            {
                nameFile: 'image-4.jpg',
                description: 'Email Verification for Register Account',
            },
            {
                nameFile: 'image-5.jpg',
                description: 'Favorite Page',
            },
            {
                nameFile: 'image-6.jpg',
                description: 'Dashboard Summary',
            },
            {
                nameFile: 'image-7.jpg',
                description: 'Dashboard Product',
            },
        ],
        isFeatured: true,
        urlDeploy: 'https://elisathrift.my.id',
    },
    {
        id: 'say-quotes',
        name: 'Say Quotes',
        description: 'Say Quotes is a motivational quotes website that inspires life with quotes from various figures.',
        keyFeatures: [
            'Display random quotes',
            '35 different themes available to customize the look',
            'Customize background with random images from Lorem Picsum (https://picsum.photos) or upload own image from local device',
            'Share quotes easily with social share buttons',
            'Download quotes as images to save or share offline',
        ],
        techStacks: [
            'react',
            'daisy-ui',
            'tailwind-css',
            'vite',
            'firebase',
        ],
        screenshots: [
            {
                nameFile: 'image-1.jpg',
                description: 'Light Theme with Custom Opacity Card',
            },
            {
                nameFile: 'image-2.jpg',
                description: 'Caramellate Theme with Custom Opacity Card',
            },
            {
                nameFile: 'image-3.jpg',
                description: 'Setting Theme',
            },
            {
                nameFile: 'image-4.jpg',
                description: 'Setting Background and Opacity Card',
            },
            {
                nameFile: 'image-5.jpg',
                description: 'Mode Hide Control Button',
            },
        ],
        isFeatured: false,
        repoGitHub: 'https://github.com/KevinWinardi/say-quotes',
        urlDeploy: 'https://sayquotes.web.app',
    }
];