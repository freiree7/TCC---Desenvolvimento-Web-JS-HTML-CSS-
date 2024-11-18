
const listaExer_create = require("../controller/listaExer_create");
const listaExer_read = require("../controller/listaExer_read");
const listaExerAll = require("../controller/listaExer_readAll")
const listaExer_delete = require("../controller/listaExer_delete")
const listaExer_deleteAll = require("../controller/listaExer_deleteAll");

module.exports = function(app,banco){

    app.post("/lista/exercicios/create",(request,response)=>{
        listaExer_create(request,response,banco);
    });

    app.get("/lista/exercicios/:usuario_UsuarioID",(request,response) =>{
        listaExer_read(request,response,banco);
    });

    app.get("/listas/read" , (request,response) => {
        listaExerAll(request,response, banco);
    })

    app.delete("/lista/exercicios/delete/:idListaExer/:idExercicios",(request,response) =>{
        listaExer_delete(request,response,banco);
    });

    app.delete("/lista/exercicios/deleteAll/:idListaExer", (request,response) => {
        listaExer_deleteAll(request,response,banco);
    });

}