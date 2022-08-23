
const INPUT_BUSCA = document.getElementById("pesquisa");
/*const DOWNLOAD = document.getElementById('materiais');*/
const SERVICES = document.getElementById("services");

INPUT_BUSCA.addEventListener('keyup',()=>{
   let expressao = INPUT_BUSCA.value.toLowerCase();

   if (expressao.length === 1){
    return;
   }

   let containerBox = document.querySelectorAll(".box");
   
   console.log(containerBox);

   for(let posicao in containerBox){
   if(isNaN(posicao)){
        continue;
}
    let conteudoDoContainerBox = containerBox[posicao].innerHTML.toLowerCase();
    if(true ===conteudoDoContainerBox.includes(expressao)){
        containerBox[posicao].style.display='';
    }else{
        containerBox[posicao].style.display='none';
    }
   }

})