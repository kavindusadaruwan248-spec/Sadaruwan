const buttons = document.querySelectorAll(".card button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const title = button.parentElement.querySelector("h3").innerText;
        const description = button.parentElement.querySelector("p").innerText;

        alert(
            title +
            "\n\n" +
            description +
            "\n\nSummary, My Opinion and Reflection will be added here."
        );

    });
});
