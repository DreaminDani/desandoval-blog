---
title: A Better UW Alert System
description: An SMS/Web Application
date: '2013-01-12T00:00:00.000Z'
tags: ['Google App Engine', 'Big Data', 'Mobile', 'SMS', 'Python', 'Twilio', 'Web']
categories: ['Programming']
images: ['portfolio/a-better-uw-alert-system/CF4D39BFE984A622CCF1BEA3AC455FC3.jpg']
---

# The Problem

[The Crossroads incident](http://dailyuw.com/archive/2012/12/03/opinion/uw-alert-notifications-should-be-mandatory) caused the University of Washington to rethink their Alert System. “If there’s a better [system], we certainly want to explore it,” Rittereiser said. “We’re looking into making sure that we can do this kind of rolling message…” From: The Daily

# The Solution

My system takes information from data.seattle.gov (Real Time Police and Fire Reports), earthquake.usgs.gov (Real Time Earthquake Data), and Weather Underground. This data is categorized into three levels and is reported to signed-up users through the text messaging service, Twilio. If you’d like to check it out, it is located at: [des-alertsystem.appspot.com](http://des-alertsystem.appspot.com/)

![Dani at BlinkUX 2013](7C518867BCF6D130185D78D16834457D.jpg)
> I was invited to showcase my alert system at BlinkUX’s 2014 ConveyUX

# The Assignment
Created as a final project for **HCDE 310: Interactive Systems Design and Technology** to meet the following objectives:

*   Identify and brainstorm opportunties to use technical resources to create value for people.
*   Develop those opportunities into designs for interactive systems.
*   Create an interactive prototype of a system — in this case, a web application that generates pages by recieving user input, running Python programs, and processing data.
*   Use or incorporate external resources (e.g., third party software libraries or APIs (application programming interfaces)) into the systems you design.
*   Apply basic [computational thinking](http://www.cs.cmu.edu/~wing/publications/Wing06.pdf), including ([Barr & Stephenson 2011](http://computational-thinking-workshop.iste.wikispaces.net/file/view/Bringing+Computational+Thinking+to+K12.pdf)):
    *   Analyzing and logically organizing data
    *   Formulating problems such that computers may assist
    *   Identifying, testing, and implementing possible solutions
    *   Automating solutions via algorithmic thinking
    *   Generalizing and applying this process to other problems
*   Communicate to:
    *   Ask techical questions in online forums, of peers or experts
    *   Explain or introduce technical resources to peers
    *   Justify design both technical and system decisions
    *   Specify a technical system
*   Know how to use contemporary software development and collaboration tools, including code repositories and integrated development environments.
---
This system was built using the Python programming language, and was used to review the following specific programming skills:

*   Understand the following programming concepts:
    *   Basic: Data types, variables, functions, conditional statements, iteration, lists
    *   Dictionary data structures
    *   Mapping a function onto a list
    *   External libraries
    *   APIs (application programming interfaces)
*   Write programs in Python that demonstrate understanding of all of the above concepts and that use the following features:
    *   File operations
    *   String processing operations
    *   External modules and APIs, including unfamiliar APIs and modules
*   Manipulate data to
    *   Extract and summarize desired elements
    *   Output the processed data in .csv and HTML formats

