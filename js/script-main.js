const TITLES = ["TITLE_1", "TITLE_2", "TITLE_3", "CLICK TO ENTER"];
const SPEED = 1;

window.onclick = () => {
    window.location.href = "about.html";
}

window.onload = () => {
    cycleTitles();
}

async function cycleTitles() {
    for (let currentTitleIndex = 0; currentTitleIndex < TITLES.length; currentTitleIndex++) {
        let currentTitle = TITLES[currentTitleIndex];
        await sleep(SPEED);

        for (let currentLetterIndex = 0; currentLetterIndex < currentTitle.length; currentLetterIndex++) {
            document.getElementById("title-text").innerHTML += currentTitle.charAt(currentLetterIndex);
            await sleep(SPEED / 10);
        }

        document.getElementById("cursor-static").id = "cursor-blink";
        if (currentTitleIndex === TITLES.length - 1) {
            return;
        }

        await sleep(SPEED);
        document.getElementById("cursor-blink").id = "cursor-static";

        for (let contentTitleIndex = 0; contentTitleIndex < currentTitle.length; contentTitleIndex++) {
            document.getElementById("title-text").innerHTML = document.getElementById("title-text").innerHTML.slice(0, -1);
            await sleep(SPEED / 10);
        }
    }
}

sleep = (seconds) => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}
