// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(data) {

    //Create components

    const newHeaderDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const newHeader = document.createElement('h1');
    const tempSpan = document.createElement('span');
    
    //Add classes 

    newHeaderDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    //Add content

    dateSpan.textContent = 'MARCH 28, 2019';
    newHeader.textContent = 'Lambda Times';
    tempSpan.textContent = '98°';


    //Create Structure

    newHeaderDiv.appendChild(dateSpan);
    newHeaderDiv.appendChild(newHeader);
    newHeaderDiv.appendChild(tempSpan);

    return newHeaderDiv;

}

 document.querySelector('.header-container').appendChild(Header())

