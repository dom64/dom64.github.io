    function calculateFunny() {
        console.log("Calculating funny animal...")
        // Gather all labels by ID for missing inputs.
        catordoglabel=document.getElementById("catordoglabel");
        funnymeterlabel=document.getElementById("funnymeterlabel");
        suslabel=document.getElementById("suslabel");
        ironylabel=document.getElementById("ironylabel");
        controllerlabel=document.getElementById("controllerlabel");
        cslabel=document.getElementById("cslabel");
        auroralabel=document.getElementById("auroralabel");

        let funnyamnt = 0;
        let funnyamntchecked = false;

        let propertyamnt = 0;

        let controlamnt = 0;

        // Accepts the preference of cat or dog.
        catordogchoice = document.getElementsByName("catordog");
        for (i = 0; i<catordogchoice.length; i++) {
            if (catordogchoice[i].checked) {
                catordog = catordogchoice[i].value;
            }
        }

        // Checks second question's answer and identifies correct amount of points to add.
        funnymeter = document.getElementsByName("funnymeter");
        for (i = 0; i<funnymeter.length; i++) {
            if (funnymeter[i].checked) {
                funnyamnt=parseInt(funnymeter[i].value);
                funnyamntchecked =true;
            }
        }
        if (funnyamntchecked === false) {
            funnymeterlabel.innerHTML="2. How funny are you? C'mon, pick something.";
            funnymeterlabel.style.color="red";
        }

        // Checks if the impostor has been identified and gives 20 points if so
        isitsus = document.getElementById("sustest").value;
        if (isitsus.localeCompare("sus") === 0) {
            susamnt = 20;
        } else {
            susamnt = 0;
        }

        // Adds the respective values for the various properties.
        property = document.getElementsByName("property");
        for (i=0; i<property.length; i++) {
            if (property[i].checked) {
                propertyamnt = propertyamnt + parseInt(property[i].value);
            }
        }

        // Assigns an amnt of points to the respective layers of irony
        ironylvl = parseInt(document.getElementById("ironylvl").value);
        switch (Math.floor(ironylvl/3)) {
            case 0:
                ironyamnt = -10;
                break;
            case 1:
                ironyamnt = 10;
                break;
            case 2:
                ironyamnt = 20;
                break;
            case 3:
                ironyamnt = 30;
                break;
            default:
                ironyamnt = 0;
                break;
        }

        // Adds the respective values for the different control verses
        controltype = document.getElementsByName("controltype");
        for (i=0; i<controltype.length; i++) {
            if (controltype[i].checked) {
                controlamnt = controlamnt + parseInt(controltype[i].value);
            }
        }

        // Does something with the amount of white vans

        // Checks the url to be dom64 or AuroraXD or domora.
        domoraurl = document.getElementById("domoracheck").value;
        switch (domoraurl) {
            case "https://www.youtube.com/channel/UCchizq03VrWQ5WauBiH60OQ":
                domoraamnt = 0;
                break;
            case "https://www.youtube.com/channel/UCIbY5QwYIB1UmYlAbKsEa8Q":
                domoraamnt = -10;
                break;
            case "https://www.youtube.com/channel/UCFPZ5qirO9tg-X4pocvO0AQ":
                domoraamnt = 10;
                break;
            default:
                domoraamnt = 0;
                break;
        }

        // Calculates total amount of points accumulated
        value = funnyamnt + susamnt + propertyamnt + ironyamnt + controlamnt + domoraamnt;
        window.alert("Value: " + value);
        window.alert("Points: " + catordog);

        // Identifies the meme based on amount of points
        switch (Math.floor(value/22)) {
            case 0:
                document.getElementById("image").src = "images/orlov.png";
                if (catordog === "dog") {
                    document.getElementById("dogorcat").innerHTML = "Fuck you, you get a cat anyway."
                }
                document.getElementById("memename").innerHTML = "Orlov";
                document.getElementById("memedesc").innerHTML = "Good day Orlov.";
                break;

            case 1:
                document.getElementById("image").src = "images/herbert.png";
                if (catordog === "dog") {
                    document.getElementById("dogorcat").innerHTML = "Fuck you, you get a cat anyway."
                }
                document.getElementById("memename").innerHTML = "Herbert";
                document.getElementById("memedesc").innerHTML = "";
                break;

            case 2:
                document.getElementById("image").src = "images/cheems.png";
                if (catordog === "cat") {
                    document.getElementById("dogorcat").innerHTML = "Fuck you, you get a dog anyway."
                }
                document.getElementById("memename").innerHTML = "Cheems";
                document.getElementById("memedesc").innerHTML = "";
                break;

            case 3:
                document.getElementById("image").src = "images/walter.png";
                if (catordog === "cat") {
                    document.getElementById("dogorcat").innerHTML = "Fuck you, you get a dog anyway."
                }
                document.getElementById("memename").innerHTML = "Walter";
                document.getElementById("memedesc").innerHTML = "You are the gorgeous ";
                break;

            case 4:
                document.getElementById("image").src = "images/Hi_Bingus.png";
                if (catordog === "dog") {
                    document.getElementById("dogorcat").innerHTML = "Fuck you, you get a cat anyway."
                }
                document.getElementById("memename").innerHTML = "Bingus";
                document.getElementById("memedesc").innerHTML = "You are the crazy Allah cat, Bingus!";
                break;

            case 5:
                document.getElementById("image").src = "images/doge.png";
                if (catordog === "cat") {
                    document.getElementById("dogorcat").innerHTML = "Fuck you, you get a dog anyway."
                }
                document.getElementById("memename").innerHTML = "Doge";
                document.getElementById("memedesc").innerHTML = "You are the whacky funny yellow dog!";
                break;

            case 6:
                document.getElementById("image").src = "images/floppa.png";
                if (catordog === "dog") {
                    document.getElementById("dogorcat").innerHTML = "Fuck you, you get a cat anyway."
                }
                document.getElementById("memename").innerHTML = "Floppa";
                document.getElementById("memedesc").innerHTML = "";
                break;

            case 7:
                document.getElementById("image").src = "images/orlov.png";
                if (catordog === "cat") {
                    document.getElementById("dogorcat").innerHTML = "Fuck you, you get a cat anyway."
                }
                document.getElementById("memename").innerHTML = "Orlov";
                document.getElementById("memedesc").innerHTML = "Good day Orlov.";
                break;

            default:
                window.alert("Something went wrong. Hit f5.");

        }
    }