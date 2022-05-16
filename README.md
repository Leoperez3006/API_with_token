# DOCUMENTACION DE LA API
La API esta hecha con javascript, usando express
Es necesario instalar todos los paquetes de node para su correcto funcionamiento
```
npm install
```
La base de datos esta hecha con MySQL, por lo que es necesario que este instalada y se haga la configuración correspondiente en el archivo ``` helpers/config.js```

Todos los endpoints estan protegidos por JWT, por lo que es necesario agregar la configuracion de seguridad en los headers de la peticion con el token correspondiente

## Endpoints

<table style="width: 100%; text-align: center;">
  <tr>
    <td colspan="3" style="width: 100%; padding-top: 50px;">Metodo</td>
    <td colspan="3" style="width: 100%; padding-top: 50px;">URL</td
  </tr>
  <tr>
    <td colspan="3" style="width: 100%; padding-top: 50px;">GET</td>
    <td colspan="3" style="width: 100%; padding-top: 50px;">http://localhost:4000/token/get/
</td>
  </tr>
    <tr>
    <td colspan="3" style="width: 100%; padding-top: 50px;">POST</td>
    <td colspan="3" style="width: 100%; padding-top: 50px;">http://localhost:4000/api/cliente/create</td>
  </tr>
      <tr>
    <td colspan="3" style="width: 100%; padding-top: 50px;">GET</td>
    <td colspan="3" style="width: 100%; padding-top: 50px;">http://localhost:4000/api/cliente</td>
  </tr>
      <tr>
    <td colspan="3" style="width: 100%; padding-top: 50px;">GET</td>
    <td colspan="3" style="width: 100%; padding-top: 50px;">http://localhost:4000/api/cliente/:id</td>
  </tr>
      <tr>
    <td colspan="3" style="width: 100%; padding-top: 50px;">DELETE</td>
    <td colspan="3" style="width: 100%; padding-top: 50px;">http://localhost:4000/api/cliente/:id</td>
  </tr>
</table>
