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

//alert("EXEC");
function registroUsuario() {
    alert("SUBMIT");
    var dataID = $(this).parent().attr('data-datos-id');
    var postData = $(this).serialize();
    $.ajax({
        type: 'POST',
        data: postData+'&lid='+dataID,
        url: 'http://secimo.app.gkhome.net/sys/reg/AVACAL23D02M15AV001JM/rus230215v001jm.php',
        success: function(data){
            console.log(data);
            alert("OK");
        },
        error: function(data){ alert(data); }
    });
    alert("SUBMIT2");
    return false;
}
