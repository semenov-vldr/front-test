function dragTab () {
    let div = document.querySelector('.tab2-content'),
        x1 = null,
        y1 = null,
        z = false;

    div.addEventListener('mouseover', mouseOver);
    div.addEventListener('mousemove', mouseMove);
    div.addEventListener('mouseout', mouseOut);
    div.addEventListener('mouseup', mouseOut);

    function mouseOver (evt) {
            z = true;
            x1 = evt.clientX;
            y1 = evt.clientY;
    };


    function mouseMove (evt) {
      if (z == true) {
        div.scrollLeft -= evt.clientX-x1;
        div.scrollTop -= evt.clientY-y1;
        x1 = evt.clientX;
        y1 = evt.clientY;
      }
    };


    function mouseOut() {z = false;}

    };

    dragTab();
