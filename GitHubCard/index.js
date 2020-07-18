/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const axios = require('axios').default;
const myGit = axios.get('https://api.github.com/users/donavynhaley');
console.log(myGit);
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const cards = document.querySelector('.cards');
axios.get('https://api.github.com/users/donavynhaley')
  .then((response) =>{
    console.log(response.data);
    cards.appendChild(createCard(response.data));
  });
 /* .catch((errorResponse) =>{
    console.log(errorResponse);
  })*/
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
const followersArray = [    
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];
followersArray.forEach((person) =>{
  axios.get(`https://api.github.com/users/${person}`)
  .then((response) =>{
    cards.appendChild(createCard(response.data));
  })
});
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const createCard = (user) =>{
  // Create elements
  const ce = document.createElement.bind(document);
  const card = ce('div');
  const img = ce('img');
  const cardInfo = ce('div');
  const name = ce('h3');
  const username = ce('p');
  const location = ce('p');
  const profile = ce('p');
  const followers = ce('p');
  const following = ce('p');
  const bio = ce('p');
  const profileLink = ce('a');

  // Adding classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  // Appending elements
  card.appendChild(cardInfo);
  profile.appendChild(profileLink);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  
  // Adding content to elements
  img.src = user.avatar_url;
  profileLink.href = user.url;
  profileLink.textContent = user.url;
  name.textContent = user.name;
  username.textContent = user.login;
  location.textContent = `Location: ${user.location}`;
  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  profile.textContent = `Profile: ${profileLink}`;
  bio.textContent = `Bio: ${user.bio}`;

  return card;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
