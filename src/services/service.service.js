import Service from "../models/service.model.js";
import cloudinary from "../config/cloudinary.js";

// Create Service

const createService =
  async (serviceData) => {
    return await Service.create(
      serviceData
    );
  };

// Get All Services

const getAllServices =
  async () => {
    return await Service.find().sort({
      createdAt: -1,
    });
  };

// Get Service By Id

const getServiceById =
  async (serviceId) => {
    return await Service.findById(
      serviceId
    );
  };

// Update Service

const updateService =
  async (
    serviceId,
    serviceData
  ) => {
    return await Service.findByIdAndUpdate(
      serviceId,
      serviceData,
      {
        new: true,
      }
    );
  };

// Delete Service

const deleteService =
  async (serviceId) => {
    const service =
      await Service.findById(
        serviceId
      );

    if (!service) {
      throw new Error(
        "Service not found"
      );
    }

    // Delete image from Cloudinary

    if (service.publicId) {
      await cloudinary.uploader.destroy(
        service.publicId
      );
    }

    await Service.findByIdAndDelete(
      serviceId
    );

    return service;
  };

export default {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};