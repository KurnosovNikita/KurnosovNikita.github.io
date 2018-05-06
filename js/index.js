const mobileMenu = document.querySelector(".label-menu");
const fieldAbout = document.querySelector(".field-about");
const fieldInfo = document.querySelector(".field-info");
const aboutButton = document.querySelector(".label-about");
const fieldTags = document.querySelector(".field-tags");
const tagsButton = document.querySelector(".label-tags");
const infoButton = document.querySelector(".label-info");
const openMenu = document.querySelector(".field-nav ul");
const navigationTab = document.querySelector(".field-nav ul");
let clicked = 0;
let clickedFieldAbout = 0;
let clickedFieldInfo = 0;
let clickedFieldTags = 0;
tagsButton.addEventListener("click", function () {
    if (clickedFieldTags == 0) {
        fieldTags.className = "d-flex field-tags";
        clickedFieldTags = 1;
    } else {
        fieldTags.className = "d-flex field-tags show-field-tags";
        clickedFieldTags = 0;
    }
});
aboutButton.addEventListener("click", function () {
    if (clickedFieldAbout == 0) {
        fieldAbout.className = "d-flex field-about";
        clickedFieldAbout = 1;
    } else {
        fieldAbout.className = "d-flex field-about show-field-about";
        clickedFieldAbout = 0;
    }
});
infoButton.addEventListener("click", function () {
    if (clickedFieldInfo == 0) {
        fieldInfo.className = "d-flex field-info";
        clickedFieldInfo = 1;
    } else {
        fieldInfo.className = "d-flex field-info show-field-info";
        clickedFieldInfo = 0;
    }
});
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