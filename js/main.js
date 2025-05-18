
var currentPage = 1;
var hasBeenClicked = [1,0,0,0];
var slowDownThereBucko = false;

function handleMenuClick(input) {

    if (!slowDownThereBucko) {
        slowDownThereBucko = true;
        this.document.getElementById('leftSpacer').classList.remove("shiftingLeftAnim");
        this.document.getElementById('leftSpacer').classList.add("shiftingLeftAnim");
        this.document.getElementById('rightSpacer').classList.remove("shiftingRightAnim");
        this.document.getElementById('rightSpacer').classList.add("shiftingRightAnim");
        if (currentPage === 1){
            this.document.getElementById('section 1').classList.remove("becomeRelevant");
            this.document.getElementById('section 1').classList.add("fadeOutToIrrelevant");
        }
        if (currentPage === 2){
            this.document.getElementById('section 2').classList.remove("becomeRelevant");
            this.document.getElementById('section 2').classList.add("fadeOutToIrrelevant");
        }
        if (currentPage === 3){
            this.document.getElementById('section 3').classList.remove("becomeRelevant");
            this.document.getElementById('section 3').classList.add("fadeOutToIrrelevant");
        }
        if (currentPage === 4){
            this.document.getElementById('section 4').classList.remove("becomeRelevant");
            this.document.getElementById('section 4').classList.add("fadeOutToIrrelevant");
        }
        if (input === 1) {
            if (currentPage === 4){
                hasBeenClicked[3] = 1;
                changeMenuStatus(1);
            }
        }
        if (input === 2) {
            if (currentPage === 3){
                hasBeenClicked[2] = 1;
                changeMenuStatus(1);
            } else
            if (currentPage === 4){
                hasBeenClicked[3] = 1;
                changeMenuStatus(2);
            }
        }
        if (input === 3) {
            if (currentPage === 2){
                hasBeenClicked[1] = 1;
                changeMenuStatus(1);
            } else
            if (currentPage === 3){
                hasBeenClicked[2] = 1;
                changeMenuStatus(2);
            } else
            if (currentPage === 4){
                hasBeenClicked[3] = 1;
                changeMenuStatus(3);
            }
        }
        if (input === 4) {
            if (currentPage === 1){
                changeMenuStatus(2);
            } else
            if (currentPage === 2){
                hasBeenClicked[1] = 1;
                changeMenuStatus(3);
            } else
            if (currentPage === 3){
                hasBeenClicked[2] = 1;
                changeMenuStatus(4);
            }
        }
        if (input === 5) {
            if (currentPage === 1){
                changeMenuStatus(3);
            } else
            if (currentPage === 2){
                hasBeenClicked[1] = 1;
                changeMenuStatus(4);
            }
        }
        if (input === 6) {
            if (currentPage === 1){
                changeMenuStatus(4);
            }
        }
        setTimeout(function() {
            slowDownThereBucko = false;
            this.document.getElementById('leftSpacer').classList.remove("shiftingLeftAnim");
            this.document.getElementById('rightSpacer').classList.remove("shiftingRightAnim");
        }, 2200); // 1000 milliseconds = 1 second
    }

}

