import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { NavLink } from "react-router";

const MyReviews = () => {
  const { user } = use(AuthContext);
  const [review, setReview] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/all-reviews?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setReview(data);
        });
    }
  }, [user?.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/all-reviews/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });

              //
              const remainingReview = review.filter((rid) => rid._id !== _id);
              setReview(remainingReview);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto mb-10 min-h-screen flex-1">
      <h2 className="text-5xl text-center py-10">My Review</h2>
      <table className="table pb-10">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Reviewer</th>
            <th>Food Name</th>
            <th>Restaurant Name</th>
            <th>Review Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {review.map((rid, index) => (
            <tr key={rid._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={rid.foodPhoto} alt="Photo" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{rid.reviewerName}</div>
                  </div>
                </div>
              </td>
              <td>{rid.foodName}</td>
              <td>{rid.restaurantName}</td>
              <td>{rid.reviewDate}</td>
              <th>
                <button
                  onClick={() => handleDelete(rid._id)}
                  className="btn text-[#CE2600] font-bold hover:bg-[#FFCD00]"
                >
                  Delete
                </button>

                <NavLink
                  to={`/review-edit/${rid._id}`}
                  className="btn text-[#CE2600] font-bold hover:bg-[#FFCD00] ml-5"
                >
                  Edit
                </NavLink>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
