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
    $('form').submit(function(){
                alert("SUBMIT OK");
                return false;
            });
}
