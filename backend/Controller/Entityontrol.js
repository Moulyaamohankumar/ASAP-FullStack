const Entity = require("../models/Entity");

exports.getEntitiesByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const entities = await Entity.find({ created_by: userId }).populate("created_by", "name email");
    res.json(entities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching entities", error });
  }
};
