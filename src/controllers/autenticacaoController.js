const Usuario = require('../models/usuario');

function getEntrarView(req, res){
    res.render('entrar.html');
}

function getRegistrarView(req, res){
    res.render('registrar.html');
}

function postRegistrarUsuario(req, res) {
    let usuario = {
        email: req.body.email,
        senha: req.body.senha,
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento
    }
    
    Usuario.create(usuario).then(()=>{
        let sucesso_cadastro = true;
        let msg_alerta = "Cadastro realizado com sucesso";
        let tipo_alerta = "success";
        res.render("entrar.html", {sucesso_cadastro, msg_alerta, tipo_alerta});
    }).catch((err)=>{
        console.log(err);
        let erro_cadastro = true;
        let msg_alerta = "Erro ao registrar usuário.";
        let tipo_alerta = "danger";
        res.render("registrar.html", {erro_cadastro, msg_alerta, tipo_alerta});
    });

}


async function postAutenticar(req, res){
    const usuario = await Usuario.findOne({ where: {
        email: req.body.email, 
        senha: req.body.senha}
    });
    if(usuario !== null){
        req.session.autorizado = true;
        req.session.usuario = usuario;
        res.redirect('/home');
    }
    else{
        let erro_autenticacao = true;
        let msg_alerta = "Email ou senha inválido";
        let tipo_alerta = "danger";
        res.render("entrar.html", {erro_autenticacao, msg_alerta, tipo_alerta});
    }
}

function verificarAutenticacao(req, res, next) {
    if(req.session.autorizado){
        console.log("usuário autorizado");
        next();
    }
    else{
        console.log("usuário NÃO autorizado");
        res.redirect('/');
    }   
}

function getSair(req, res) {
    req.session.destroy();
    res.redirect('/');
}

module.exports = {
    getEntrarView,
    getRegistrarView,
    postRegistrarUsuario,
    postAutenticar,
    verificarAutenticacao,
    getSair
}