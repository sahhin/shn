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
                blue: '0 0  5px rgba(255, 255, 255, .5)',
            },

            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
            backgroundImage:{
                'landing':"url('assets/img/img.png')"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
