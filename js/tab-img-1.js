function dragTab () {
    let div = document.querySelector('.tab1-content'),
    img = document.querySelector('.tab1-img'),
        x1 = null,
        y1 = null,
        z = false;
    div.addEventListener('mousemove', mouseMove); // событие при движении мышки
    div.addEventListener('mousedown', mouseDown);
    div.addEventListener('mouseup', mouseUp); // событие с отпущенной клавишей мышки


    function mouseMove (evt) {
      if (z == true) {
        div.scrollLeft -= evt.clientX-x1;
        div.scrollTop -= evt.clientY-y1;
        x1 = evt.clientX;
        y1 = evt.clientY;
      }
    };

    function mouseDown (evt) {
        const key = evt.keyCode || evt.which;
        if (key == "1") { // только для левой клавиши мышки
            z = true;
            x1 = evt.clientX;
            y1 = evt.clientY;
        }
    };

    function mouseUp() {z = false;}

    };

    dragTab();
