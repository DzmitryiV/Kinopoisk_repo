function createPage() {

    document.body.classList.add('body');

    const header = document.createElement('div');
    header.classList.add('header');
    document.body.append(header);

    const netflixdiv = document.createElement('div');
    netflixdiv.classList.add('netflixroolete');
    header.append(netflixdiv);

    const imgInNetflix = document.createElement('img');
    imgInNetflix.setAttribute('src', '..//public/img/icons/netflixroulette copy.png');
    imgInNetflix.setAttribute('alt', 'image netflix');
    netflixdiv.append(imgInNetflix);

    const addMovieDiv = document.createElement('div');
    addMovieDiv.classList.add('add_movie');
    header.append(addMovieDiv);
    const alink = document.createElement('a');
    alink.setAttribute('href', '');
    addMovieDiv.append(alink);
    const imgAddMovie = document.createElement('img');
    imgAddMovie.setAttribute('src', '..//public/img/icons/+ add movie.png');
    imgAddMovie.setAttribute('alt', 'image');
    alink.append(imgAddMovie);


    const divSearch = document.createElement('div');
    divSearch.classList.add('search');
    document.body.append(divSearch);



    const formInput = document.createElement('form');
    divSearch.append(formInput);
    const inputTypeText = document.createElement('input');
    inputTypeText.setAttribute('type', 'text');
    inputTypeText.setAttribute('name', 'text');
    inputTypeText.setAttribute('placeholder', 'What do you want to watch?');
    inputTypeText.classList.add('search_form');
    formInput.append(inputTypeText);

    const inputTypeSubmit = document.createElement('input');
    inputTypeSubmit.setAttribute('type', 'submit');
    inputTypeSubmit.setAttribute('name', 'submit');
    inputTypeSubmit.setAttribute('value', 'SEARCH');
    inputTypeSubmit.classList.add('submit');
    formInput.append(inputTypeSubmit);

    const contentNavbarMenu = document.createElement('div');
    contentNavbarMenu.classList.add('content_navbar_menu');
    document.body.append(contentNavbarMenu);

    const divNavbarMenu = document.createElement('div');
    divNavbarMenu.classList.add('navbar_menu');
    contentNavbarMenu.append(divNavbarMenu);

    const linkAll = document.createElement('a');
    linkAll.setAttribute('href', '');
    divNavbarMenu.append(linkAll);
    const pAll = document.createElement('p');
    linkAll.append(pAll);
    pAll.innerText='ALL';


    const linkDocumentary = document.createElement('a');
    linkDocumentary.setAttribute('href', '');
    divNavbarMenu.append(linkDocumentary);
    const pDocumentary = document.createElement('p');
    pDocumentary.innerText='DOCUMENTARY';
    linkDocumentary.append(pDocumentary);

    const linkComedy = document.createElement('a');
    linkComedy.setAttribute('href', '');
    divNavbarMenu.append(linkComedy);
    const pComedy = document.createElement('p');
    pComedy.innerText ='COMEDY';
    linkComedy.append(pComedy);

    const linkHorror = document.createElement('a');
    linkHorror.setAttribute('href', '');
    divNavbarMenu.append(linkHorror);
    const pHorror = document.createElement('p');
    pHorror.innerText ='HORROR';
    linkHorror.append(pHorror);

    const linkCrime = document.createElement('a');
    linkCrime.setAttribute('href', '');
    divNavbarMenu.append(linkHorror);
    const pCrime = document.createElement('p');
    pCrime.innerText ='CRIME';
    linkCrime.append(pCrime);

    const divSort = document.createElement('div');
    divSort.classList.add('sort');
    contentNavbarMenu.append(divSort);

const divSortBy = document.createElement('div');
divSortBy.classList.add('sort_by');
divSortBy.classList.add('sort');
divSort.append(divSortBy);

    const pSort = document.createElement('p');
    pSort.innerText ='SORT BY';
    divSortBy.append(pSort);


    

    const divReleaseDate = document.createElement('div');
    divReleaseDate.classList.add('sort');
    divSort.append(divReleaseDate);
    const pReleaseDate = document.createElement('p');
    pReleaseDate.innerText ='RELEASE DATE';
    divReleaseDate.append(pReleaseDate);
    const linkFill = document.createElement('a');
    linkFill.setAttribute('href', '');
    pReleaseDate.append(linkFill);
    const imgFill = document.createElement('img');
    imgFill.setAttribute('src', '..//public/img/icons/Fill 1.png');
    linkFill.append(imgFill);


    const divContent = document.createElement('div'); ///создаем контент
    divContent.classList.add('content');
    document.body.append(divContent);

    const divFilm = document.createElement('div'); /// создаем блок с фильмом
    divFilm.setAttribute.add('id', 'movieItem');
    divContent.append(divFilm);

    let imgFilm = document.createElement('img');
    imgFilm.setAttribute('src', '');
    imgFilm.setAttribute('alt', 'poster');
    divFilm.append(imgFilm);

    const divTitleAndYear = document.createElement('div');
    divTitleAndYear.classList.add('title_and_yeahr');
    divTitleAndYear.innerText =' ';
    divFilm.append(divTitleAndYear);

    const divSignature = document.createElement('div');
    divSignature.classList.add('signature');
    divSignature.innerText='';
    divTitleAndYear.append(divSignature);

    const divYeahr = document.createElement('div');
    divYeahr.classList.add('yeahr');
    divYeahr.innerText='';
    divTitleAndYear.append(divYeahr);

    const divGenre = document.createElement('div');
    divGenre.classList.add('genre');
    divGenre.innerText ='';
    divFilm.append(divGenre);


    const divFooter = document.createElement('div');
    divFooter.classList.add('footer');
    const imgFooter = document.createElement('img');
    imgFooter.setAttribute('src', '..//public/img/icons/netflixroulette copy.png');
    document.body.append(divFooter)




}

createPage();
