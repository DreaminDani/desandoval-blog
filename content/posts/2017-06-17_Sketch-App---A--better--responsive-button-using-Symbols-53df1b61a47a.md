---
title: Sketch App — A (better) responsive button using Symbols
description: Using Symbol Overrides to pin/stretch/edit globally
date: '2017-06-17T23:16:14.995Z'
categories: []
keywords: []
slug: /sketch-app-a-better-responsive-button-using-symbols-53df1b61a47a
---

##  The Problem

There have been many articles written trying to solve the problem of making consistent buttons within a Sketch file. Problems with these methods include:

*   Not being able to measure the actual distance between button elements and other elements on the page
*   Inconsistent “padding” between the centered text of the button and its edges
*   Not using Sketch symbols at all, and preventing file-level changes to the buttons later on

As designers, we must ensure that our hi-fi mockups and prototypes are both pixel-perfect and quick to build. In some cases, these demands require a trade-off between one or the other. Since the introduction of the “Pin on resize” feature in Sketch (and thanks to a plugin or two), we can build our mockups/prototypes quickly and _consistently_ — avoiding confusion in user tests and downstream development.

##  A Better Solution

![Much Fast. Such Easy. Wow.](/img/medium/1__1FtzSmGXES6ffvKFAFyckg.gif)
Much Fast. Such Easy. Wow.

##  What You’ll Need

*   Sketch 44.1 (or later)  
    (previous versions might break “pinning” in symbols)
*   [Button (by Ken Moore)](https://github.com/kenmoore/sketch-relabel-button)
*   Optional: [Artboard Tricks](https://github.com/romannurik/Sketch-ArtboardTricks) OR [Craft Library](https://support.invisionapp.com/hc/en-us/articles/208434046-Craft-Introduction-to-the-Library-plugin) (to keep things organized)

##  How To

First, make your ideal button. As an example, I’ll copy the material design one:

![](/img/medium/1__tNrEZtuMhncnpPKvyvnLEA.png)

##  Creating the Symbol Button

Then, create a symbol out of the button:

![](/img/medium/1__fSNpO0XdOTgckKUqNE3gMA.png)

Double-click the button to navigate to it on the symbol page. Select its background and create another symbol out of it:

![](/img/medium/1__vsUZnL5KijKZOy3dujBmlw.png)

To finish up your symbol, click the text in the middle and change its **Resizing** properties to “Pin object to all edges on resize”:

![](/img/medium/1__MB__1PORPrKMNH__8qdAoqLA.png)

##  Using the Symbol Button

Go ahead and create a new button by inserting from your symbols list:

![](/img/medium/1__KyTJR__Apsu9LEn8cSKOClw.png)

Then, use the “Button” plugin (CMD+J) to change the text and width of the button:

![](/img/medium/1__rYBQK0J1phQR5CEqkgIbHQ.png)

Clicking “OK” will change the _Text_ property in the symbol’s **Overrides** and resize the button to keep a consistent padding between the text and the button edges!

![](/img/medium/1__LedsxnbnnWwHiLhdZxN7FQ.png)

Pretty cool right?

##  Changing the Button’s Color

Symbol Overrides also let you change the color of the button quickly and easily. To do so, simply copy the `base` color you made earlier and change its color:

![](/img/medium/1__w__jLLYL5xPYsjIqlBdJKJA.gif)

Then, navigate to the Button whose color you’d like to change, and change its `base` in **Overrides**:

![](/img/medium/1__AmQk84TLLU2WCZc9ApmHOA.png)

_Viola_ a blue button!

![](/img/medium/1__fkDqbwabTHoHHMcELBAw5A.png)

##  Buttons with Icons

For buttons with icons, you can follow a similar pattern, just make sure you pin your elements correctly:

![](/img/medium/1__P__EnpRX7RUSqWfEjWKdP1Q.png)

For a button with an icon on the left, enable “Pin object to the left edge on resize” for the icon. All of the other settings for your button can remain the same.

**To be able to switch out the icons, make sure their symbols are all the same size.**

Here is an example of it in action:

![](/img/medium/1__zgIdiejvuu9caJHDjo__Dyw.gif)

Combine the ability to switch out icons with your color/text switching workflows and you’ve got a pretty slick set of key strokes to quickly build consistent UI elements!

##  Keeping Organized (optional)

Once you’ve created a variety of buttons, bases, and colors, it can get cumbersome to keep everything organized. To lighten the load of managing your symbols, I recommend following the naming conventions outlined by Javier ‘Simón’ Cuello in [Unleashing The Full Potential Of Symbols In Sketch](https://medium.com/sketch-app-sources/sketch-symbols-b36f7355414a).

Sometimes, you may need to find a particular symbol visually, rather than in a list. For this case, I recommend using [Artboard Tricks by Roman Nurik](https://github.com/romannurik/Sketch-ArtboardTricks) to sort your artboards into a grid and move them into an organized layout. Luckily, Sketch made selecting and moving artboards easier by making that the default selection method.

Alternatively, InVision’s Craft also provides a great way to keep your symbols organized with Library. This adds an extra UI overlay to easily sort and filter your symbols, as well as share them across your organization:

![](/img/medium/1__e3v8oH5UK__i__baa3TwW__Sw.png)

##  Did I miss something?

Is there a use-case I didn’t capture in this blog post? Maybe you were wondering if you can use the Button plugin for other text elements like Tooltips or Toast notifications (hint: you can). **Please let me know in the comments below!**