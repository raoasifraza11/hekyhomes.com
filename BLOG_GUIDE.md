# 🚀 HEKYHomes Blog - Astro Setup Guide

Welcome to your new Astro blog! Everything is set up and ready to use.

## ✅ What's Installed

- **Astro v5.16.2** - Lightning-fast static site generator
- **Blog Template** - Pre-configured with all you need
- **MDX Support** - Write in Markdown or MDX (Markdown + React components)
- **RSS Feed** - Automatic RSS feed generation
- **Sitemap** - SEO-friendly sitemap
- **5 Sample Posts** - Ready-made examples to learn from

## 🌐 Access Your Blog

| What | URL |
|------|-----|
| **Blog Homepage** | http://localhost:4321 |
| **Blog Posts** | http://localhost:4321/blog |
| **About Page** | http://localhost:4321/about |

**Server is already running!** 🎊

## 📁 Project Structure

```
hekyhomes.com/
├── src/
│   ├── content/
│   │   └── blog/              # 📝 YOUR BLOG POSTS GO HERE
│   │       ├── first-post.md
│   │       ├── second-post.md
│   │       ├── third-post.md
│   │       ├── markdown-style-guide.md
│   │       └── using-mdx.mdx
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro        # About page
│   │   └── blog/
│   │       ├── index.astro    # Blog listing
│   │       └── [...slug].astro # Dynamic blog post pages
│   ├── components/            # Reusable components
│   ├── layouts/               # Page layouts
│   │   └── BlogPost.astro     # Blog post layout
│   ├── assets/                # Images for blog posts
│   └── consts.ts              # Site configuration
├── public/                    # Static files (favicon, fonts)
└── astro.config.mjs           # Astro configuration
```

## ✍️ Creating Blog Posts

### Easy Way: Add a Markdown File

1. Go to `src/content/blog/`
2. Create a new `.md` file (e.g., `my-awesome-post.md`)
3. Add frontmatter and content:

```markdown
---
title: 'My Awesome Post'
description: 'This is what my post is about'
pubDate: 'Nov 28 2025'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

# Welcome to My Post

This is my blog post content written in **Markdown**.

## Features I Love

- Super easy to write
- No database needed
- Lightning fast
- SEO optimized

You can add:
- Lists
- **Bold** and *italic* text
- [Links](https://example.com)
- Images
- Code blocks
- And much more!
```

4. Save the file
5. It automatically appears on your blog! 🎉

### Blog Post Frontmatter Fields

```yaml
---
title: 'Your Post Title'           # Required
description: 'Short description'   # Required
pubDate: 'Nov 28 2025'            # Required - any date format
heroImage: '../../assets/image.jpg' # Optional - hero image
updatedDate: 'Nov 29 2025'        # Optional - if you update the post
---
```

## 🖼️ Adding Images

### Option 1: Use Existing Placeholders

The blog folder already has placeholder images you can use:

```markdown
---
heroImage: 'blog-placeholder-1.jpg'
---
```

Available: `blog-placeholder-1.jpg` through `blog-placeholder-5.jpg`

### Option 2: Add Your Own Images

**Best Practice:** Put images in `src/content/blog/` folder

1. Copy your image to the blog folder:
   ```bash
   cp my-photo.jpg src/content/blog/
   ```

2. Reference it in your post (just the filename):
   ```markdown
   ---
   heroImage: 'my-photo.jpg'
   ---
   ```

3. Or in the content:
   ```markdown
   ![Alt text](my-photo.jpg)
   ```

### Option 3: Use External URLs

```markdown
---
heroImage: 'https://example.com/image.jpg'
---
```

Or in content:

```markdown
![Alt text](https://example.com/image.jpg)
```

### 📝 Important Notes

- ✅ **DO:** Use just the filename: `'my-image.jpg'`
- ❌ **DON'T:** Use relative paths like `'./my-image.jpg'` or `'../../assets/my-image.jpg'`
- ✅ Images must be in `src/content/blog/` folder
- ✅ Astro will optimize them automatically

## 🎨 Customizing Your Blog

