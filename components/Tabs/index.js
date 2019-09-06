// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


 


 function newTab (){

    //Create 

    newTabDiv = document.createElement('div');
  
    //Class

    newTabDiv.classList.add('tab');
 

    newTabDiv.textContent = 'Topic:';


    return newTabDiv
 }

 const newTopicDiv = document.querySelector('.topics');


 function addNewTab(){
     const createTab = document.querySelector('.topics');


     axios.get('https://lambda-times-backend.herokuapp.com/topics')
 
     .then((response) =>{
         topics = response.data.topics;
         
         topics.forEach(topic =>{
             newTopicDiv.appendChild(newTab(topic))
         })
     })
     
      .catch((error) =>{
          console.log(error);
      })
     
 }



