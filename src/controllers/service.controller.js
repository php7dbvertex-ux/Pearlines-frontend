import serviceService from "../services/service.service.js";

// Create Service

const createService =
  async (req, res) => {
    try {
      const service =
        await serviceService.createService(
          req.body
        );

      res.status(201).json({
        success: true,
        message:
          "Service created successfully",
        data: service,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

// Get All Services

const getAllServices =
  async (req, res) => {
    try {
      const services =
        await serviceService.getAllServices();

      res.status(200).json({
        success: true,
        count:
          services.length,
        data: services,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

// Get Service By Id

const getServiceById =
  async (req, res) => {
    try {
      const service =
        await serviceService.getServiceById(
          req.params.id
        );

      if (!service) {
        return res
          .status(404)
          .json({
            success: false,
            message:
              "Service not found",
          });
      }

      res.status(200).json({
        success: true,
        data: service,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

// Update Service

const updateService =
  async (req, res) => {
    try {
      const service =
        await serviceService.updateService(
          req.params.id,
          req.body
        );

      res.status(200).json({
        success: true,
        message:
          "Service updated successfully",
        data: service,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

// Delete Service

const deleteService =
  async (req, res) => {
    try {
      await serviceService.deleteService(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Service deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

export default {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};