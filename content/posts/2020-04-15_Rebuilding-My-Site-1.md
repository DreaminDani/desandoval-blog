---
title: 'Rebuilding my personal web site with a focus on web standards - Part 1'
description: >-
  Why I chose to use Hugo and SCSS instead of React
date: '2020-04-15T13:00:00.000Z'
keywords: []
slug: /rebuilding-my-site-1
---

Every time I rebuild my website, I think that I've found the perfect solution to show off my portfolio, write and share my blog, and create a corner of the web that I can truly call my own.

Yet, my last website (which was [custom-built from React tools](https://github.com/d3sandoval/desandoval-dot-net)) made me realize that a website's *architecture* can prevent *its content* from being accessible for all users...

In this series, I will walk through the steps (and tools) it took to...
1. Research a tech stack that made it easy to comply to web standards **(this post)**
2. Get Hugo up and running and styling the home page
3. Migrate my blog from Medium and my portfolio from my old site
4. Style the blog and portfolio using SCSS
5. Design and build out the portfolio browsing experience
6. Migrate the only dynamic content on my site, the "I am..." page
7. Deploy to netlify, set up DNS and redirect rules
8. (Cross-)Post content on others' sites and get feedback on drafts

## The problem: React is too flexible, yet some of its tooling is *way* too opinionated
As a Product Designer, a proponent of semantic HTML and a lean software zealot, it gave me a bit of heartburn to see how bloated my website had become. What started as a fun side project to teach myself React eventually morphed into a custom markdown rendering pipeline that required an always-running node server and a Redis cache!

At first, I strayed away from all-in-one frameworks like Gatsby to avoid bloat and boilerplate in the code I had to write. Yet, when I found myself fighting against what Next.js's opinion of a static site should be, I realized that the amount of configuration required to customize the look and feel of my website made it hard to focus on one thing at a time...

Want a sticky header? Install `helmet`. Need a loading bar for dynamic content? Guess I'll grab `nprogress` for that. Want to write markdown for your content? `react-markdown` feels like a good choice.

Each one of these tools had its own API and learning curve and I still for the life of me could not figure out to do CSS Animations!

Eventually, I grabbed Material-UI to reduce the number of choices I had to make. But if I wanted to customize anything to look different, I had to read pages of documentation just to update some nested element's border radius.

## The pivot: focus on the content
So I took a step back and asked myself. What was I spending so much time on? Why was I so obsessed with all these little things when my site was essentially just...

- A front page (including a bio and a list of honors)
- A link to a blog (hosted on Medium)
- A portfolio home page and its children portoflio posts
- The "I am..." page (which shows my Last.fm and Wallabag feeds)

I steeled myself against sunk cost fallacy and asked, "what is the *bare minimum* that I need to display this content and make writing new content easier?

## The hero: the static site generator
Although Next.js has static site generation built-in, the way I was rendering the markdown made it very difficult to be flexible in my posts. What if I wanted to embed an iframe? Welp! Gotta write a new function for `react-markdown` for that!

There had to be some other tool that had solved the markdown parsing problem for me... A bit of [ducking](https://duckduckgo.com) led me to the following options:
- Jekyll (Ruby, an oldie but a goodie)
- 11ty (Javascript, the new hotness)
- Hugo (Golang, and therefore FAST)

I spent a lot of time reading the docs for each of these (along with a various other SSGs that didn't make this top 3 list). I had used them all on projects in the past but this time I brought my own designer/content-first lens to the table.

So let's get started...

### **Jekyll** ([Quickstart](https://jekyllrb.com/docs/))
> Instructions:
> 1. Install a full Ruby development environment.
> 2. Install Jekyll and bundler gems.
> ...

Yikes. This is a lot of setup for something that claims to be "just *your* content."

### **11ty** ([Getting Started](https://www.11ty.dev/docs/getting-started/))
> Eleventy is available on npm and requires version 8 of Node.js or higher
> ...
> Congratulations—you made something with Eleventy! Now put it to work with templating syntax, front matter, and data files.

This was pretty straightforward but also makes me nervous. Coming from a site with too much flexibility, the "start from scratch" nature of 11ty's setup make nervous.

### **Hugo** ([Features](https://gohugo.io/about/features/))
> Hugo is for people that prefer writing in a text editor over a browser.
>
> Hugo is for people who want to hand code their own website without worrying about setting up complicated runtimes, dependencies and databases.
>
> Hugo is for people building a blog, a company site, a portfolio site, documentation, a single landing page, or a website with thousands of pages.

This ethos really spoke to me as a designer and hugo's technical choices "walked the walk" here. Rather than starting from scratch and needing "version 8 of Node.js or higher" (like 11ty) or requiring me to "Install a full Ruby development environment" (like Jekyll), Hugo is just a binary file (see [Installation](https://gohugo.io/getting-started/installing/)).

As someone who switches computers (and operating systems) frequently, a zero-dependency tool with a focus on speed of setup and content authoring (👋 LiveReload) hooked me with its simplicity.

## Next up: my kingdom for a theme!
In my next post, I'll cover why I chose to setup Hugo with a blank theme and add my own layers of paint... Spoiler alert: Designers are picky!

**Content Warning:** If it's been a while since you wrote plain HTML/CSS, the simplicity of the next few posts may scare you (and possibly cause you to swear off ever writing client-side rendered websites again).