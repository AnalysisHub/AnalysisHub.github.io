window.onscroll = function () {
      menuFixed();
    };
    let navbar = document.querySelector("#navBar");

    function menuFixed() {
      if (document.documentElement.scrollTop > 600) {
        navBar.style.backgroundColor = "#736EFE";
        document.getElementById("navBarLink1").style.color = "#f5f5f5";
        document.getElementById("navBarLink2").style.color = "#f5f5f5";
        document.getElementById("navBarLink3").style.color = "#f5f5f5";
        document.getElementById("navBarLink4").style.color = "#f5f5f5";
      } else {
        navBar.style.backgroundColor = "#f5f5f5";
        document.getElementById("navBarLink1").style.color = "#252525";
        document.getElementById("navBarLink2").style.color = "#252525";
        document.getElementById("navBarLink3").style.color = "#252525";
        document.getElementById("navBarLink4").style.color = "#252525";
      }
    }
    const cards = document.querySelector(".cards");
    const images = document.querySelectorAll(".card__img");
    const backgrounds = document.querySelectorAll(".card__bg");
    const range = 40;

    
    const calcValue = (a, b) => (a/b*range-range/2).toFixed(1) 

    let timeout;
    document.addEventListener('mousemove', ({x, y}) => {
    if (timeout) {
        window.cancelAnimationFrame(timeout);
    }
        
    timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);

        cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

        [].forEach.call(images, (image) => {
        image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
        });

        [].forEach.call(backgrounds, (background) => {
        background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
        })
        })
    }, false);

    function digitar(elemento){
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      textoArray.forEach((letra, i) => {
        setTimeout(function () { 
          elemento.innerHTML += letra;
         }, 75*i )
        })
    }
    const titulo = document.getElementById("#titulo"); 
    digitar(titulo);

    const observer = new IntersectionObserver( entries => {
      console.log(entries);
      Array.from(entries).forEach(entry =>{
        if(entry.intersectionRatio >= 0.5){
          entry.target.classList.add('init-hidden-off');
        }
      })
    }, {
      threshold: [0,.5, 1]
    })
    Array.from(document.querySelectorAll('.init-hidden')).forEach(element =>{
      observer.observe(element);
    })

   
