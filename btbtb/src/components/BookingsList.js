import React from "react";

const BookingsList = ({ bookings }) => (
  <>
    <div
      className="container mt-5 row justify-content-md-center"
      key="bookingListContainer"
    >
      <div className="" key="bookingListInnerContainer">
        <div className="card text-left" key="bookingListCard">
          <div className="card-header text-center" key="bookingListCardHeader">
            Bokningar:
          </div>
          <table
            className="table table-striped"
            id="bookingListTable"
            key="bookingListTable"
          >
            <tbody key="bookingListTbody">
              <tr key="bookingListHeader">
                <td key="madeOf">Bokningen är gjord av:</td>
                <td key="date">Datum:</td>
                <td key="time">tid:</td>
                <td key="comments">Kommentarer:</td>
              </tr>
              {bookings.map((booking) => (
                <tr key={booking._id + "row"}>
                  <td key={booking._id + "email"}>{booking.email}</td>
                  <td key={booking._id + "date"}>{booking.date}</td>
                  <td key={booking._id + "time"}>
                    {booking.fromTime} - {booking.toTime}
                  </td>
                  <td key={booking._id + "comments"}>
                    {booking.comments.map((comment) => (
                      <span key={comment.text}>
                        {comment.text}
                        <br /> Posted by: {comment.postedBy} <hr />
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
);

export default BookingsList;
