---
title: 'Bookmark Beat: EP 2'
description: Customer profiles, accessibility reviews & my new focus setup
date: '2022-07-22T18:00:00.000Z'
keywords: ['Bookmark Beat', 'Accessibility', 'A11y', 'Focus', 'Customer Profiles', 'FinTech']
slug: /bookmark-beat-ep2
---

It's the second week of Bookmark Beat! A (mostly) weekly summary of my browser history. This week, I'll be skimming through my bookmarks to share a bit about "customer profiles", accessibility on the web, and how I'm playing around with my Mac menu bar to be more focused...

If you find yourself nodding along to this beat, you can subscribe to updates via [Substack](https://bookmarkbeat.substack.com/?showWelcome=true)

### An intro: Paying for things is (still) too hard
Design is more than just the graphical interfaces we interact with every day. A lot of design (or lack thereof) is lurking under the surface... From APIs to SDKs, FTP servers to Mainframes, the world (and money, specifically) now runs on the speed of light (or, more accurately, fiber optic cables strung along the bottom of the ocean).

It's for this reason that I loved reading [20 years of payment processing problems](https://kaimi.io/en/2022/07/20-years-of-payment-processing-problems-en/). This article covers all the ways that humans have tried to solve the problem of "sending money securely over the internet" - including all the ways that's gone horribly wrong. It's a great read... even if it is a bit technically dense at times 😅

---

### There must be something in the water...

Because two of the newsletters I follow, Proof of Concept and The Beautiful Mess, posted about *customer profiles*.

In David Hoang's article, [The skeptic, customer, and fan](https://www.proofofconcept.pub/p/the-skeptic-customer-and-fan), three models of a "user" are sketched out and elaborated on. Users can move between these profiles or stay comfortably within them. David's point is that you can better understand a user's feedback if you align it with the profile you think it came from.

In John Cutler's post, [TBM 30/52: The Customer Profile Trap](https://cutlefish.substack.com/p/tbm-3052-the-customer-profile-trap), this sort of profile-based thinking is applied to marketing. He describes the common problem of "when you design something for everyone, you are actually designing for no-one". He also describes how to avoid this problem by finding overlapping messages between discrete customer profiles.

I like these ideas.

### Have you reviewed your app/site for accessibility problems lately?

Probably not. Fortunately, we have folks like Marcy Sutton to get the fire under our butts and show us, with screen recordings and all, how to audit a site from the comfort of our desktop browser. Check out her [Accessibility Review of kexp.org](https://testingaccessibility.com/accessibility-reviews/kexp), if you haven't already seen it.

While I was thinking about it, I dug into some of my historical bookmarks to find my favorite resources for #a11y - Smashing Magazine's [A Smashing Guide to Accessibility](https://www.smashingmagazine.com/guides/accessibility/) and [Planning for Accessibility](https://alistapart.com/article/planning-for-accessibility/) from A List Apart are a great place to start... if you're building an app/site right now and need something to get up-and-running with accessible components quickly, check out [C&PAC (the Copy and Paste Accessible Code site)](https://mikemai.net/cpac).


## My new focus setup

A few months ago, I bought a subscription to [SetApp](https://setapp.com/). There were a couple apps on there that I really wanted and having one tool to manage a bunch of my subscriptions saves me from having to dive into my email to find the licenses for Mac apps I already paid for (most notably, [Bartender](https://setapp.com/apps/bartender) and [Better Touch Tool](https://setapp.com/apps/bettertouchtool)).

With such a low barrier to entry to trying new apps, and the newly-attained large gaps in my calendar for "focus time", I figured I'd install [Timeless](https://setapp.com/apps/timeless). The conceit of this tool is to hide the actual Mac clock and replace it with something that just shows *time ranges*.

I find that, when there's only a half hour or so left in a focus block, I start to lose steam, goof off, or decide to "not start" something because "I won't have enough time to really get into it anyway". This is a silly mentality and, after downloading and installing Timeless, I hoped that I would finally stop thinking this way...

Unfortunately, the latest version of Mac OS X broke my little heart 💔 

> The clock is no longer optional for Big Sur and newer macOS. It drives the do not disturb shortcut (option + select) and summons the Notification Center when selected.

~ A kind human on [StackOverflow](https://apple.stackexchange.com/questions/406376/how-do-you-remove-the-clock-time-from-the-menu-bar-in-macos)

So I did what that post suggested and turned my menu bar's clock into an analog one. Together with Timeless, it looks like this:

![A screenshot of the Mac menu bar with a time range of 14:00 - 16:00. On the right is an analog clock, showing approximately 2:25](/img/bookmark-beat/ep2/timeless-1.png)

This worked great! I found myself flowing between tasks seamlessly without worrying about whether or not I can complete something before my next break.

Then I attended a meeting. I had no idea how long the meeting had been going when I brought up a topic and was nervous that we might run over! This normally isn't a problem, since I can look at the clock and estimate how long a given topic might take to discuss. But since I only had a time range at the top of my screen, I was totally in the dark.

Also, during user interviews, keeping track of the number of seconds a given task takes, or when to move onto the next part of the interview, is *extremely* important.

So I went to the internet to find a way to show and hide the digital clock at-will... [and find it, I did](https://volect.com/2021/01/bigsur-menubar-clock/)!

I have moved the app, `ToggleClock` to my Dock - next to my Zoom.app icon and, one of my new favorite tools, [Unblah](https://unblah.me/).

So a quick tap of the clock:

![A screenshot of the Mac doc with an analog clock icon. The icon is labeled "ToggleClock"](/img/bookmark-beat/ep2/clock.png)

and my menu bar looks like this:

![A screenshot of the Mac menu bar with a time range of 14:00 - 16:00. On the right is a digital clock, showing exactly 14:28:03](/img/bookmark-beat/ep2/timeless-2.png)

Having the seconds on the clock helps me when I'm facilitating conversations and tracking time-to-completion in prototype testing... It can easily be turned on in settings (and I'm sure there's a way to turn it on/off with applescript):

![A screenshot of the Mac System Preferences. The following options are selected: Digital, use a 24-hour clock, Display the time with seconds](/img/bookmark-beat/ep2/mac-settings.png)

---

Let's wrap this up with the...

### Tweet of the week

> I am begging you to stop calling designs or business concepts "sexy"
> ...
> Humbly suggesting that "glamorous" does the job without creeping anyone out

~ [@nicolarushton](https://twitter.com/nicolarushton/status/1548960010306215936)

---

That's all for this week! If you liked this post, you might also like my shared Notion doc, [Knowledge Dump](https://homeskillet.notion.site/Knowledge-Dump-aa096ca65e214c8995fad4806852bdf5), that I usually send to folks I mentor. Don't forget to [subscribe](https://bookmarkbeat.substack.com/?showWelcome=true) 😉