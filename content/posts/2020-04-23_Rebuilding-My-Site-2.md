---
title: 'Rebuilding my site with web standards - Part 2'
description: >-
  Getting Hugo up and running and styling the home page
date: '2020-06-16T13:00:00.000Z'
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

![A screenshot of the blank theme, with no modifications](/img/rebuilding-my-site/blank-theme-start.png)

I later found out that hugo doesn't require you to use a theme at all and, instead will look for the same folders that a theme might provide (`layouts`, `static`, etc.) in your root folder, if no theme is configured ([docs](https://gohugo.io/getting-started/directory-structure/)).

> Themes are essentially a way to encapsulate the content-agnostic code for your site into its own tidy directory.

## From zero to hero: the home page (S)CSS
Pretty much everything I write and release with my name on it is made with two fonts: Raleway and Merriweather. So, of course, the first thing I did was add those fonts to the page:

<details>
  <summary>Code to enable fonts in baseof layout</summary>

  ```html
  <!-- baseof.html -->
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
  ```

</details>
<details>
  <summary>Code to enable fonts in main.scss</summary>

  ```css
  /* main.scss */
  body {  
      font-family: 'Merriweather', serif;
  }


  h1, h2, h3, h4, h5, h6 {
      font-family: 'Raleway', sans-serif;
  }

  ```

</details>

### The new "blank" theme:
![A screenshot of the blank theme, with fonts changed](/img/rebuilding-my-site/with-font.png)

