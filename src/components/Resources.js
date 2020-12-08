import React from "react";

function Resources(props) {

  return (
    <div>
      <img src={require("../img/mlh-trust-badge-2021-white.png")} alt="mlh badge" class="mlh" width="120px"/> 
      <h1>RESOURCES</h1>
      {/* mlh code of conduct */}
      <div class="qanda">
        <div class="question">
          <a class="code-of-conduct" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">mlh code of conduct</a>
        </div>
        <div class="answer">
          <a class="code-of-conduct" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">please read through this before participating in our event!</a>
        </div>
      </div>

      {/* to survive on this shore */}
      <div class="qanda">
        <div class="question">
          <a class="code-of-conduct" href="https://www.tosurviveonthisshore.com/" target="_blank">to survive on this shore</a>
        </div>
        <div class="answer">
          <a class="code-of-conduct" href="https://www.tosurviveonthisshore.com/" target="_blank">
            photographs and interviews with transgender and gender nonconforming older adults: a project by jess t. dugan and vanessa fabbre
          </a>
        </div>
      </div>

      {/* creating a trans inclusive workspace */}
      <div class="qanda">
        <div class="question">
          <a class="code-of-conduct" href="https://hbr.org/2020/03/creating-a-trans-inclusive-workplace" target="_blank">creating a trans inclusive workspace</a>
        </div>
        <div class="answer">
          <a class="code-of-conduct" href="https://hbr.org/2020/03/creating-a-trans-inclusive-workplace" target="_blank">
            only when people feel totally authentic and connected with their organizations can they achieve their full potential at work!
          </a>
        </div>
      </div>

      {/* te reo māori speech recognition: a story of community, trust, and sovereignty */}
      <div class="qanda">
        <div class="question">
          <a class="code-of-conduct" href="https://www.youtube.com/watch?v=sGQy0r_icWc" target="_blank">te reo māori speech recognition: a story of community, trust, and sovereignty</a>
        </div>
        <div class="answer">
          <a class="code-of-conduct" href="https://www.youtube.com/watch?v=sGQy0r_icWc" target="_blank">
            keoni mahelona discusses the collection of 300+ hours of labeled speech corpus which enabled the creation of an automatic speech recognizer using mozilla’s deepspeech. they now use it to accelerate the transcription of native speaker archives, using tech to create systems that preserve indigenous languages.
          </a>
        </div>
      </div>

      {/* whose land */}
      <div class="qanda">
        <div class="question">
          <a class="code-of-conduct" href="https://www.whose.land/en/" target="_blank">whose land</a>
        </div>
        <div class="answer">
          <a class="code-of-conduct" href="https://www.whose.land/en/" target="_blank">
            since we're all going to be in different places for qwer hacks this year, take a moment to figure out and acknowledge the land you're on:)
          </a>
        </div>
      </div>
    </div>



  );

}

export default Resources;