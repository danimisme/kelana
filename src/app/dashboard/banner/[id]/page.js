"use client";
import Input from "@/components/Elements/input/Input";
import Label from "@/components/Elements/input/Label";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";

export default function DetailBannerPage({ params }) {
  const { getData } = useGetData();
  const [banner, setBanner] = useState({});
  useEffect(() => {
    getData(`banner/${params.id}`).then((res) => setBanner(res?.data?.data));
  }, []);

  console.log(banner);
  return (
    <div className="mt-5 container-lg">
      <div className="row py-3">
        <h1>Detail Banner</h1>
        <div className="col-lg-6 col-10">
          <img
            src={banner?.imageUrl}
            alt={banner?.title}
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6 col-10">
          <form action="">
            <div className="mb-3">
              <Label htmlFor="name" className="form-label">
                Banner Name
              </Label>
              <Input
                type="text"
                className="form-control"
                id="name"
                defaultValue={banner?.name}
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="image" className="form-label">
                Image File
              </Label>
              <Input type="file" id="image" />
            </div>
            <button className="btn btn-success">Edit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
