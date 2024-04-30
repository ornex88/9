
const table_links = document.querySelectorAll(".table_link")

for (let link of table_links) {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = this.getAttribute('data-href').replace('#', '')
        window.scrollTo({
            behavior: 'smooth',
            top: document.getElementById(blockID).getBoundingClientRect().top - document.body.getBoundingClientRect().top - 70,
        })
    })
}

document.querySelector('.orion88_scrollTop').addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' }))

function openCloseMenu(e) {
    e.preventDefault()
    document.getElementById('mobileMenu').toggleAttribute('hidden')
    document.querySelector('.orion88_overlay').toggleAttribute('hidden')
}
document.querySelector('.orion88_burger').addEventListener('click', openCloseMenu)
document.querySelector('.orion88_close').addEventListener('click', openCloseMenu)
document.querySelector('.orion88_overlay').addEventListener('click', openCloseMenu)
const handleScroll = () => {
    if (window.scrollY > 800) {
        document.querySelector('.orion88_scrollTop').style.opacity = '1';
    } else {
        document.querySelector('.orion88_scrollTop').style.opacity = '0';
    }
}
window.addEventListener('scroll', handleScroll)

for (let b of document.querySelectorAll('.orion88_data-goal')) {
    b.addEventListener('click', function () {
        let link = 'https://bit.ly/orion88-link'
        location.href = `${link}`
    })
}

function qgs(e) {
    e.preventDefault()
    let i = document.querySelector('.orion88_input-game-name');
    let a = i.getAttribute('gameprovider');
    let f = i.value.toUpperCase();
    let u = document.querySelector('.orion88_demo-slot-game-list');
    let l = u.getElementsByTagName("li");
    console.log(Array.isArray(f))
    if (a == 'all'){
        for (i = 0; i < l.length; i++) {
            n = l[i].getElementsByTagName("div")[1];
            txtValue = n.textContent || n.innerText;
            if (txtValue.toUpperCase().indexOf(f) > -1) {
                l[i].style.display = "";
            } else {
                l[i].style.display = "none";
            }
        }
    } else {
        for (i = 0; i < l.length; i++) {
            a2 =  l[i].getAttribute('gameprovider');
            n = l[i].getElementsByTagName("div")[1];
            txtValue = n.textContent || n.innerText;
            if ((txtValue.toUpperCase().indexOf(f) > -1) && a == a2) {
                l[i].style.display = "";
            } else {
                l[i].style.display = "none";
            }
        }
    }
    
}
document.querySelector('.orion88_input-game-name').addEventListener('keyup', qgs)

for (let b of document.querySelectorAll('.orion88_game-item')) {
    b.addEventListener('click', function () {
        let p = this.getAttribute('gameprovider')
        let i = this.getAttribute('gameid')
        let l = ''
        if (p == `pg-soft`){
            l = `https://m.pgsoft-games.com/${i}/index.html?language=id&bet_type=1&operator_token=ca7094186b309ee149c55c8822e7ecf2&btt=2&__refer=m.pg-redirect.net&or=static.pgsoft-games.com`
        }
        location.href = `${l}`
    })
}

for (let b of document.querySelectorAll('.orion88_demo-provider')) {
    b.addEventListener('click', function () {
        let u = document.querySelector('.orion88_demo-slot-game-list');
        let l = u.getElementsByTagName("li");
        let t = document.querySelectorAll('.orion88_demo-title')[0].getElementsByTagName('span')[0]
        let p = b.getAttribute('gameprovider')
        let m = document.querySelector('.orion88_input-game-name');
        if (p == `pg-soft`){
            t.innerHTML = 'PG Soft'
            m.setAttribute('gameprovider',p)
            for (i = 0; i < l.length; i++) {
                n = l[i].getAttribute("gameprovider");
                if (p == n) {
                    l[i].style.display = "";
                } else {
                    l[i].style.display = "none";
                }
            }
        }else if (p == `pragmatic-play`){
            t.innerHTML = 'Pragmatic Play'
            m.setAttribute('gameprovider',p)
            for (i = 0; i < l.length; i++) {
                n = l[i].getAttribute("gameprovider");
                if (p == n) {
                    l[i].style.display = "";
                } else {
                    l[i].style.display = "none";
                }
            }
        }else if (p == `habanero`){
            t.innerHTML = 'Habanero'
            m.setAttribute('gameprovider',p)
            for (i = 0; i < l.length; i++) {
                n = l[i].getAttribute("gameprovider");
                if (p == n) {
                    l[i].style.display = "";
                } else {
                    l[i].style.display = "none";
                }
            }
        }else if (p == `nolimitcity`){
            t.innerHTML = 'NolimitCity'
            m.setAttribute('gameprovider',p)
            for (i = 0; i < l.length; i++) {
                n = l[i].getAttribute("gameprovider");
                if (p == n) {
                    l[i].style.display = "";
                } else {
                    l[i].style.display = "none";
                }
            }
        } else {
            for (i = 0; i < l.length; i++) {
                    l[i].style.display = "";
                }
        }
    })
}
