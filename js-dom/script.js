const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content';

const redContent = document.createElement('p');
redContent.textContent = "Hey I'm red!";
redContent.style.color = 'red';

const headThreeContent = document.createElement('h3');
headThreeContent.textContent = "I'm a blue h3!";
headThreeContent.style.color = 'blue';

const newDiv = document.createElement('div');
newDiv.style.border = '2px solid black';
newDiv.style.backgroundColor = 'pink';

const headOneContent = document.createElement('h1');
headOneContent.textContent = "I'm in a div";
newDiv.appendChild(headOneContent);

const paragraphDivContent = document.createElement('p');
paragraphDivContent.textContent = 'ME TOO!';
newDiv.appendChild(paragraphDivContent);

container.appendChild(content);
container.appendChild(redContent);
container.appendChild(headThreeContent);
container.appendChild(newDiv);