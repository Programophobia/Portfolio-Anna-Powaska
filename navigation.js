'use strict';

function titleClickHandler(event){
 // event.preventDefault()
  const clickedItem = this;
  const portfolioLinks = document.querySelectorAll('.list a.active');
  const linksBlack = document.querySelectorAll('.list a');

  for(let linkBlack of linksBlack){
    linkBlack.style.backgroundColor = "black"
  }

  for(let portfolioLink of portfolioLinks){
      portfolioLink.classList.remove('active')
  }
  clickedItem.classList.add('active')

  const activeGalleries = document.querySelectorAll('.row-1.active');

  for(let activeGallery of activeGalleries){
      activeGallery.classList.remove('active')
  }

  const linkAttribute = clickedItem.getAttribute('href');
  const matchedGallery = document.querySelector(linkAttribute);

  matchedGallery.classList.add('active')
}

const links = document.querySelectorAll('.nav-list a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

function printAnna(msg) {
  const anna = document.createElement('p');
  anna.innerHTML = msg;
  document.getElementById('anka').appendChild(anna);
}

printAnna('Anna Powąska');

const optArticleSelector = '.row-1',
  optTitleSelector = '.titleLanguage',
  optTitleListSelector = '.btn-links';

function generateTitleLinks(){

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = ''
  const articles = document.querySelectorAll(optArticleSelector)
 
  for(let article of articles){

    const articleId = article.getAttribute('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<a class="btn btn-one" href="#' + articleId + '"><span>' + articleTitle + '</span></a><span class="space"> </span>';
    console.log(linkHTML)
    titleList.innerHTML = titleList.innerHTML + linkHTML;
  }
  const btns = document.querySelectorAll('.btn-links a')

  for(let btn of btns){
    btn.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

const rmvTitle = document.getElementById("titleLang");
rmvTitle.style.display = "none";

const rmvTitlee = document.getElementById("titleLang-2");
rmvTitlee.style.display = "none";

const rmvTitleee = document.getElementById("titleLang-3");
rmvTitleee.style.display = "none";

const rmvTitleeee = document.getElementById("titleLang-4");
rmvTitleeee.style.display = "none";





function creatEl(msg) {
  const paragraph = document.createElement('p');
  paragraph.setAttribute("id", "article-5");
  paragraph.setAttribute("class", "row-1");
  paragraph.innerHTML = msg;
  document.querySelector('.portfolio .container').appendChild(paragraph);
  paragraph.style.fontSize = "25px";
  paragraph.style.webkitTextStroke = "1px white";
  paragraph.style.color = "black";
  console.log(paragraph)
}

creatEl('+48 881253349')








