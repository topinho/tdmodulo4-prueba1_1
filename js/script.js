var app=new Vue({
    el: '#app',
    data:{
      ruta: '',
      descripcion: '',
      imagen: {},
      galeria: [
        {
          id: 1, 
          nombre: 'Amanita',
          src: './img/amanita.png',
          cita: 'Esto es una amatina, sirve para curarte la manita.'
        },
        {
          id: 2, 
          nombre: 'Auto',
          src: './img/auto.png',
          cita: 'El gran Mustand. La joya de la corona.'
        },
        {
          id: 3, 
          nombre: 'Flor',
          src: './img/flor.png',
          cita: 'La flor que alegra la cita.'
        },
        {
          id: 4, 
          nombre: 'Gato',
          src: './img/gato.png',
          cita: 'Este gato es primo del que odia los lunes.'
        },
        {
          id: 5, 
          nombre: 'Sol',
          src: './img/sol.png',
          cita: 'El solecito que nos calienta por la tarde.'
        }
      ]
    },
    methods: {
      getDataImagen(imagen) {
        this.ruta = imagen.src
        this.cita = imagen.cita
      }
    }
})
