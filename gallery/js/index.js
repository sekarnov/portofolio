const cards = document.querySelectorAll(".card");
const totalClicked = document.querySelector(".num-down");

document.querySelector(".btn").addEventListener('click', () => {
  const notificationBar = document.querySelector('.notification');
  const totalNum = document.querySelectorAll('.active');
  
  if(totalNum.length < 1) {
    alert('Must select at least 1 item for download');
  } else {
    notificationBar.style.right = 35+"px";
  setTimeout(() => {
    notificationBar.style.right = -1000+"px";
  }, 3000);
  totalClicked.textContent = totalNum.length;
  }
});

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active'); 
  });
});