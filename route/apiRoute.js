const router = require('express').Router();
const database = require('../db/db');
router.get('/notes', function(req, res) {
    database.getNotes().then(
        allNotes => res.json(allNotes)
                      
    )
    .catch(err => res.json(err))

});

router.post('/notes', function(req, res){
    database.addNote(req.body).then(notes => res.json(notes))
    .catch(err => res.json(err))

});

router.delete('/notes/:id', function(req, res){
    database.removeNote(req.params.id).then(() => res.json({
        ok: true
    
    }))
    .catch(err => res.json(err))
});

module.exports = router;