# PandAI @ nwHacks 2024
## Inspiration

In this era of rapid technological advancements and pervasive social media, countless individuals worldwide grapple with challenges in maintaining focus on crucial tasks. Distraction is more than just an inconvenience; it poses obstacles to learning, contributes to feelings of exclusion, and can even hinder professional advancement in the workplace. It is for these reasons that **PandAI** was conceived.


## What it does

PandAI serves as your dedicated study buddy, providing motivation when you deviate from your tasks. Simply launch the web app, and let PandAI observe you. If you happen to use your phone at inappropriate times, PandAI will send you a text notification to help keep you on track.

## How we built it

We used **Tensor Flow** and streamed our user's webcam using **handtrackjs** to detect the confidence score of their hands being used away from the keyboard and on their phones. We continuously evaluate this data in our front end and selectively send POST requests to our back end. These requests will then tell the Twilio API to send text messages to our users to get them back on track. 

We used **ExpressJS** to handle request for our API response endpoints, as well as **Nodemon** to continuously restart our servers. 

The front end was designed using **React** {David add more stuff} 

## Challenges we ran into

- Integrating and handling API Request between our front end and back end<br>
- Handling web pages attempting to access our video capture function before they have been initialized using UseEffect() <br>
- Designing the Pomodoro timer to blend cleanly on our home page <br>
- Working with NodeJS, ExpressJS, JavaScript, and building a web app for the first time. 


## Accomplishments that we're proud of

- Developed a clean and comforting landing and home page <br>
- Building all of our members first ever web app <br>
- Working with handling front-end inputs to trigger back-end API calls <br>
- Learning new React techniques


## What we learned

- NodeJS, JavaScript, ExpressJS <br>
- Web App Creation<br>
- New React techniques<br>
- Efficient distribution of work in a limited amount of time

## What's next for PandAI

- Eye Gaze tracking to allow more versatile forms of attention tracking<br>
- Userbase creation to allow users to save progress and have the website remember phone numbers<br>
- Customizable encouragement messages using Generative AI<br>





List of frameworks and technologies<br>
ExpressJS<br>
Javascript<br>
React<br>
NodeJS<br>
TensorFlow<br>
handtrackjs<br>
Twilio
