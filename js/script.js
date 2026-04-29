document.addEventListener("DOMContentLoaded",() => {
    console.log("sitio cargando corectamente");

    //boton acia arriba
    const btnTop = document.getElementById("btnTop");
    if (btnTop){
        window.addEventListener("scroll", ()=>{
            btnTop.style.display = window.scrollY> 200 ? "block" : "none";

        });

        btnTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth"});
        });
    };
});