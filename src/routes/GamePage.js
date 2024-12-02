import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header/Header";
import styles from "./GamePage.styles";

function GamePage() {
  const canvasRef = useRef(null);
  const [highestScore, setHighestScore] = useState(
    parseInt(localStorage.getItem("highestScore") || "0")
  );
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (!gameStarted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const FPS = 60;

    let player_x = 180;
    let key_left = 0;
    let key_right = 0;

    const spr_player = new Image();
    const spr_ddong = new Image();
    spr_player.src = "/player.png";
    spr_ddong.src = "/ddong.png";

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
          if (t > highestScore) {
            localStorage.setItem("highestScore", t);
            setHighestScore(t);
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
      <div style={styles.pageContainer}>
        <h1 style={styles.title}>Trash Hunt: 오물피하기 게임</h1>
        <div style={styles.gameArea}>
          <canvas
            ref={canvasRef}
            id="canvas"
            width="400"
            height="700"
            style={styles.gameCanvas}
          ></canvas>
          <div style={styles.infoContainer}>
            <h2 style={styles.infoTitle}>HOW TO PLAY</h2>
            <div style={styles.infoBox}>
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
            <p style={styles.highestScore}>
              내 최고 점수 : <span>{highestScore}점</span>
            </p>
            {!gameStarted && (
              <button
                onClick={() => setGameStarted(true)}
                style={styles.startButton}
              >
                게임 시작
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default GamePage;