function changeMenuStatus(input) {

    this.document.getElementById('titleStar').classList.add("shuffleAnim");
    this.document.getElementById('titleText').classList.add("shuffleAnim2");
    setTimeout(function() {
        this.document.getElementById('titleStar').classList.remove("shuffleAnim");
        this.document.getElementById('titleText').classList.remove("shuffleAnim2");
    }, 2000); // 1000 milliseconds = 1 second
    setTimeout(function() {
    if (input === 1){
        this.document.getElementById('section 2').classList.add("becomeIrrelevant");
        this.document.getElementById('section 3').classList.add("becomeIrrelevant");
        this.document.getElementById('section 4').classList.add("becomeIrrelevant");
        setTimeout(function() {
        this.document.getElementById('section 1').classList.remove("becomeIrrelevant");
        }, 100); // 1000 milliseconds = 1 second
        this.document.getElementById('star1').classList.add("becomeInvisible");
        this.document.getElementById('star2').classList.add("becomeInvisible");
        this.document.getElementById('star3').classList.add("becomeInvisible");
        this.document.getElementById('star4').classList.remove("becomeInvisible");
        this.document.getElementById('star5').classList.remove("becomeInvisible");
        this.document.getElementById('star6').classList.remove("becomeInvisible");
        currentPage = 1;
        this.document.getElementById('section 1').classList.remove("fadeOutToIrrelevant");
        this.document.getElementById('section 1').classList.add("becomeRelevant");

        if (hasBeenClicked[1] === 1){
            this.document.getElementById('star4').classList.remove("unclicked");
        } else {
            this.document.getElementById('star4').classList.add("unclicked");
        }
        if (hasBeenClicked[2] === 1){
            this.document.getElementById('star5').classList.remove("unclicked");
        } else {
            this.document.getElementById('star5').classList.add("unclicked");
        }
        if (hasBeenClicked[3] === 1){
            this.document.getElementById('star6').classList.remove("unclicked");
        } else {
            this.document.getElementById('star6').classList.add("unclicked");
        }
        document.getElementById("titleText").textContent = "About Me";
    }
    if (input === 2){

        this.document.getElementById('section 3').classList.add("becomeIrrelevant");
        this.document.getElementById('section 4').classList.add("becomeIrrelevant");
        this.document.getElementById('section 1').classList.add("becomeIrrelevant");
        setTimeout(function() {
            this.document.getElementById('section 2').classList.remove("becomeIrrelevant");
        }, 100); // 1000 milliseconds = 1 second

        this.document.getElementById('star1').classList.add("becomeInvisible");
        this.document.getElementById('star2').classList.add("becomeInvisible");
        this.document.getElementById('star3').classList.remove("becomeInvisible");
        this.document.getElementById('star4').classList.remove("becomeInvisible");
        this.document.getElementById('star5').classList.remove("becomeInvisible");
        this.document.getElementById('star6').classList.add("becomeInvisible");
        currentPage = 2;
        this.document.getElementById('section 2').classList.remove("fadeOutToIrrelevant");
        this.document.getElementById('section 2').classList.add("becomeRelevant");

        if (hasBeenClicked[0] === 1){
            this.document.getElementById('star3').classList.remove("unclicked");
        } else {
            this.document.getElementById('star3').classList.add("unclicked");
        }
        if (hasBeenClicked[2] === 1){
            this.document.getElementById('star4').classList.remove("unclicked");
        } else {
            this.document.getElementById('star4').classList.add("unclicked");
        }
        if (hasBeenClicked[3] === 1){
            this.document.getElementById('star5').classList.remove("unclicked");
        } else {
            this.document.getElementById('star5').classList.add("unclicked");
        }
        document.getElementById("titleText").textContent = "Coding/ Design";
    }
    if (input === 3){
        this.document.getElementById('section 2').classList.add("becomeIrrelevant");
        this.document.getElementById('section 4').classList.add("becomeIrrelevant");
        this.document.getElementById('section 1').classList.add("becomeIrrelevant");
        setTimeout(function() {
            this.document.getElementById('section 3').classList.remove("becomeIrrelevant");
        }, 100); // 1000 milliseconds = 1 second

        this.document.getElementById('star1').classList.add("becomeInvisible");
        this.document.getElementById('star2').classList.remove("becomeInvisible");
        this.document.getElementById('star3').classList.remove("becomeInvisible");
        this.document.getElementById('star4').classList.remove("becomeInvisible");
        this.document.getElementById('star5').classList.add("becomeInvisible");
        this.document.getElementById('star6').classList.add("becomeInvisible");
        currentPage = 3;
        this.document.getElementById('section 3').classList.remove("fadeOutToIrrelevant");
        this.document.getElementById('section 3').classList.add("becomeRelevant");

        if (hasBeenClicked[0] === 1){
            this.document.getElementById('star2').classList.remove("unclicked");
        } else {
            this.document.getElementById('star2').classList.add("unclicked");
        }
        if (hasBeenClicked[1] === 1){
            this.document.getElementById('star3').classList.remove("unclicked");
        } else {
            this.document.getElementById('star3').classList.add("unclicked");
        }
        if (hasBeenClicked[3] === 1){
            this.document.getElementById('star4').classList.remove("unclicked");
        } else {
            this.document.getElementById('star4').classList.add("unclicked");
        }
        document.getElementById("titleText").textContent = "TD/ Rigging";
    }
    if (input === 4){
        this.document.getElementById('section 2').classList.add("becomeIrrelevant");
        this.document.getElementById('section 3').classList.add("becomeIrrelevant");
        this.document.getElementById('section 1').classList.add("becomeIrrelevant");
        setTimeout(function() {
            this.document.getElementById('section 4').classList.remove("becomeIrrelevant");
        }, 100); // 1000 milliseconds = 1 second

        this.document.getElementById('star1').classList.remove("becomeInvisible");
        this.document.getElementById('star2').classList.remove("becomeInvisible");
        this.document.getElementById('star3').classList.remove("becomeInvisible");
        this.document.getElementById('star4').classList.add("becomeInvisible");
        this.document.getElementById('star5').classList.add("becomeInvisible");
        this.document.getElementById('star6').classList.add("becomeInvisible");
        currentPage = 4;

        this.document.getElementById('section 4').classList.remove("fadeOutToIrrelevant");
        this.document.getElementById('section 4').classList.add("becomeRelevant");

        if (hasBeenClicked[0] === 1){
            this.document.getElementById('star1').classList.remove("unclicked");
        } else {
            this.document.getElementById('star1').classList.add("unclicked");
        }
        if (hasBeenClicked[1] === 1){
            this.document.getElementById('star2').classList.remove("unclicked");
        } else {
            this.document.getElementById('star2').classList.add("unclicked");
        }
        if (hasBeenClicked[2] === 1){
            this.document.getElementById('star3').classList.remove("unclicked");
        } else {
            this.document.getElementById('star3').classList.add("unclicked");
        }
        document.getElementById("titleText").textContent = "Work Experience";
    }
    }, 1000); // 1000 milliseconds = 1 second

}

