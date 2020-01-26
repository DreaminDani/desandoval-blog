---
title: '#HackHousing Section8Connect'
description: HUD housing finder for section 8 applicants
date: '2015-02-01T00:00:00.000Z'
tags: ['Agile', 'Big Data', 'Heroku', 'Data Analysis', 'Design', 'Hackathon', 'Project Management', 'Presentation']
categories: ['Hackathon']
images: ['portfolio/zillow-hackhousing-section8connect/A9AC56AAFFF70291594ABB161E05752E.jpg']
---

In February, I had the pleasure of leading a development team at Zillow’s #HackHousing Hackathon. As the project manager and design director, I gathered four other team-mates to come up with the application “section8connect”.

Together, we sought out to generate solutions within the following scenario:

> HUD [] subsidizes rent and utility costs for many lower-income families so that they can attain safe, decent housing. But matching eligible tenants with accepting landlords is a perennial challenge – neither, it seems, has a central place to start looking for one another. The biggest barrier to “leasing up” for assisted families is finding a unit that is affordable given the housing assistance payment standards in their area.

More information regarding the hackathon and requirements are located here: [http://bit.ly/1EvLd5d](http://bit.ly/1EvLd5d)

Our final project _was_ located on a heroku instance: [http://section8connect.herokuapp.com/](http://section8connect.herokuapp.com/)

You can find the source code and documentation here: [https://github.com/d3sandoval/hack-housing-section8connect](https://github.com/d3sandoval/hack-housing-section8connect)

# The Seattle Housing Finder

Goals:
- Establish a direct connect between landlords and future Section 8 tenants.
- Create a user-friendly website that gives the Section 8 voucher holders the proper information needed to get them placed in a house, access to an emergency shelter, or an extension on their voucher deadline.
- Display relative and updated information from provided datasets as well as directly from the landlords.

This application was developed February 6-8, 2015 for the [Zillow #HackHousing Hackathon](http://www.eventbrite.com/e/hack-housing-empowering-smarter-decisions-a-weekend-hackathon-registration-15310832111).

![section8connect App screenshot](A9AC56AAFFF70291594ABB161E05752E.jpg)

## Challenge and Approach

Our responds to [Challenge #2: Matching eligible tenants with accepting landlords is a perennial challenge – neither, it seems, has a central place to start looking for one another](http://zillow.mediaroom.com/download/Housing+Hackathon+-+Background.pdf%20).

Our approach for satisfying this challenge was to:

- Research and understand the current challenges facing voucher holders and prospective landlords*
- Develop and iterate strategies in correspondence with HUD and SHA resources in order to provide incentive for landlords to reach out to those in need of housing
- Provide strategies for implementing this new technology - educating voucher holders and landlords of its existence and ability to quickly fill vacancies

# Our application provides a way for landlords to quickly fill vacancies with Section 8 voucher holders.
In order for this application to be as valuable as it can be, we must continue to work with the Seattle Housing Association to advertise this site to current voucher holders as well as advocate its ability to fill otherwise unoccupied (or under-priced) rooms and buildings.

### *You can see our research results in our [presentation slide deck](https://github.com/d3sandoval/hack-housing-section8connect/blob/master/slide-deck.pptx)

You can also [check out the infographic](https://github.com/d3sandoval/hack-housing-section8connect/blob/master/research-results.jpg)!

![Section 8 Infographic](4059A6336008FBC521FEF8345C864C86.jpg)

## Team Members

Our team is comprised of:

[Pico Premvuti](http://students.washington.edu/natatp) – Computer Science, University of Washington 

[Daniel (Dani) Sandoval](http://www.desandoval.net) – Human Centered Design and Engineering (UW) 

Imran Haroon – Former HUD Employee 

John-Paul Patrizio – Post Amazon Employee 

[Spencer Nusbaum](http://www.spencernusbaum.me) – Computer Science, Washington State University

Mitchell Barnette – Digital Technology and Culture (WSU)

### Watch us work in the #HackHousing video:

{{< youtube 9QXi2sAnyJk >}}

[See Spencer at 00:05-00:06, Imran from 00:34-00:40, and Pico, Matthew, and Dani from 00:46-00:51](http://www.youtube.com/watch?v=9QXi2sAnyJk)

## Technologies, APIs, and Datasets Utilized

We made use of:
- Google Maps JavaScript API
- Ruby on Rails
- Spencer's simple email API
- [Public Housing Buildings Dataset](http://zillowhack.hud.opendata.arcgis.com/datasets/2a462f6b548e4ab8bfd9b2523a3db4e2_0?geometry=-123.419%2C47.467%2C-121.245%2C47.745&filterByExtent=true&uiTab=table) (to find "current" availabilities)

## Contributing
More information can be found at the github repro: [https://github.com/d3sandoval/hack-housing-section8connect#contributing](https://github.com/d3sandoval/hack-housing-section8connect#contributing)

