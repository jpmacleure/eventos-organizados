const Evento = require('../models/evento');

function getIndexView(req, res) {
    Evento.findAll().then((eventos)=>{
        res.render('index.html', {eventos});
    }).catch((erro_recupera_eventos)=>{
        res.render('index.html', {erro_recupera_eventos});
    });
}

function getHomeView(req, res) {
    let usuario = req.session.usuario;
    Evento.findAll().then((eventos)=>{
        res.render('home.html', {eventos, usuario});
    }).catch((erro_recupera_eventos)=>{
        res.render('home.html', {erro_recupera_eventos, usuario});
    });
}

function getCadastrarEventoView(req, res) {
    let usuario = req.session.usuario;
    res.render('cadastrar_evento.html', {usuario});
}

function postCadastrarEvento(req, res){
    let evento = {
        id_usuario: req.session.usuario.id,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        data: req.body.data_evento,
        lotacao: req.body.lotacao,
        foto: req.file.filename
    };

    Evento.create(evento).then(()=>{
        res.redirect("/home");
    }).catch((err)=>{
        console.log(err);
        let erro_cadastro_evento = true;
        let msg_alerta = "Erro ao cadastrar evento.";
        let tipo_alerta = "danger";
        res.render("cadastrar_evento.html", {erro_cadastro_evento, msg_alerta, tipo_alerta});
    });
}

module.exports = {
    getIndexView,
    getHomeView,
    getCadastrarEventoView,
    postCadastrarEvento
}