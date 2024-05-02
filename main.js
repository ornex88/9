if (window.location.href.toUpperCase().indexOf('HTTPS://WWW.MICHAELFCOLLINS3.ME') < 0) {
    location.href = 'https://www.michaelfcollins3.me/'
}
if(document.querySelectorAll(".table_link") != null) {
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
}

if (document.querySelector('.orion88_scrollTop') != null) {
    document.querySelector('.orion88_scrollTop').addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' }))
}

if (document.getElementById('mobileMenu') != null) {
    function openCloseMenu(e) {
        e.preventDefault()
        document.getElementById('mobileMenu').toggleAttribute('hidden')
        document.querySelector('.orion88_overlay').toggleAttribute('hidden')
    }
    document.querySelector('.orion88_burger').addEventListener('click', openCloseMenu)
    document.querySelector('.orion88_close').addEventListener('click', openCloseMenu)
    document.querySelector('.orion88_overlay').addEventListener('click', openCloseMenu)
}

if (document.querySelector('.orion88_scrollTop') != null) {
    const handleScroll = () => {
        if (window.scrollY > 800) {
            document.querySelector('.orion88_scrollTop').style.opacity = '1';
        } else {
            document.querySelector('.orion88_scrollTop').style.opacity = '0';
        }
    }
    window.addEventListener('scroll', handleScroll)
}

if (document.querySelectorAll('.orion88_data-goal') != null) {
    for (let b of document.querySelectorAll('.orion88_data-goal')) {
        b.addEventListener('click', function () {
            let link = 'https://bit.ly/orion88-link'
            location.href = `${link}`
        })
    }
}

if (document.querySelector('.orion88_input-game-name') != null) {
    function qgs(e) {
        e.preventDefault()
        let i = document.querySelector('.orion88_input-game-name');
        let a = i.getAttribute('gameprovider');
        let f = i.value.toUpperCase();
        let u = document.querySelector('.orion88_demo-slot-game-list');
        let l = u.getElementsByTagName("li");
        if (a == 'all'){
            for (i = 0; i < l.length; i++) {
                n = l[i].getElementsByTagName("div")[0];
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
}

if (document.querySelectorAll('.orion88_game-item') != null) {
    for (let b of document.querySelectorAll('.orion88_game-item')) {
        b.addEventListener('click', function () {
            let p = this.getAttribute('gameprovider')
            let i = this.getAttribute('gameid')
            let l = ''
            if (p == `pg-soft`){
                l = `https://m.pgsoft-games.com/${i}/index.html?language=id&bet_type=2&operator_token=ca7094186b309ee149c55c8822e7ecf2&btt=2&__refer=m.pg-redirect.net&or=static.pgsoft-games.com`
            }
            location.href = `${l}`
        })
    }
}
if(document.querySelectorAll('.orion88_demo-provider') != null) {
    let u = document.querySelector('.orion88_demo-slot-game-list');
    let l = u.getElementsByTagName("li");
    let t = document.querySelectorAll('.orion88_demo-title')[0].getElementsByTagName('span')[0]
    let m = document.querySelector('.orion88_input-game-name');
    c = 0
    for (i = 0; i < l.length; i++) {
        c++
    }
    t.innerHTML = `(${c})`
    for (let b of document.querySelectorAll('.orion88_demo-provider')) {
        b.addEventListener('click', function () {
        let p = b.getAttribute('gameprovider')
            if (p == `pg-soft`){
                c = 0
                m.setAttribute('gameprovider',p)
                for (i = 0; i < l.length; i++) {
                    n = l[i].getAttribute("gameprovider");
                    if (p == n) {
                        l[i].style.display = "";
                        c++
                    } else {
                        l[i].style.display = "none";
                    }
                }
                t.innerHTML = `PG Soft (${c})`
            }else if (p == `pragmatic-play`){
                c = 0
                m.setAttribute('gameprovider',p)
                for (i = 0; i < l.length; i++) {
                    n = l[i].getAttribute("gameprovider");
                    if (p == n) {
                        l[i].style.display = "";
                        c++
                    } else {
                        l[i].style.display = "none";
                    }
                }
                t.innerHTML = `Pragmatic Play (${c})`
            }else if (p == `habanero`){
                c = 0
                m.setAttribute('gameprovider',p)
                for (i = 0; i < l.length; i++) {
                    n = l[i].getAttribute("gameprovider");
                    if (p == n) {
                        l[i].style.display = "";
                        c++
                    } else {
                        l[i].style.display = "none";
                    }
                }
                t.innerHTML = `Habanero (${c})`
            }else if (p == `nolimitcity`){
                c = 0
                m.setAttribute('gameprovider',p)
                for (i = 0; i < l.length; i++) {
                    n = l[i].getAttribute("gameprovider");
                    if (p == n) {
                        l[i].style.display = "";
                        c++
                    } else {
                        l[i].style.display = "none";
                    }
                }
                t.innerHTML = `NolimitCity (${c})`
            } else {
                c = 0
                m.setAttribute('gameprovider','all')
                for (i = 0; i < l.length; i++) {
                        l[i].style.display = "";
                        c++
                    }
                t.innerHTML = `(${c})`
            }
        })
    }
}

