// //1번
// import React, { useEffect, useRef, useState } from "react";
// import Header from "../components/header/Header";

// function GamePage() {
//   const canvasRef = useRef(null); // Reference to the canvas element
//   const [highestScore, setHighestScore] = useState(
//     parseInt(localStorage.getItem("highestScore") || "0")
//   ); // 최고 점수 상태

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const FPS = 60;

//     let player_x = 180;
//     let key_left = 0;
//     let key_right = 0;

//     const spr_player = new Image();
//     const spr_ddong = new Image();
//     spr_player.src = "/player.png"; // Path to player image
//     spr_ddong.src = "/ddong.png"; // Path to obstacle image

//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowLeft") {
//         key_left = 1;
//         event.preventDefault();
//       }
//       if (event.key === "ArrowRight") {
//         key_right = 1;
//         event.preventDefault();
//       }
//     };

//     const handleKeyUp = (event) => {
//       if (event.key === "ArrowLeft") {
//         key_left = 0;
//         event.preventDefault();
//       }
//       if (event.key === "ArrowRight") {
//         key_right = 0;
//         event.preventDefault();
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     document.addEventListener("keyup", handleKeyUp);

//     class Ddong {
//       constructor(x, spd) {
//         this.x = x;
//         this.y = -16;
//         this.spd = spd;
//       }

//       move() {
//         this.y += this.spd;
//       }
//     }

//     const Ddongs = [];
//     let t = 0;

//     function step() {
//       if (key_left === 1 && player_x > 0) player_x -= 4;
//       if (key_right === 1 && player_x < canvas.width - 40) player_x += 4;

//       t++;
//       if (t % 15 === 0) {
//         const x = Math.random() * (canvas.width - 32);
//         const ddong = new Ddong(x, 4 + Math.random() * 4);
//         Ddongs.push(ddong);
//       }

//       Ddongs.forEach((ddong, index) => {
//         ddong.move();
//         if (ddong.y >= canvas.height) {
//           Ddongs.splice(index, 1);
//         }
//         if (
//           (player_x - ddong.x) * (player_x - ddong.x) +
//             (canvas.height - 50 - ddong.y) * (canvas.height - 50 - ddong.y) <=
//           16 * 16
//         ) {
//           // Update highest score if necessary
//           if (t > highestScore) {
//             localStorage.setItem("highestScore", t); // Save to localStorage
//             setHighestScore(t); // Update state
//           }
//           alert("GAME OVER\nSCORE : " + t);
//           Ddongs.splice(index, 1);
//           window.location.reload();
//         }
//       });
//     }

//     function draw() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(spr_player, player_x - 16, canvas.height - 50, 32, 32);

//       Ddongs.forEach((ddong) => {
//         ctx.drawImage(spr_ddong, ddong.x - 16, ddong.y - 16, 32, 32);
//       });

//       ctx.font = "20px Arial";
//       ctx.fillStyle = "#000";
//       ctx.fillText("Score: " + t, 10, 30);
//     }

//     function gameLoop() {
//       step();
//       draw();
//     }

//     const interval = setInterval(gameLoop, 1000 / FPS);

//     return () => {
//       clearInterval(interval);
//       document.removeEventListener("keydown", handleKeyDown);
//       document.removeEventListener("keyup", handleKeyUp);
//     };
//   }, [highestScore]);

//   return (
//     <>
//       <Header />
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           backgroundColor: "#d9d3c3",
//           minHeight: "100vh",
//           padding: "20px",
//         }}
//       >
//         <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#000" }}>
//           Trash Hunt: 오물피하기 게임
//         </h1>
//         {/* <p style={{ fontSize: "1.2rem", color: "#000", marginBottom: "10px" }}>
//           내 최고 점수 : <span style={{ fontWeight: "bold" }}>{highestScore}점</span>
//         </p> */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "flex-start",
//           }}
//         >
//           <canvas
//             ref={canvasRef}
//             id="canvas"
//             width="400"
//             height="700"
//             style={{
//               display: "block",
//               border: "2px solid #8b5e3c",
//               backgroundColor: "#ffffff",
//               borderRadius: "12px",
//               marginRight: "20px",
//             }}
//           ></canvas>
          


//           <div
//             style={{
//               width: "250px",
//               padding: "15px",
//               backgroundColor: "#6b4f3f",
//               borderRadius: "12px",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
//             }}
//           >
//             <h2
//               style={{
//                 fontSize: "1.5rem",
//                 fontWeight: "bold",
//                 color: "#d1bfa6",
//                 marginBottom: "10px",
//               }}
//             >
//               HOW TO PLAY
//             </h2>
//             <div
//               style={{
//                 backgroundColor: "#d1bfa6",
//                 padding: "10px",
//                 borderRadius: "8px",
//                 fontSize: "0.9rem",
//                 lineHeight: "1.5",
//                 color: "#333",
//               }}
//             >
//               <p>
//                 <strong>조작키 - 방향키</strong>
//                 <br/>
//                 <br/>
//                 <div style={{ fontWeight: "bold" }}>
//                   방향키를 좌우로 움직여 하늘에서 떨어지는 오물풍선을 피해보세요.
//                   집중력과 빠른 반응이 필요하니, 신중하게 움직이며 최대한 오래 살아남아 보세요.
//                   오물풍선을 피하며 시간을 끌수록 점수가 높아지니, 최고 점수를 기록하는 데 도전해보세요!
//                 </div>
                  
