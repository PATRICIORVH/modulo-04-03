// Clase base ProductoSony
class ProductoSony {
  constructor(nombre, modelo, precio, categoria) {
    this.nombre = nombre;
    this.modelo = modelo;
    this.precio = precio;
    this.categoria = categoria;
  }

  mostrarInfo() {
    console.log(`${this.categoria}: ${this.nombre} (${this.modelo}) - Precio: $${this.precio}`);
  }
}

// Televisor
class TelevisorSony extends ProductoSony {
  constructor(nombre, modelo, precio, tamanoPulgadas, resolucion) {
    super(nombre, modelo, precio, "Televisor");
    this.tamanoPulgadas = tamanoPulgadas;
    this.resolucion = resolucion;
  }

  mostrarInfo() {
    console.log(`Televisor ${this.nombre} ${this.tamanoPulgadas}" ${this.resolucion} - Modelo: ${this.modelo} - $${this.precio}`);
  }
}

// Cámara
class CamaraSony extends ProductoSony {
  constructor(nombre, modelo, precio, tipoSensor) {
    super(nombre, modelo, precio, "Cámara");
    this.tipoSensor = tipoSensor;
  }

  mostrarInfo() {
    console.log(`Cámara ${this.nombre} (${this.modelo}) - Sensor: ${this.tipoSensor} - $${this.precio}`);
  }
}

// Audio
class AudioSony extends ProductoSony {
  constructor(nombre, modelo, precio, potenciaW) {
    super(nombre, modelo, precio, "Audio");
    this.potenciaW = potenciaW;
  }

  mostrarInfo() {
    console.log(`Audio ${this.nombre} (${this.modelo}) - Potencia: ${this.potenciaW}W - $${this.precio}`);
  }
}

// Accesorio de juego
class AccesorioJuegoSony extends ProductoSony {
  constructor(nombre, modelo, precio, plataforma) {
    super(nombre, modelo, precio, "Accesorio de juego");
    this.plataforma = plataforma;
  }

  mostrarInfo() {
    console.log(`Accesorio ${this.nombre} (${this.modelo}) - Plataforma: ${this.plataforma} - $${this.precio}`);
  }
}

// Objetos de prueba
const tv = new TelevisorSony("BRAVIA XR", "XR-55A80L", 799990, 55, "4K");
const cam = new CamaraSony("Alpha", "ILCE-7M4", 1599990, "Full Frame");
const audio = new AudioSony("Barra de sonido", "HT-A7000", 699990, 500);
const mando = new AccesorioJuegoSony("Control inalámbrico", "DualSense", 69990, "PS5");

tv.mostrarInfo();
cam.mostrarInfo();
audio.mostrarInfo();
mando.mostrarInfo();
