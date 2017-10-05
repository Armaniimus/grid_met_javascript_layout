// tests width to define how many columns there are inside the html
let globalColumns = 0;
let globalChildren;

function setGlobalColumns(newValue) {
    globalColumns = newValue;
}

function setGlobalChildren() {

    let i = 1;
    globalChildren = [];
    let num;

    while (i !== "end" || i < 10) {

        // gets content boxes
        const id = "articlebox-" + (i);
        const child = document.getElementById(id);

        // test if box exists
        if (child == null) {
            i = "end";

        } else {
            // set global
            num = -1 + i;
            globalChildren[num] = [];

            for (let ii = 0; ii < child.children.length; ii++) {
                // globalChildren[num] = child.children[ii];

                globalChildren[num][ii] = {head:"", main:""};
                globalChildren[num][ii].head = getHeight(child.children[ii].children[0]);
                globalChildren[num][ii].main = getHeight(child.children[ii].children[1]);

                // console.log(child.children)
                console.log(globalChildren)
            }
            i++;
        }
    }
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

function getHTMLHeights(elements, start, end, mode) {
    let height = 0;
    for (let i = start; i <= end; i++) {
        if (typeof elements[i] != 'undefined') {

            //gets height based on the mode used and take the heighest height of the provided set
            if (mode == "head") {
                const testHeight = elements[i].head;
                if (testHeight > height) {
                    height = testHeight;
                }

            } else if (mode == "main") {
                const testHeight = elements[i].main;
                if (testHeight > height) {
                    height = testHeight;
                }
            }

            return height;
        }
    }
}

function setHTMLHeights(elements, start, end, heightHead, heightMain) {
    for (let i = start; i <= end; i++) {

        if (typeof elements != 'undefined') {
            elements[i].children[1].style.height = heightHead + "px";
            elements[i].children[1].style.height = heightMain + "px";
        }
    }
}

function controlHeights() {

    // test amount of columns
    const localColumns = testForColumns();

    if (globalColumns != localColumns) {
        for (var num = 0; num < globalChildren.length; num++) {

            // set globalColumns
            setGlobalColumns(localColumns);

            //set variables
            const savedChildren = globalChildren[num];
            const id = num + 1;
            const htmlChildren = document.getElementById('articlebox-' + id).children;
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

                const setHeadHeight = getHTMLHeights(savedChildren, start, end, "head");
                const setMainHeight = getHTMLHeights(savedChildren, start, end, "main");
                setHTMLHeights(htmlChildren, start, end, setHeadHeight, setMainHeight);
            }
        }
    }
}

setGlobalChildren();
console.log(["height_globalChildren", globalChildren]);

controlHeights();
window.addEventListener("resize", controlHeights);
