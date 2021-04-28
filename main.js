var likesDict = {}

function upLike(name) {
    if (likesDict[name]) {
        likesDict[name]++;
    }
    else {
        likesDict[name] = 1;
    }

    var likesText = document.querySelector("#"+name);
    likesText.innerText = likesDict[name] + " like(s)";
}