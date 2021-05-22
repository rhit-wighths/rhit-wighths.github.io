// $(function() {
// });

function main(){
    if(document.querySelector("#portfolio")){
        for(let i = 1; i < 4; i++){
            document.querySelector(`#cardMenu${i}`).onclick = (event) => {
                console.log(`${i} clicked`);
            }
        }
        document.querySelector("#darkMode").onclick = (event) => {
            document.querySelectorAll(".dark-mode").classList.toggle("dark-mode")
            
        }

    }
    const btn = document.querySelector("#darkMode");
    // Select the stylesheet <link>
    const theme = document.querySelector("#theme-link");

    // Listen for a click on the button
    btn.addEventListener("click", function() {
        console.log("works");
        // If the current URL contains "ligh-theme.css"
        if (theme.getAttribute("href") == "main.css") {
            // ... then switch it to "dark-theme.css"
            theme.href = "styles/diffcolors.css";
            console.log("should change");
        // Otherwise...
        } else {
            // ... switch it to "light-theme.css"
            theme.href = "styles/main.css";
        }
    });

   
}

main();