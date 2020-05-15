import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const imageContainer = document.querySelector('.capture');
const downloadButton = document.querySelector('#downloadButton');
const topicInput = document.querySelector('#classTopic');
const topicContainer = document.querySelector('.classTitle');

topicInput.onchange = (e) => {
  const uptadatedValue = e.currentTarget.value;
  topicContainer.innerHTML = uptadatedValue;
}

const options = {
  windowWidth: 1280,
  windowHeight: 720,
}



downloadButton.addEventListener('click', () => {
  html2canvas(imageContainer, options).then(canvas => {
    canvas.toBlob(function(blob){
      window.saveAs(blob, 'imagen.png');
    });
  });

})
