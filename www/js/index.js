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

function verAlertas() {
    document.getElementById('alertas').style.display = 'inline-block';
    document.getElementById('registro').style.display = 'none';
}

function enviarForm() {
    document.forms["formularioRegistro"].submit(function(){
                $.ajax({
                    type: 'POST',
                    url: 'http://secimo.app.gkhome.net/sys/reg/AVACAL23D02M15AV001JM/rus230215v001jm.php',
                    success: function(data){
                        console.log(data);
                        alert("correcto");
                        /*$.ajax({
                            url: 'http://secimo.app.gkhome.net/sys/reg/AVACAL23D02M15AV001JM/vrus230215v001jm.php',
                            type: 'GET',
                            dataType: 'jsonp',
                            jsonp: 'callback',
                            error: function(xhr, status, error) {
                                alert("error");
                            },
                            success: function(jsonp) { 
                              if (jsonp.mensaje<1) {
                                    alert('INCORRECTO');
                                }else{
                                    alert('CORRECTO');
                                }
                            }
                        });*/
                    },
                    error: function(data){ alert(data); }
                });

                return false;
            });
}
