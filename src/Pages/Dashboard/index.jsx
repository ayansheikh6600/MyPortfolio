import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const DashBoard = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [liveLink, setLiveLink] = useState();
  const [repoLink, setRepoLink] = useState();
  const [category, setCategory] = useState();
  const [Hot, setHot] = useState();
  const loggedin = localStorage.getItem("/AT/");

  const userId = "1eFEWPdNgFSmRKkcWWddASRHs942";

  const imageUpload = (e) => {
    e.preventDefault();
    const storage = getStorage();

    if (userId != loggedin) {
      return;
    }
    if (!repoLink && !title && !desc && !category) {
      return alert("Enter Req Feilds");
    }

    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "images/" + image.name);
    const uploadTask = uploadBytesResumable(storageRef, image, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);

          const docRef = await addDoc(collection(db, "Projects"), {
            title,
            desc,
            liveLink: liveLink || "",
            repoLink,
            ImageUrl: downloadURL,
            category,
            Hot,
          });
          // console.log("Document written with ID: ", docRef.id);

          if (docRef) {
            setCategory("");
            setDesc("");
            setLiveLink("");
            setRepoLink("");
            setTitle("");
          }
        });
      }
    );
  };

  // console.log(loggedin);
  return !loggedin ? (
    <Navigate to="/" />
  ) : (
    <>
      <div className="w-full h-dvh flex flex-col justify-center">
        <div className="w-[90%] mx-auto bg-gradient-to-bl from-[#5271FF] via-purple-500 to-pink-500 py-10  rounded-2xl">
          <h1 className="text-4xl text-center text-white font-semibold">
            Add Project
          </h1>
          <form
            // action=""
            onSubmit={(e) => imageUpload(e)}
            className=" w-[500px] flex flex-col gap-2 bg-white mx-auto p-4 py-14 rounded-3xl mt-4"
          >
            <label htmlFor="">Title:</label>
            <input
              className="w-full p-2 text-black rounded-lg border-2 border-[#5271FF]"
              type="text"
              name=""
              id=""
              value={title}
              placeholder="Enter Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="">Decription:</label>
            <textarea
              className="w-full p-2 text-black rounded-lg border-2 border-[#5271FF]"
              name=""
              id=""
              placeholder="Enter Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <label htmlFor="">Live Link:</label>
            <input
              className="w-full p-2 text-black rounded-lg border-2 border-[#5271FF]"
              type="text"
              name=""
              id=""
              value={liveLink}
              placeholder="Enter Live Link"
              onChange={(e) => setLiveLink(e.target.value)}
            />
            <label htmlFor="">Repo Link:</label>
            <input
              className="w-full p-2 text-black rounded-lg border-2 border-[#5271FF]"
              type="text"
              name=""
              id=""
              placeholder="Enter Repo Link"
              value={repoLink}
              onChange={(e) => setRepoLink(e.target.value)}
            />
            <label htmlFor="">Category:</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 text-black rounded-lg border-2 border-[#5271FF]"
            >
              <option className="w-full" value="None">
                None
              </option>
              <option className="w-full" value="App">
                App
              </option>
              <option className="w-full" value="Website">
                Website
              </option>
              <option className="w-full" value="Backend">
                Backend
              </option>
            </select>
            <label htmlFor="">Hot OR Not:</label>
            <select
              onChange={(e) => setHot(e.target.value)}
              className="w-full p-2 text-black rounded-lg border-2 border-[#5271FF]"
            >
              <option className="w-full" value="None">
                None
              </option>
              <option className="w-full" value="No">
                No
              </option>
              <option className="w-full" value="Yes">
                Yes
              </option>
            </select>
            <label htmlFor="">Image:</label>
            <input
              className="w-full p-2 text-black rounded-lg border-2 border-[#5271FF]"
              type="file"
              name=""
              id=""
              placeholder="Enter Email"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#5271FF] via-purple-500 to-pink-500 text-white font-bold p-2 mt-3 rounded-lg"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
