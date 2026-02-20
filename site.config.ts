import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '30dd95e228bd80e58dbcd4234e5eae4a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'FireTable Blog',
  domain: 'blog.firetable.top',
  author: 'FireTable',

  // open graph metadata (optional)
  description: 'FireTable Personal Blog powered by Notion',

  // social usernames (optional)
  twitter: undefined,
  github: 'FireTable',
  linkedin: undefined,
  // mastodon: '#', // optional mastodon profile URL, provides lin³ verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override tF…•¥È‘•™…Õ±ĞUI0Á…Ñ¡Ì(€€¼¼•á…µÁ±”è(€€¼¼(€€¼¼Á…•UÉ±=Ù•ÉÉ¥‘•Ìèì(€€¼¼€€€œ½™½¼œè€œÀØİ‘ÜÄå„äÄÈĞÜÅ•„å„Í…ŒÄÀÜÄÁ”İ™‘˜œ°(€€¼¼€€€œ½‰…Èœè€œÁ‰”Ù•™”å‘…˜ĞÈØàá˜ØÕŒÜÙˆàå˜á•ˆÈÜœ(€€¼¼ô(€Á…•UÉ±=Ù•ÉÉ¥‘•Ìè¹Õ±°°((€€¼¼İ¡•Ñ¡•ÈÑ¼ÕÍ”Ñ¡”‘•™…Õ±Ğ¹½Ñ¥½¸¹…Ù¥…Ñ¥½¸ÍÑå±”½È„ÕÍÑ½´½¹”İ¥Ñ ±¥¹­ÌÑ¼(€€¼¼¥µÁ½ÉÑ…¹ĞÁ…•Ì¸Q¼ÕÍ”¹…Ù¥…Ñ¥½¹1¥¹­Í€°Í•Ğ¹…Ù¥…Ñ¥½¹MÑå±•€Ñ¼ÕÍÑ½µ€¸(€¹…Ù¥…Ñ¥½¹MÑå±”è€‘•™…Õ±Ğœ(€€¼¼¹…Ù¥…Ñ¥½¹MÑå±”è€ÕÍÑ½´œ°(€€¼¼¹…Ù¥…Ñ¥½¹1¥¹­Ìèl(€€¼¼€€ì(€€¼¼€€€€Ñ¥Ñ±”è€‰½ÕĞœ°(€€¼¼€€€€Á…•%è€˜ÄÄäåÌÜÔÜåˆĞÅ‰…‰™ŒÁˆÔÄÜÑ˜ĞÈÔÙ„œ(€€¼¼€€ô°(€€¼¼€€ì(€€¼¼€€€€Ñ¥Ñ±”è€½¹Ñ…Ğœ°(€€¼¼€€€€Á…•%è€œÙ„Èå•‰ˆäÌÕ„Ñ˜ÀØàå™”ØØÅ…ˆÕ˜ÍˆáÄœ(€€¼¼€€ô(€€¼¼t)ô¤(