document.querySelectorAll('#deleteForm').forEach(form => {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });
    
      swalWithBootstrapButtons.fire({
        title: '¿Estás seguro?',
        text: "Una vez que eliminés este producto, no podrás recuperarlo",
        icon: 'warning',
        color: "white",
        background: "linear-gradient(90deg, rgba(47, 7, 67, 0.7) 0%, rgba(98, 2, 248, 0.7) 50%, rgba(0, 161, 255, 0.7) 100%)",
        showConfirmButton: true,
        confirmButtonColor: "#D11709",
        showCancelButton: true,
        cancelButtonColor: "#4CDC51",
        showCloseButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'No, cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
              icon: 'success',
              title: 'Producto eliminado',
              color: "white",
              background: "linear-gradient(90deg, rgba(47, 7, 67, 0.7) 0%, rgba(98, 2, 248, 0.7) 50%, rgba(0, 161, 255, 0.7) 100%)",
              showConfirmButton: false,
              timer: 1000 // Cambia el tiempo en milisegundos
            }).then(() => {
              // Si se confirmó la eliminación, envía el formulario para eliminar el producto
              event.target.submit();
            });
        }
      });
    });
  });


