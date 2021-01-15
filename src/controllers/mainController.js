const path = require('path');
let db = require('../database/models')

let mainController={
    index: function(req,res){
        db.Notas.findAll()
        .then(function(notas){
            res.render( path.join(__dirname, '../views/index.ejs'),{notas:notas})

        })
    },
    create:function(req,res){
        db.Notas.create({
            title:req.body.title,
            message:req.body.message
        })
        .then(function(pelicula){
            res.redirect('/')
        })
    },
    edit:function(req,res){
        db.Notas.findByPk(req.params.id)
        .then(function(nota){
            res.render(path.join(__dirname, '../views/detail.ejs'),{nota:nota})
        })
    },
    update:function(req,res){
       db.Notas.update({
            title:req.body.title,
            message:req.body.message
       },{
           where:{
               id:req.params.id
           }
       })
       .then(function(){
           res.redirect('/')
       })
    },
    destroy:function(req,res){
        db.Notas.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(function(){
            res.send('Nota eliminada')
        })
    }
}
    
module.exports=mainController