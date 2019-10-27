const restify = require('restify');
const errs = require('restify-errors');
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '34.95.213.167',
      user : 'root',
      password : 'maximus',
      database : 'projeto_integrador'
    }
});

const server = restify.createServer();

server.get('/api/medicos', function(req, res, next){
    res.send('Traz os medicos depois que o credenciado foi escolhido');
    return next();
});

server.get('/api/credenciados', async function(req, res, next){
    const promise = await knex('credenciados');
    res.send(promise);
    return next();
});

server.post('/api/agendar', function(req, res, next){
    const params = req.params;
    res.send('agendamento');
    return next();
});

server.get('/api/agendamentos', function(req, res, next){
    res.send('agendamentos');
    return next();
});


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});