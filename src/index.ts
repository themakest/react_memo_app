function component() {
  const element = document.createElement('div');
  element.innerHTML = 'あああ1';
  return element;
}

document.body.appendChild(component());
