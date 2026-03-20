document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("insertbox");

    const p = document.createElement("p");
    container.appendChild(p);

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function (event) {

            const clickedId = event.target.id;

            // append text instead of replacing
            // p.textContent += clickedId;
            
            if (clickedId === "=") {
                let expression = p.textContent;   // save current input
                let result = eval(expression);

                const cb2 = document.getElementById("cb2");

                const p2 = document.createElement("p");
                cb2.appendChild(p2);

                // show full calculation
                p2.textContent = expression + "=" + result;

                // reset and show result in main display
                p.textContent = result;

            } else if (clickedId === "C") {
                p.textContent = "";

            } else if (clickedId === ",") {
                p.textContent += ".";

            } else if (clickedId === "÷") {
                p.textContent += "/";

            } else {
                p.textContent += clickedId;
            };
        });
    });

});
