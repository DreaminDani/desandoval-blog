---
title: 'Rebuilding my site with web standards - Part 2'
description: >-
  A Hugo "Hello World" and the first lines of styling
date: '2020-04-23T13:00:00.000Z'
keywords: []
slug: /rebuilding-my-site-2
---

Intro

In this series, I walk through the steps (and tools) it took to...
1. [Research a tech stack that made it easy to comply to web standards](/posts/rebuilding-my-site-1)
2. Get Hugo up and running and styling the home page **(this post)**
3. Migrate my blog from Medium and my portfolio from my old site
4. Style the blog and portfolio using SCSS
5. Design and build out the portfolio browsing experience
6. Migrate the only dynamic content on my site, the "I am..." page
7. Deploy to netlify, set up DNS and redirect rules
8. (Cross-)Post content on others' sites and get feedback on drafts

## A Hugo "Hello World"
Hugo has a great [Quick Start guide](https://gohugo.io/getting-started/quick-start/) that lets you copy and paste commands into your terminal to get started. Broken down into 7 steps, the guide only requires you to make _one choice..._ **A THEME**

Although the guide uses the [Ananke theme](https://themes.gohugo.io/gohugo-theme-ananke/) as an example, I found myself wary of using a theme that would force me to understand somebody else's styling and possibly undo their work to make my site look the way I wanted.

So I started from scratch with the [blank theme](https://themes.gohugo.io/blank/).

![A screenshot of the blank theme, with not modifications](/img/rebuilding-my-site/blank-theme-start.png)

I later found out that hugo doesn't require you to use a theme at all and, instead will look for the same folders that a theme might provide (`layouts`, `static`, etc.) in your root folder, if no theme is configured ([docs](https://gohugo.io/getting-started/directory-structure/)).

> Themes are essentially a way to encapsulate the content-agnostic code for your site into its own tidy directory.

## From zero to hero: the home page (S)CSS
With screenshots, show the styling as it gets added - layer by layer. Start at https://github.com/d3sandoval/desandoval-blog/commit/9f4d9f8a07ce26688ead8409dde0db96563cf1d3

## Next up: the great migration
In my next post, I'll discuss the tradeoffs of hosting a blog on Medium, how I exported and converted the posts into standard markdown, and mourning the loss of my custom markdown parser.

**Spoiler alert:** It turns out, anything you could do with a custom markdown parser can usually be done much more easily with the tools built into a static site generator.