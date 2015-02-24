var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
};

function obtenerId() {
    alert("onload");
    var string = device.uuid;
    alert(string);
    var htuu = document.getElementById('code');
    htuu.innerHTML = "<input type='hidden' id='secret' name='secret' value="+uuid+" />";
}

function verAlertas() {
    document.getElementById('alertas').style.display = 'inline-block';
    document.getElementById('registro').style.display = 'none';
}

    $('#registroUsuario').submit(function(){
                var count = 0;
                var dni = document.forms["registroUsuario"]["dni"].value;
                var telefono = document.forms["registroUsuario"]["telefono"].value;
                var nombre = document.forms["registroUsuario"]["nombre"].value;
                var email = document.forms["registroUsuario"]["email"].value;

                if (dni == null || dni == "" ) {
                    count += 1;
                }
                if (telefono == null || telefono == "" ) {
                    count += 1;
                }
                if (nombre == null || nombre == "" ) {
                    count += 1;
                }
                if (email == null || email == "" ) {
                    count += 1;
                }

                if (count > 0) {
                    alert("Por favor complete todos los campos correctamente.");
                    return false;                    
                }


                var dataID = $(this).parent().attr('data-datos-id');
                var postData = $(this).serialize();

                $.ajax({
                    type: 'POST',
                    data: postData+'&lid='+dataID,
                    url: 'http://secimo.app.gkhome.net/sys/reg/AVACAL23D02M15AV001JM/rus230215v001jm.php',
                    success: function(data){
                        alert("Enviado correctamente.")
                    },
                    error: function(data){ alert(data); }
                });
                verAlertas();
                return false;
            });
