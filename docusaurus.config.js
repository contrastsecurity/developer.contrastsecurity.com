const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Contrast DevSec',
  tagline: 'Fast security for applications: your code, your libraries, and everything in-between.',
  url: 'https://developer.contrastsecurity.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'contrastsecurity', // Usually your GitHub org/user name.
  projectName: 'developer.contrastsecurity.com', // Usually your repo name.
  trailingSlash: true,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      colorMode: {
        defaultMode: 'dark'
      },
      algolia: { //Search engine
        appId: 'BH4D90D16A',
        apiKey: 'app',
        indexName: 'contrast-dev'
      },
      navbar: {
        title: '',
        hideOnScroll: true,
        logo: {
          alt: 'Dev Site Logo',
          src: '/img/contrast-logo.png',
        },
        items: [
          {
            //type: 'doc',
            to: '/docs/getting-started/where-do-i-start',
            position: 'left',
            label: 'Getting Started',
            activeBaseRegex: 'getting-started'
          },
          {
            //type: 'doc',
            to: '/docs/learn-devsec/index',
            position: 'left',
            label: 'Learn DevSec',
            activeBaseRegex: 'learn-devsec'
          },
          {to: '/events', label: 'Events', position: 'left'},
          {to: '/blog', label: 'DevSec Blog', position: 'left'},
          {
            href: 'https://github.com/contrastsecurity',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/getting-started/where-do-i-start',
              },
            ],
          },
          {
            title: 'Contrast',
            items: [
              /*{
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },*/
              {
                label: 'Careers',
                href: 'https://www.contrastsecurity.com/careers'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/contrastsec',
              },
              {
                label: 'Privacy Matters',
                href: 'https://www.contrastsecurity.com/privacy-matters',
              },
              {
                label: 'Terms of Service',
                href: 'https://www.contrastsecurity.com/enduser-terms-0317a',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'DevSec Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/contrastsecurity',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Contrast Security.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
