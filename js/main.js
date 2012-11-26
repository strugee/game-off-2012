function initializepuzzlelevels() {
	console.log("switching to level screen");
	var levelselect = document.getElementById("levelselect");
	var gamemenu = document.getElementById("gamemenu");
	gamemenu.hidden = "true";
	levelselect.removeAttribute("hidden");
	console.log("done switching to level screen");
}