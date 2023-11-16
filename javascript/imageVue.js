let Image1 = "../images/Image1.jpg";
let Image2 = "../images/Image2.jpg";
let Image3 = "../images/Image3.jpg";
let Image4 = "../images/Image4.jpg";
let Image5 = "../images/Image5.jpg";

const myImages = [Image1, Image2, Image3, Image4, Image5]

Vue.createApp({
  data() {
    return {
      myImages,
      image1Description: 'A temple in Chengdu, China',
      image2Description: 'Somewhere near Boston(Sorry, I forgot the name)',
      image3Description: 'Sunset of Middlesex, Massachusetts',
      image4Description: 'Mayday\'s Concert in Shanghai, China',
      image5Description: 'The Sun Yat-sen Mausoleum in Nanjing, China',
      pic1Enlarged: false,
      pic2Enlarged: false,
      pic3Enlarged: false,
      pic4Enlarged: false,
      pic5Enlarged: false
    }
  },
  methods: {
    enlargeImage1() {
      this.pic1Enlarged = true;
    },
    resetImage1() {
      this.pic1Enlarged = false;
    },
    enlargeImage2() {
      this.pic2Enlarged = true;
    },
    resetImage2() {
      this.pic2Enlarged = false;
    },
    enlargeImage3() {
      this.pic3Enlarged = true;
    },
    resetImage3() {
      this.pic3Enlarged = false;
    },
    enlargeImage4() {
      this.pic4Enlarged = true;
    },
    resetImage4() {
      this.pic4Enlarged = false;
    },
    enlargeImage5() {
      this.pic5Enlarged = true;
    },
    resetImage5() {
      this.pic5Enlarged = false;
    },
  },
  template: `<div class="gallery">
                  <img :class="{
                      'pic1Size': true,
                      'pic1EnlargedSize': pic1Enlarged,
                    }"
                    @mouseover="enlargeImage1"
                    @mouseout="resetImage1" 
                    alt="image taken from somewhere in Chengdu, China"
                    :src="myImages[0]">
                  <div class="desc">{{image1Description}}</div>
              </div>
              <div class="gallery">
                  <img :class="{
                      'pic2Size': true,
                      'pic2EnlargedSize': pic2Enlarged,
                    }"
                    @mouseover="enlargeImage2"
                    @mouseout="resetImage2" 
                    alt="image taken from Somewhere near Boston"
                    :src="myImages[1]">
                  <div class="desc">{{image2Description}}</div>
              </div>
              <div class="gallery">
                  <img :class="{
                      'pic3Size': true,
                      'pic3EnlargedSize': pic3Enlarged,
                    }"
                    @mouseover="enlargeImage3"
                    @mouseout="resetImage3" 
                    alt="image taken from Sunset of Middlesex"
                    :src="myImages[2]">
                  <div class="desc">{{image3Description}}</div>
              </div>
              <div class="gallery">
                  <img :class="{
                      'pic4Size': true,
                      'pic4EnlargedSize': pic4Enlarged,
                    }"
                    @mouseover="enlargeImage4"
                    @mouseout="resetImage4" 
                    alt="image taken from Mayday's Concert in Shanghai, China"
                    :src="myImages[3]">
                  <div class="desc">{{image4Description}}</div>
              </div>
              <div class="gallery">
                  <img :class="{
                      'pic5Size': true,
                      'pic5EnlargedSize': pic5Enlarged,
                    }"
                    @mouseover="enlargeImage5"
                    @mouseout="resetImage5" 
                    alt="image taken from pic World showing a poster promoting Merlin's magic"
                    :src="myImages[4]">
                  <div class="desc">{{image5Description}}</div>
              </div>`
}).mount('#skills_vue')