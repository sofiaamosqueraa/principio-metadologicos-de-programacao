
const conjuntoA = new Set([1, 2, 3, 4]);
const conjuntoB = new Set([3, 4, 5, 6]);

const interseccion = new Set([...conjuntoA].filter(x => conjuntoB.has(x)));

function dibujarVennDiagram() {
    const vennDiagram = document.getElementById('vennDiagram');

    const circleA = document.createElement('div');
    circleA.className = 'circleA';
    vennDiagram.appendChild(circleA);


    const circleB = document.createElement('div');
    circleB.className = 'circleB';
    vennDiagram.appendChild(circleB);

}

window.onload = dibujarVennDiagram;
