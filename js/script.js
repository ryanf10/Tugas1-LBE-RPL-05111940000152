var item = document.querySelectorAll('.item');
item.forEach(function(element){
    var arrow = element.getElementsByClassName('arrow');
    var content = element.getElementsByClassName('content');
    if(arrow.length > 0){
        arrow[0].addEventListener('click', function(){
            if(content[0].style.display=="none"){
                content[0].style.display="block";
                arrow[0].scrollIntoView(true);
                arrow[0].src='img/collapsearrow.png';
            }else{
                content[0].style.display="none";
                arrow[0].src='img/expandarrow.png';
            }
        });
    }
});


