
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

# Images (just in case it doesn't look good in your device 🤡)

  ## Desktop (1440 px)
    
  ### Desktop Normal
  
  ![Desktop Normal](https://github.com/Kratospidey/Interactve_Card/assets/67730931/515244d4-f123-4666-8f1e-7feb4c71d3ea)
  
  ### Desktop Active/Error
  
  ![Desktop Error](https://github.com/Kratospidey/Interactve_Card/assets/67730931/e4d7c0e6-f210-4e94-89e0-d619cf1210f8)
  
  ### Desktop Complete
  
  ![Desktop Complete](https://github.com/Kratospidey/Interactve_Card/assets/67730931/bac21947-1997-4f37-a9fb-4ac513a05d3e)

  ## Mobile (375 px)

  ### Mobile Normal

  ![Mobile Normal](https://github.com/Kratospidey/Interactve_Card/assets/67730931/0ba30f71-3194-4670-bcf5-ea6ba3951801)

  ### Mobile Error

  ![Mobile Error](https://github.com/Kratospidey/Interactve_Card/assets/67730931/44c14847-b422-4530-acc7-7eb70863936a)

  ### Mobile Complete

  ![Mobile Complete](https://github.com/Kratospidey/Interactve_Card/assets/67730931/79f46985-cf28-433a-9ccd-7e04a4354aa5)


# Caveats

> I've just made the design for 1440px and 375px
> while it can scale dynamically up and down
> it doesn't look the best to say the least 💀
> but haven't learned proper dynamic sizing which also looks good and fluid so it is what it is
> oh and cvc (card verification code) also accepts 4 digit pins cause amex cards have 4 digit codes
> and the form submission only works if you add the current year or a later, you can't time travel to the past 💀
> oh and rather just letting user fuck up and make any error i've just prevented the ability for user to give wrong input so the only error possible is the empty error
> just made more sense and looks/works neat


  


