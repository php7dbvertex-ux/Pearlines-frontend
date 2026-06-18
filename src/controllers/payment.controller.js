import paymentService from "../services/payment.service.js";

const createPayment =
  async (req, res) => {
    try {
      const payment =
        await paymentService.createPayment(
          req.body
        );

      res.status(201).json({
        success: true,
        data: payment,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getAllPayments =
  async (req, res) => {
    try {
      const payments =
        await paymentService.getAllPayments();

      res.status(200).json({
        success: true,
        count:
          payments.length,
        data: payments,
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
  createPayment,
  getAllPayments,
};