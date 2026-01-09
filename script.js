function enviarMensaje(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const texto =
        `Nueva solicitud de viaje%0A` +
        `Nombre: ${name}%0A` +
        `Email: ${email}%0A` +
        `Mensaje: ${message}`;

    // EMAIL
    window.open(
        `mailto:alvaropersonal16@gmail.com?subject=Solicitud de viaje&body=${texto}`,
        "_blank"
    );

    // WHATSAPP
    window.open(
        `https://wa.me/34620340522?text=${texto}`,
        "_blank"
    );
}
