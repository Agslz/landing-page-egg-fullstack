function show() {
  swal({
    text: "Usted adquirió el curso con exito",
    icon: "success",
    confirmButtonColor: '#3085d6'
  });
}

function registradoExito() {
  swal({
    text: "Registrado con exito",
    icon: "success",
    confirmButtonColor: '#3085d6'
  });
}

function showBad() {
  swal({
    icon: "error",
    title: "Oops...",
    text: "No poseemos este curso en este momento",
  });
}
