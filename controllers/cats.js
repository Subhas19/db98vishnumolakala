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
exports.cats_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new cats(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"cats_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.color = req.body.color; 
    document.weight = req.body.weight; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle cats delete form on DELETE. 
exports.cats_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: cats delete DELETE ' + req.params.id); 
}; 
 
// Handle cats update form on PUT. 
exports.cats_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: cats update PUT' + req.params.id); 
};
// VIEWS 
// Handle a show all view 
exports.cats_view_all_Page = async function(req, res) { 
    try{ 
        thecats = await cats.find(); 
        res.render('cats', { title: 'cats Search Results', results: thecats }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  