### Change Site Title & Description

Edit `src/consts.ts`:

```typescript
export const SITE_TITLE = 'HEKYHomes Blog';
export const SITE_DESCRIPTION = 'Stories, insights, and updates from HEKYHomes';
```

### Edit Homepage

Edit `src/pages/index.astro`

### Edit About Page

Edit `src/pages/about.astro`

### Change Styling

- Global styles: `src/styles/global.css`
- Component styles: Each `.astro` file has a `<style>` section

## 📝 Markdown Features

Astro supports full Markdown syntax:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
~~Strikethrough~~

- Bullet list
- Another item

1. Numbered list
2. Another item

[Link text](https://example.com)

![Image](../../assets/image.jpg)

> Blockquote text

`inline code`

\`\`\`javascript
// Code block with syntax highlighting
const greeting = "Hello World!";
console.log(greeting);
\`\`\`

---

Horizontal rule above
```

## 🚀 Development Commands

```bash
# Start dev server (already running!)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Stop the dev server
# Press Ctrl+C in the terminal
```

## 📦 Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with your static site, ready to deploy!

## 🌍 Deploying Your Blog

Astro sites can be deployed to many platforms:

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Done! Auto-deploys on every push

### Option 2: Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Option 3: GitHub Pages
1. Install adapter: `npx astro add cloudflare`
2. Push to GitHub
3. Enable GitHub Pages in repository settings

### Option 4: Any Static Host
- Upload the `dist/` folder to any web host
- Works with: Cloudflare Pages, AWS S3, DigitalOcean, etc.

## 🎯 Next Steps

1. ✅ **Explore**: Open http://localhost:4321 and check out your blog
2. ✅ **Read Samples**: Look at the example posts in `src/content/blog/`
3. ✅ **Create First Post**: Add your own `.md` file
4. ✅ **Customize**: Update `src/consts.ts` and `src/pages/about.astro`
5. ✅ **Add Images**: Put your images in `src/assets/`
6. ✅ **Deploy**: When ready, build and deploy to Vercel/Netlify

## 🛠️ Advanced Features

### Using MDX (Markdown + Components)

Create `.mdx` files to use React components in your markdown:

```mdx
---
title: 'Using Components'
---

import MyComponent from '../components/MyComponent.astro';

# My Post

Regular markdown here...

<MyComponent />

More markdown...
```

### Adding Tags/Categories

Extend the frontmatter in `src/content.config.ts` to add categories or tags!

### SEO Optimization

Already included:
- ✅ Meta tags
- ✅ Open Graph tags
- ✅ Sitemap
- ✅ RSS feed
- ✅ Semantic HTML

## 💡 Tips

- **Hot Reload**: Changes appear instantly while dev server runs
- **Write Anywhere**: Use any text editor or VS Code
- **No Database**: Everything is just markdown files
- **Version Control**: Perfect for Git - everything is text
- **Fast**: Astro generates static HTML, no JavaScript needed for content
- **Portable**: Easy to backup, move, or migrate

## 📚 Learning Resources

- **Astro Docs**: https://docs.astro.build
- **Markdown Guide**: https://www.markdownguide.org
- **Astro Themes**: https://astro.build/themes
- **Community**: https://astro.build/chat

## 🆘 Troubleshooting

### Server won't start
```bash
# Kill any running processes
pkill -f "astro dev"

# Restart
npm run dev
```

### Port 4321 already in use
Edit `astro.config.mjs` to change the port, or run:
```bash
npm run dev -- --port 3000
```

### Changes not showing
- Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check the terminal for errors

### Build errors
```bash
# Clear cache and rebuild
rm -rf dist .astro node_modules
npm install
npm run build
```

## 🎉 You're All Set!

Your Astro blog is ready! Start by:

1. Opening http://localhost:4321 in your browser
2. Exploring the sample posts
3. Creating your first blog post in `src/content/blog/`

**Happy blogging!** 📝✨

---

Need help? Check the [Astro docs](https://docs.astro.build) or ask in their [Discord](https://astro.build/chat)!

