var element = document.getElementById('phone');
var maskOptions = {
    mask: '+{38\\0}(00)000-00-00',
    lazy: false
} 
var mask = new IMask(element, maskOptions);