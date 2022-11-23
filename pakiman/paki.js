var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
class Pakiman
{
  constructor(nombre, vida, ataque)
  {
    this.imagen = new Image();
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;

    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
  }
  mostrar()
  {
    document.write("<p>");
    document.body.appendChild(this.imagen);
    document.write("<strong>"+ this.nombre + "</strong><br/>");
    document.write("vida" + this.vida + "<br/>");
    document.write("Ataque"+ this.ataque );
    document.write("</p>");
  }
}

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);

pokacho.mostrar();
