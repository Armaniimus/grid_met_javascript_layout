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
            }
            i++;
        }
    }
}


// gets the height of the specified element
function getHeight(element) {
    let height = window.getComputedStyle(element, null);
    height = height.getPropertyValue("height");
    height = parseInt(height);

    return height;
}
