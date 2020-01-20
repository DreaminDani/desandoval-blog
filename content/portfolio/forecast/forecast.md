---
title: forecast.py
description: The weather gods must be crazy
date: '2013-11-01T00:00:00.000Z'
keywords: ['Python', 'Interactive', 'CLI', 'API']
categories: ['Programming']
topImage: ![IMAGE](B6AED7F58F3AA4D605742B037C8B78F2.jpg)
---

The forecast program is a little project I worked on to see what I can do in an hour with access to an API or two. It was made for the class
[HCDE310: Interactive Systems Design & Technology](http://www.smunson.com/teaching/hcde310/a13/)

The program gets data from the “weather gods” by looking up an input location with the google maps api ([https://developers.google.com/maps/](https://developers.google.com/maps/)) and weather data with forecast.io ([https://developer.forecast.io/](https://developer.forecast.io/)).

Written using python2.7 (run with `python forecast.py`))
```python
import urllib
import urllib2
import json

def checkInput(input):
    if input.lower().startswith("y"):
        return True
    elif input.lower().startswith("n"):
        return False
    else:
        print "The gods are sorry. That is not a valid answer."
        return False

def pretty(obj):
    return json.dumps(obj, sort_keys=True, indent=2)

def caller(key, lat, lng):
    base = "https://api.forecast.io/forecast/"
    return base + key + "/" + str(lat) + "," + str(lng)

def isItRaining(currently):
    if currently["precipIntensity"] is 0:
        print "It is not raining"
    else:
        print "It is raining at", currently["precipIntensity"], "intensity" #whatever that means
    
def isItGoingToRain(currently):
    x = currently["precipProbability"] * 100
    print "There is a", x, "percent chance of rain"
    
def isItCloudy(currently):
    if not currently["cloudCover"] is 0:
        if currently["summary"].lower().startswith("drizzle"):
            print "There is a slight", currently["summary"].lower()
        else:
            print "It is", currently["summary"].lower()
    else:
        print "It is not cloudy"
    
def isItSnowing(currently):
    if (currently["temperature"] < 32) and (currently["precipIntensity"] > 0):
        print "It is snowing at", currently["precipIntensity"], "intensity"
    else:
        print "It is probably not snowing"
    
def temp(currently):
    print "It is currently", currently["temperature"], "degrees Fahrenheit"

def summary(d):
    isItRaining(d)
    isItGoingToRain(d)
    isItCloudy(d)
    isItSnowing(d)
    temp(d)

def userInput(x, d):
    if x == 1:
        isItRaining(d)
    elif x == 2:
        isItGoingToRain(d)
    elif x == 3:
        isItCloudy(d)
    elif x == 4:
        isItSnowing(d)
    elif x == 5:
        temp(d)
    elif x == 0:
        summary(d)
    else:
        print "The gods are not happy with that answer..."
        
def getLocation(input):
    print "Gathering location data..."
    gurl = "http://maps.googleapis.com/maps/api/geocode/json?"
    print " "
    d1 = {"address":input, "sensor":"false"}
    url = gurl + urllib.urlencode(d1)
    response = urllib2.urlopen(url)
    d2 = json.load(response)
    if len(d2["results"]) is 0:  
        print "The gods cannot find your US location..."
        return None
    else:
        print "The gods are now monitoring the weather of",
        for comp in d2["results"][0]["address_components"]:
            print comp["long_name"] + ",",
        print " "
        loc = {}
        loc[0] = d2["results"][0]["geometry"]["location"]["lat"]
        loc[1] = d2["results"][0]["geometry"]["location"]["lng"]
        return loc

def main():
    api_key = "331bcc3a449e5ced40cce116f0bf01de"
    input = raw_input("Please enter your city/town (e.g. Seattle, WA): ")
    loc = getLocation(input)
    if (not loc is None):
        runLoc = True ## determines if the location should be used again
        while runLoc == True:
            lat = loc[0]
            lng = loc[1]
            feed = urllib2.urlopen(caller(api_key, lat, lng))
            d = json.load(feed)
            ##print pretty()
            print "Please ask the weather gods something..."
            print "To inquire about current rainfall, enter 1"
            print "To inquire about future rainfall, enter 2"
            print "To inquire about current cloud cover, enter 3"
            print "To inquire about current snowfall, enter 4"
            print "To inquire about current temperature, enter 5"
            print "For a summary of all of these, press 0"
            print " "
            input = raw_input("Your inquiry? ")
            userInput(int(input), d["currently"])
            print " "
            print "The weather may have changed since you last asked..."
            input = raw_input("Inquire about the current location again? ")
            runLoc = checkInput(input)
            print " "

print "Welcome to the weather gods' domain."
print " "
runProgram = True ## determines if the program should run
while runProgram:
    main()
    uI = raw_input("Inquire about another location? ")
    print " "
    runProgram = checkInput(uI)
print "This program will now terminate..."
```
**Download Source:** [http://goo.gl/i3Xwnd](http://goo.gl/i3Xwnd)