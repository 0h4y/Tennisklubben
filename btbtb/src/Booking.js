import React from "react";
import BookingForm from "./BookingForm";
import BookingsList from "./components/BookingsList";
import { useState, useEffect } from "react";
import axios from "axios";

export function Booking() {
  const [bookingInfo, setBookingInfo] = useState([
    {
      _id: "placeholder_id",
      id: "placeholderId",
      email: "placeholderEmail",
      date: "placeholderDate",
      fromTime: "placeholderFromTime",
      toTime: "placeholderToTime",
      comments: [{ postedBy: "placeholderPostedBy", text: "placeholderText" }],
    },
  ]);

  useEffect(() => {
    const loadBookingInfo = async () => {
      const response = await axios.get(`/api/booking/`);

      const newBookingInfo = response.data;
      setBookingInfo(newBookingInfo);
    };

    loadBookingInfo();
  }, []);
  console.log(bookingInfo);
  return (
    <div
      key="bookingContainer"
      className="justify-content-md-center p-5"
      style={{
        backgroundImage: `url("./lockerRoom.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <BookingForm />
      <BookingsList bookings={bookingInfo} />
    </div>
  );
}

export default Booking;
