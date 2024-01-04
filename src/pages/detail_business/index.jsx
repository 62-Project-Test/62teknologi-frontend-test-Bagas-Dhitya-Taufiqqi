import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Slideshow from "../../components/Slideshow";
import ReviewUser from "../../components/ReviewUser";
import Maps from "../../components/Maps";

const DetailBusiness = () => {
  const accessToken = import.meta.env.VITE_YELP_TOKEN;
  const location = useLocation();
  const id = location?.state?.id;
  const [detail, setDetail] = useState();
  const [review, setReview] = useState();
  const [coordinates, setCoordinates] = useState({ longitude: 0, latitude: 0 });

  const getDetail = async (id) => {
    try {
      const response = await axios.get(`${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setDetail(response?.data);
      setCoordinates({
        ...coordinates,
        longitude: response?.data?.coordinates?.longitude,
      });
      setCoordinates({
        ...coordinates,
        latitude: response?.data?.coordinates?.latitude,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getReview = async (id) => {
    try {
      const response = await axios.get(`${id}/reviews`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setReview(response?.data?.reviews);
      console.log(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail(id);
    getReview(id);
  }, []);

  console.log(coordinates);

  return (
    <section className="w-screen h-full flex flex-col justify-center items-center">
      <div className="absolute left-40 top-32">
        <p className="font-semibold text-xl">Detail Business</p>
        <div className="my-10">
          <Slideshow photos={detail?.photos} />
        </div>
        <div className="gap-y-5 flex flex-col">
          <p className="font-semibold">{detail?.name}</p>
          <div className="gap-y-1 flex flex-col">
            <p>
              {detail?.location?.address1}, {detail?.location?.city}
            </p>
            <p>Phone Number : {detail?.phone}</p>
            <p>See on Google Maps : </p>
            <Maps
              longitude={coordinates?.longitude}
              latitude={coordinates?.latitude}
            />
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-xl font-semibold mb-4">Reviews</h2>
          {review?.map((review, index) => (
            <ReviewUser key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailBusiness;
