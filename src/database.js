const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fazt:fazt@cluster0-xyas1.mongodb.net/test?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology: true 
})
    .then(db => console.log('DB is conected'))
    .catch(err => console.error(err));