I also added SCSS support ([more info](https://gohugo.io/hugo-pipes/scss-sass/)):

</details>
<details>
  <summary>Code to enable SCSS</summary>

  ```html
  <!-- baseof.html -->
    {{- $sassOptions := dict "targetPath" "assets/css/main.css" -}}

    {{- if (eq (getenv "HUGO_ENV") "production") -}}
      {{- $sassOptions = merge $sassOptions (dict "outputStyle" "compressed") -}}
    {{- else -}}
      {{- $sassOptions = merge $sassOptions (dict "enableSourceMap" true) -}}
    {{- end -}}

    {{- $style := resources.Get "css/main.scss" | toCSS $sassOptions -}}

    {{- if (eq (getenv "HUGO_ENV") "production") -}}
      {{- $style = $style | postCSS | fingerprint -}}
    {{- end }}

    <link rel="stylesheet" type="text/css" href="{{ $style.Permalink }}">
  ```
  ```js
  // postcss.config.js
  module.exports = {
    plugins: {
      autoprefixer: {
        browsers: [
          "last 2 versions",
          "Explorer >= 8",
        ]
      }
    },
  }
  ```

</details>

The content you see in the screenshot, above, is the default theme content. My next step was to re-add the content from my original site. First, the header and my color palette:

</details>
<details>
  <summary>HTML content for header component</summary>

```html
<!-- layouts/partials/header.html -->
<header>
	<a class="logo-nav" href="{{ .Site.BaseURL }}">
		<img src="/img/logo.png" />
	</a>
	<nav>
		<div class="site-title">{{ .Site.Title }}</div>
		{{ with .Site.Menus.main }}
		<ul>
			{{ range . }}
			<li><a href="{{ .URL | relURL }}">{{ .Name }}</a></li>
			{{ end }}
		</ul>
		{{ end }}
	</nav>
</header>
```

</details>

The CSS is broken up into two files:

```css
/* main.scss */
@import "layout/index.scss";
@import "components/header.scss";
```

</details>
<details>
  <summary>index.scss</summary>

  ```css
  /* layout/index.scss  */
  @import "../tokens.scss";

  html {
      background: $color-background-dark;
      box-sizing: border-box;
      color: $color-font;
  }

  *, *:before, *:after {
      box-sizing: inherit;
  }

  body {     
      font-family: $font-paragraph;
  }

  h1, h2, h3, h4, h5, h6 {
      font-family: $font-heading;
  }

  a {
      color: $color-primary;

      &:hover, &:focus {
          color: $color-secondary;
      }
  }

  main {
      margin-top: 7em;
  }
  ```
  
</details>
<details>
  <summary>header.scss</summary>

  ```css
  /* components/header.scss */
  @import "../tokens.scss";

  header {
      display: flex;
      position: fixed;
      z-index: $elevation-header;

      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      
      padding: 0.5em;

      background-color: $color-header-background;
      @include elevation(4);

      .logo-nav {
          img {
              width: 4.5em;
              height: auto;
              margin: 0 0.45em 0 0.2em;
          }
      }

      .site-title {
          font-family: $font-heading;
          font-weight: 700;
          font-size: 1.7rem;
          letter-spacing: 0.018rem;
          padding-left: 0.15em;
      }

      nav {
          display: flex;
          flex-direction: column;
          
          ul {
              display: inline-block;
              list-style: none;
              margin: 0;
              margin-left: -0.15em;
              padding: 0.6em 0;
          }

          li {
              display: inline;
              padding: 0.25em 0.45em;

              a {
                  font-family: $font-heading;
                  letter-spacing: 0.024rem;
                  text-transform: uppercase;
                  text-decoration: none;
              }
          }
      }
  }
  ```

</details>

### Here's the header:
![A screenshot showing the header and new colors](/img/rebuilding-my-site/new-colors-and-header.png)

I decided to use SCSS variables to make it easy to modify things across the site with very small changes. This let me experiment with things, later on, like deciding which font to use for the lower-heirarchy headers (like h4-h6).

Also note the use of semantic html within the `header` component and styles. This makes it easy for screen readers to digest the page. Add to that auto-generated navigation using hugo's templating syntax and we're left with a very minimal code base.

Copying over the content from my old site, I added in some CSS Grid, with fallbacks (and [normalize.scss](github.com/necolas/normalize.css)) for older browsers and mobile layouts:

</details>
<details>
  <summary>Home page layout</summary>
    
  ```html
  <!-- layouts/index.html -->
  {{ define "main" }}
  <main aria-role="main">
    <h1>{{.Title}}</h1>
    {{ with .Params.subtitle }}
    <span class="subtitle">{{.}}</span>
    {{ end }}
    <div class="homepage-content">
      {{.Content}}
    </div>
  </main>
  {{ partial "sidebar.html" . }}
  {{ partial "honors.html" . }}
  {{ end }}
  ```

</details>
<details>
  <summary>Sidebar component</summary>

```html
<!-- layouts/partials/sidebar.html -->
<aside>
	<section class="profile">
		<img src="/img/profile-purple.jpg" />
		<div class="info">
			<h1 class="name">Dani<br/><a href="https://dev.to/DreaminDani" target="_blank"  rel="noopener noreferrer">@DreaminDani</a></h1>
			<h2 class="job">Product Designer</h2>
			<h3 class="company">Pivotal Labs (VMware)</h3>
			<h4 class="location">Cambridge, MA</h4>
		</div>
	</section>
</aside>
```

</details>
<details>
  <summary>Honors component</summary>

```html
<!-- layouts/partials/honors.html -->
<section class="honors">
    <h2>Honors</h2>
    <div class="honors-list">
        {{ range .Site.Data.honors }}
        <div class="honor-item">
            <a href="url" target="_blank" rel="noopener noreferrer">
                <img src="{{ .logo }}" alt="{{ .organization }} logo" />
                <h2>{{ .title }}</h2>
                <h3>{{ .organization }}</h3>
            </a>
            <p>{{ .description }}</p>
        </div>
        {{ end }}
    </div>
</section>
```

As before, the SCSS files are broken out for maintainability:

```css
/* main.scss */
@import "lib/normalize.scss";

@import "layout/index.scss";

@import "components/header.scss";
@import "components/honors.scss";
@import "components/sidebar.scss";
```

</details>
<details>
  <summary>Homepage/global styles</summary>

```css
/* layout/index.scss */
@import "../lib/tokens.scss";

html {
    background: $color-background-dark;
    color: $color-font;

    // prettify fonts: https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {     
    font-family: $font-paragraph;

    padding: 0 40px;
    max-width: 1080px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 60px;
    align-items: start;

    main {
        grid-column: 1;
        margin-top: 7em;
    }

    aside {
        margin-top: 7em;
    }

    footer {
        grid-column: 1 / auto;
    }

    section.honors {
        grid-column: 1 / span 2;

        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
    }

    @media #{$breakpoint-mobile} {
        grid-gap: 8px;

        main {
            grid-column: 1 / span 2;
        }
        aside {
            margin-top: 24px;
            grid-row: 2;
        }
    }
}

h1 {
    font-family: $font-heading;
}

h2, h3, h4, h5, h6 {
    font-weight: 400;
    font-family: $font-heading;
}

p {
    font-size: 0.95rem;
    line-height: 1.5;
}

a {
    color: $color-primary;
    text-decoration: none;

    &:hover, &:focus {
        color: $color-secondary;
    }
}
```

</details>
<details>
  <summary>Sidebar styles</summary>

```css
/* components/sidebar.scss */
aside {
    .profile {
        img {
            border-radius: 50%;
            width: 100%;
            height: auto;

            // fallback for non-grid browsers
            max-width: 200px;
            @supports (display: grid) {
                max-width: unset;
            }
        }

        .info {
            & > * {
                margin: 0;
            }

            .name {
                margin: 8px 0;
                line-height: 1;
            }
            .job {
                margin-bottom: 4px;
            }
        }
    }

    @media #{$breakpoint-mobile} {
        .profile {
            img {
                max-width: 200px;

                display: block;
                float: left;
                margin-right: 0.87em;
            }

            .info {
                display: inline-block;

                h1 {
                    padding-top: 0.4em;
                }
            }
        }
    }
}
```

</details>
<details>
  <summary>Honors styles</summary>

```css
/* components/honors.scss */
.honors {
    margin-top: 60px;

    > h2 {
        font-size: 2em;
        margin: 0;
        margin-left: 80px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.8);
        
        @media #{$breakpoint-tablet} {
            margin-left: 40px;
        }
    }
    
    .honors-list {
        display: flex;
        padding: 0 80px;
        overflow-x: scroll;
        scroll-padding: 0 50%;
        scroll-snap-type: x mandatory;
    
        /* Horizontal Scroll Indicator */
        background-image: linear-gradient(to right, $color-background-dark, $color-background-dark), linear-gradient(to right, $color-background-dark, $color-background-dark), linear-gradient(to right, rgba(0, 0, 20, .87), rgba(255, 255, 255, 0)), linear-gradient(to left, rgba(0, 0, 20, .87), rgba(255, 255, 255, 0));
        /* Shadows */
        /* Shadow covers */
        background-position: left center, right center, left center, right center;
        background-repeat: no-repeat;
        background-color: $color-background-dark;
        background-size: 20px 100%, 20px 100%, 10px 100%, 10px 100%;
        background-attachment: local, local, scroll, scroll;
    
        .honor-item {
            scroll-snap-align: center;
            display: inline-block;

            min-width: 16em;
            padding: 2em 0;
            
            text-align: center;
    
            img {
                height: 64px;
            }

            h2 {
                color: #fff;
                margin: 0;
            }
            
            h3 {
                margin: 0.4em 0 0 0;
            }
        }
    }
}
```

</details>

### The home page content (zoomed out to show the entire page):
![A screenshot showing the main content area, sidebar and honors row at the bottom](/img/rebuilding-my-site/homepage-grid.png)


### The fallback layout:
![A screenshot showing the main content area, sidebar and honors stacked on top of each other](/img/rebuilding-my-site/homepage-fallback.png)

Note that the home page content is just a markdown file and the honors list is a JSON file in the `data` directory. You can view that file, along with the rest of the code base during this iteration, [over on GitHub](https://github.com/DreaminDani/desandoval-blog/tree/adf2c172e556fcf80f8961af21aa2d0d1a45adc6).

## Next up: the great migration
In my next post, I'll discuss the tradeoffs of hosting a blog on Medium, how I exported and converted the posts into standard markdown, and mourning the loss of my custom markdown parser.

**Spoiler alert:** It turns out, anything you could do with a custom markdown parser can usually be done much more easily with the tools built into a static site generator!