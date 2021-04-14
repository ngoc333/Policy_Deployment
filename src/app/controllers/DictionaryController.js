// class DictionaryController{
//     image(req, res){
//         res.send("Hello!")
//     }
// }

// module.exports = new DictionaryController();
module.exports = {
    index: (req, res) => {
      res.send('Hello');
    }
};