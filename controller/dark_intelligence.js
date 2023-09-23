const mongoClient = require('../mongo');


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