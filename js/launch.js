let intervalID = -1;

const adjustTime = time => (time > 9 ? '' : '0') + time;

function startCounter() {
    let secs = +(document.getElementById("counter").innerText);

    if (secs > 0)
        secs--;

    document.getElementById("counter").innerText = adjustTime(secs);

    if (!secs) {
        document.getElementById('counter').classList.remove('animated', 'pulse')
        clearInterval(intervalID)
        intervalID = -1
        history.pushState({}, '', 'csea.html')
        history.go(1);
        window.location.reload()
    }
}

function controlCounter(type) {
    switch (type) {
        case "start":
            document.getElementById('counter').classList.add('animated', 'pulse') 
            if (intervalID == -1)
                intervalID = setInterval(startCounter, 1000)
            break;

        case "pause":
            document.getElementById('counter').classList.remove('animated', 'pulse') 
            clearInterval(intervalID);
            intervalID = -1;
            break;
    }
}