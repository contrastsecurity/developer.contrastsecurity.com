const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const FontPreloadPlugin = require('webpack-font-preload-plugin');

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
          routeBasePath: 'docs',
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/',
        },
        blog: {
          path: 'blog',
          showReadingTime: true,
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
      '@docusaurus/plugin-content-docs',
      {
        id: 'get-started',
        path: 'get-started',
        routeBasePath: 'get-started',
        sidebarPath: false,
        breadcrumbs: false,
        editUrl: 'https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/',
      },
    ],
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
    function preloadFontPlugin(_context, _options) {
      return {
        name: 'preload-font-plugin',
        configureWebpack(_config, _isServer) {
          return {
            plugins: [new FontPreloadPlugin()],
          };
        },
      };
    },
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
            to: '/get-started',
            position: 'left',
            label: 'Get Started',
            activeBaseRegex: 'get-started'
          },
          {
            to: 'https://docs.contrastsecurity.com',
            position: 'left',
            label: 'Documentation',
          },
          // {
          //   to: 'https://api.contrastsecurity.com',
          //   position: 'left',
          //   label: 'API',
          // },
          {
            to: '/docs',
            position: 'left',
            label: 'Learn DevSec',
            activeBaseRegex: 'docs'
          },
          {
            to: 'https://www.contrastsecurity.com/upcoming-events',
            position: 'left',
            label: 'Events',
          },
          {
            label: 'Blog',
            position: 'left',
            to: 'https://www.contrastsecurity.com/security-influencers',
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
                label: 'Get Started',
                to: '/get-started',
              },
              {
                label: 'Tools',
                to: 'https://docs.contrastsecurity.com'
              },
              {
                label: 'API',
                to: 'https://api.contrastsecurity.com'
              },
              {
                label: 'DevSec',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Contrast',
            items: [
              /*{
                label: 'Stack Overflow',
                to: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                to: 'https://discordapp.com/invite/docusaurus',
              },*/
              {
                label: 'Careers',
                // to: '/careers',
                to: 'https://www.contrastsecurity.com/careers'
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/contrastsec',
              },
              {
                label: 'Privacy Matters',
                // to: '/privacy'
                to: 'https://www.contrastsecurity.com/privacy-matters'
              },
              {
                label: 'Terms of Service',
                // to: '/enduser-terms',
                to: 'https://www.contrastsecurity.com/enduser-terms-0317a'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                to: 'https://github.com/contrastsecurity',
              },
              {
                label: 'Events',
                to: 'https://www.contrastsecurity.com/upcoming-events',
              },
              {
                label: 'Blog',
                to: 'https://www.contrastsecurity.com/security-influencers',
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
