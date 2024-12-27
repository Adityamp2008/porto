const tombol =
document.querySelectorAll
('#bio, #musik, #alat');
const halaman =
document.querySelectorAll
('#halaman-bio, #halaman-musik, #halaman-alat');
const kembali = 
document.querySelectorAll
('#back');

tombol.forEach((btn, index) => {
  btn.addEventListener('click' , () =>{
    halaman.forEach((hal) =>
    hal.style.display ='none');
    halaman[index].style.display ='block';
    
    document.getElementById('utama').style.display ='none';
  });
});

kembali.forEach((btn, index) => {
  btn.addEventListener('click' , () =>{
    halaman.forEach((hal) =>
    hal.style.display ='none');
    halaman[index].style.display ='none';
    
    document.getElementById('utama').style.display ='block';
  });
});