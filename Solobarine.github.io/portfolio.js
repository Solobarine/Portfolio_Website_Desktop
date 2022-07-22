const open = document.querySelector('#bars');
const imgButton = document.querySelector('.img-button');
const page = document.querySelector('.pop-up');
const portfolio = document.querySelector('.the-nav1');
const about = document.querySelector('.the-nav2');
const contact = document.querySelector('.the-nav3');

open.addEventListener('click', function() {
  if (page.className === 'pop') {
    page.className = '';
  } else {
    page.className = 'pop';
  }
});

imgButton.addEventListener('click', function() {
  if (page.className === '') {
    page.className = 'pop';
  } else {
    page.className = '';
  }
});

portfolio.addEventListener ('click', function() {
  if (page.className === '') {
    page.className = 'pop';
  } else {
    page.className = '';
  }
});

about.addEventListener('click', function() {
  if (page.className === '') {
    page.className = 'pop';
   } else {
    page.className = '';
  }
});
    
contact.addEventListener('click',function() {
  if (page.className === '') {
    page.className = 'pop';
  } else {
    page.className = '';
  }
});

// Popup Window
const projectItems = {
  title: 'Keeping track of hundreds of components website.',
  skillTag: ['html', 'Bootstrap', 'Ruby on Rails'],
  summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  liveButton:'See Live',
  sourceButton: 'See Source',
};

// Create Dynamic Page
const grand = document.querySelector('.show-inactive');
const parent = document.querySelector('.featured-item');
const exit = document.createElement('button');
const heading = document.createElement('h2');
const li = document.createElement('ul');
const html = document.createElement('li');
const bootstrap = document.createElement('li');
const rails = document.createElement('li');
const project = document.createElement('div');
const text = document.createElement('p');
const live = document.createElement('button');
const liveImg = document.createElement('span');
const source = document.createElement('button');
const sourceImg = document.createElement('span');

const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const btn5 = document.querySelector('.btn-5');
const btn6 = document.querySelector('.btn-6');

// Append heading
heading.textContent = projectItems.title;
heading.className = 'pop-title';
parent.appendChild(heading);

// Append Exit
parent.appendChild(exit);
exit.textContent = 'x';
exit.className = 'exit';

// Append Skill
li.appendChild(html);
html.className = 'pop-lists';
html.textContent = projectItems.skillTag[0];
li.appendChild(bootstrap);
bootstrap.className = 'pop-lists';
bootstrap.textContent = projectItems.skillTag[1];
li.appendChild(rails);
rails.className = 'pop-lists';
rails.textContent = projectItems.skillTag[2];
parent.appendChild(li);
li.className = 'skills';

// Append Project Image
project.innerHTML = '<img class="project-image" src="./image/portfolio-snapshot.png"/>';
project.className = 'pro-image';
parent.appendChild(project);

// Append text
parent.appendChild(text);
text.textContent = projectItems.summary;
text.className = 'short-summary';

// Append Live button
parent.appendChild(live);
live.textContent = projectItems.liveButton;
live.className = 'pop-button-l';

// Append Source
parent.appendChild(source);
source.textContent = projectItems.sourceButton;
source.className = 'pop-button-s';

// Append Image to live
live.appendChild(liveImg);
liveImg.innerHTML = '<img class="l-img" src="./image/live-img.png"/>';

// Append Image to source
source.appendChild(sourceImg);
sourceImg.innerHTML = '<img class="s-img" src="./image/github.png"/>';

// Event Listener for btn0
const btn0 = document.querySelector('#btn-0');
btn0.addEventListener('click', function() {
  if (grand.className === 'show') {
    grand.className = 'show-inactive';
  } else {
    grand.className = 'show';
  }
});

// Make Modal disappear
exit.addEventListener('click', function() {
  if (grand.className === 'show-inactive') {
    grand.className = 'show';
  } else {
    grand.className = 'show-inactive';
  }
});

// Event Listener for Button 1
btn1.addEventListener('click', function() {
  if (grand.className === 'show-inactive') {
    grand.className = 'show';
  } else {
    grand.className = 'show-inactive';
  }
});

// Event Listener for Button 2
btn2.addEventListener('click', function() {
  if (grand.className === 'show-inactive') {
    grand.className = 'show';
  } else {
    grand.className = 'show-inactive';
  }
});

// Event Listener for Button 3
btn3.addEventListener('click', function() {
  if (grand.className === 'show-inactive') {
    grand.className = 'show';
  } else {
    grand.className = 'show-inactive';
  }
});

// Button 4 Event Listener
btn4.addEventListener ('click', function() {
  if (grand.className === 'show-inactive') {
    grand.className = 'show';
  } else {
    grand.className = 'show-inactive';
  }
});

// Button 5
btn5.addEventListener ('click', function() {
  if (grand.className === 'show-inactive') {
    grand.className = 'show';
  } else {
    grand.className = 'show-inactive';
  }
});

// Button 6
btn6.addEventListener('click', function() {
  if (grand.className === 'show-inactive') {
    grand.className = 'show';
  } else {
    grand.className = 'show-inactive';
  }
});
