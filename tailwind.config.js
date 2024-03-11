/** @type {import('tailwindcss').Config} */

export default {
    content: [
      './src/**/*.{html,js,svelte,ts}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradient-nema1":
                    "linear-gradient(180deg, #2FB8FF 0%, #9EECD9 100%)",
                "gradient-nema2":
                    "linear-gradient(180deg, #9EECD9 0%, #2FB8FF 100%)",
            },
            fontFamily: {
                sans: ["var(--font-monoDrip)", "sans-serif"],
            },
            fontSize: {
                base: "1.6rem",
            },
            transitionTimingFunction: {
                cubic: "cubic-bezier(0.075, 0.82, 0.165, 1)",
            },
            screens: {
                xs: { max: "500px" },
                // 'lil': '500px',
            },
            animation: {
                pulse: "pulse 4.5s infinite",
            },
            keyframes: {
                pulse: {
                    "50%": {
                        transform: "translateY(-8px)",
                    },
                },
            },
        },
        plugins: [
            function ({ addBase, config }) {
                addBase({
                    "::selection": {
                        backgroundColor: config("theme.colors.gray.800"),
                        color: config("theme.colors.white"),
                    },
                });
            },
            
            // plugin(function ({ addBase }: ReturnType<plugin>) {
            //     addBase({
            //         html: { fontSize: "10px" },
            //     });
            // }),
        ],
    },
};

