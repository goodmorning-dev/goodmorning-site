/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://goodmorning.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 50000,
  exclude: ['/blog'],
}