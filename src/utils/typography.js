import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
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
    'input[type=text], input[type=email]': {
      padding: '8px 12px',
      color: 'hsla(0, 0%, 0%, 0.6)',
      outline: 'none',
    },
    'input[type=submit]': {
      color: '#FFF',
      backgroundColor: '#272727',
      padding: '10px 40px',
      outline: 'none',
      border: 0,
      boxShadow: 'none',
      borderRadius: '0px',
    },
    'textarea': {
      padding: '8px 12px',
      color: 'hsla(0, 0%, 0%, 0.6)',
      outline: 'none',
      borderColor: '#bfbfbf',
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
