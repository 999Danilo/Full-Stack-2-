// =====================================================
// ZONALIBROS
// DSY1104 - Evaluación Formativa 1
// =====================================================


// =====================================================
// LISTA DE USUARIOS INVENTADOS
// =====================================================

const usuarios = [

    {
        nombre: "Juan Pérez",
        correo: "juan@duoc.cl",
        password: "Juan12345@"
    },

    {
        nombre: "María González",
        correo: "maria@duoc.cl",
        password: "Maria12345@"
    },

    {
        nombre: "Pedro Soto",
        correo: "pedro@duoc.cl",
        password: "Pedro12345@"
    }

];


// =====================================================
// REGISTRO
// =====================================================

const formRegistro =
    document.getElementById("formRegistro");


if (formRegistro) {


    formRegistro.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            // ---------------------------------------------
            // OBTENER DATOS
            // ---------------------------------------------

            const nombre =
                document.getElementById("nombre").value.trim();

            const correo =
                document.getElementById("correo").value.trim();

            const password =
                document.getElementById("password").value;

            const confirmar =
                document.getElementById("confirmarPassword").value;

            const telefono =
                document.getElementById("telefono").value.trim();


            const generos =
                document.querySelectorAll(
                    'input[name="genero"]:checked'
                );


            // ---------------------------------------------
            // LIMPIAR ERRORES
            // ---------------------------------------------

            document.getElementById("errorNombre")
                .textContent = "";

            document.getElementById("errorCorreo")
                .textContent = "";

            document.getElementById("errorPassword")
                .textContent = "";

            document.getElementById("errorConfirmar")
                .textContent = "";

            document.getElementById("errorTelefono")
                .textContent = "";

            document.getElementById("errorGenero")
                .textContent = "";


            document.getElementById("mensajeRegistro")
                .innerHTML = "";


            let valido = true;


            // =================================================
            // VALIDAR NOMBRE
            // =================================================

            const nombreValido =
                /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/;


            if (nombre === "") {

                document.getElementById("errorNombre")
                    .textContent =
                    "El nombre completo es obligatorio.";

                valido = false;

            }

            else if (!nombreValido.test(nombre)) {

                document.getElementById("errorNombre")
                    .textContent =
                    "El nombre solo puede contener letras y espacios.";

                valido = false;

            }

            else if (nombre.length > 100) {

                document.getElementById("errorNombre")
                    .textContent =
                    "El nombre no puede superar los 100 caracteres.";

                valido = false;

            }


            // =================================================
            // VALIDAR CORREO
            // =================================================

            const correoValido =
                /^[^\s@]+@duoc\.cl$/i;


            if (correo === "") {

                document.getElementById("errorCorreo")
                    .textContent =
                    "El correo es obligatorio.";

                valido = false;

            }

            else if (correo.length > 60) {

                document.getElementById("errorCorreo")
                    .textContent =
                    "El correo no puede superar los 60 caracteres.";

                valido = false;

            }

            else if (!correoValido.test(correo)) {

                document.getElementById("errorCorreo")
                    .textContent =
                    "Debes ingresar un correo válido @duoc.cl.";

                valido = false;

            }


            // ---------------------------------------------
            // COMPROBAR SI EL CORREO YA EXISTE
            // ---------------------------------------------

            const usuarioExiste =
                usuarios.some(function(usuario) {

                    return usuario.correo.toLowerCase()
                        === correo.toLowerCase();

                });


            if (usuarioExiste) {

                document.getElementById("errorCorreo")
                    .textContent =
                    "Este correo ya está registrado.";

                valido = false;

            }


            // =================================================
            // VALIDAR CONTRASEÑA
            // =================================================

            const tieneMayuscula =
                /[A-Z]/.test(password);

            const tieneMinuscula =
                /[a-z]/.test(password);

            const tieneNumero =
                /[0-9]/.test(password);

            const tieneEspecial =
                /[^A-Za-z0-9]/.test(password);


            if (password.length < 10) {

                document.getElementById("errorPassword")
                    .textContent =
                    "La contraseña debe tener al menos 10 caracteres.";

                valido = false;

            }

            else if (!tieneMayuscula) {

                document.getElementById("errorPassword")
                    .textContent =
                    "La contraseña debe tener una letra mayúscula.";

                valido = false;

            }

            else if (!tieneMinuscula) {

                document.getElementById("errorPassword")
                    .textContent =
                    "La contraseña debe tener una letra minúscula.";

                valido = false;

            }

            else if (!tieneNumero) {

                document.getElementById("errorPassword")
                    .textContent =
                    "La contraseña debe tener un número.";

                valido = false;

            }

            else if (!tieneEspecial) {

                document.getElementById("errorPassword")
                    .textContent =
                    "La contraseña debe tener un carácter especial.";

                valido = false;

            }


            // =================================================
            // CONFIRMAR CONTRASEÑA
            // =================================================

            if (confirmar === "") {

                document.getElementById("errorConfirmar")
                    .textContent =
                    "Debes confirmar tu contraseña.";

                valido = false;

            }

            else if (password !== confirmar) {

                document.getElementById("errorConfirmar")
                    .textContent =
                    "Las contraseñas no coinciden.";

                valido = false;

            }


            // =================================================
            // TELEFONO
            // =================================================

            const telefonoValido =
                /^\+?[0-9]{8,15}$/;


            if (
                telefono !== "" &&
                !telefonoValido.test(telefono)
            ) {

                document.getElementById("errorTelefono")
                    .textContent =
                    "Ingresa un número de teléfono válido.";

                valido = false;

            }


            // =================================================
            // GENERO
            // =================================================

            if (generos.length === 0) {

                document.getElementById("errorGenero")
                    .textContent =
                    "Debes seleccionar un género favorito.";

                valido = false;

            }


            // =================================================
            // RESULTADO
            // =================================================

            if (valido) {

                document.getElementById("mensajeRegistro")
                    .innerHTML =
                    `
                    <div class="mensaje-exito">

                        Registro realizado correctamente.

                    </div>
                    `;

                formRegistro.reset();

            }

            else {

                document.getElementById("mensajeRegistro")
                    .innerHTML =
                    `
                    <div class="mensaje-error">

                        Revisa los campos marcados
                        y corrige los errores.

                    </div>
                    `;

            }

        }

    );

}


