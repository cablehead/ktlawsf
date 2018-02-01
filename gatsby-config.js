
module.exports = {
  plugins: [

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		},

    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown`,
				path: `${__dirname}/src/markdown/`
			}
		},

		`gatsby-transformer-remark`,

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },

    `gatsby-plugin-glamor`,
  ],
}
