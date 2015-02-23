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
    $("#registroForm").submit(function() {

        var url = "http://secimo.app.gkhome.net/sys/reg/AVACAL23D02M15AV001JM/rus230215v001jm.php"; // the script where you handle the form input.

        $.ajax({
               type: "POST",
               url: url,
               data: $("#registroForm").serialize(), // serializes the form's elements.
               success: function(data)
               {
                   alert(data); // show response from the php script.
               }
             });

        return false; // avoid to execute the actual submit of the form.
    });
    alert("SUBMIT2");
}
