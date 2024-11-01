function opentab(tabname) {
    const tablinks = document.querySelectorAll('.tab-links');
    const tabcontents = document.querySelectorAll('.tab-contents');

    tablinks.forEach(link => link.classList.remove("active-link"));
    tabcontents.forEach(content => content.classList.remove("active-tab"));

    document.querySelector(`[onclick="opentab('${tabname}')"]`).classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
