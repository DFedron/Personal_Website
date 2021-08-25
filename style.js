
  let nav = document.querySelector('#nav1');
  let section = document.createElement('div');
  let ul = document.createElement('ul');

  let li1 = document.createElement('li');
  let li2 = document.createElement('li');
  let li3 = document.createElement('li');
  let li4 = document.createElement('li');
  let li5 = document.createElement('li');

  let a1 = document.createElement('a');
  let a2 = document.createElement('a');
  let a3 = document.createElement('a');
  let a4 = document.createElement('a');
  let a5 = document.createElement('a');
  section.setAttribute('class','navbar_top');
  
  a1.setAttribute('href', 'index.html');
  a1.textContent = "Home";
  li1.append(a1);
  ul.append(li1);

  a2.setAttribute('href', 'About.html');
  a2.textContent = "About";
  li2.append(a2);
  ul.append(li2);

  a3.setAttribute('href', 'Previous_work.html');
  a3.textContent = "Previous Work";
  li3.append(a3);
  ul.append(li3);

  a4.setAttribute('href', 'index.html');
  a4.textContent = "Projects";
  li4.append(a4);
  ul.append(li4);

  a5.setAttribute('href', 'Contact.html');
  a5.textContent = "Contact";
  li5.append(a5);
  ul.append(li5);

  section.append(ul);
  nav.append(section);
  
  