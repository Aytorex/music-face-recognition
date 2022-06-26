<template>
  <video id="video" width="720" height="560" autoplay muted></video>
</template>

<script>
import * as faceapi from '@vladmandic/face-api'
import Swal from 'sweetalert2'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Webcam",
  data() {
    return {}
  },
  methods: {
    /**
     * Cette méthode permet de récupérer les modèles pré-entrainés de face-api.js
     */
    loadModels() {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('../models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('../models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('../models'),
        faceapi.nets.faceExpressionNet.loadFromUri('../models')
      ]).then(this.startVideo)
    },
    /**
     * Cette méthode permet de démarrer la vidéos, et gère toute la partie reconaissance faciale
     */
    startVideo() {
      const constraints = {audio: true, video: {width: 720, height: 560}}; // Défini la taille de la vidéo
      navigator.mediaDevices.getUserMedia(constraints)
          .then(async function (mediaStream) {
            const video = document.getElementById('video')
            video.srcObject = mediaStream;
            video.onloadedmetadata = function () {
              video.play();
            };

            // On créé ici les variables qui génèrent l'audio
            const kick = new Audio(require('../sounds/Cymatics - Lofi Kick 1 - C.wav'));
            const clap = new Audio(require('../sounds/Cymatics - Lofi Clap 3.wav'));
            const hat = new Audio(require('../sounds/Cymatics - Lofi Open Hihat 2.wav'))
            const snare = new Audio(require('../sounds/Cymatics - Lofi Snare 1 - C.wav'))
            const rickroll = new Audio(require('../sounds/rickroll.wav'))

            // Une fois que la vidéo joue, on ajoute un canvas sur celle ci qui affichera les différents points de
            // détection sur le visage de l'utilisateur
            video.addEventListener('play', () => {
              const canvas = faceapi.createCanvasFromMedia(video)
              document.body.append(canvas)
              const displaySize = {width: video.width, height: video.height}
              faceapi.matchDimensions(canvas, displaySize)
              setInterval(async () => {
                const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
                const resizedDetections = faceapi.resizeResults(detections, displaySize)

                if (resizedDetections.length !== 0) {
                  const angle = resizedDetections[0].angle
                  const expressions = resizedDetections[0].expressions

                  // Si l'utilisateur est surpris, rick roll !
                  if (expressions.surprised > 0.7) {
                    await rickroll.play()
                    // eslint-disable-next-line no-unused-vars
                    let timerInterval;
                    Swal.fire({
                      title: 'YOU GOT RICK ROLLED',
                      width: 600,
                      padding: '3em',
                      timer: 26000,
                      timerProgressBar: true,
                      color: '#716add',
                      background: '#fff',
                      backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/rickroll.gif")
                      center
                      repeat
                    `,
                    })
                    // Sinon, jukebox avec son visage
                  } else {
                    if (rickroll.paused) {
                      if (angle.roll > 0.3) {
                        // console.log('roll right')
                        await kick.play()
                      }
                      if (angle.roll < -0.3) {
                        // console.log('roll left')
                        await clap.play()
                      }
                      if (angle.pitch > 0.3 && angle.roll < 0.3) {
                        // console.log("pitch right")
                        await hat.play();
                      }
                      if (angle.pitch < -0.2 && angle.roll > -0.2) {
                        // console.log("pitch left")
                        await snare.play();
                      }
                    }
                  }
                }

                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
                faceapi.draw.drawDetections(canvas, resizedDetections)
                faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
                // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
              }, 450)
            })
          })
    },
  },
  mounted() {
    this.loadModels();

  }
}
</script>

<style scoped>
</style>