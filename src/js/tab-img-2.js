function dragTab () {
    let div = document.querySelector('.tab2-content'),
        x1 = 0,
        y1 = 0,
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
        div.scrollLeft += evt.pageX-x1;
        div.scrollTop += evt.pageY-y1;
        x1 = evt.pageX;
        y1 = evt.pageY;
      }
    };


    function mouseOut() {z = false;}

    };

    dragTab();
