
//         virtual code 

let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "hi-GB";
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  window.speechSynthesis.cancel();
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning");
  } else if (hours >= 12 && hours < 16) {
    speak("Good Afternoon");
  } else {
    speak("Good Evening");
  }
}

window.addEventListener("load", () => {
   wishMe();
});

let speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

if (!speechRecognition) {
  alert("Your browser does not support speech recognition.");
} else {
  let recognition = new speechRecognition();
  recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
  };

  recognition.onspeechend = () => {
    recognition.stop();
    btn.style.display = "flex";
    voice.style.display = "none";
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    btn.style.display = "flex";
    voice.style.display = "none";
    speak("I couldn't understand you, please try again.");
  };

  recognition.onnomatch = () => {
    btn.style.display = "flex";
    voice.style.display = "none";
    speak("No match found, please try again.");
  };

  btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
  });
}



function takeCommand(message) {
  btn.style.display = "flex";
  voice.style.display = "none";

  if (message.includes("hello") || message.includes("hey")|| message.includes("hii")) {
    speak("Hello Sir,  How can I assist you today");
  } else if (message.includes("who are you")|| message.includes("hu r u") || message.includes("who created you")||message.includes("aap kaun ho")) {
    speak("I am a Virtual Assistant, created by Faizan sir.");
  } 
  else if (message.includes("how are you")){
    speak("I am fine thankyou , what about you")
  }
  else if (message.includes("tumhara din kya hai")||message.includes("hamara din kya hai")){
    speak("Islam")
  }
  else if (message.includes("hamare nabi kaun hai")||message.includes("who is our prophet")){
    speak("Hazrat Muhammad Mustafa Sallallahu Alaihi Wasallam")
  }
  else if (message.includes("hamara rab kaun hai")||message.includes("hamara khuda kaun hai")){
    speak("Hamara rab Allah hai")
  }
  else if (message.includes("qabar mein puche jaane wale teen sawal")||message.includes("kabra mein puche jaane wale teen sawal")){
    speak("First tumhara din kya  Second tumhara rab kon hai third tumhare nabi kon hai ")
  }

  else if(message.includes("what's your name") || message.includes("what is your name"))
  {
    speak("My name is Faiz , I am a virtual Assistant")
  }
  else if (message.includes("thank you")||message.includes("thank")||message.includes("thanks")){
    speak("You're welcome, Koi bhi madad chahiye ho, bas batadijiyega. Allah Hafiz!")
  }
  // Fixed the "Assalamualikum" condition
  else if (
    message.includes("assalamualikum") ||  message.includes("assalamu alaikum") ||   message.includes("salam walekum") )
  {
    speak("Waalikum assalaam warahmatullahi wabarkatuh");
  } 
  // Added proper handling for "Khairiyat"
  else if (message.includes("khairiyat")) {
    speak("Alhamdulillah, Aap kaise hain?");
  } 
  else if(message.includes("alhamdulillah")||message.includes("main theek hun"))
  {
    speak("Mashallah!  Allah aapko hamesha khush rakhe aur sehatmand rakhe.")
  }
  else if (message.includes("kya kar rahe ho")||message.includes("what are you doing")) {
    speak("Main bas yahan aapke sawalon ka jawab dene aur madad karne ke liye hoon.?");
  } 
  else if (message.includes("play music") || message.includes("music") || message.includes("can you play a song for me")) {
    speak("Playing a song for you.");
    window.open("https://youtu.be/clNXfAcaDrM?si=4k5ORntJ-uF2ikHb", "_blank");
  }
  else if (message.includes("play surah") || message.includes("surah ar-rahman") || message.includes("play for me asura")||message.includes("can you play asura h for me")) {
    speak("Playing a surah for you.");
    window.open("https://youtu.be/PY9jlnh4iUY?si=CK6wSg5uX6AqZtvV", "_blank");
  }
 else if (message.includes("ayatul kursi") || message.includes("can you play Aytul Kursi")) {
  window.open("https://youtu.be/Dai9lZ4Sne0?si=xpkFMgTmLx21qiZt", "_blank");
}
  
  else if (message.includes("open youtube")) {
    speak("Opening YouTube");
    window.open("https://www.youtube.com", "_blank");
  } else if (message.includes("open google")) {
    speak("Opening Google");
    window.open("https://www.google.com", "_blank");
  } else if (message.includes("open facebook")) {
    speak("Opening Facebook");
    window.open("https://www.facebook.com", "_blank");
  } else if (message.includes("open instagram")) {
    speak("Opening Instagram");
    window.open("https://www.instagram.com", "_blank");
  } else if (message.includes("open Chat Gpt") || message.includes("chat gpt")) {
    speak("Opening ChatGPT");
    window.open("https://chat.openai.com/", "_blank");
  } else if (message.includes("open calculator")) {
    speak("Opening Calculator");
    window.open("calculator://");
  }
  else if (message.includes("open whatsApp")|| message.includes("whatsapp")) {
    speak("Opening whatsApp");
    window.open("https://www.whatsapp.com/");
  }
  else if (message.includes("time")) {
    let time = new Date().toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
    speak("The time is " + time);
  } else if (message.includes("date")) {
    let date = new Date().toLocaleDateString(undefined,  {
      day: "numeric",
      month: "short",
    });
    speak("Today's date is " + date);
  } else {
    let finalText ="This is what I found on the internet regarding " +message.replace("faiz", "") ||message.replace("faz", "");
    speak(finalText);
    window.open(`https://www.google.com/search?q=${message.replace("faiz", "")}`, "_blank");
  }
}
