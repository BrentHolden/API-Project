const baseURL = 'https://ghibliapi.herokuapp.com/';
const filmURL = baseURL + 'films';

const filmList = document.querySelector('.filmList');
const dropdown = document.querySelector('.dropdown-menu');

const jumboTitle = document.querySelector('#jumboTitle');
const jumboText = document.querySelector('#jumboText');
const buttonHome = document.querySelector('#buttonHome');

buttonHome.addEventListener('click', presentHome);

function presentHome(){

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let description = document.createElement('p');
    let title = document.createElement('p');

    description.textContent = 'Welcome to Ghibli Fans, your go to info resource for all Studio Ghibli films! To get started, simply click "Movies" from the navbar above and then select the movie that you would like to learn more about.';
    title.textContent = 'GHIBLI FANS';
    jumboTitle.appendChild(title);
    jumboText.appendChild(description);

}

fetch(filmURL)
    .then(function(result) {
        return result.json(); 
    }).then(function(json) {

for(let i = 0; i < json.length; i++){
    
    let film = json[i];

    let title = film.title;

    let idTag = 'id' + film.id;

    let titleList = document.createElement('li');
    let textTitle = document.createElement('a');


    textTitle.setAttribute('class','dropdown-item');
    textTitle.setAttribute('id', idTag);

    textTitle.textContent = title;

    dropdown.appendChild(titleList);
    titleList.appendChild(textTitle);



}

}
);

fetch(filmURL)
    .then(function(result) {
        return result.json(); 
    }).then(function(json) {

const selectCastle = document.querySelector('#id2baf70d1-42bb-4437-b551-e5fed5a87abe');
selectCastle.addEventListener('click', presentCastle);

const selectGrave = document.querySelector('#id12cfb892-aac0-4c5b-94af-521852e46d6a');
selectGrave.addEventListener('click', presentGrave);

const selectNeighbor = document.querySelector('#id58611129-2dbc-4a81-a72f-77ddfc1b1b49');
selectNeighbor.addEventListener('click', presentNeighbor);

const selectKiki = document.querySelector('#idea660b10-85c4-4ae3-8a5f-41cea3648e3e');
selectKiki.addEventListener('click', presentKiki);

const selectYesterday = document.querySelector('#id4e236f34-b981-41c3-8c65-f8c9000b94e7');
selectYesterday.addEventListener('click', presentYesterday);

const selectPorco = document.querySelector('#idebbb6b7c-945c-41ee-a792-de0e43191bd8');
selectPorco.addEventListener('click', presentPorco);

const selectPomPoko = document.querySelector('#id1b67aa9a-2e4a-45af-ac98-64d6ad15b16c');
selectPomPoko.addEventListener('click', presentPomPoko);

const selectWhisper = document.querySelector('#idff24da26-a969-4f0e-ba1e-a122ead6c6e3');
selectWhisper.addEventListener('click', presentWhisper);

const selectMononoke = document.querySelector('#id0440483e-ca0e-4120-8c50-4c8cd9b965d6');
selectMononoke.addEventListener('click', presentMononoke);

const selectYamadas = document.querySelector('#id45204234-adfd-45cb-a505-a8e7a676b114');
selectYamadas.addEventListener('click', presentYamadas);

const selectSpirited = document.querySelector('#iddc2e6bd1-8156-4886-adff-b39e6043af0c');
selectSpirited.addEventListener('click', presentSpirited);

const selectTheCat = document.querySelector('#id90b72513-afd4-4570-84de-a56c312fdf81');
selectTheCat.addEventListener('click', presentTheCat);

const selectHowls = document.querySelector('#idcd3d059c-09f4-4ff3-8d63-bc765a5184fa');
selectHowls.addEventListener('click', presentHowls);

const selectEarthSea = document.querySelector('#id112c1e67-726f-40b1-ac17-6974127bb9b9');
selectEarthSea.addEventListener('click', presentEarthSea);

const selectPonyo = document.querySelector('#id758bf02e-3122-46e0-884e-67cf83df1786');
selectPonyo.addEventListener('click', presentPonyo);

const selectArrietty = document.querySelector('#id2de9426b-914a-4a06-a3a0-5e6d9d3886f6');
selectArrietty.addEventListener('click', presentArrietty);

const selectPoppy = document.querySelector('#id45db04e4-304a-4933-9823-33f389e8d74d');
selectPoppy.addEventListener('click', presentPoppy);

const selectWindRises = document.querySelector('#id67405111-37a5-438f-81cc-4666af60c800');
selectWindRises.addEventListener('click', presentWindRises);

const selectKaguya = document.querySelector('#id578ae244-7750-4d9f-867b-f3cd3d6fecf4');
selectKaguya.addEventListener('click', presentKaguya);

const selectMarnie = document.querySelector('#id5fdfb320-2a02-49a7-94ff-5ca418cae602');
selectMarnie.addEventListener('click', presentMarnie);

function presentCastle(){

    let film = json[0];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}
    
function presentGrave(){

    let film = json[1];
    
    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentNeighbor(){

    let film = json[2];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentKiki(){

    let film = json[3];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentYesterday(){

    let film = json[4];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentPorco(){

    let film = json[5];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentPomPoko(){

    let film = json[6];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentWhisper(){

    let film = json[7];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentMononoke(){

    let film = json[8];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentYamadas(){

    let film = json[9];
    
    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentSpirited(){

    let film = json[10];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentTheCat(){

    let film = json[11];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentHowls(){

    let film = json[12];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentEarthSea(){

    let film = json[13];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentPonyo(){

    let film = json[14];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentArrietty(){

    let film = json[15];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentPoppy(){

    let film = json[16];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentWindRises(){

    let film = json[17];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentKaguya(){

    let film = json[18];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

function presentMarnie(){

    let film = json[19];

    while (jumboTitle.firstChild) {
        jumboTitle.removeChild(jumboTitle.firstChild);
    }

    while (jumboText.firstChild) {
        jumboText.removeChild(jumboText.firstChild);
    }

    let title = document.createElement('p');
    let description = document.createElement('p');

    let director = film.director;
    let producer = film.producer;
    let release = film.release_date;
    let rtScore = film.rt_score;

    let infoOne = document.createElement('p');
    let infoTwo = document.createElement('p')
    infoOne.setAttribute('class', 'info');
    infoTwo.setAttribute('class', 'info');

    title.textContent = film.title.toUpperCase();
    description.textContent = film.description;

    infoOne.textContent = `Director: ${director}, Producer: ${producer}`
    infoTwo.textContent = `Released: ${release}, RT: ${rtScore}`

    jumboTitle.appendChild(title);
    jumboText.appendChild(description);
    jumboText.appendChild(infoOne);
    jumboText.appendChild(infoTwo);

}

})