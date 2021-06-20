import {Figure2D, Mesh2D, Renderer} from '../src/index';

const canvas = document.querySelector('canvas');

const figure2 = new Figure2D();
const figure1 = new Figure2D();

figure1.rect(0, 0, 100, 100);
figure2.addPath('M0,0L0,50L100,0z');

const mesh2 = new Mesh2D(figure2);
const mesh1 = new Mesh2D(figure1);

mesh1.setFill({
  color: [0, 1, 0, 0.5],
});
mesh2.setFill({
  color: [1, 0, 0, 0.5],
});


mesh1.translate(100, 100);

const renderer = new Renderer(canvas);

renderer.drawMeshes([mesh2, mesh1]);

document.body.addEventListener('click', (e) => {
  const {x, y} = e;
  console.log(x, y, 'isPointCollision', mesh1.isPointCollision(x, y), mesh1);
});