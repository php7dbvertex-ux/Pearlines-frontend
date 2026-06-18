import Payment from "../models/payment.model.js";

const createPayment =
  async (paymentData) => {
    return await Payment.create(
      paymentData
    );
  };

const getAllPayments =
  async () => {
    return await Payment.find().sort({
      createdAt: -1,
    });
  };

export default {
  createPayment,
  getAllPayments,
};