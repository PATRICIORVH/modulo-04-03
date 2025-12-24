// Clase base Taxi
class Taxi {
  constructor(patente, colorTecho, licenciaConductor) {
    this.patente = patente;
    this.colorTecho = colorTecho;
    this.licenciaConductor = licenciaConductor;
  }

  mostrarInfo() {
    console.log(`Taxi ${this.patente} - techo: ${this.colorTecho} - licencia: ${this.licenciaConductor}`);
  }
}

// Taxi tradicional
class TaxiTradicional extends Taxi {
  constructor(patente) {
    super(patente, "amarillo", "A1");
  }
}

// Taxi particular (padre de Express y Premium)
class TaxiParticular extends Taxi {
  constructor(patente, tipo) {
    super(patente, "sin techo amarillo", "B");
    this.tipo = tipo;
  }

  mostrarInfo() {
    console.log(`Taxi Particular ${this.tipo} - patente: ${this.patente} - licencia: ${this.licenciaConductor}`);
  }
}

class TaxiExpress extends TaxiParticular {
  constructor(patente) {
    super(patente, "Express");
  }
}

class TaxiPremium extends TaxiParticular {
  constructor(patente) {
    super(patente, "Premium");
  }
}

// Taxi de carga
class TaxiCargo extends Taxi {
  constructor(patente, capacidadKg) {
    super(patente, "sin techo amarillo", "A1");
    this.capacidadKg = capacidadKg;
  }

  mostrarInfo() {
    console.log(`Taxi Cargo ${this.patente} - capacidad: ${this.capacidadKg} kg - licencia: ${this.licenciaConductor}`);
  }
}

// Objetos de prueba
const t1 = new TaxiTradicional("AA-BB11");
const t2 = new TaxiExpress("CC-DD22");
const t3 = new TaxiPremium("EE-FF33");
const t4 = new TaxiCargo("GG-HH44", 500);

t1.mostrarInfo();
t2.mostrarInfo();
t3.mostrarInfo();
t4.mostrarInfo();
