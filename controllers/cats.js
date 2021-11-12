var cats = require('../models/cats'); 
 
// List of all cats 
exports.cats_list = async function(req, res) { 
    try{ 
        thecats = await cats.find(); 
        res.send(thecats); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific cats. 
exports.cats_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: cats detail: ' + req.params.id); 
}; 
 
// Handle cats create on POST. 
exports.cats_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: cats create POST'); 
}; 
 
// Handle cats delete form on DELETE. 
exports.cats_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: cats delete DELETE ' + req.params.id); 
}; 
 
// Handle cats update form on PUT. 
exports.cats_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: cats update PUT' + req.params.id); 
}; 