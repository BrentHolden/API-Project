const baseURL = 'https://ghibliapi.herokuapp.com/films/';

const filmList = document.querySelector('.filmList');
const dropdown = document.querySelector('.dropdown-menu');

// testButton.addEventListener('click', fetchResults); 



fetch(baseURL)
    .then(function(result) {
        // console.log(result)
        return result.json(); 
    }).then(function(json) {
        console.log(json);
        // displayResults(json);


for(let i = 0; i < json.length; i++){
    let film = json[i];
    let title = film.title;
    let id = film.id;

    let titleList = document.createElement('li');
    let textTitle = document.createElement('a');

    textTitle.setAttribute('class','dropdown-item');
    textTitle.setAttribute('id', id);

    textTitle.textContent = title;


    dropdown.appendChild(titleList);
    titleList.appendChild(textTitle);


}
}
);