//               </p>
              
//             </div>




//                   <p style={{
//                 fontSize: "1.0rem",
//                 fontWeight: "bold",
//                 color: "#d1bfa6",
//                 marginBottom: "10px",
//               }}>
//                     내 최고 점수 : <span style={{ fontWeight: "bold" }}>{highestScore}점</span>
//                   </p>


                  
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default GamePage;

import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header/Header";

function GamePage() {
  const canvasRef = useRef(null); // Reference to the canvas element
  const [highestScore, setHighestScore] = useState(
    parseInt(localStorage.getItem("highestScore") || "0")
  ); // 최고 점수 상태
  const [gameStarted, setGameStarted] = useState(false); // 게임 시작 상태

  useEffect(() => {
    if (!gameStarted) return; // 게임이 시작되지 않으면 실행하지 않음

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const FPS = 60;

    let player_x = 180;
    let key_left = 0;
    let key_right = 0;

    const spr_player = new Image();
    const spr_ddong = new Image();
    spr_player.src = "/player.png"; // Path to player image
    spr_ddong.src = "/ddong.png"; // Path to obstacle image

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        key_left = 1;
        event.preventDefault();
      }
      if (event.key === "ArrowRight") {
        key_right = 1;
        event.preventDefault();
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "ArrowLeft") {
        key_left = 0;
        event.preventDefault();
      }
      if (event.key === "ArrowRight") {
        key_right = 0;
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    class Ddong {
      constructor(x, spd) {
        this.x = x;
        this.y = -16;
        this.spd = spd;
      }

      move() {
        this.y += this.spd;
      }
    }

    const Ddongs = [];
    let t = 0;

    function step() {
      if (key_left === 1 && player_x > 0) player_x -= 4;
      if (key_right === 1 && player_x < canvas.width - 40) player_x += 4;

      t++;
      if (t % 15 === 0) {
        const x = Math.random() * (canvas.width - 32);
        const ddong = new Ddong(x, 4 + Math.random() * 4);
        Ddongs.push(ddong);
      }

      Ddongs.forEach((ddong, index) => {
        ddong.move();
        if (ddong.y >= canvas.height) {
          Ddongs.splice(index, 1);
        }
        if (
          (player_x - ddong.x) * (player_x - ddong.x) +
            (canvas.height - 50 - ddong.y) * (canvas.height - 50 - ddong.y) <=
          16 * 16
        ) {
          // Update highest score if necessary
          if (t > highestScore) {
            localStorage.setItem("highestScore", t); // Save to localStorage
            setHighestScore(t); // Update state
          }
          alert("GAME OVER\nSCORE : " + t);
          Ddongs.splice(index, 1);
          window.location.reload();
        }
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(spr_player, player_x - 16, canvas.height - 50, 32, 32);

      Ddongs.forEach((ddong) => {
        ctx.drawImage(spr_ddong, ddong.x - 16, ddong.y - 16, 32, 32);
      });

      ctx.font = "20px Arial";
      ctx.fillStyle = "#000";
      ctx.fillText("Score: " + t, 10, 30);
    }

    function gameLoop() {
      step();
      draw();
    }

    const interval = setInterval(gameLoop, 1000 / FPS);

    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [highestScore, gameStarted]);

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#d9d3c3",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#000" }}>
          Trash Hunt: 오물피하기 게임
        </h1>
        {!gameStarted && (
          <button
            onClick={() => setGameStarted(true)}
            style={{
              padding: "10px 20px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              backgroundColor: "#6b4f3f",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            게임 시작
          </button>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <canvas
            ref={canvasRef}
            id="canvas"
            width="400"
            height="700"
            style={{
              display: "block",
              border: "2px solid #8b5e3c",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              marginRight: "20px",
            }}
          ></canvas>
          <div
            style={{
              width: "250px",
              padding: "15px",
              backgroundColor: "#6b4f3f",
              borderRadius: "12px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#d1bfa6",
                marginBottom: "10px",
              }}
            >
              HOW TO PLAY
            </h2>
            <div
              style={{
                backgroundColor: "#d1bfa6",
                padding: "10px",
                borderRadius: "8px",
                fontSize: "0.9rem",
                lineHeight: "1.5",
                color: "#333",
              }}
            >
              <p>
                <strong>조작키 - 방향키</strong>
                <br />
                <br />
                <div style={{ fontWeight: "bold" }}>
                  방향키를 좌우로 움직여 하늘에서 떨어지는 오물풍선을 피해보세요.
                  집중력과 빠른 반응이 필요하니, 신중하게 움직이며 최대한 오래
                  살아남아 보세요. 오물풍선을 피하며 시간을 끌수록 점수가
                  높아지니, 최고 점수를 기록하는 데 도전해보세요!
                </div>
              </p>
            </div>
            <p
              style={{
                fontSize: "1.0rem",
                fontWeight: "bold",
                color: "#d1bfa6",
                marginBottom: "10px",
              }}
            >
              내 최고 점수 :{" "}
              <span style={{ fontWeight: "bold" }}>{highestScore}점</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GamePage;
