---
title: >-
  Hi there! Just started going through this tutorial and thought I’d share a few
  speed bumps:
description: >-
  After the create-react-app command, you still have to install
  styled-components. Otherwise Box.js won’t compile. yarn add styled-components
date: '2018-08-01T20:08:05.624Z'
categories: []
keywords: []
slug: >-
  /@d3sandoval/hi-there-just-started-going-through-this-tutorial-and-thought-id-share-a-few-speed-bumps-120cdc0d8f1c
---

Hi there! Just started going through this tutorial and thought I’d share a few speed bumps:

1.  After the `create-react-app` command, you still have to install styled-components. Otherwise Box.js won’t compile. `yarn add styled-components`
2.  The code example for index.js is missing a `'` after the import statements:

import Box from './styles/Box                        
import Trigger from './styles/Trigger;

These were easy to spot after I saw the errors. But i figured I’d leave a note in case others are running into the same issues.