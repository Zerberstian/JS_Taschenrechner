console.log("logic.js geladen");

document.addEventListener("DOMContentLoaded", function () {
    // alert("DOM ist fertig geladen"); // Pop-up
    const button = document.querySelectorAll("button");

    let clickedIds = [];

    button.forEach(button => {
        button.addEventListener("click", function(event) {
            const clickedId = event.target.id;
            console.log("Clicked button ID: ", clickedId);
            // alert("You clicked: " + clickedId);

            clickedIds.push(clickedId);

            console.log("All clicked IDs:", clickedIds)
            
        
        });
    });

}); 
