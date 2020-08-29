module.exports = {
  siteMetadata: {
    title: `Shined`,
    description: `A technical blog and project portfolio`,
    author: `Jason Upchurch`,
    role: `Software Developer`,
    email: `jason-upchurch@mail.com`,
    socialMedia: [
      {
	name: "github",
	link: "https://github.com/jason-upchurch",
      },
      {
	name: "linkedin",
	link: "https://linkedin/in/jason-upchurch",
      },
      {
	name: "twitter",
	link: "https://twitter.com/jasonmupchurch",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
      {
	resolve: `gatsby-source-filesystem`,
	options: {
	    name: `blogs`,
	    path: `${__dirname}/src/content/blogs`,
	},
      },
      {
	resolve: `gatsby-source-filesystem`,
	options: {
	    name: `jobs`,
	    path: `${__dirname}/src/content/jobs`,
	},
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/shined.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
	plugins: [
	  {
	    resolve: "gatsby-remark-smartypants",
	    options: {
	      dashes: "oldschool",
	    },
	  },
	  {
	    resolve: `gatsby-remark-images`,
	    options: {
	      maxWidth: 800,
	    },
	  },
	],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
