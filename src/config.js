// config.js
module.exports = {
    github: {
        username: 'abbyhilman', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [''] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'abby-hilman',
        twitter: '',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://abbyhilman.github.io',
        phone: '',
        email: 'abbyhilman@gmail.com'
    },
    skills: [
        'React Native',
        'Laravel',
        'JavaScript',
        'React.js',
        'Node.js',
        'MySQL',
        'Git',
        'CSS',
    ],
    experiences: [
        { 
            company: 'PT. Astra Graphia Information Technology (AGIT)',
            position: 'Developer',
            from: 'January 2021',
            to: 'Present'
        },
        { 
            company: 'Mednefits Pte Ltd',
            position: 'Jr. Mobile Developer',
            from: 'April 2020',
            to: 'December 2021'
        },
        { 
            company: 'PT Generasi Informasi Optima',
            position: 'Jr. Information Technology Consultant',
            from: 'November 2019',
            to: ' January 2020'
        }
    ],
    education: [
        { 
            institution: 'Trisakti University',
            degree: 'Bachelor of Computer Science',
            from: '2015',
            to: '2019'
        },
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: '', // medium | dev.to
        username: '',
        limit: 0 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id
    },
    hotjar: {
        id: '', //  Please remove this and use your own id
        snippetVersion : 6
    },
    themeConfig: {
        default: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
