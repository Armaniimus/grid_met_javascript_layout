// tests width to define how many columns there are inside the html
let globalColumns = 0;
let globalChildren = [];

function setGlobalColumns(newValue) {
    globalColumns = newValue;
}

function getHeight(element) {
    //tests the height of the specified element
    let height = window.getComputedStyle(element, null);
    height = height.getPropertyValue("height");
    height = parseInt(height);

    return height;
}

function testForColumns() {

    // gets width of the page
    const pWidth = window.innerWidth;

    if (pWidth < 600) {
        // set localCol
        const localCol = 1;

        // compare if the col is diffrent since the last check to save processing cycles
        if (globalColumns == localCol) {
            return localCol;

        } else {
            return localCol;
        }

    } else if (pWidth < 768) {

        const localCol = 2
        if (globalColumns == localCol) {
            return localCol;

        } else {
            return localCol;
        }

    } else if (pWidth < 1000) {
        const localCol = 3
        if (globalColumns == localCol) {
            return localCol;

        } else {
            return localCol;
        }

    } else {
        const localCol = 4
        if (globalColumns == localCol) {
            return localCol;

        } else {
            return localCol;
        }
    }
}

function setChangeArray() {
    console.log(globalColumns);
    if (globalColumns == 1) {
        let changeArray = [];

        for (let ii = 0; ii < 12; ii++) {
            changeArray[ii] = [ii];
        }
        return changeArray;

    } else if (globalColumns == 2) {
        const changeArray = [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9], [10, 11]];
        return changeArray;

    } else if (globalColumns == 3) {
        const changeArray = [[0, 1, 2], [3 ,4, 5], [6, 7, 8], [9, 10, 11]];
        return changeArray;

    } else if (globalColumns == 4){
        const changeArray = [[0, 1, 2, 3],[4, 5, 6, 7],[8, 9, 10, 11]];
        return changeArray;
    }
}

function setGlobalChildren(elements, nr) {
    globalChildren[num] = []
    for (var i = 0; i < elements.length; i++) {
        globalChildren[num][i] = elements[i]
    }
}

function getHTMLHeights(elements, start, end) {
    for (let i = start; i <= end; i++) {
        if (typeof elements[i] != 'undefined') {

            //get elements height
            const testHeight = getHeight(elements[i].children[1]);
            let height = 0;

            if (testHeight > height) {
                height = testHeight;
                console.log("height:" + height);
            }
            return height;
        }
    }
}

function setHTMLHeights(elements, start, end, height) {
    for (let i = start; i <= end; i++) {
        if (typeof elements != 'undefined') {
            elements[i].children[1].style.height = height + "px";
        }
    }
}

function controlHeights() {

    // test amount of columns
    const localColumns = testForColumns();

    //////////////
    // tests code
    /////////////
    console.log(globalColumns != localColumns);
    //
    // console.log(globalColumns);
    // console.log(localColumns);



    if (globalColumns != localColumns) {
        // set globalColumns
        setGlobalColumns(localColumns);

        //set variables
        const children = document.getElementById("articlebox-1").children
        const changeArray = setChangeArray(localColumns);
        let start;
        let end;
        let suppVar;

        console.log(changeArray);

        for (var i = 0; i < changeArray.length; i++) {
            // set start variable
            start = changeArray[i][0];

            // set end variable
            suppVar = changeArray[i].length -1;
            end = changeArray[i][suppVar];

            console.log("suppVar:" + suppVar);

            const setHeight = getHTMLHeights(children, start, end);
            setHTMLHeights(children, start, end, setHeight);
        }
    }
}

controlHeights();
window.addEventListener("resize", controlHeights);
