import cloudinary from "../config/cloudinary.js";

const uploadImage =
  async (filePath, folder) => {
    const result =
      await cloudinary.uploader.upload(
        filePath,
        {
          folder,
        }
      );

    return {
      imageUrl:
        result.secure_url,

      publicId:
        result.public_id,
    };
  };

export default {
  uploadImage,
};