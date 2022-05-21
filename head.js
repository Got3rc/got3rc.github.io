var btn = document.getElementById('btn'),
    btn2 = document.getElementById('btn2'),
    btn3 = document.getElementById('btn3'),
    btn4 = document.getElementById('btn4'),
    btn5 = document.getElementById('btn5'),
    caja = document.getElementById('head'),
    contador= 0 ;

    function cambio()

    { if(contador==0)
        {
            caja.classList.add('bc');
            contador=1;
        }
        else{caja.classList.remove('bc');
            contador=0;}

    }

    btn.addEventListener('click',cambio,true)
    btn2.addEventListener('click',cambio,true)
    btn3.addEventListener('click',cambio,true)
    btn4.addEventListener('click',cambio,true)
    btn5.addEventListener('click',cambio,true)