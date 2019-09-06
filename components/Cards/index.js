// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.





function newArticle (data){
    const newCardDiv = document.createElement('div');
    const newHeadlineDiv = document.createElement('div');
    const newAuthorDiv = document.createElement('div');
    const newImageDiv = document.createElement('div');
    const newImage = document.createElement('img');
    const newSpan = document.createElement('span');

    //Add Classes

    newCardDiv.classList.add('card');
    newHeadlineDiv.classList.add('headline');
    newAuthorDiv.classList.add('author');
    newImageDiv.classList.add('img-container');
    


    //Add content
    newHeadlineDiv.textContent = data.headline;
    newImage.src = data.authorPhoto;
    newSpan.textContent = `By ${data.authorName}`;

    newCardDiv.appendChild(newHeadlineDiv);
    newCardDiv.appendChild(newAuthorDiv);
    newAuthorDiv.appendChild(newImageDiv);
    newAuthorDiv.appendChild(newSpan);
    newImageDiv.appendChild(newImage);


    return newCardDiv;

}

function newCard (){
    const cardContainer = document.querySelector('.cards-container');
    
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        let data = response.data.articles;
        for (let key in data){
            data[key].map(element => {
                cardContainer.appendChild(newArticle(element));
            })
        }
    })
    .catch(err => {
        console.log(err);
    })
}

newCard();

