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

// 2. Botón de Modo Claro/Oscuro
    const btnTheme = document.getElementById("btn-theme");
    if (btnTheme) {
        btnTheme.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            
            if (document.body.classList.contains("light-mode")) {
                btnTheme.textContent = "☀️";
            } else {
                btnTheme.textContent = "🌙";
            }
        });
    }; // <--- ASEGÚRATE DE QUE ESTA LLAVE Y PARÉNTESIS CIERREN TODO