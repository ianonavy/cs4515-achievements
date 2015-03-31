'use strict';

(function() {

var ACHIEVEMENTS = {
	"Homework One": {
		'description': "You only get this one if you did it in LaTeX.",
		'title': "Doing the homework"
	},
	"Homework Two": {
		'description': "Yo dawg, I heard you like pipes, so we put some pipes in your pipes.",
		'title': "Doing the homework"
	},
	"Homework Three": {
		'description': "It's a good thing you understand memory and remembered to do it.",
		'title': "Doing the homework"
	},
	"Homework Four": {
		'description': "Look, I can write with both hands at once!",
		'title': "Doing the homework"
	},
	"Homework Five": {
		'description': "You did the homework when you didn't need to?",
		'title': "Doing the homework"
	},
	"Homework Six": {
		'description': "My clone can do the reading while I do the homework. Neat.",
		'title': "Doing the homework"
	},
	"No More Homework": {
		'description': "Time to party!",
		'title': "Doing the homework"
	},
	"Chapter One Reader": {
		'description': "Congratulations. You know basic math.",
		'title': "Doing the reading"
	},
	"Chapter Two Reader": {
		'description': "Now that you understand how memory works, perhaps you'll remember... that thing.",
		'title': "Doing the reading"
	},
	"Chapter Three Reader": {
		'description': "You must be a decent multitasker.",
		'title': "Doing the reading"
	},
	"Chapter Four Readerer": {
		'description': "I bet you're pretty good at linear algebra.",
		'title': "Doing the reading"
	},
	"Chapter Five Reader": {
		'description': "Where can I buy a cloning machine?",
		'title': "Doing the reading"
	},
	"Chapter Six Reader": {
		'description': "Okay, now it's time to build a data warehouse. Oh wait.",
		'title': "Doing the reading"
	},
	"Appendix B Reader": {
		'description': "<page fault>",
		'title': "Doing the reading"
	},
	"Appendix C Reader": {
		'description': "How many pipes does it take to screw in a light bulb? Wait a minute.",
		'title': "Doing the reading"
	},
	"Walking Textbook": {
		'description': "You finished the assigned reading. Good job. Now go outside.",
		'title': "Doing the reading"
	},
	"Study Buddy": {
		'description': "Hey, I'm totally lost. Can you help me?",
		'title': "Help someone with the homework"
	},
	"Presenter": {
		'description': "It's a good thing you like listening to yourself talk. You did it for an hour.",
		'title': "Finish the presentation"
	},
	"Achievement": {
		'description': "You got an achievement for getting an achievement. Wow.",
		'title': "Unlocked an achievement"
	},
	"Speed Reader": {
		'description': "You finished the reading on Sunday? Nerd.",
		'title': "Finish reading early"
	},
	"Quiz Ace": {
		'description': "Perfect scores mean nothing.",
		'title': "Perfect score on quiz"
	},
	"Homework Ace": {
		'description': "You better have aced the quiz too.",
		'title': "Perfect score on homework"
	},
	"Dreamer": {
		'description': "A full night's rest before a quiz? Ridiculous!",
		'title': "Sleep the night before"
	},
	"Perfect Attendance": {
		'description': "Here is your 'get out of detention free card'.",
		'title': "Go to every class"
	},
	"Teacher's Pet": {
		'description': "Good doggie!",
		'title': "Get called on in class 3 times"
	},
	"Adderall": {
		'description': "You have the attention span of a kid on Adderall. Good job.",
		'title': "Go a whole class without being distracted (Facebook, reddit, etc.)"
	},
	"Enough With Your Bullshit": {
		'description': "You fucking idiot!",
		'title': "Correct someone in class"
	},
	"Early Bird": {
		'description': "Getting started on the homework early... probably a good idea.",
		'title': "Start homework day it's assigned"
	},
	"Overachiever": {
		'description': "Not even Lisa Simpson would do that.",
		'title': "Finish homework the day it's assigned"
	},
	"Playing With Fire": {
		'description': "Good, but you still need to master Airbending and Waterbending.",
		'title': "Start and finish assignment the day it's due"
	},
	"Bookworm": {
		'description': "Reading is for chums.",
		'title': "Starting the reading early"
	},
	"Nailed It": {
		'description': "It would be bad to snowflake D term your senior year.",
		'title': "Pass the class"
	},
}

function animateUnlockedAchievement(name) {
	var COLORS, Achievement, NUM_CONFETTI, PI_2, canvas, achievement, context, drawCircle, drawRoundedRectangle, i, range, resizeWindow, xpos;

	NUM_CONFETTI = 350;

	canvas = document.getElementById("achievement");
	canvas.style.display = "block";

	context = canvas.getContext("2d");

	window.w = 0;
	window.h = 0;

	resizeWindow = function() {
		window.w = canvas.width = window.innerWidth;
		return window.h = canvas.height = window.innerHeight;
	};

	window.addEventListener('resize', resizeWindow, false);

	resizeWindow();

	range = function(a, b) {
		return (b - a) * Math.random() + a;
	};

	drawCircle = function(x, y, r, style) {
		context.beginPath();
		context.arc(x, y, r, 0, Math.PI * 2, false);
		context.fillStyle = style;
		context.fill();
		var img = document.getElementById("trophy");
		context.drawImage(img, x - r / 2, y - r / 2, r, r);
		console.log(style);
	};

	drawRoundedRectangle = function(x, y, r, w, opacity, style, style2) {
		context.beginPath();
		context.globalAlpha = opacity;
		context.arc(x - w, y, r, Math.PI / 2, 3 * Math.PI / 2, false);
		context.arc(x + w, y, r, 3 * Math.PI / 2, Math.PI / 2, false)
		context.fillStyle = style2;
		context.fill();
		drawCircle(x - w, y, r, style);
		return;
	}

	xpos = 0.5;

	document.onmousemove = function(e) {
		return xpos = e.pageX / w;
	};

	window.requestAnimationFrame = (function() {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
			return window.setTimeout(callback, 1000 / 60);
		};
	})();

	Achievement = (function() {
		function Achievement() {
			this.opacity = 1;
			this.r = 0;
			this.x = w / 2;
			this.y = h * 7 / 8;
			this.width = -100;
			this.textVisible = false;
			this.state = "circle";
			// this.replace();
		}

		Achievement.prototype.replace = function() {
			this.xmax = w - this.r;
			this.ymax = h - this.r;
			//this.vx = range(0, 2) + 8 * xpos - 5;
			//this.vy = 0.7 * this.r + range(-1, 1);
			return;
		};

		Achievement.prototype.draw = function() {
			// this.x += this.vx;
			// this.y += this.vy;
			if (this.state == "circle") {
				if (this.r < 32) {
					this.r += 2;
				} else {
					this.framesToWait = 24;
					this.state = "waiting1"
				}
			} else if (this.state == "waiting1") {
				if (this.framesToWait > 0) {
					this.framesToWait -= 1;
				} else {
					this.state = "bar";
				}
			} else if (this.state == "bar") {
				if (this.width < 100) {
					this.width += 10;
				} else {
					this.framesToWait = 72;
					this.state = "waiting2";
					this.textVisible = true;
				}
			} else if (this.state == "waiting2") {
				if (this.framesToWait > 0) {
					this.framesToWait -= 1;
				} else {
					this.state = "fading";
				}
			} else if (this.state == "fading") {
				if (this.opacity > 0) {
					this.opacity -= 0.01;
				} else {
					this.state = "done";
				}
			} else {
				canvas.style.display = "none";
			}
			// drawCircle(~~this.x, ~~this.y, this.r, "" + this.rgba);
			drawRoundedRectangle(
				~~this.x, ~~this.y, this.r, Math.max(0, this.width), this.opacity,
				"rgba(170, 170, 170, 1)", "rgba(160, 160, 160, 0.9)");
			if (this.textVisible) {
				var ctx = canvas.getContext("2d");
				ctx.font = "16px Nimbus Sans";
				ctx.textAlign = "center";
				ctx.fillStyle = "#fff";
				ctx.fillText("Achievement unlocked", this.x + this.r, this.y);
			}

		};

		return Achievement;

	})();

	achievement = new Achievement();

	window.step = function() {
		var _results;
		if (canvas.style.display != "none") {
			requestAnimationFrame(step);
			context.clearRect(0, 0, w, h);
			achievement.draw()
		}
	};

	step();
}

function makeAchievementDiv(name, description, title) {
	var div = document.createElement("div");
	var nameSpan = document.createElement("span");
	var descSpan = document.createElement("span");
	div.className = 'achievement';
	div.title = title;
	nameSpan.className = 'name';
	nameSpan.textContent = name;
	descSpan.className = 'description';
	descSpan.textContent = description;
	div.appendChild(nameSpan);
	div.appendChild(descSpan);
	return div;
}

function clearChildren(node) {
	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
}

function resetAchievementDivs(unlockedDiv, lockedDiv) {
	clearChildren(unlockedDiv);
	clearChildren(lockedDiv);
}

function setProgress(progress) {
	if (progress == 100) {
		startConfetti();
	}
	var progressBar = document.getElementById("progress-bar");
	progressBar.style.width = progress + "%";
}

function updateGrade(progress) {
	var grade = document.getElementById("grade");
	if (progress == 100) {
		grade.textContent = "A+";
	} else if (progress >= 80) {
		grade.textContent = "A";
	} else if (progress >= 60) {
		grade.textContent = "B";
	} else if (progress >= 40) {
		grade.textContent = "C";
	} else {
		grade.textContent = "NR";
	}
}

function refreshDOM(unlockedList, lockedList) {
	var unlockedDiv = document.getElementById("unlocked-achievements");
	var lockedDiv = document.getElementById("locked-achievements");
	var unlockedCount = document.getElementById("unlocked-count");
	var lockedCount = document.getElementById("locked-count");
	resetAchievementDivs(unlockedDiv, lockedDiv);

	for (var name in ACHIEVEMENTS) {
		var description = ACHIEVEMENTS[name].description;
		var title = ACHIEVEMENTS[name].title;
		if (unlockedList.indexOf(name) == -1) {
			lockedDiv.appendChild(makeAchievementDiv(name, description, title));
		} else {
			unlockedDiv.appendChild(makeAchievementDiv(name, description, title));
		}
	}
	var numUnlocked = unlockedDiv.childNodes.length;
	var numLocked = lockedDiv.childNodes.length;
	if (numUnlocked == 0) {
		unlockedDiv.textContent = "You haven't unlocked anything!";
	}
	if (numLocked == 0) {
		lockedDiv.textContent = "You got all the achievements!";
	}
	unlockedCount.textContent = numUnlocked;
	lockedCount.textContent = numLocked;
	var progress = numUnlocked * 100.0 / (numUnlocked + numLocked)
	setProgress(progress);
	updateGrade(progress);
}

function setupListeners(unlockedList, lockedList) {
	function handleAchievementClick(achievementDiv) {
		var name = achievementDiv.childNodes[0].textContent;
		// Only prompt if it's not already unlocked.
		if (unlockedList.indexOf(name) == -1) {
			if (confirm("Are you sure you deserve to unlock " + name + "?")) {

				unlockedList.push(name);
				lockedList.splice(lockedList.indexOf(name), 1);
				document.getElementById("achievement-unlocked").play();
				animateUnlockedAchievement(name);
			}
		} else if (confirm("Really remove " + name + "?")) {
			lockedList.push(name);
			unlockedList.splice(unlockedList.indexOf(name), 1);
		}
		localStorage.setItem("achievements", JSON.stringify(unlockedList));
	}

	document.addEventListener('click', function (e) {
		if (e.target.className == 'achievement') {
			handleAchievementClick(e.target);
		} else if (e.target.parentNode.className == 'achievement') {
			handleAchievementClick(e.target.parentNode);
		}
		refreshDOM(unlockedList, lockedList);
	}, false);
}

function main() {
	var jsonList = localStorage.getItem("achievements") || "[]";
	var unlockedList = JSON.parse(jsonList);
	var lockedList = [];
	for (var name in ACHIEVEMENTS) {
		if (unlockedList.indexOf(name) == -1) {
			lockedList.push(name);
		}
	}

	refreshDOM(unlockedList, lockedList);
	setupListeners(unlockedList, lockedList);
}

main();

})();
