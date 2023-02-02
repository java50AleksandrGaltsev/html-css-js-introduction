//kak is object poluchit stroku i naoborot
// const employee1 = {id: 123,address: {city: "Lod", country: Israel}};
// const employee2 = {id: 123,address: {city: "Lod", country: Israel}};
// const employee1Json = JSON.stringify(employee1); //Iz OBJECT POLUCHAEM STROKU
// const employee2Json = JSON.stringify(employee2);
// console.log(employee1Json);
// const employee3 = {...employee1};
// employee3.id = 124
// console.log(employee3.id);
// employee3.address.city = "Rehovot";
// const employee4 = JSON.parse(employee1Json); //poluchaem iz stroki object
// employee4.address.city = 'Rehovot';
const jsonData = '{"page":1,"results":[{"adult":false,"backdrop_path":"/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg","genre_ids":[28,14,878],"id":436270,"original_language":"en","original_title":"Black Adam","overview":"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.","popularity":15075.276,"poster_path":"/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg","release_date":"2022-10-19","title":"Black Adam","video":false,"vote_average":7.2,"vote_count":1888},{"adult":false,"backdrop_path":"/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg","genre_ids":[14,28,35,80],"id":1013860,"original_language":"en","original_title":"R.I.P.D. 2: Rise of the Damned","overview":"When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.","popularity":6040.388,"poster_path":"/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg","release_date":"2022-11-15","title":"R.I.P.D. 2: Rise of the Damned","video":false,"vote_average":6.8,"vote_count":152},{"adult":false,"backdrop_path":"/kpUre8wWSXn3D5RhrMttBZa6w1v.jpg","genre_ids":[35,10751,14],"id":338958,"original_language":"en","original_title":"Disenchanted","overview":"Disillusioned with life in the city, feeling out of place in suburbia, and frustrated that her happily ever after hasn’t been so easy to find, Giselle turns to the magic of Andalasia for help. Accidentally transforming the entire town into a real-life fairy tale and placing her family’s future happiness in jeopardy, she must race against time to reverse the spell and determine what happily ever after truly means to her and her family.","popularity":3316.598,"poster_path":"/4x3pt6hoLblBeHebUa4OyiVXFiM.jpg","release_date":"2022-11-16","title":"Disenchanted","video":false,"vote_average":7.5,"vote_count":352}]}'
const httpPrefix = "https://image.tmdb.org/t/p/w500";
const data = JSON.parse(jsonData);
//v body pomeshaem spisok
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector (".details-title");
const detailsContainer = document.querySelector (".details-conteiner");
const anchorElements = document.querySelectorAll (".thumbnails-anchor");
const mainElement = document.querySelector (".main-class");
const hideButtonElement = document.querySelector ("#hide-button");
const audio = document.querySelector ('audio');
const IS_POINT = "is-point";
const HIDDEN = "hidden";
function showDetails () {
    mainElement.classList.remove (HIDDEN);
detailsContainer.classList.add(IS_POINT);

setTimeout(function () {
    detailsContainer.classList.remove(IS_POINT);
})
}
function setDetails (anchor) {
const dataImage = anchor.getAttribute("data-details-image");
detailsImage.src = dataImage;

showDetails();

detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
}
audio.src = anchor.getAttribute ("data-details-sound");
audio.play();
setTimeout(function() {
    audio.pause();
}, 3000)
function hideDetails () {
    mainElement.classList.add (HIDDEN);
}
 for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener ("click", function () {
        setDetails(anchorElements[i]);
    })
 }
 hideButtonElement.addEventListener ("click", hideDetails);

 