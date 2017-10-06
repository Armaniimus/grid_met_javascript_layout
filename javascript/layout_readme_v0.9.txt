1.  This article layout grid works with article boxes.
    with at max 12 articles inside them.

2.  Article boxes need to have the id articlebox-1 or 
    articlebox-2, or articlebox-3, etc;
	*note if you want #articlebox-3 to work #articlebox-1 and #articlebox-2 need to exist

3.  At max 500 article boxes can be added (thats like 1200 articles on 1 page).
    I am not planning on increasing it;

4.  An articlebox needs to have 2 children a head and a body elements name doesn't matter.
    you can give these element all the sub elements you want though.    
    
*how does the layout work*
    The javascript ajusts this head and body element to have the heighest height inside its row.
    because all the height in a row are the same floats dont get stuck behind elements.
    
    Its not 100% optimal but better then ajusting them by hand. 
    or have a severe uneven result at the bottom or having holes inside your layout.
    and it is responsive and that can not be said in most other solutions.

*this program is owned by Armaniimus-webdevelopment

    
