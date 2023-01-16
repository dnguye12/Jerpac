let mbIcon = document.getElementById("mbIcon");
    let mbMenu = document.getElementById("dh-mb-menu");
    let homeHeader = document.getElementById("home-header");

    homeHeader.addEventListener("click", openNav);

    function openNav() {
        let helper = document.querySelectorAll("#mbIcon i")[0];
        helper.classList.toggle("bi-x-lg");
        helper.classList.toggle("bi-list");
        homeHeader.classList.toggle("opened");
        homeHeader.classList.toggle("closed");
        mbMenu.classList.toggle("opened");
        mbMenu.classList.toggle("closed");
    }

    try {
        fetch(`https://api.minetools.eu/ping/mc.hypixel.net/25565`).then(res => res.json()).then(data => setServerCount(data.players.online));
    } catch { console.log("Unable to fetch server player count from API.") }
    try {
        fetch(`https://discord.com/api/v9/invites/bedwars?with_counts=true`).then(res => res.json()).then(data => setDiscordCount(data.approximate_presence_count));
    } catch { console.log("Unable to fetch Discord player count from API.") }
    function setServerCount(count) {
        try {
            document.getElementById("serverCount").innerHTML = count;
        } catch { console.log("Unable to set server player count.") }
    }
    function setDiscordCount(count) {
        try {
            document.getElementById("discordCount").innerHTML = count;
        } catch { console.log("Unable to set Discord player count.") }
    }

    function copyAddress() {
        navigator.clipboard.writeText("mc.hypixel.net");
    }

    let menuToggler = document.getElementById("dh-mb-menu-toggler");
    let menuIcon = document.getElementById("dh-mb-menu-icon");
    let menuMb = document.getElementById("dh-mb-menu");
    menuToggler.addEventListener("click", function () {
        menuIcon.classList.toggle("opened");
        menuIcon.classList.toggle("closed");
        menuToggler.classList.toggle("opened");
        menuToggler.classList.toggle("closed");
        menuIcon.classList.toggle("bi-list");
        menuIcon.classList.toggle("bi-x");
        menuMb.classList.toggle("opened");
        menuMb.classList.toggle("closed");
        if (menuToggler.classList.contains("closed")) {
        } else {
        }
    })