// =====================================================
// LOGIN
// =====================================================

const formLogin =
    document.getElementById("formLogin");


if (formLogin) {


    formLogin.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const correo =
                document.getElementById("loginCorreo")
                    .value.trim();

            const password =
                document.getElementById("loginPassword")
                    .value;


            // LIMPIAR

            document.getElementById("errorLoginCorreo")
                .textContent = "";

            document.getElementById("errorLoginPassword")
                .textContent = "";

            document.getElementById("mensajeLogin")
                .innerHTML = "";


            let valido = true;


            // =================================================
            // VALIDAR CORREO
            // =================================================

            if (correo === "") {

                document.getElementById("errorLoginCorreo")
                    .textContent =
                    "Debes ingresar tu correo.";

                valido = false;

            }


            // =================================================
            // VALIDAR PASSWORD
            // =================================================

            if (password === "") {

                document.getElementById("errorLoginPassword")
                    .textContent =
                    "Debes ingresar tu contraseña.";

                valido = false;

            }


            if (!valido) {

                return;

            }


            // =================================================
            // BUSCAR USUARIO
            // =================================================

            const usuario =
                usuarios.find(function(usuario) {

                    return usuario.correo.toLowerCase()
                        === correo.toLowerCase();

                });


            // =================================================
            // USUARIO NO EXISTE
            // =================================================

            if (!usuario) {

                document.getElementById("mensajeLogin")
                    .innerHTML =
                    `
                    <div class="mensaje-error">

                        El correo no está registrado.

                    </div>
                    `;

                return;

            }


            // =================================================
            // PASSWORD INCORRECTA
            // =================================================

            if (usuario.password !== password) {

                document.getElementById("mensajeLogin")
                    .innerHTML =
                    `
                    <div class="mensaje-error">

                        La contraseña es incorrecta.

                    </div>
                    `;

                return;

            }


            // =================================================
            // LOGIN CORRECTO
            // =================================================

            document.getElementById("mensajeLogin")
                .innerHTML =
                `
                <div class="mensaje-exito">

                    Bienvenido/a ${usuario.nombre}.

                    Inicio de sesión correcto.

                </div>
                `;

        }

    );

}


// =====================================================
// RECUPERAR CONTRASEÑA
// =====================================================

const botonRecuperar =
    document.getElementById("recuperar");


if (botonRecuperar) {


    botonRecuperar.addEventListener(
        "click",
        function() {


            const correo =
                document.getElementById("loginCorreo")
                    .value.trim();


            if (correo === "") {

                document.getElementById("mensajeLogin")
                    .innerHTML =
                    `
                    <div class="mensaje-error">

                        Ingresa tu correo para recuperar
                        tu contraseña.

                    </div>
                    `;

                return;

            }


            const usuario =
                usuarios.find(function(usuario) {

                    return usuario.correo.toLowerCase()
                        === correo.toLowerCase();

                });


            if (!usuario) {

                document.getElementById("mensajeLogin")
                    .innerHTML =
                    `
                    <div class="mensaje-error">

                        No existe una cuenta asociada
                        a este correo.

                    </div>
                    `;

                return;

            }


            document.getElementById("mensajeLogin")
                .innerHTML =
                `
                <div class="mensaje-exito">

                    Se ha solicitado la recuperación
                    de la contraseña para ${correo}.

                    <br><br>

                    En un sistema real se enviaría
                    un enlace al correo electrónico.

                </div>
                `;

        }

    );

}


// =====================================================
// CHECKBOX DE GENEROS
// SOLO SE PUEDE SELECCIONAR UNO
// =====================================================

const checkboxes =
    document.querySelectorAll(
        'input[name="genero"]'
    );


checkboxes.forEach(function(checkbox) {

    checkbox.addEventListener(
        "change",
        function() {

            if (this.checked) {

                checkboxes.forEach(
                    function(otro) {

                        if (otro !== checkbox) {

                            otro.checked = false;

                        }

                    }
                );

            }

        }
    );

});