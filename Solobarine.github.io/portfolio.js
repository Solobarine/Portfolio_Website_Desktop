// Menu Section
let open = document.querySelector('#bars');
let imgButton = document.querySelector(".img-button");
let page = document.querySelector(".pop-up");
let portfolio = document.querySelector(".the-nav1");
let about = document.querySelector(".the-nav2");
let contact = document.querySelector(".the-nav3");
let header = document.querySelector('.header')


open.addEventListener('click', function(){
  if(page.className === 'pop'){
    page.className = '';
    header.style.display = 'none';
  }else{
    page.className = 'pop';
  }
});

imgButton.addEventListener('click', function(){
    if(page.className === ''){
        page.className = 'pop';
        header.style.display = 'block';
    }else{
        page.className = '';
    }
    });
    
portfolio.addEventListener('click', function(){
    if(page.className === ''){
        page.className = 'pop';
        header.style.display = 'block';
    }else{
        page.className = '';
    }
    });
    
about.addEventListener('click', function(){
    if(page.className === ''){
        page.className = 'pop';
        header.style.display = 'block';
    }else{
        page.className = '';
    }
    });
    
contact.addEventListener('click', function(){
    if(page.className === ''){
        page.className = 'pop';
        header.style.display = 'block';
    }else{
        page.className = '';
    }
    });
    
