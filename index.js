const headerEI=document.querySelector('.mynav')
window.addEventListener('scroll', function(){
if(window.scrollY >170){
    headerEI.classlist.add('white-nav');
}
else if{
    headerEI.classList.remove('white.nav');
}
})