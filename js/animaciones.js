//Animacion del titulo

$("h1").fadeIn(1000);

$("#clean").click((e) =>{
    e.preventDefault();
    let carro = $(e.target).children(games);
    $(`.productos`).slideUp();
});

//Animacion de body

$("h3").animate({  left:'250px',
                    height:'100px',
                    width:'150px'   }, 
                        "slow",            
                    );

