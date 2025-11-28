# 🏠 HEKYHomes Blog

A **complete, production-ready blogging platform** built with [Astro](https://astro.build).

**🎉 Your blog is live at:** http://localhost:4321

## 🌟 Complete Feature Set

### ✨ What Makes This Special

This isn't just a template - it's a fully-featured blogging platform ready for production use!

**Content Features:**

- ✅ **Tags & Categories** - Organize content your way
- ✅ **Reading Time** - Auto-calculated for every post
- ✅ **Featured Posts** - Highlight your best content
- ✅ **Draft System** - Work on posts before publishing
- ✅ **Author Attribution** - Credit post authors
- ✅ **Rich Metadata** - Dates, descriptions, and more

**User Experience:**
- ✅ **Beautiful Homepage** - Hero section + featured posts
- ✅ **Responsive Design** - Perfect on all devices
- ✅ **Fast Navigation** - Intuitive browsing
- ✅ **Tag/Category Pages** - Browse by topic
- ✅ **Post Cards** - Rich previews with images

**Technical Excellence:**
- ✅ **100/100 Lighthouse** - Perfect performance score
- ✅ **SEO Optimized** - Meta tags, Open Graph, sitemap
- ✅ **RSS Feed** - For feed readers
- ✅ **Markdown & MDX** - Write content your way
- ✅ **Type-Safe** - TypeScript validation
- ✅ **Hot Reload** - Instant preview of changes

## 📚 Documentation

- **[COMPLETE_BLOG_FEATURES.md](COMPLETE_BLOG_FEATURES.md)** - Full feature documentation
- **[BLOG_GUIDE.md](BLOG_GUIDE.md)** - Detailed usage guide
- **[README.md](README.md)** - This file (quick reference)

## 🚀 Quick Start

### Creating a Blog Post

1. Create a file in `src/content/blog/`:
   ```bash
   touch src/content/blog/my-post.md
   ```

2. Add frontmatter and content:
   ```markdown
   ---
   title: 'My Post Title'
   description: 'Short description'
   pubDate: 'Nov 28 2025'
   heroImage: '../../assets/blog-placeholder-1.jpg'
   tags: ['tag1', 'tag2']
   category: 'Category Name'
   author: 'Your Name'
   featured: true
   ---

   # Your content here!
   ```

3. Save - it automatically appears on your blog!

## 📁 Project Structure

```text
src/
├── content/
│   └── blog/              # 📝 Your blog posts go here!
│       ├── welcome-to-hekyhomes.md
│       ├── home-design-trends-2025.md
│       └── ... (5 sample posts included)
├── pages/
│   ├── index.astro        # Homepage (featured + recent posts)
│   ├── about.astro        # About page
│   └── blog/
│       ├── index.astro    # Blog listing
│       ├── [...slug].astro # Individual posts
│       ├── tag/[tag].astro # Tag pages
│       └── category/[category].astro # Category pages
├── components/            # Reusable components
├── layouts/
│   └── BlogPost.astro     # Post layout (with tags, author, etc.)
├── utils/
│   └── readingTime.ts     # Reading time calculation
├── assets/                # Images for posts
└── consts.ts              # Site configuration
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎯 Sample Content

Your blog includes 5 professional sample posts:

1. **Welcome to HEKYHomes** (Featured) - Introduction
2. **Top Home Design Trends for 2025** (Featured) - Design insights
3. **10 Brilliant Tips for Small Space Living** - Practical guide
4. **Creating a Sustainable Home** - Eco-friendly tips
5. **First-Time Homebuyer Guide** (Featured) - Comprehensive guide

All with proper tags, categories, and rich content!

## 🎨 Customization

### Update Site Info

Edit `src/consts.ts`:
```typescript
export const SITE_TITLE = 'Your Blog Name';
export const SITE_DESCRIPTION = 'Your description';
export const SITE_AUTHOR = 'Your Name';
```

### Customize Styling

- Global styles: `src/styles/global.css`
- Component styles: In each `.astro` file
- Easy to modify colors, fonts, and layout

## 🌐 Deployment

Deploy to any static hosting:

### Vercel (Recommended)
```bash
# Push to GitHub, then:
# 1. Visit vercel.com
# 2. Import your repo
# 3. Click Deploy
```

### Build for Production
```bash
npm run build
# Outputs to ./dist/
```

## 📊 What You Get

- ✅ 5 professional sample posts
- ✅ Beautiful, responsive design
- ✅ Tags & categories system
- ✅ Reading time estimation
- ✅ Featured posts showcase
- ✅ SEO optimization
- ✅ RSS feed
- ✅ Sitemap
- ✅ Perfect Lighthouse scores
- ✅ Production-ready code

## 👀 Learn More

- **Astro Docs:** [docs.astro.build](https://docs.astro.build)
- **Astro Discord:** [astro.build/chat](https://astro.build/chat)
- **Markdown Guide:** [markdownguide.org](https://www.markdownguide.org/)

## 🎉 You're Ready!

Your complete blogging platform is set up and running. Start creating content and share your stories with the world!

**Happy blogging!** 📝✨
# hekyhomes.com
