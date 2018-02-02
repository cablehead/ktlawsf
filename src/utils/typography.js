import Typography from "typography";

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.45,
  googleFonts: [
    {name: "Quattrocento", styles: ["400", "400i", "700", "700i"]},
    {name: "Lato", styles: ["300", "700"]},
    ],

  bodyFontFamily: ["Quattrocento", "arial"],
  bodyColor: "hsla(0, 0%, 0%, 0.6)",
  headerFontFamily: ["Quattrocento", "arial"],
  headerColor: "hsla(0, 0%, 0%, 0.75)",

  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1 b': {
      color: "hsla(0, 0%, 0%, 0.8)",
      fontSize: '120%',
    },
		blockquote: {
      fontWeight: 700,
      marginLeft: 0,
      fontStyle: 'italic',
    },
    'a': {
      color: '#0083bf',
      textDecoration: 'none',
    },
  })
});

export default typography;
