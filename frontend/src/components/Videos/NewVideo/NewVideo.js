import { useState, useRef } from 'react';
import { useAuthUser } from 'react-auth-kit'
import { useEffect } from 'react';
import styles from './NewImage.module.css';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector, useDispatch } from "react-redux/es/exports";
import { setVideosData } from "../../../store/slices/UserSlice";
import axios, { AxiosError } from "axios";
const NewVideo = ({ onVideoAdded }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const auth = useAuthUser()
  const fileInputRef = useRef(null);
  const ref = useRef(null);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedFiles.length > 0) {
      // Trigger form submission
      videoUploadHandler({ preventDefault: () => { } });
    }
  }, [selectedFiles]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);
  };


  const videoUploadHandler = async (event) => {
    event.preventDefault();
    ref.current.continuousStart();
  
    if (selectedFiles.length !== 1) {
      toast.error('Please select exactly one video file to upload.');
      ref.current.complete();
      return;
    }
  
    const formData = new FormData();
    formData.append('video', selectedFiles[0]); // Attach the single video file
  
    try {
   
    
      const token = auth().token;
      const userId = auth().userId;
     
      const url = `${process.env.REACT_APP_GALLERY_BACKEND}/videos/add/${userId}`;
     
      const config = {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };
  
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
  
      console.log("Uploading video...");
      const response = await axios.post(url, formData, config);
      const { message, video, gallery } = response?.data;
      
      dispatch(setVideosData({gallery: response?.data?.gallery }));
  
      toast.success(message || 'Video uploaded successfully!');
      ref.current.complete();
    } catch (error) {
      console.error('Upload error:', error);
      console.log(error)
  
      const errorMessage =
        error.response?.data?.error || 'An unexpected error occurred during upload.';
      toast.error(errorMessage);
      ref.current.complete();
    }
  };






  return (
    <>
      <LoadingBar color='#FFB700' ref={ref} />
      <form encType="multipart/form-data" onSubmit={videoUploadHandler}>
      <input
        ref={fileInputRef}
        id="file"
        name="file"
        type="file"
        multiple
        onChange={handleFileChange}
        className={styles.fileInput}
        accept=".mp4,.mov,.avi,.mkv,.wmv,.flv,.webm,.m4v,.3gp,.3g2,.f4v,.f4p,.f4a,.f4b,.ogg,.ogv,.ts,.m2ts,.mts,.mp3"
      />
      <label htmlFor="file" className={styles.fileLabel}>
        <span className={styles.plusIcon}>+</span>
        <span>Choose files</span>
      </label>
        {/* <button className="btn btn-success" type="submit">
          Submit
        </button> */}
      </form>
    </>
  );
};

export default NewVideo;