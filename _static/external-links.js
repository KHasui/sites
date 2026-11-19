document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="http://"], a[href^="https://"]');

    links.forEach(function (link) {
        if (link.hostname !== window.location.hostname) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }
    });
});