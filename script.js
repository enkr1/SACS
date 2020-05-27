const instuctionsButton = document.getElementById('instructions-button')
const mainPage = document.getElementById('default-main-page')
const instPage = document.getElementById('instructions-page')
const inst1 = document.getElementById('inst1')
const inst2 = document.getElementById('inst2')
const inst3 = document.getElementById('inst3')
const inst4 = document.getElementById('inst4')
const box = document.getElementById('box-container')
const solidView = document.getElementById('solid-view')
const frontView = document.getElementById('front-view')
const backView = document.getElementById('back-view')
const topView = document.getElementById('top-view')
const bottomView = document.getElementById('bottom-view')
const rightView = document.getElementById('right-view')
const leftView = document.getElementById('left-view')
const tableSect = document.getElementById('table-section')
var imgFw = 'images/frontview.png'
var imgFwh = 'images/frontview-hover.png'
var imgFws = 'images/frontview-selected.png'
const tw = document.getElementById('tw')
const lh = document.getElementById('lh')
const rh = document.getElementById('rh')
const bw = document.getElementById('bw')
const formula = document.getElementById('formula')
const ans = document.getElementById('ans')
const fvTable = document.getElementById('fv-table')
const ansTable = document.getElementById('ans-table')


instuctionsButton.addEventListener('click', startInstuctions)
frontView.addEventListener('click', selectFront)
solidView.addEventListener('click', paintSurface)

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_overlay_text
function off() {
    document.getElementById("overlay").style.zIndex = "2";
    document.getElementById("table-section").style.zIndex = "999";

    inst3.classList.add('hide')
    box.classList.add('hide')
    formula.classList.remove('formula-typing')
    ans.classList.remove('ans-typing')

    inst4.classList.remove('hide')

    ansTable.classList.add('ans-typing')
    ansTable.classList.remove('hide')
    fvTable.classList.remove('hide')

}
function selectFront() {
    inst1.classList.add('hide')
    inst2.classList.add('show')

    solidView.src = imgFw;

    // the selected button 
    frontView.classList.remove('blink')
    frontView.classList.add('selected')

    // add hover class
    solidView.classList.add('fvh')
    solidView.classList.remove('unclickable')
}

function paintSurface() {
    document.getElementById("overlay").style.display = "block";
    solidView.src = imgFws;
    inst2.classList.remove('show')
    solidView.classList.add('fw-selected')
    // tableSect.classList.add('lose-focus')
    tw.classList.remove('hide')
    lh.classList.remove('hide')
    rh.classList.remove('hide')
    bw.classList.remove('hide')
    inst3.classList.remove('hide')
    box.classList.remove('hide')
    formula.classList.add('formula-typing')
    ans.classList.add('ans-typing')
}

function startInstuctions() {
    mainPage.classList.add('hide')
    instPage.classList.add('show')
    
}