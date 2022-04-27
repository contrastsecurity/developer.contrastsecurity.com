const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Contrast Developers',
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
          path: 'docs',
          routeBasePath: '/',
          breadcrumbs: false,
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

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      ({
        fromExtensions: ['html', 'htm'],
        createRedirects(existingPath) {
          if (existingPath.includes('/docs/contrast-platform')) {
            return [
              existingPath.replace('/docs/contrast-platform', '/docs/getting-started'),
            ];
          }
          else if (existingPath.includes('/docs')) {
            return [
              existingPath.replace('/docs', '/docs/learn-devsec'),
            ];
          }
          return undefined;
        },
      }),
    ],
  ],

  themeConfig:
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      // algolia: { //Search engine
      //   appId: 'BH4D90D16A',
      //   apiKey: 'app',
      //   indexName: 'contrast-dev'
      // },
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
            to: '/get-started',
            position: 'left',
            label: 'Get Started',
            activeBaseRegex: 'get-started'
          },
          {
            //type: 'doc',
            to: '/docs',
            position: 'left',
            label: 'Learn DevSec',
            activeBaseRegex: 'docs'
          },
          { 
            to: '/events',
            label: 'Events',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          // {
          //   href: 'https://github.com/contrastsecurity',
          //   label: 'GitHub',
          //   position: 'right',
          // },
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
                to: '/careers',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/contrastsec',
              },
              {
                label: 'Privacy Matters',
                to: '/privacy'
              },
              {
                label: 'Terms of Service',
                href: '/enduser-terms',
              }
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
