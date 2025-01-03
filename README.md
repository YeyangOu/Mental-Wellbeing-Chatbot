# Mental Wellbeing Chatbot


## Description of this Project

This is a mental health support therapist chatbot me and a team of 2 other UBC students made for a Hackathon Project. 

Below is a link to a video description of our project:
https://youtu.be/u7g-Rn2KKlw

## Inspiration
In a world where AI is becoming increasingly more integrated in our life, our team got the idea of constructing a wellness support chatbot to make mental health care and emotional well-being services more accessible to everyone, regardless of time, place, or circumstance.

## How It Works and How to Try it?

Step 1: Download the github packages from the "Try it out" links". Extract the file and import the file into Vscode or other integrated code development environment.

Step 2: Then, you need to install web vitals and the react-script, since the code is written using react script. Click "terminal" on the top left corner, select "new terminal". Next, type the following codes separately into the terminal one by one and press enter.

"npm i web-vitals --save-dev"

"npm install react-scripts"

Step 3: Start the server. Type:

"node server" in the terminal to start the server.

Step 4: Start the program:

Type: "npm start" in the terminal to start the program. This would open up another page with the chatbot and it is ready to use.

Upon opening the the page, you can type a message using your keyboard and send the message with the enter key or the button on the lower right corner of the screen. Then, an AI therapist would respond to your message and request.

## How We Built It?

First, we constructed a chat room using a given template codes given online which is written in react, css, html, java, and javascript. Then, we acquired the API of an AI chatbot and implemented the AI into our chat room. The AI is given the instruction to act as a therapist and emotional support consultant who is confident, empathetic, non-judgmental, respectful, observant and accepting. If the user says a greeting, politely greet the user and ask them about how they are feeling.


## Challenges Encountered

When we implemented the AI's API into the chatroom, we received "Uncaught runtime errors: TypeError: Failed to fetch". This causes us to be stuck on the issues for a long time. Nevertheless, we found out in the end that this is because the role description we had given to our AI is too long which caused problems in the system. We made this description shorter which resolves the issue. 

## What We Learned?
In this project, many of us learned how to use the react coding framework to build a chat room. In addition, we also learned how to install the API of an AI into our code.

## What's Next for Wellness Therapy Chatbot

For future projects, our team is planning on adding a sign in mechanism for the chatbot so that users can log in with a Google account and start using it. We might also add calming and soothing music which plays when the user logins into and a view of nature in the background. These elements can help the user relax.





