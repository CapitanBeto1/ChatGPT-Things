const imagen = document.getElementById('imagen');
const texto = document.getElementById('texto');

// Función para ajustar el tamaño de la imagen según el tamaño del texto
function ajustarImagen() {
    const anchoTexto = texto.clientWidth;
    const altoTexto = texto.clientHeight;
    const anchoImagen = imagen.clientWidth;
    const altoImagen = imagen.clientHeight;
  
    // Ajustar el tamaño de la imagen para cubrir todo el texto
    if (anchoTexto > anchoImagen || altoTexto > altoImagen) {
      const relacionAncho = anchoImagen / anchoTexto;
      const relacionAlto = altoImagen / altoTexto;
      const relacion = Math.min(relacionAncho, relacionAlto);
      let ancho = anchoTexto * relacion;
      let alto = altoTexto * relacion;
  
      // Ajustar el tamaño mínimo de la imagen al tamaño por defecto
      const anchoMinimo = imagen.naturalWidth;
      const altoMinimo = imagen.naturalHeight;
  
      // Ajustar el ancho de la imagen si el texto es demasiado largo
      if (anchoTexto > anchoImagen) {
        ancho = anchoTexto + 10;
      }
  
      // Ajustar el alto de la imagen si hay más de un párrafo de texto
      if (altoTexto > altoImagen) {
        alto = altoTexto + 10;
      }
  
      const anchoFinal = Math.max(ancho, anchoMinimo);
      const altoFinal = Math.max(alto, altoMinimo);
  
      imagen.style.width = `${anchoFinal}px`;
      imagen.style.height = `${altoFinal}px`;
    } else {
      imagen.style.width = 'auto';
      imagen.style.height = 'auto';
    }
  }
       
// Llamar a la función para ajustar el tamaño de la imagen al cargar la página
ajustarImagen();

// Llamar a la función para ajustar el tamaño de la imagen cada vez que se redimensione la ventana
window.addEventListener('resize', ajustarImagen);