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
          path: 'learn',
          routeBasePath: 'learn',
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
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'get-started',
    //     path: 'get-started',
    //     routeBasePath: 'get-started',
    //     sidebarPath: false,
    //     breadcrumbs: false,
    //     editUrl: 'https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/',
    //   },
    // ],
    [
      '@docusaurus/plugin-client-redirects',
      ({
        fromExtensions: ['html', 'htm'],
        redirects: [
          {
            to: '/learn/getting-started/contrast-cli',
            from: '/get-started',
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/learn/guides/devsec-with-contrast')) {
            existingPath = existingPath.replace('/docs/getting-started/where-do-i-start', '/docs/getting-started');
            return [
              existingPath.replace('/learn/guides/devsec-with-contrast', '/docs/getting-started'),
            ];
          }
          else if (existingPath.includes('/learn/guides/learn-devsec')) {
            return [
              existingPath.replace('/learn/guides/learn-devsec', '/docs/learn-devsec'),
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
        defaultMode: 'light',
        disableSwitch: false,
        // respectPrefersColorScheme: false
      },
      // algolia: { //Search engine
      //   appId: 'BH4D90D16A',
      //   apiKey: 'app',
      //   indexName: 'contrast-dev'
      // },
      navbar: {
        title: '',
        style: 'dark',
        hideOnScroll: false,
        logo: {
          alt: 'Contrast',
          src: '/img/contrast-logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Products',
            position: 'left',
            items: [
              {
                label: 'Contrast CLI',
                to: '/learn/getting-started/contrast-cli'
              },
              {
                label: 'Contrast Platform',
                to: 'https://www.contrastsecurity.com/platform',
              },
            ]
          },
          {
            to: 'https://www.contrastsecurity.com/upcoming-events',
            label: 'Events',
          },
          {
            to: '/learn',
            position: 'left',
            label: 'Learn',
            activeBaseRegex: 'learn'
          },
          {
            label: 'Blog',
            to: 'https://www.contrastsecurity.com/security-influencers',
          },
          // {
          //   to: 'https://www.contrastsecurity.com/integration',
          //   label: 'Integrations'
          // },
          {
            to: 'https://github.com/contrastsecurity',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
              // {
              //   label: 'Contrast CLI',
              //   to: '/learn/getting-started/contrast-cli',
              // },
              // {
              //   label: 'Contrast Platform',
              //   to: 'https://www.contrastsecurity.com/platform'
              // },
              {
                label: 'Events',
                to: 'https://www.contrastsecurity.com/upcoming-events',
              },
              {
                label: 'Learn',
                to: '/learn'
              },
              {
                label: 'Blog',
                to: 'https://www.contrastsecurity.com/security-influencers',
              },
            ],
          },
          {
            title: 'Company',
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
                label: 'About Us',
                to: 'https://www.contrastsecurity.com/about-us'
              },
              {
                label: 'Careers',
                // to: '/careers',
                to: 'https://www.contrastsecurity.com/careers'
              },
              {
                label: 'Terms of Service',
                // to: '/enduser-terms',
                to: 'https://www.contrastsecurity.com/enduser-terms-0317a'
              },
              {
                label: 'Privacy Matters',
                // to: '/privacy'
                to: 'https://www.contrastsecurity.com/privacy-matters'
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Twitter',
                to: 'https://twitter.com/contrastsec',
              },
              {
                label: 'LinkedIn',
                to: 'https://www.linkedin.com/company/contrast-security'
              },
              {
                label: 'Facebook',
                to: 'https://www.facebook.com/contrastsec/'
              },
              {
                label: 'GitHub',
                to: 'https://github.com/contrastsecurity',
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
