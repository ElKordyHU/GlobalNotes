
const mongoose = require('mongoose');

const connectDB = (password,dbname) => {

mongoose.connect("mongodb+srv://foo:"+password +"@mytestingcluster.oggp7.mongodb.net/"+dbname+"?retryWrites=true&w=majority")
        .then(() => {console.log("[*] MongoDB Connection successfull")})
        .catch((err) => {console.log(err);})
}
const noteSchema = mongoose.Schema({
    content : String
});
const noteModel = mongoose.model("Note",noteSchema);

const addNote = (content,onSuccess,onFaliure) => {
    const new_note = new noteModel({content : content}).save()
    .then(() => {onSuccess();})
    .catch((err) => {onFaliure(err);});
}
const getnNotes = (limnumber,onSuccess,onFaliure) => {
    noteModel.find({}).limit(limnumber).then((res) => {onSuccess(res);}).catch((err) => {onFaliure(err);});
}
module.exports = {
    connectDB : connectDB,
    addNote : addNote,
    getnNotes : getnNotes
}