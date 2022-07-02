
let preveiwMenue = document.querySelector('.menu-preview');
let previewBox = preveiwMenue.querySelectorAll('.preview');

document.querySelectorAll('.menu-container .menu').forEach(product =>{
  product.onclick = () =>{
    preveiwMenue.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-xmark').onclick = () =>{
    close.classList.remove('active');
    preveiwMenue.style.display = 'none';
  };
});