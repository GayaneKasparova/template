module.exports = {
    siteMetadata: {
        site: `MG Gatsby Template`,
        title: `Marktguru Gatsby Template`,
        titleTemplate: `%s`,
        description: `Gatsby + Typescript + Styled Components = 💖`,
        siteUrl: `http://marktguru.at`,
        language: `en`,
        color: `##08aae7`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Marktguru`,
                short_name: `Marktguru`,
                start_url: `/`,
                background_color: `#08aae7`,
                theme_color: `#08aae7`,
                display: `standalone`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
                include_favicon: true, // Include favicon
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_KEY,
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ['/preview/**', '/do-not-track/me/too/'],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
                // Enables Google Optimize Experiment ID
                experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
                // Set Variation ID. 0 for original 1,2,3....
                variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: 'example.com',
            },
        },
    ],
}
