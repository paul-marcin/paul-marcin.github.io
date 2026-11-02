import rss from '@astrojs/rss'
import { localizedContent } from '../../utils/content'
import { entryPath, siteDescription } from '../../utils/i18n'

export async function GET(context) {
  const posts = await localizedContent('blog', 'en')
  return rss({
    title: 'Paul — Articles', description: siteDescription('en'), site: context.site,
    items: posts.map((post) => ({ ...post.data, link: entryPath('blog', post.id, 'en') })),
    customData: '<language>en</language>'
  })
}
