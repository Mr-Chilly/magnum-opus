module.exports = {
  title: 'Magnum Opus',
  tagline: 'A site dedicated to the supporting the case for global legalization of all drugs',
  url: 'https://mr-chilly.github.io/magnum-opus/',
  projectName: 'magnum-opus',
  organizationName: 'mr-chilly',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Magnum Opus',
      logo: {
        alt: 'Magnum opus logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs', 
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'nested/',
          activeBasePath: 'docs/nesty', 
          label: 'Double DOcs',
          position: 'left',
        },
        {
          href: 'https://github.com/Mr-Chilly/magnum-opus',
          label: 'Contribute',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Magnum Opus.`,
    },
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        'docs': {
          sidebarPath: require.resolve('./docs/nested/sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        'docs/nesty': {
          sidebarPath: require.resolve('./docs/nesty/sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
};
