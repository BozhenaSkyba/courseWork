const contactSchema = require("../schemas/contact-schema");

const addContact = async (req, res) => {
  try {
    const contactCreated = await contactSchema(req.body)
      .save()
      .then((item) => {
        return res.send("item saved to database");
      })
      .catch((err) => {
        res.status(400).send("unable to save to database");
      });
    // res.send('Success');
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  addContact,
};
