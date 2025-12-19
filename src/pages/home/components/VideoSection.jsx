import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import video from "../../../assets/video.mp4";
import { Link } from "react-router-dom";
const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "0px 20px 90px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"Bricolage Grotesque", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#1c3f3a",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Discover Our Story
          </h2>
          <p
            style={{
              fontSize: "20px",
              color: "#546078",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Watch how we're transforming the industry through innovation and
            dedication
          </p>
        </div>

        {/* Video Container */}
        <div
          style={{
            position: "relative",
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(28, 63, 58, 0.15)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow =
              "0 30px 80px rgba(28, 63, 58, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 20px 60px rgba(28, 63, 58, 0.15)";
          }}
        >
          {/* Decorative gradient overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "120px",
              background:
                "linear-gradient(180deg, rgba(4, 174, 181, 0.1) 0%, rgba(4, 174, 181, 0) 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Video Element */}
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              backgroundColor: "#1c3f3a",
            }}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(isPlaying ? false : true)}
          >
            <video
              ref={videoRef}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Controls Overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "30px",
                background:
                  "linear-gradient(0deg, rgba(28, 63, 58, 0.9) 0%, rgba(28, 63, 58, 0) 100%)",
                opacity: showControls ? 1 : 0,
                transition: "opacity 0.3s ease",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  style={{
                    backgroundColor: "#04aeb5",
                    border: "none",
                    borderRadius: "50%",
                    width: "56px",
                    height: "56px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(4, 174, 181, 0.4)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#03989e";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#04aeb5";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {isPlaying ? (
                    <Pause size={24} color="#ffffff" fill="#ffffff" />
                  ) : (
                    <Play
                      size={24}
                      color="#ffffff"
                      fill="#ffffff"
                      style={{ marginLeft: "3px" }}
                    />
                  )}
                </button>

                <div style={{ flex: 1 }} />

                {/* Volume Button */}
                <button
                  onClick={toggleMute}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    border: "none",
                    borderRadius: "12px",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.2)";
                  }}
                >
                  {isMuted ? (
                    <VolumeX size={20} color="#ffffff" />
                  ) : (
                    <Volume2 size={20} color="#ffffff" />
                  )}
                </button>

                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullscreen}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    border: "none",
                    borderRadius: "12px",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.2)";
                  }}
                >
                  <Maximize size={20} color="#ffffff" />
                </button>
              </div>
            </div>

            {/* Play Button Overlay (when paused) */}
            {!isPlaying && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 3,
                }}
              >
                <button
                  onClick={togglePlay}
                  style={{
                    backgroundColor: "#04aeb5",
                    border: "none",
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 24px rgba(4, 174, 181, 0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#03989e";
                    e.currentTarget.style.transform = "scale(1.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#04aeb5";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Play
                    size={32}
                    color="#ffffff"
                    fill="#ffffff"
                    style={{ marginLeft: "4px" }}
                  />
                </button>
              </div>
            )}
          </div>

          {/* Bottom Info Section */}
          <div
            style={{
              padding: "32px 40px",
              background: "linear-gradient(135deg, #cdeff0 0%, #ffffff 100%)",
              borderTop: "2px solid #cdeff0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#1c3f3a",
                    marginBottom: "8px",
                  }}
                >
                  Behind The Scenes
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#546078",
                    margin: 0,
                  }}
                >
                  Learn more about our journey and mission
                </p>
              </div>
              <Link
                to="/about"
                style={{
                  backgroundColor: "#04aeb5",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "12px",
                  padding: "14px 32px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(4, 174, 181, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#03989e";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 16px rgba(4, 174, 181, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#04aeb5";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(4, 174, 181, 0.3)";
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          {["Innovation", "Quality", "Sustainability"].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "#ffffff",
                padding: "12px 28px",
                borderRadius: "50px",
                border: "solid 1px var(--primary-color)",
                fontSize: "16px",
                fontWeight: "500",
                color: "#1c3f3a",
                boxShadow: "0 4px 12px rgba(28, 63, 58, 0.1)",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#04aeb5";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#1c3f3a";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
