<!DOCTYPE html>
<html>
    <head></head>
    <body>

    </body>
    <script type="text/javascript" src="ajax.js"></script>

    <script type="text/javascript">
        var ajaxObj = new Ajax();
        var respuesta = ajaxObj.ejecutar("POST", "respuesta.php");

        console.log(respuesta);
    </script>
</html>