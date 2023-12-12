
Challenge/Project for [GDSC NMIMS MPSTME, Mumbai](https://github.com/GDSC-NMIMS-MPSTME-Mumbai)
Baseed on [Frontend Mentor | Interactive Card](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw)

[Live Preview](https://kratospidey.github.io/Interactve_Card/)

# Stuff I learned

## Absolute Positioning 

- this was hell, basically i was trying to position the cards using flexbox before
- but they wouldn't go outside the parent div and i was genuinely confused how do i make them go outside
- on hindsight i think maybe flexbox has an overflow property? idk 
- but i just ended up finding about absolute positioning and used it
- tho it's def not as dynamic or smart as flexbox but it works and does what it does ig 

## using js libraries for animation

- one cool touch which i wanted to add for myself was have one of those 3d tilt animations which i would see all the time on social media
- i had no idea how to make them tho and turns out i didn't need to know
- you can just import a library and it does all the heavy work for you 💀

## background-images

- this was the worst, basically the gradient/design you see on left (or top if you're on mobile) is actually just an image so 
- if an user would zoom out the image wouldnt' scale and they would just see the white page 💀
- had to do a bit of searching and asked chat gpt and turns out this property called background-image exists in css
- was a livesaver tbh and then i tweaked around a bit, made it repeat in y direction and voila it worked

## using rejex in js

- i learnt regex like last year in python plus had this literally in my last sem in uni so i am pretty used to it
- tho i never used it in js but it's relatively the same except the text not being in quotes or a few other minor differences
- but yep using regex was pretty helpful cause i could just test a condition using .test and would simplify the process so much
- than manually iterating over the whole text like a chump

