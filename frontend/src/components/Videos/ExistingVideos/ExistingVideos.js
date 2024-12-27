import React, { useState, useEffect } from "react";
import styles from "./ExistingImages.module.css";
import axios from "axios";
import { useRef } from "react";
import { useAuthUser } from "react-auth-kit";
import LoadingBar from "react-top-loading-bar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { setVideosData } from "../../../store/slices/UserSlice";

const ExistingVideos = ({ videos, onVideoDeleted }) => {
  const [fullScreenVideo, setFullScreenVideo] = useState(null);
  const [optionsPosition, setOptionsPosition] = useState({ top: 0, left: 0 });
  const [showOptions, setShowOptions] = useState(null);
  const [counter, setCounter] = useState(0);

  const forceUpdate = () => setCounter((prev) => prev + 1); // Increment to trigger re-render
  const dispatch = useDispatch();
  const auth = useAuthUser();
  const ref = useRef(null);

  const toggleOptions = (event, video) => {
    const rect = event.target.getBoundingClientRect();
    setOptionsPosition({
      top: rect.bottom + window.scrollY + 5,
      left: rect.left + window.scrollX,
    });
    setShowOptions(showOptions === video ? null : video);
  };

  // ** Open the video in full-screen **
  const openFullScreen = (video) => {
    setShowOptions(null);
    setFullScreenVideo(video);
  };

  // ** Close the video viewer **
  const closeFullScreen = () => setFullScreenVideo(null);

  const handleView = (video) => {
    setShowOptions(null);
    openFullScreen(video);
  };

  const handleDownload = async (videoLink, videoName) => {
    setShowOptions(null);
    try {
      const response = await fetch(videoLink);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", videoName);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      toast.success(`Downloaded: ${videoName}`);
    } catch (error) {
      console.error("Download failed:", error.message);
      toast.error("Download failed");
    }
  };

  const handleDelete = async (video) => {
    setShowOptions(null);
    ref.current.continuousStart();
    try {
      const userId = auth().userId;
      const token = auth().token;
      const config = {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await axios.delete(
        `${process.env.REACT_APP_GALLERY_BACKEND}/videos/${userId}/${video._id}`,
        config
      );

      dispatch(setVideosData({ gallery: response?.data?.gallery }));
      toast.success("Video deleted successfully!");
      forceUpdate();
      ref.current.complete();
    } catch (error) {
      console.error("Error Deleting video:", error);
      ref.current.complete();
    }
  };

  return (
    <>
      <LoadingBar color="#FFB700" ref={ref} />

      <div className={styles.imageGrid}>
        {videos.map((video, index) => (
          <div className={styles.imageCard} key={index}>
            <div className={styles.cardHeader}>
              <p className={styles.imageTitle}>{video.title}</p>
            </div>

            {/* Video Thumbnail */}
            <div className={styles.cardBody}>
              <video 
                className={styles.fullScreenTrigger}
                src={video.videoLink} 
                onClick={() => openFullScreen(video)} 
                muted 
                loop 
                autoPlay 
              />
            </div>

            <div className={styles.cardFooter}>
              <p className={styles.imageSize}>{(video.size / (1024 * 1024)).toFixed(2)} MB</p>
              <div
                className={styles.optionsButton}
                onClick={(event) => toggleOptions(event, video)}
              >
                ...
              </div>

              {showOptions && (
                <div
                  className={styles.options}
                  style={{
                    top: optionsPosition.top,
                    left: optionsPosition.left,
                  }}
                  key={`options_${index}`}
                >
                  <div
                    className={styles.option}
                    onClick={() => handleView(showOptions)}
                  >
                    View
                  </div>
                  <div
                    className={styles.option}
                    onClick={() =>
                      handleDownload(showOptions.videoLink, showOptions.title)
                    }
                  >
                    Download
                  </div>
                  <div
                    className={styles.option}
                    onClick={() => handleDelete(showOptions)}
                  >
                    Delete
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Full-screen video viewer */}
        {fullScreenVideo && (
          <div className={styles.fullScreenOverlay} onClick={closeFullScreen}>
            <video
              src={fullScreenVideo.videoLink}
              controls
              autoPlay
              className={styles.fullScreenVideo}
              onClick={(e) => e.stopPropagation()}
            />
            <span className={styles.closeButton} onClick={closeFullScreen}>
              &#10005;
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default ExistingVideos;
