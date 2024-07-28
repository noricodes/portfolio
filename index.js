var job1 = document.getElementById("tab-0");
var job2 = document.getElementById("tab-1");

var job1_desc = document.getElementById("panel-0");
var job2_desc = document.getElementById("panel-1");

var active_bar = document.getElementById("active-bar");


job1.setAttribute('style', 'color: #64ffda;');

job1.onclick = function() {showJob1()}

function showJob1() {
    job2.ariaSelected = false;
    job1.ariaSelected = true;

    job2.tabIndex = 0;
    job1.tabIndex = -1;

    job2.setAttribute('style', 'color: #8892b0;');
    job1.setAttribute('style', 'color: #64ffda;');

    active_bar.setAttribute('style', 'transform: translateY(calc(0* 42px));');

    job2_desc.tabIndex = 0;
    job1_desc.tabIndex = -1;

    job2_desc.ariaHidden = true;
    job1_desc.ariaHidden = false;

    job2_desc.hidden = true;
    job1_desc.hidden = false;
}

job2.onclick = function() {showJob2()}

function showJob2() {
    job1.ariaSelected = false;
    job2.ariaSelected = true;

    job1.tabIndex = 0;
    job2.tabIndex = -1;

    job1.setAttribute('style', 'color: #8892b0;');
    job2.setAttribute('style', 'color: #64ffda;');

    active_bar.setAttribute('style', 'transform: translateY(calc(1* 42px));');

    job1_desc.tabIndex = 0;
    job2_desc.tabIndex = -1;

    job1_desc.ariaHidden = true;
    job2_desc.ariaHidden = false;

    job1_desc.hidden = true;
    job2_desc.hidden = false;

    job2_desc.setAttribute('style', 'transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1)')
}