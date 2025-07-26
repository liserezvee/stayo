import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

export const registerHotel = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body;
    const owner = req.user._id;
    //check if user register
    const hotel = await Hotel.findOne({ owner });
    if (hotel) {
      return res.json({ success: false, message: "Hotel Already register" });
    }
    await Hotel.create({ name, address, contact, city, owner });
    await User.findByIdAnd(owner, { role: "hotelOwner" });

    return res.json({
      success: true,
      message: "Hotel registered Successfully",
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
