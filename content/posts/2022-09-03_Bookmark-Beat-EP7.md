---
title: 'Bookmark Beat: EP 7'
description: Let's make building things... possible!
date: '2022-09-03T16:00:00.000Z'
keywords: ['Bookmark Beat', 'JWST', 'Figma', 'Design Systems', 'Svelte']
slug: /bookmark-beat-ep7
---

I spent my afternoon yesterday helping some friends in Philadelphia plan their first-ever hackathon, so please forgive this day-late bookmark beat... I'm really excited to share more details about that as the event gets closer 🧑🏽‍💻

This week, I geek out about the latest sounds (yes, *sounds*) from the James Webb Space Telescope folks at NASA, what it takes to create a Figma plugin and how to build, maintain and organize a design system...

If you vibe to this sort of sound, you can subscribe to updates via [Substack](https://bookmarkbeat.substack.com/?showWelcome=true)

### An intro: Surround sound... in SPACE!

If you follow me on Twitter, you've likely already seen [how excited I am](https://twitter.com/d3sandoval/status/1564986003407998977) about the new [audio tracks that NASA released this week](https://webbtelescope.org/contents/news-releases/2022/news-2022-040.html). "A team of scientists, musicians, and a member of the blind and visually impaired community worked to adapt Webb’s data... to make Webb’s images and data understandable through sound – helping listeners create their own mental images."

Here's the quick links to the two new tracks:
- [Cosmic Cliffs in the Carina Nebula Sonifications](https://webbtelescope.org/contents/media/videos/2022/040/01GA9363QVSRFMTE0FYKHREHCG)
- [Southern Ring Nebula Sonifications](https://webbtelescope.org/contents/media/videos/2022/040/01GA95N5KXVVMB7DTNE68QCQR4)

Don't forget to scroll further down each page to read about what each sound represents 🎶

---

Anyway...

### Let's talk about Figma plugins

Ever since Figma announced its plugin API in 2019, developers have been finding clever ways to extend its functionality for designers, developers and anyone whose use-case Figma hadn't already been built for. One of the biggest niches in the plugin space has been in theming and design systems.

For example, [Themer](https://www.figma.com/community/plugin/731176732337510831/Themer) speeds up the arduous process of creating and switching themes within team libraries. It was also just rewritten in my favorite JavaScript framework, Svelte! Tom Lowry, the creator of Themer, described what new features come with this rewrite in a [recent tweet](https://twitter.com/negativespaceca/status/1565941169942630400).

...but what I'm most excited about is what a new wave of plugins written in Svelte means for the Design community at large! Here's why:
1. Svelte is much more approachable than other programming languages with its [step-by-step tutorial](https://svelte.dev/tutorial/basics) and its [\'use the platform\' ethos](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started#svelte_a_new_approach_to_building_rich_user_interfaces)
2. Designers are constantly being told to "learn to code" yet the examples they have to build are usually something unexciting, like a todo-list app. Building your own tools is one of the best ways to learn new skills, since you'll be more likely to finish something that's actually useful to you
3. Building tools for others and sharing them (for instance, within the Figma community) is a great way to get your name out there, help others, and learn about workflows outside of your day-to-day

When I was writing this month's [Svelte Newsletter](https://svelte.substack.com/), I stumbled upon this [step-by-step guide to building a Figma plugin in Svelte](https://www.lekoarts.de/javascript/creating-a-figma-plugin-with-svelte). If you're interested... try it! Build a plugin 🛠️

I'm so excited to see what folks make with these new foundational tools!

### Speaking of foundations...

There's been a lot of new design system content written this month! From [the story of the Nucleus design system](https://blog.nucleus.design/once-upon-a-time-nucleus/) to ZeroHeight's reflection on the [design of people systems](https://learninghub.zeroheight.com/hc/en-us/articles/8461756153499-Design-of-people-systems), it's been great to read about how teams have been dealing with the inevitable conflict that arises out of the shared goal of "building a shared design toolkit."

Stepping away from the people side and into the code, this developer-focused guide for [building a design system](https://www.tonympdx.com/blog/post/building-a-design-system-1-setup/) is one of the most practical and detailed post I've read on the subject. I love that the author doesn't shy away from the complexity of share storage, many stylesheets, and all the other decisions that come with a non-trivial design system.

## Coda: A different sort of system design

Sometimes, I find things that are so outside of my realm of understanding that I can't help but pry them open out of curiosity. This week, it was this website on [preparing for system design interviews](https://www.karanpratapsingh.com/courses/system-design) scratched that itch...

The first few chapters felt familiar. Sure, I know what technologies power the web and I have a good sense for what it takes to hook them all together... Heck! My personal website used to run on a tiny Apache server that I had to manually upload PHP files to 👴🏼 But, after reading through the first few chapters, I found my respect for my engineering colleagues exponentially increasing alongside the word count 😉

I think it's important that designers try their best to understand the materials that make up what our team is building. Just like an architect should know when to use wood or metal, a designer should have a sense for what constraints a [REST, GraphQL, or gRPC](https://www.karanpratapsingh.com/courses/system-design/rest-graphql-grpc) backend bring with them - compared to an app built with [Long polling, WebSockets, or Server-Sent Events (SSE)](https://www.karanpratapsingh.com/courses/system-design/long-polling-websockets-server-sent-events), for instance.

So, if you're curious, maybe check out a couple chapters of this one... it's worth the brain workout!

---

Now let's get to the...

### Tweet of the week

> We built all of GitHub, with zero initial funding, with absolutely no grind culture of any kind, ever.
>
> I promise, whatever Thing you're building, it does Not Need culturally enforced exploitation to happen

~ [@anaisbetts](https://twitter.com/anaisbetts/status/1562477553314861058) in response to a, now deleted, tweet by [@oven_sh](https://twitter.com/oven_sh/) that extolled the virtues of overworking in their job ad

---

Thanks for reading this (somewhat more geeky) bookmark beat! What did you think? Have you [subscribed yet](https://bookmarkbeat.substack.com/?showWelcome=true)?

See ya next beat 🥁!