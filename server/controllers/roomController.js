import { v2 as cloudinary } from "cloudinary";

//api to create a new room for hotel

import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createRoom = async (req, res) => {
  try {
    const { roomType, pricePerNight, amenities } = req.body;
    const hotel = await Hotel.findOne({ owner: req.auth.userId });

    if (!hotel) {
      return res.json({ success: false, message: "No hotel found" });
    }
    //upload images in cloudinary
    const uploadImages = req.files.map(async (file) => {
      const response = await cloudinary.uploader.upload(file.path);
      return response.secure_url;
    });

    const images = await Promise.all(uploadImages);
    await Room.create({
      hotel: hotel._id,
      roomType,
      pricePerNight: +pricePerNight,
      amenities: JSON.parse(amenities),
      images,
    });
    res.json({ success: true, message: "Room created successfully" });
  } catch (error) {
    res.json({ success: true, message: error.message });
  }
};

//api to get all rooms for hotel

export const getRooms = async (req, res) => {
  try {
  } catch (error) {}
};

//api to get all rooms for a specific  hotel

export const getOwnerRooms = async (req, res) => {
  try {
  } catch (error) {}
};

//api to toggle availability rooms for a specific  hotel

export const toggleRoomAvailability = async (req, res) => {
  try {
  } catch (error) {}
};
