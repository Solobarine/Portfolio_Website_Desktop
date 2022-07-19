let open = document.querySelector("#bars");
let imgButton = document.querySelector(".img-button");
let page = document.querySelector(".pop-up");
let portfolio = document.querySelector(".the-nav1");
let about = document.querySelector(".the-nav2");
let contact = document.querySelector(".the-nav3");


open.addEventListener('click', function(){
  if(page.className === 'pop'){
    page.className = '';
  }else{
    page.className = 'pop';
  }
});

imgButton.addEventListener('click', function(){
    if(page.className === ''){
        page.className = 'pop';
    }else{
        page.className = '';
    }
    });
    
portfolio.addEventListener('click', function(){
    if(page.className === ''){
        page.className = 'pop';
    }else{
        page.className = '';
    }
    });
    
about.addEventListener('click', function(){
    if(page.className === ''){
        page.className = 'pop';
    }else{
        page.className = '';
    }
    });
    
contact.addEventListener('click', function(){
    if(page.className === ''){
        page.className = 'pop';
    }else{
        page.className = '';
    }
    });
