import rss from '@astrojs/rss'
import { localizedContent } from '../utils/content'
import { entryPath, siteDescription } from '../utils/i18n'
export async function GET(context) {
 const posts = await localizedContent('blog', 'fr')
 return rss({ title: 'Paul — Articles', description: siteDescription('fr'), site: context.site,
 items: posts.map(post => ({ ...post.data, link: entryPath('blog', post.id, 'fr') })), customData: '<language>fr</language>' })
}