var openPage= "";
var openImage= "";

function pageCloseHandler() {
    this.document.getElementById('PageBackground').classList.remove("openAnimation");
    this.document.getElementById('PageBackground').classList.add("closeAnimation");

    this.document.getElementById(openPage).classList.remove("pageOpenAnimation");
    this.document.getElementById(openPage).classList.add("pageCloseAnimation");

}

function pageOpenHandler(index) {
    this.document.getElementById('PageBackground').scrollIntoView(
        {
            behavior: 'smooth'
        }
    );

    this.document.getElementById('PageBackground').classList.remove("closeAnimation");
    this.document.getElementById('PageBackground').classList.add("openAnimation");

    this.document.getElementById(index).classList.remove("pageCloseAnimation");
    this.document.getElementById(index).classList.add("pageOpenAnimation");

    openPage = index;
    console.log(openPage)
}

function imageOpenHandler(index) {
    this.document.getElementById('imageBackground').classList.remove("closeAnimation");
    this.document.getElementById('imageBackground').classList.add("openAnimation");

    this.document.getElementById(index).classList.remove("imageCloseAnimation");
    this.document.getElementById(index).classList.add("imageOpenAnimation");

    openImage = index;
    console.log("HELLO")
}

function imageCloseHandler() {
    this.document.getElementById('imageBackground').classList.remove("openAnimation");
    this.document.getElementById('imageBackground').classList.add("closeAnimation");

    this.document.getElementById(openImage).classList.remove("imageOpenAnimation");
    this.document.getElementById(openImage).classList.add("imageCloseAnimation");
}