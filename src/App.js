import React from 'react';
import './App.css';
import Landing from './components/landing.js';
import Albums from './components/albums.js';
import Footer from './components/footer.js';
import jrYear from './images/junioryearpromo.jpg';
import soYear from './images/AOSY.jpg';
import frYear from './images/AOFY.jpg';


function App() {
  return (
    <div id="backgroundapp">

      <Landing instagram={'https://instagram.com/ptmusicofficial'}
      tiktok={'https://www.youtube.com/channel/UCavJWE5aOm2JOvGrveRObkQ'}
      twitter={'https://twitter.com/ptofficialmusic'}
      facebook={'https://facebook.com/ptmusicofficial'}></Landing>

      <Albums albumname = {"The Adventures of Junior Year"}
      soundcloudlink = {'https://soundcloud.com/ptmusicofficial/sets/the-adventures-of-junior-year'}
      albumartwork = {jrYear}
      description = {'1. Without Warning 2. She Knows 3. Danielle 4. She Ain\'t You 5. Cocaine 6. Why Can\'t We Be Friends 7. Forever More 8. Love Again 9. Spicy (feat. Mr. Excitement) 10. Guac In My Rito '}></Albums>

      <Albums albumname = {"The Adventures of Sophomore Year"}
      soundcloudlink = {'https://soundcloud.com/ptmusicofficial/sets/the-adventures-of-sophomore'}
      albumartwork = {soYear}
      description = {"1. Last Dance 2. August Nights 3. Good Things Come in Time 4. What It Was Before 5. Ohh Ella 6. Nightshift At The ER"}></Albums>

      <Albums albumname = {"The Adventures of Freshmen Year"}
      soundcloudlink = {'https://soundcloud.com/ptmusicofficial/sets/the-adventures-of-freshmen'}
      albumartwork = {frYear}
      description = {"1. This Weekend 2. One Time Love 3. Doesn\'t Know My Name 4. Infinity 5. The Jungle"}></Albums>

      <Footer emailaddress = 'ptmusicofficial@gmail.com'></Footer>
    </div>
  );
}

export default App;
