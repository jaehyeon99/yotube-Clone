var button = document.getElementById('hambuger');
var sidebar = document.getElementById('sidebar');
var media = document.getElementById('media');
var contents = document.getElementById('contents');
button.addEventListener("click",showmenu);
function showmenu(){
    if(sidebar.style.display ==='flex')
    {
    sidebar.style.display ='none';
    contents.style.marginLeft='80px';
    media.style.display='flex';

    }
    else{
        sidebar.style.display ='flex';
        contents.style.marginLeft='240px';
  
        media.style.display='none'
    }


}