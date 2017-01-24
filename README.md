# MiMi - Who are you really? 
Created during the SwampHacks 2017 at University of Florida

#Inspiration
We were inspired by the most common question asked in Miami: "Where are you from?" We started with the idea of building a software that can tell you about your ancestry depending on your voice intonation. After further refinement, we settled on using facial recognition due to the availability of Clarifai API in the hackathon.

We were also inspired by this video on people being surprised by their DNA test results and how it brought them together. [Click here](https://www.youtube.com/watch?v=Fw7FhU-G1_Q) to check it out!

#What it does
Takes a picture of the user and by using machine learning, it will determine the 2 most likely continents they are from. With this information, the user can also get insight on a continent that they may have not anticipated their ancestry to be from.

#How we built it
With Clarifai, HTML, JS, and CSS. Deployed the app using Github pages.

#Challenges we ran into
- It took us longer than expected to train our model because we were having issues with Clarifai's UI and API. Luckily, we were able to reach out to a Clarifai sponsor and were able to find a UI for training our model as opposed to coding it with JS.

- Finding data was difficult because we decided to collect it ourselves due to lack of access to the labeled data.

- Initially, we decided to include nationalities as features, but our training subjects were of **highly** diverse backgrounds. This was an issue because we did not have as much data to support the number of nationalities we came up with. As a solution, we chose to include continents as our features barring Australia and Antartica. We chose the continents as North America, South America, North Asia, South Asia, Africa and Europe. We chose to combine Central and South America into the South America title due to somewhat similar facial features of their people. Similarly, we combined South and East Asia into South Asia.

- Lighting around the subject influences the way they look in the photo and that can negatively affect our data sometimes.

#Accomplishments that we're proud of
- Knowing how and what type of data we should train and test against.
- Setting up the API with the web app.

#What we learned
- Expanded our knowledge on machine learning.
- Setting up the API with the web app.
- How diverse people in our world really are and how similar their features can be. For example here's a quote from an article on [Reconstructing Indian population history](http://www.nature.com/nature/journal/v461/n7263/abs/nature08365.html): 
'Ancestral North Indians' (ANI), is **genetically close** to Middle Easterners, Central Asians, and Europeans


#What's next for MiMi
Add a voice recognition feature which will make the software even better at determining where the subjects are from. - Determine what countries they are from as well.

#Try it out
[here](mimiatlas.com)
