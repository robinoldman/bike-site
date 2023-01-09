#Mountain hangaman 



##ABOUT THE PROJECT

Mountain hangman is an unreal project created for my PP2 with Code Institute. Mountain hangman is a website which is a simple hangman style game that can be played with an interactive keyboard.

##ABOUT THE WEBSITE

The Web site is a simple 1 page website that allows users to play the hangman game easily. It contains a hidden word, an tnt picture with a fuse that changes when a wrong letter is guessed and a an interactive keyboard.

INDEX

User Experience

Designs

Technology used

Features

Testing

Deployment

Credits

USER EXPERIENCE

STRATEGY

##Reasons for this website:

To learn the names of famous mountians
for people to enjoy playing a game 

##Reasons a user may visit the website:

To learn the names of famous mountians
To enjoy playing a game 

##SCOPE

##What a user may expect:

smooth interactivity
a fun game
interesting graphics
to know when they have lost
to know when they have won

##What a user may want:

a working keyboard
a way of keepoing score



##STRUCTURE

The 1 page website contains: 
simple instructions telling you how to play the game
an image that changes everytime a wrong letter has been guesssed
a word that has been ihidden by dashes that needs to be guessed
a keyboard that reveals a correct letter in the dashes when it has ben pressed
a score are that updates when a game has been won
a mistakes score that updates everytime an incorrect letter has been guessed
an alert message that appeas if you have won a game
a loosing alert to tell you if you have lost a game



##COLOR SCHEME

The color scheme is based on the colours you would see on a snowy mounyain. The clours are a simple blue and white and the writing is a simple black, which is clear and easy to read


##TYPOGRAPHY

The font'Indie Flower', was used for the main body of the web site. This font is playful and adds to the frivolity of the game. For the buttons I used Gill Sans as it is easy to read. 

##TECHNOLOGIES USED

Languages used:

HTML5
CSS
JavaScript

Libraries and programs used:

Google Fonts: Was used to import fonts
    
Compress to go was used to compres large image sized
Cloud convert used to convert jpeg files to webp files
Git: Was used for version control by employing the Gitpod terminal to commit to Git and Push to GitHub.
GitHub: Was used as the repository for the project's code after being pushed from Git.
Formspree to link the website form to my email and receive the information that has been sent
canva.com to create the tnt image

##FEATURES

   

Hangman/tnt image
central to the game is changing hangman image. 
This image consists of a tnt block with a fuse. I used a playful image that was related to mountains which gave a clear visual representation of how many goes the player has left
![hangman image](./assets/images/hangman.png)


Mountain words
These appear randomly  from an array of famous mountain words. 
The word is then hidden with dashes. Each dash represents a letter 


Mistakes score
this is updated by 1every time the player chooses a letter that is not in the word.
when the game is finished the mistakes score goes back to 0


Score
This goes up by 1 each time the player guesses the correct word.
the score stays the same even when the page is refreshed ready for the next game

    
reset button
the reset button can be pressed if the player would like to start fresh.
it resets the whole score and the mistakes button


alerts
A 'you've won alet appears when the word has been correctly guesssed
a'youve lost' alert appears when the player has not guessed the word in under 7 guesses. This alert is delayed my 2 seconds to allow the player the oppportunity to see the final 'explosion image'




@ media queries for
From 700px devices



From 1100px devices




##Testing

VALIDATORS
Html validation
Passed all checks



Css validation 
passed all checks



BROWSERS

I tested how the website loked in different browsers. Firefox was the main browser. I used dev tools to resize the screen. I also wrote text on all pages on a range of devices. This worked well and I had no issues.

Google Chrome Version 107.0.5304.87 (Official Build) (arm64)

Mozilla Firefox 106.0.3 (64-bit)

LIGHTHOUSE

I used Lighthouse for testing: Performance, Best Practices, Accessibility, and SEO.


The game scored high ion everyting paprt from SEO it scored 84
the issues were the gaps betwee nthe buttons and the website not containing meta data.

    
##ISSUES DURING TESTING

during testing I realised thaty not all iof the gamne was visible during the mobile vieww. I changed the breakpoint and the size of the font as well as the size of the refresh button.

during the javascript validation I realised that I had not changed a function that i had renamed

During testing i realised that my buttons were too close together for a mobile. i changed the size of the gap between them

During testing I realised that although there were no commas between the dashes for the initial word, when a letter was guessed commas appeared. I changed the position of my.join to solve this.



##DEPLOYMENT

HOW THIS SITE WAS DEPLOYED

Go to the Git hub repository and click on settings
On the left hand menu click on pages
On the main page on the branch section click 'main' and save
The page should now be available on the github pages section above

HOW TO CLONE THIS SITE

Go to Git hub and navigate to the main page of the repository
On the menu , click Code.
Select and copy https://github.com/robinoldman/mountain-hang-man
Change the current working directory to the location where you want the cloned directory.
type git clone, and then paste the URL you copied earlier.

##CREDITS

CODE
The homepage layout was inspired by the project Love Running by Code Institute . I then later edited and changed the page
I used this tutorial to help me with cantering all my images in the home page and the newsletter. https://blog.hubspot.com/website/center-an-image-in-html
I use this tutorial https://www.w3schools.com/howto/howto_css_bottom_nav.asp to help me anchor my footer to the bottom of the page
   
##MEDIA
The background image was from https://www.freepik.com

#ACKNOWLEDGMENTS

My mentor Brian Macharia helped me through many issues and hurdles along the way with expert advice on my CSS and HTML. My Brother Patrick Oldman also supported me and recommended tutorials to watch online to help with any issues.

##Disclaimer

The content of this Website is for educational purposes only.