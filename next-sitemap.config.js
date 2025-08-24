require('ts-node').register({ transpileOnly: true })
const positions = require('./src/constants/positions').default

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://goodmorning.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 50000,
  exclude: ['/blog'],
  additionalPaths: async (config) => {
    const careerLinks = [
      ...new Set(positions.flatMap(c => c.jobs.map(j => j.link))),
    ]
    return Promise.all(
      careerLinks.map(p => config.transform(config, p))
    )
  },
}