const mongoClient = require('../mongo');
const fs = require('fs');


module.exports.basicMetadata = async(req,res) => {
    try {
        // const { id } = req.body;
        const db = mongoClient.db('deltax');
        const collection = db.collection('info');

        const data = await collection.findOne({
            key: 'metadata'
        })

        return res.status(200).send(data);

    } catch (error) {
        console.log(error);
        return res.status(500).send({message: error.message});
    }
}

module.exports.getCrawlerData = async(req,res) => {
  try {
    const db = mongoClient.db('deltax');
    const collection = db.collection('info');

    const data = await collection.findOne({
      key: "crawl-custom"
    })

    return res.send(data);

  } catch (error) {
    console.log(error)
    return res.send({message: error.message});
  }
}

module.exports.writeCrawlerInfo = async(req,res) => {
    try {
        const filepath = "data.json";

        fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) {
              console.error('Error reading JSON file:', err);
              return;
            }
          
            try {
              // Parse the JSON data into a JavaScript object
              const jsonData = JSON.parse(data);
          
              // Now, jsonData contains the contents of the JSON file
              console.log('JSON data from file:', jsonData);
          
            } catch (parseError) {
              console.error('Error parsing JSON:', parseError);
            }
          });

        return res.send({message: "done"})
    } catch (error) {
        console.log(error);
        return res.status(500).send({message: error.message})
    }
}


