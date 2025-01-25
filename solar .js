//title button
const t1buttonElRef = document.getElementById("t1");
const t2buttonElRef = document.getElementById("t2");
const t3buttonElRef = document.getElementById("t3");
const t4buttonElRef = document.getElementById("t4");
const t5buttonElRef = document.getElementById("t5");
const t6buttonElRef = document.getElementById("t6");
const t7buttonElRef = document.getElementById("t7");
const t8buttonElRef = document.getElementById("t8");
//img
const mercuryElRef = document.getElementById('img3');
const venusElRef = document.getElementById('img2')
const earthElRef = document.getElementById('img1')
const marsElRef = document.getElementById('img4')
const jupiterElRef = document.getElementById('img5')
const uranusElRef = document.getElementById('img6')
const saturnElRef = document.getElementById('img8')
const neptuneElRef = document.getElementById('img7')


t1buttonElRef.addEventListener('mouseover', function () {
    mercuryElRef.style.width = '80%';
});
t1buttonElRef.addEventListener('mouseout', function () {
    mercuryElRef.style.width = '3%';
})
//2
t2buttonElRef.addEventListener('mouseover', function () {
    venusElRef.style.width = '80%'
})
t2buttonElRef.addEventListener('mouseout', function () {
    venusElRef.style.width = '2.9%';
})
//3
t3buttonElRef.addEventListener('mouseover', () => {
    earthElRef.style.width = '80%';
})
t3buttonElRef.addEventListener('mouseout', () => {
    earthElRef.style.width = '7%';
})
//4
t4buttonElRef.addEventListener('mouseover', () => {
    marsElRef.style.width = '80%'
})
t4buttonElRef.addEventListener('mouseout', () => {
    marsElRef.style.width = '3%'
})
t5buttonElRef.addEventListener('mouseover', () => {
    jupiterElRef.style.width = '80%'
})
t5buttonElRef.addEventListener('mouseout', () => {
    jupiterElRef.style.width = '18%'
})
t6buttonElRef.addEventListener('mouseover', () => {
    uranusElRef.style.width = '80%'
})
t6buttonElRef.addEventListener('mouseout', () => {
    uranusElRef.style.width = '11%'
})
t7buttonElRef.addEventListener('mouseover', () => {
    saturnElRef.style.width = '80%'
})
t7buttonElRef.addEventListener('mouseout', () => {
    saturnElRef.style.width = '19%'
})
t8buttonElRef.addEventListener('mouseover', () => {
    neptuneElRef.style.width = '80%'
})
t8buttonElRef.addEventListener('mouseout', () => {
    neptuneElRef.style.width = '7%'
})

