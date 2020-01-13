---
title: Hack-your-own practice tests on Canvas LMS (using console jQuery)
description: ''
date: '2015-06-11T22:03:42.000Z'
categories: []
keywords: []
slug: >-
  /blog/hack-your-own-practice-tests-on-canvas-lms-using-console-jquery-636dfeb7c38c
---

As useful as the [Canvas Learning Management System](http://www.canvaslms.com/) is for allowing professors to give self-conducted quizzes to their students, there is a key feature that is missing from the examination system. This feature is the ability for students to take the quiz over after it has been closed and graded.

This would be useful as retaking graded quizzes allow for students to practice questions that will — most likely — appear on a final, midterm or in class. In fact, it is proven that taking practice exams over a distributed period of time was the [most effective way to improve student learning](http://www.psychologicalscience.org/index.php/publications/journals/pspi/learning-techniques.html).

To make Canvas more useful, I have found an easy way to change any graded exam into a set of practice questions. A graded exam in canvas looks something like this — with the right and wrong answers marked for each question:

![Screen Shot 2015-06-11 at 14.14.54](https://cdn-images-1.medium.com/max/800/0*NKWhWyCwWZEns1B8.png)

As you can see, this display gives away the answer before a practice test-taker can make their best guess (an important part of exam practice). At first, my solution to this issue of was to zoom in to remove the visual queues on the left of each question, but the score on the right and the highlighted wrong answer, still gave some hints as to what the correct answer could be.

This was unacceptable as I was trying my best to put myself into a “real test taking environment” using resources that were only available through Canvas. To respond to these display issues, I removed all hints at the right/wrong answer using a series of jQuery commands:  
  
// hide answer hints  
$(‘.answer\_arrow’).hide();  
$(‘.numerical\_exact\_answer’).hide();  
$(‘.numerical\_range\_answer’).hide();  
  
// hide inputs/selected answers  
$(‘.question\_input’).val(‘’);  
$(‘.question\_input’).prop(‘checked’, false);  
$(‘.selected\_answer’).css(‘border’,’none’);  
$(‘.selected\_answer’).css(‘color’,’#b3b3b3');  
$(‘.correct\_answer’).css(‘color’,’#b3b3b3');  
  
// hide point total  
$(‘.user\_points’).hide();  
  
Copying and pasting this code into a browser developer console will remove all hitns of what is the right/wrong answer — making the graded quiz more useful for someone using it to study:

![Screen Shot 2015-06-11 at 14.57.55](https://cdn-images-1.medium.com/max/800/0*IjU4MoehtUQV8gOR.png)

Since Canvas can’t regrade your test, I decided to keep the buttons disabled and, therefore, greyed out. As you can tell from the screenshot above, this format is perfect for taking the test by hand with a notebook or spare piece of paper! Not only does this practice method make you [better at remembering the answer](http://www.lifehack.org/articles/productivity/writing-and-remembering-why-we-remember-what-we-write.html) but it also allows you to answer all of the questions before going on to check your answers (like a real practice test).

Of course, to check your answers, just refresh the page! The code you pasted into the console will no longer have run on the page and it will return to its original, graded state. Alternatively, you can hover over each of the answers to find which one was correct:

![Screen Shot 2015-06-11 at 16.17.35](https://cdn-images-1.medium.com/max/800/0*mNCjoHC5ojm43TtQ.png)

Feel free to use this code yourself by…

1.  navigating to a Canvas quiz
2.  opening the developer console on that page  
    instructions on how to do that [here](http://wickedlysmart.com/hfjsconsole/)
3.  pasting in the code!

Feel free to comment or reach out ([@d3sandoval](http://www.twitter.com/d3sandoval)) with suggestions on how to improve this little hack.

**Update:** Added a few lines of code to hide more answer types (rather than just multiple choice). Also added some comments for explanation.