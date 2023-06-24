/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.gray.900"), // Change heading color
              fontSize: theme("fontSize.3xl"), // Change heading font size
              fontWeight: theme("fontWeight.bold"), // Change heading font weight
              marginTop: theme("spacing.2"), // Change heading margin top
              marginBottom: theme("spacing.4"), // Change heading margin bottom
            },
            h2: {
              color: theme("colors.zinc.900"), // Change heading color
              fontSize: theme("fontSize.xl"), // Change heading font size
              marginTop: theme("spacing.4"), // Change heading margin top
              marginBottom: theme("spacing.4"), // Change heading margin bottom
            },
            h3: {
              color: theme("colors.zinc.700"), // Change heading color
              fontSize: theme("fontSize.lg"), // Change heading font size
              marginTop: theme("spacing.4"), // Change heading margin top
              marginBottom: theme("spacing.4"), // Change heading margin bottom
            },
            strong: {
              color: theme("colors.gray.700"), // Change strong text color
              fontWeight: theme("fontWeight.bold"), // Change strong text font weight
            },
            blockquote: {
              color: theme("colors.gray.300"), // Change blockquote text color
              fontWeight: theme("fontWeight.normal"), // Change blockquote font weight
              borderLeftColor: theme("colors.blue.400"), // Change blockquote border color
              fontStyle: "italic", // Change blockquote font style
              paddingLeft: theme("spacing.4"), // Change blockquote padding left
              marginTop: theme("spacing.4"), // Change blockquote margin top
              marginBottom: theme("spacing.4"), // Change blockquote margin bottom
              quotes: "none", // Remove quotation marks
            },
            p: {
              marginBottom: theme("spacing.4"), // Add bottom margin to paragraphs
              lineHeight: theme("lineHeight.relaxed"), // Adjust line height for paragraphs
              color: theme("colors.gray.800"), // Set paragraph text color
              textAlign: "justify", // Add justified text alignment
            },
            hr: {
              borderColor: theme("colors.gray.300"), // Change horizontal rule color
              marginTop: theme("spacing.8"), // Change horizontal rule margin top
              marginBottom: theme("spacing.8"), // Change horizontal rule margin bottom
            },
            // Add styles for other commonly used tags as needed
          },
        },
      }),
    },
  },

  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
