import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Philipp Heinrich | Blog',
  description: '',
  site: 'https://philippheinrich.de',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>en-us</language>`,
});