const burgerMenu = document.querySelector('.burger-menu');
const xMenu = document.querySelector('.x-menu');
const aside = document.querySelector('.aside');
const asideLink = document.querySelectorAll('.aside-link')

burgerMenu.addEventListener("click", function() {
  aside.classList.add('aside-active');
});

xMenu.addEventListener("click", function(){
  aside.classList.remove('aside-active');
});

asideLink.forEach(function(link) {
  link.addEventListener("click", function() {
    aside.classList.remove('aside-active');
  });
});






const buttons = document.querySelectorAll(".btn-produk");
        
buttons.forEach(button => {
  button.addEventListener("click", function() {
    var productName = button.getAttribute("data-product");
    var phoneNumber = button.getAttribute("data-phone");

    var message = "Saya%20tertarik%20dengan%20produk%20" + encodeURIComponent(productName);

    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + message;

    window.open(whatsappURL, "_blank");
  });
});







let btnWhatsappLink = document.getElementById('whatsapp-link');

btnWhatsappLink.addEventListener('click', function(event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let message = document.getElementById('message').value;
  
  // Ganti dengan nomor WhatsApp yang sesuai
  let phoneNumber = '6285316162484'; 
  
  // Membuat pesan untuk WhatsApp
  let encodedMessage = encodeURIComponent("Nama: " + name + "\n\nPesan:\n" + message);
  
  // Membuka WhatsApp dengan pesan yang sudah diisi
  let whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
  window.open(whatsappUrl, '_blank');
});