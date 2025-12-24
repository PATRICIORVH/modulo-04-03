class Sumatoria {
  constructor(base) {
    this.base = base;
    this.acumulado = 0;

    console.log(`Base inicial: ${this.base}`);
    this.acumulado += this.base;
    console.log(`Sumatoria actual: ${this.acumulado}`);
  }

  sumar() {
    this.acumulado += this.base;
    console.log(`Sumatoria actual: ${this.acumulado}`);
  }
}

// variable global para guardar el objeto
let objetoSumatoria = null;

function iniciarSumatoria() {
  const base = Math.floor(Math.random() * 10) + 1; // número entre 1 y 10.[web:18]
  objetoSumatoria = new Sumatoria(base);
}

function ejecutarSumar() {
  if (!objetoSumatoria) {
    console.log("Primero debes crear el objeto Sumatoria.");
  } else {
    objetoSumatoria.sumar();
  }
}
