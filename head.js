var btn = document.getElementById('btn'),
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