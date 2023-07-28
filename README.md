Notes: 
1-Due to GitHub's policy the user profile image in the card won't display on github readme
2-I made this simple lame api cause I was bored
3- https://readmestats.onrender.com/ click here to go to a demo
4- probably won't add dynamic badges sry :P

# Readme-api
### One api for all badges, stats, checks and more

![alt_text](https://readmestats.onrender.com/badge?label=Build&info=-version)

- Content :
  - [Badges](#badges)
  - [Cards](#cards)
  - [Stats](#stats)
  - [Skills](#skills)
  
<br>

- Tech used :
    - ExpressJs
    - TypeScript
<h2 id="badges">Badges :</h2>
<p>

   ### in order to obtain somthing similar to this :  <img align="center" src='https://readmestats.onrender.com/badge?label=Your&info=Badge'>
   > this is the base link `https://readmestats.onrender.com/badge?`
   you must follow a certain query.
   the url should at minimum have a ```label``` and ```info``` in the query

   >`https://readmestats.onrender.com/badge?label=Your&info=Text`

   results :
   <img align="center" src='https://readmestats.onrender.com/badge?label=Your&info=Text'>
   
   Optional query :
   > ```style=flat``` Style to cancel the rounded borders <br>
   > ```main=191919``` Label Background Color (Hex value withou the # and 6 chars) <br>
   > ```secondary=812CD1``` Info Background Color  (Hex value withou the # and 6 chars)

   your query should look similar to this
   > `https://readmestats.onrender.com/badge?label=Your&info=Text&main=191919&secondary=812CD1&style=flat`

   results :
   <img align="center" src='https://readmestats.onrender.com/badge?label=Your&info=Text&main=191919&secondary=812CD1&style=flat'>
</p>
<h2 id="skils">Skills :</h2>
<p>

   ### in order to obtain somthing similar to this :  <img align="center" src='https://readmestats.onrender.com/skill?name=gradle'>
   > this is the base link `https://readmestats.onrender.com/skill?`
   you must follow a certain query.
   the url should at minimum have a ```name``` in the query

   >`https://readmestats.onrender.com/skill?name=gradle`

   results :
   <img align="center" src='https://readmestats.onrender.com/skill?name=gradle'>
   
   Optional query :
   > ```color=61DBFB``` Color for the icon  (Hex value withou the # and 6 chars) <br>
   > ```bg=333333``` Background Color for the whole badge (Hex value withou the # and 6 chars)
###### Where to get icon name ? here ```https://simpleicons.vercel.app```
    
   your query should look similar to this
   > `https://readmestats.onrender.com/skill?name=react&color=61DBFB&bg=333333`

   results :
   <img align="center" src='https://readmestats.onrender.com/skill?name=react&color=61DBFB&bg=333333'>
</p>
<h2 id="cards">Cards :</h2>
<p>

   ### in order to obtain somthing similar to this :  <img align="center" src='https://readmestats.onrender.com/card?user=arrrax1'>
   > this is the base link `https://readmestats.onrender.com/card?`
   you must follow a certain query.
   the url should at minimum have a ```user``` in the query

   >`https://readmestats.onrender.com/card?user=arrrax1`

   results :
   <img align="center" src='https://readmestats.onrender.com/card?user=arrrax1'>
   
   Optional query :
   > ```theme=gold``` theme for the card

   your query should look similar to this
   > `https://readmestats.onrender.com/card?user=arrrax1&theme=complicated`

   results :
   <img align="center" src='https://readmestats.onrender.com/card?user=HaidarEzio&theme=complicated'>
</p>

<h2 id="stats">Dynamic Badge :</h2>
<p>
    to be added
</p>

<h2 id="intro">Introduction Image :</h2>
<p>
    to be added
</p>
