const formasDeOrdenar = document.getElementById('formasDeOrdenar');

    function ocultarTodasLasFormas() {
      document.getElementById(`forma-1`).style.display = 'none';
      document.getElementById(`forma-2`).style.display = 'none';
      document.getElementById(`forma-3`).style.display = 'none';
    }

    formasDeOrdenar.addEventListener('change', () => {
      ocultarTodasLasFormas();
      if (formasDeOrdenar.value > -1) {
        document.getElementById(`forma-${formasDeOrdenar.value}`).style.display = 'block';
      }
    });

    ocultarTodasLasFormas();
