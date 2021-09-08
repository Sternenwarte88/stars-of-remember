/* 
Starfield code from https://codepen.io/Jenbo/pen/pgmZwB and costumized for this application

useRef to get a reference to this canvas html element

useEffect draws all stars AFTER building up this webpage
*/

import React, { useRef, useEffect } from "react";
import classes from "./style.module.css";

export default function Starfield() {
  const canvasRef = useRef();
  useEffect(() => {
    function Star(x, y, r, color) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.rChange = 0.015;
      // this.vx = Math.floor(Math.random()*4+1);
      // this.vy = Math.floor(Math.random()*4+1);
      this.color = color;
    }

    Star.prototype = {
      constructor: Star,
      render: function () {
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        context.shadowBlur = 8;
        context.shadowColor = "white";
        context.fillStyle = this.color;
        context.fill();
      },
      update: function () {
        if (this.r > 2 || this.r < 0.8) {
          this.rChange = -this.rChange;
        }
        this.r += this.rChange;
      },
    };

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const C_WIDTH = (canvas.width = document.body.offsetWidth);
    const C_HEIGHT = (canvas.height = document.body.offsetHeight);

    function randomColor() {
      const arrColors = ["ffffff", "ffecd3", "bfcfff"];
      return "#" + arrColors[Math.floor(Math.random() * 3)];
    }

    const arrStars = [];
    for (let i = 0; i < 400; i++) {
      const randX = Math.floor(Math.random() * C_WIDTH + 1);
      const randY = Math.floor(Math.random() * C_HEIGHT + 1);
      const randR = Math.random() * 1.7 + 0.5;

      const star = new Star(randX, randY, randR, randomColor());
      arrStars.push(star);
    }
    function update() {
      for (let i = 0; i < arrStars.length; i++) {
        arrStars[i].update();
      }
    }
    function animate() {
      update();
      /*
            Remove comments below these for a cool trailing effect & comment
            out the context.clearRect.
          */
      //context.fillStyle = "rgba(255, 255, 255, 0.1)";
      //context.fillRect(0, 0, C_WIDTH, C_HEIGHT);
      context.clearRect(0, 0, C_WIDTH, C_HEIGHT);
      for (let i = 0; i < arrStars.length; i++) {
        arrStars[i].render();
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <>
      <canvas className={classes.canvas} ref={canvasRef}></canvas>
    </>
  );
}
