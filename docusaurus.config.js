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
  url: 'https://nobrackets-ctf.nobrackets.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nobrackets-ctf ', // Usually your GitHub org/user name.
  projectName: 'NoBrackets-CTF-2023-Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
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
          }
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
                label: 'Twitter',
                href: 'https://twitter.com/NoBracketsCTF',
              },
            ],
          },
          {
            title: 'CTF NoBrackets',
            items: [
              {
                label: 'Plateforme CTF - Inscription',
                to: 'https://ctf.nobrackets.fr',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NoBrackets CTF by GCC ENSIBS.<br>Made with ❤️ by FreezingKas, PimpMyShell & PauvreTimo`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
