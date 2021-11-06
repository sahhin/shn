module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
        content: [
            './src/**/*.{html,ts}',
        ]
    },
    darkMode: 'media', // or 'media' or 'class'

    theme: {
        extend: {
            dropShadow: {
                white: '0 0  5px rgba(255, 255, 255, .75)',
                twitter: '0 0  5px rgba(29, 161, 242, .75)',
                discord: '0 0  5px rgba(86, 98, 246, .75)',
                github: '0 0  5px rgba(13, 17, 23, .75)',
                mail: '0 0  5px rgba(252, 211, 77, .75)',
                icon_logo_dark: '0 1px 0 rgba(0, 0, 0, .25)',
                icon_logo_white: '0 1px 0 rgba(255, 255, 255, .25)'
            },

            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
            backgroundImage: {
                'la-haine': "url('assets/img/img.png')",
                'landing': "url('assets/img/landing.png')"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
