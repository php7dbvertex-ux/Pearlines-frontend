import AboutUs from "../models/aboutUs.model.js";

// ============================
// Get About Us
// ============================

const getAboutUs = async () => {
  return await AboutUs.findOne();
};

// ============================
// Update About Us
// ============================

const updateAboutUs = async (data) => {
  let aboutUs = await AboutUs.findOne();

  if (!aboutUs) {
    aboutUs = await AboutUs.create(data);

    return aboutUs;
  }

  aboutUs = await AboutUs.findByIdAndUpdate(aboutUs._id, data, {
    new: true,
  });

  return aboutUs;
};

export default {
  getAboutUs,
  updateAboutUs,
};
