import express from 'express';
import { Reservation } from '../models/reservationSchema.js';
import ErrorHandler from '../error/error.js';

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;
    if (!firstName || !lastName || !email || !phone || !date || !phone) {
      return next( new ErrorHandler("Please Fill Full reservation form!", 400));
    }
    try {
      await Reservation.create({ firstName, lastName, email, phone, date, time });
    res.status(201).json({
      success: true,
      message: "Reservation sent successfully!",
      reservation: Reservation // Optionally, you can send back the created reservation
    });
  } catch (error) {

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(","), 400));
    }

    // Generic error handling for unexpected errors
    return next(error);
  }
};



// Exporting the app for use in the server file
export default sendReservation;
