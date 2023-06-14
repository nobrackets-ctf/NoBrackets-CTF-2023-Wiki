// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NoBrackets Wiki',
  tagline: 'Wiki du CTF NoBrackets',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ctf.nobrackets.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GCC ENSIBS', // Usually your GitHub org/user name.
  projectName: 'NoBrackets Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'NoBrackets Wiki',
        logo: {
          alt: 'Logo NoBrackets',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/ctf',
            position: 'left',
            label: 'What is a CTF ?',
          },
          {
            to: '/docs/intro',
            position: 'left',
            label: 'Tutoriels',
          },
          {
            href: 'https://ctf.nobrackets.fr',
            label: 'CTFd',
            position: 'right',
          },
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: "C'est quoi un CTF ?",
                to: '/ctf',
              },
              {
                label: 'Tutoriels',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/NoBrackets',
              },
              {
                label: 'Twitter GCC',
                href: 'https://twitter.com/GCC_ENSIBS',
              },
            ],
          },
          {
            title: 'CTF NoBrackets',
            items: [
              {
                label: 'CTFd',
                to: 'https://ctf.nobrackets.fr',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NoBrackets CTF by GCC ENSIBS.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
