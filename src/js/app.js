function addSliderEvents(count, proportion)
{
    let offset = 0;
    const slider = document.querySelector('.slider__imgs');
    document.querySelector('.next').addEventListener('click', function() {
        offset += proportion;
        if(offset > proportion*(count-1))
        {
            offset = 0;
        }
        slider.style.left = -offset + 'vw';
    });
    document.querySelector('.prev').addEventListener('click', function() {
        offset -= proportion;
        if(offset < 0)
        {
            offset = proportion*(count-1);
        }
        slider.style.left = -offset + 'vw';
    });
}

function addMadaraEvent()
{
    const img = document.querySelector('.madara__gif');
    const expectDiv = document.querySelector('#expectations');
    const btn = document.querySelectorAll('.nav__link')[1];
    btn.addEventListener('click', () => {
        img.style.display = 'block'
        expectDiv.style.display = 'none'
        setTimeout(() => {
            img.style.display = 'none'
            expectDiv.style.display = 'block'
        }, 2000);
    })
}

if(window.innerWidth > 1360)
{
    addSliderEvents(3, 20);
}
else
{
    addSliderEvents(3, 50);
}
addMadaraEvent();