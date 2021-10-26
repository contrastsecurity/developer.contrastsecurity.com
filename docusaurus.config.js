const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Contrast DevSec',
  tagline: 'Fast security for applications: your code, your libraries, and everything in-between.',
  url: 'https://contrastsecurity.com',
  baseUrl: '/developer/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Contrast-OSS', // Usually your GitHub org/user name.
  projectName: 'devsite', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/erikcostlow/contrast-dev-site/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/erikcostlow/contrast-dev-site/edit/main/website/blog/',
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
      navbar: {
        title: '',
        hideOnScroll: true,
        logo: {
          alt: 'Dev Site Logo',
          src: '/img/cs-devsec-1.png',
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
            to: '/docs/learn-security/index',
            position: 'left',
            label: 'Learn DevSec',
            activeBaseRegex: 'learn-security'
          },
          {to: '/events', label: 'Events', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Contrast-Security-OSS',
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
                to: '/docs/intro',
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
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Contrast-Security-OSS',
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
