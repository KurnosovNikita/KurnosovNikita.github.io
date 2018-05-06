const mobileMenu = document.querySelector(".label-menu");
const openMenu = document.querySelector(".field-nav ul");
const navigationTab = document.querySelector(".field-nav ul");
let clicked = 0;
mobileMenu.addEventListener("click", function () {
    if (clicked == 0) {
        openMenu.className = "show-menu";
        clicked = 1;
    } else {
        openMenu.className = "";
        clicked = 0;
    }
});
navigationTab.addEventListener("click", function (e) {
    switch (e.target.id) {
        case "tab1":
            for (let i = 0; i < 5; i++) {
                document.querySelector("#tab" + (i + 1)).className = "";
            }
            document.querySelector("#tab1").className = "page-checked";
            document.querySelector(".field-main-container").className = "d-flex field-main-container hide";
            document.querySelector(".field-sidebar").className = "d-flex field-sidebar hide";
            break;
        case "tab2":
            for (let i = 0; i < 5; i++) {
                document.querySelector("#tab" + (i + 1)).className = "";
            }
            document.querySelector("#tab2").className = "page-checked";
            document.querySelector(".field-main-container").className = "d-flex field-main-container hide";
            document.querySelector(".field-sidebar").className = "d-flex field-sidebar hide";
            break;
        case "tab3":
            for (let i = 0; i < 5; i++) {
                document.querySelector("#tab" + (i + 1)).className = "";
            }
            document.querySelector("#tab3").className = "page-checked";
            document.querySelector(".field-main-container").className = "d-flex field-main-container";
            document.querySelector(".field-sidebar").className = "d-flex field-sidebar";
            break;
        case "tab4":
            for (let i = 0; i < 5; i++) {
                document.querySelector("#tab" + (i + 1)).className = "";
            }
            document.querySelector("#tab4").className = "page-checked";
            document.querySelector(".field-main-container").className = "d-flex field-main-container hide";
            document.querySelector(".field-sidebar").className = "d-flex field-sidebar hide";
            break;
        case "tab5":
            for (let i = 0; i < 5; i++) {
                document.querySelector("#tab" + (i + 1)).className = "";
            }
            document.querySelector("#tab5").className = "page-checked";
            document.querySelector(".field-main-container").className = "d-flex field-main-container hide";
            document.querySelector(".field-sidebar").className = "d-flex field-sidebar hide";
            break;
    }
});