  //this manages animation for the menu stars

var previousClick = '3';

  function handleMenuClick(input) {

    this.document.getElementById('visibleFile3').classList.remove('appearingAnimationClass');

    const Menu1 = this.document.getElementById('1');
    const Menu2 = this.document.getElementById('2');
    const Menu3 = this.document.getElementById('3');
    const Menu4 = this.document.getElementById('4');
    const Menu5 = this.document.getElementById('5');
    const ClickedMenu = this.document.getElementById(input);

    this.document.getElementById('menuStar1').classList.remove("starClicked");
    this.document.getElementById('menuStarHovered1').classList.remove("hoveredClicked");
    this.document.getElementById('menuWords1').classList.remove("wordsClicked");
    this.document.getElementById('menuStarHovered1').classList.add("menuStarHoveredHovers");
    this.document.getElementById('menuWords1').classList.add('menuWordsHovers');

    this.document.getElementById('menuStar1').classList.remove("menuStarClicked");
    this.document.getElementById('menuStarHovered1').classList.remove("menuStarHoveredClicked");
    this.document.getElementById('menuWords1').classList.remove("menuWordsClicked");


    this.document.getElementById('menuStar2').classList.remove("starClicked");
    this.document.getElementById('menuStarHovered2').classList.remove("hoveredClicked");
    this.document.getElementById('menuWords2').classList.remove("wordsClicked");
    this.document.getElementById('menuStarHovered2').classList.add("menuStarHoveredHovers");
    this.document.getElementById('menuWords2').classList.add('menuWordsHovers');

    this.document.getElementById('menuStar2').classList.remove("menuStarClicked");
    this.document.getElementById('menuStarHovered2').classList.remove("menuStarHoveredClicked");
    this.document.getElementById('menuWords2').classList.remove("menuWordsClicked");


    this.document.getElementById('menuStar3').classList.remove("starClicked");
    this.document.getElementById('menuStarHovered3').classList.remove("hoveredClicked");
    this.document.getElementById('menuWords3').classList.remove("wordsClicked");
    this.document.getElementById('menuStar3').classList.add("menuStarHovers");
    this.document.getElementById('menuStarHovered3').classList.add("menuStarHoveredHovers");
    this.document.getElementById('menuWords3').classList.add('menuWordsHovers');

    this.document.getElementById('menuStar3').classList.remove("menuStarClicked");
    this.document.getElementById('menuStarHovered3').classList.remove("menuStarHoveredClicked");
    this.document.getElementById('menuWords3').classList.remove("menuWordsClicked");


    this.document.getElementById('menuStar4').classList.remove("starClicked");
    this.document.getElementById('menuStarHovered4').classList.remove("hoveredClicked");
    this.document.getElementById('menuWords4').classList.remove("wordsClicked");
    this.document.getElementById('menuStarHovered4').classList.add("menuStarHoveredHovers");
    this.document.getElementById('menuWords4').classList.add('menuWordsHovers');

    this.document.getElementById('menuStar4').classList.remove("menuStarClicked");
    this.document.getElementById('menuStarHovered4').classList.remove("menuStarHoveredClicked");
    this.document.getElementById('menuWords4').classList.remove("menuWordsClicked");


    this.document.getElementById('menuStar5').classList.remove("starClicked");
    this.document.getElementById('menuStarHovered5').classList.remove("hoveredClicked");
    this.document.getElementById('menuWords5').classList.remove("wordsClicked");
    this.document.getElementById('menuStarHovered5').classList.add("menuStarHoveredHovers");
    this.document.getElementById('menuWords5').classList.add('menuWordsHovers');

    this.document.getElementById('menuStar5').classList.remove("menuStarClicked");
    this.document.getElementById('menuStarHovered5').classList.remove("menuStarHoveredClicked");
    this.document.getElementById('menuWords5').classList.remove("menuWordsClicked");
  


    
    if (input == '1') {
      this.document.getElementById('menuStar1').classList.add("starClicked");
      this.document.getElementById('menuStarHovered1').classList.add("hoveredClicked");
      this.document.getElementById('menuStarHovered1').classList.remove("menuStarHoveredHovers");
      this.document.getElementById('menuWords1').classList.add("wordsClicked");
      this.document.getElementById('menuWords1').classList.remove('menuWordsHovers');
      this.document.getElementById('visibleFile1').classList.remove('fileToOffScreen1');
      this.document.getElementById('visibleFile1').classList.add('fileFromOffScreen1');
      
    } else 
    if (input == '2') {
      this.document.getElementById('menuStar2').classList.add("starClicked");
      this.document.getElementById('menuStarHovered2').classList.add("hoveredClicked");
      this.document.getElementById('menuStarHovered2').classList.remove("menuStarHoveredHovers");
      this.document.getElementById('menuWords2').classList.add("wordsClicked");
      this.document.getElementById('menuWords2').classList.remove('menuWordsHovers');
      this.document.getElementById('visibleFile2').classList.remove('fileToOffScreen2');
      this.document.getElementById('visibleFile2').classList.add('fileFromOffScreen2');
    } else 
    if (input == '3') {
      this.document.getElementById('menuStar3').classList.add("starClicked");
      this.document.getElementById('menuStarHovered3').classList.add("hoveredClicked");
      this.document.getElementById('menuStarHovered3').classList.remove("menuStarHoveredHovers");
      this.document.getElementById('menuWords3').classList.add("wordsClicked");
      this.document.getElementById('menuWords3').classList.remove('menuWordsHovers');
      this.document.getElementById('visibleFile3').classList.remove('fileToOffScreen3');
      this.document.getElementById('visibleFile3').classList.add('fileFromOffScreen3');
    } else 
    if (input == '4') {
      this.document.getElementById('menuStar4').classList.add("starClicked");
      this.document.getElementById('menuStarHovered4').classList.add("hoveredClicked");
      this.document.getElementById('menuStarHovered4').classList.remove("menuStarHoveredHovers");
      this.document.getElementById('menuWords4').classList.add("wordsClicked");
      this.document.getElementById('menuWords4').classList.remove('menuWordsHovers');
      this.document.getElementById('visibleFile4').classList.remove('fileToOffScreen4');
      this.document.getElementById('visibleFile4').classList.add('fileFromOffScreen4');
    } else 
    if (input == '5') {
      this.document.getElementById('menuStar5').classList.add("starClicked");
      this.document.getElementById('menuStarHovered5').classList.add("hoveredClicked");
      this.document.getElementById('menuStarHovered5').classList.remove("menuStarHoveredHovers");
      this.document.getElementById('menuWords5').classList.add("wordsClicked");
      this.document.getElementById('menuWords5').classList.remove('menuWordsHovers');
      this.document.getElementById('visibleFile5').classList.remove('fileToOffScreen5');
      this.document.getElementById('visibleFile5').classList.add('fileFromOffScreen5');
    } 
    
    if (input == previousClick) {
    } else {
      if (previousClick == '1') {
        this.document.getElementById('menuStar1').classList.add("menuStarClicked");
        this.document.getElementById('menuStarHovered1').classList.add("menuStarHoveredClicked");
        this.document.getElementById('menuWords1').classList.add("menuWordsClicked");
        this.document.getElementById('visibleFile1').classList.remove('fileFromOffScreen1');
        this.document.getElementById('visibleFile1').classList.add('fileToOffScreen1');
      } else 
      if (previousClick == '2') {
        this.document.getElementById('menuStar2').classList.add("menuStarClicked");
        this.document.getElementById('menuStarHovered2').classList.add("menuStarHoveredClicked");
        this.document.getElementById('menuWords2').classList.add("menuWordsClicked");
        this.document.getElementById('visibleFile2').classList.remove('fileFromOffScreen2');
        this.document.getElementById('visibleFile2').classList.add('fileToOffScreen2');
      } else 
      if (previousClick == '3') {
        this.document.getElementById('menuStar3').classList.add("menuStarClicked");
        this.document.getElementById('menuStarHovered3').classList.add("menuStarHoveredClicked");
        this.document.getElementById('menuWords3').classList.add("menuWordsClicked");
        this.document.getElementById('visibleFile3').classList.remove('fileFromOffScreen3');
        this.document.getElementById('visibleFile3').classList.add('fileToOffScreen3');
      } else 
      if (previousClick == '4') {
        this.document.getElementById('menuStar4').classList.add("menuStarClicked");
        this.document.getElementById('menuStarHovered4').classList.add("menuStarHoveredClicked");
        this.document.getElementById('menuWords4').classList.add("menuWordsClicked");
        this.document.getElementById('visibleFile4').classList.remove('fileFromOffScreen4');
        this.document.getElementById('visibleFile4').classList.add('fileToOffScreen4');
      } else 
      if (previousClick == '5') {
        this.document.getElementById('menuStar5').classList.add("menuStarClicked");
        this.document.getElementById('menuStarHovered5').classList.add("menuStarHoveredClicked");
        this.document.getElementById('menuWords5').classList.add("menuWordsClicked");
        this.document.getElementById('visibleFile5').classList.remove('fileFromOffScreen5');
        this.document.getElementById('visibleFile5').classList.add('fileToOffScreen5');
      } 
      previousClick = input;

    }

    };

  //this manages animation for the initial clasp button
  function openingAnimation() {

    const FolderBot = this.document.getElementById('folderBottom');
    const FolderTop = this.document.getElementById('folderTop');
    const Clasp = this.document.getElementById('clasp');
    const Menu = this.document.getElementById('topMenu');
    const File = this.document.getElementById('fileContainer');
    const Click = this.document.getElementById('clickEffect');
    
    Clasp.classList.add("upOffScreenAnimation");
    FolderTop.classList.add("upOffScreenAnimationFolder");
    FolderBot.classList.add("downOffScreenAnimation");
    Menu.classList.add("appearingAnimationClass");
    File.classList.add("appearingAnimationClass");
    Click.classList.add("claspAnimationAnimation");

    // this.document.getElementById('spinningStar').classList.remove('animatedClasp');
    this.document.getElementById('spinningStar').classList.add('buttonSpin');

    }


    function mouseOffMenuHandler(input) {

      if (input !== previousClick)  
      {
      if (input == '1') {
        this.document.getElementById('menuStar1').classList.add("menuStarClicked");
        this.document.getElementById('menuStarHovered1').classList.add("menuStarHoveredClicked");
        this.document.getElementById('menuWords1').classList.add("menuWordsClicked");
      } else 
      if (input == '2') {
        this.document.getElementById('menuStar2').classList.add("menuStarClicked");
        this.document.getElementById('menuStarHovered2').classList.add("menuStarHoveredClicked");
        this.document.getElementById('menuWords2').classList.add("menuWordsClicked");
      } else 
      if (input == '3') {
        this.document.getElementById('menuStar3').classList.add("menuStarClicked");
        this.document.getElementById('menuStarHovered3').classList.add("menuStarHoveredClicked");
        this.document.getElementById('menuWords3').classList.add("menuWordsClicked");
      } else 
      if (input == '4') {
        this.document.getElementById('menuStar4').classList.add("menuStarClicked");
        this.document.getElementById('menuStarHovered4').classList.add("menuStarHoveredClicked");
        this.document.getElementById('menuWords4').classList.add("menuWordsClicked");
      } else 
      if (input == '5') {
        this.document.getElementById('menuStar5').classList.add("menuStarClicked");
        this.document.getElementById('menuStarHovered5').classList.add("menuStarHoveredClicked");
        this.document.getElementById('menuWords5').classList.add("menuWordsClicked");
      } 
    }
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

  function doNothing() {

  }

  function imageOpenHandler(index) {
    this.document.getElementById('imageBackground').classList.remove("closeAnimation");
    this.document.getElementById('imageBackground').classList.add("openAnimation");

    this.document.getElementById(index).classList.remove("imageCloseAnimation");
    this.document.getElementById(index).classList.add("imageOpenAnimation");

    openImage = index;
    console.log(openPage)
  }

  function imageCloseHandler() {
    this.document.getElementById('imageBackground').classList.remove("openAnimation");
    this.document.getElementById('imageBackground').classList.add("closeAnimation");

    this.document.getElementById(openImage).classList.remove("imageOpenAnimation");
    this.document.getElementById(openImage).classList.add("imageCloseAnimation");
  }