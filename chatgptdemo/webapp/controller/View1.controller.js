sap.ui.define([
  "sap/ui/core/mvc/Controller"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("chatgptdemo.controller.View1", {
      onInit: function () {
        this.bTextToSpeechSupported = false;
        this.bSpeechInProgress = false;
        this.oSpeechRecognizer = null
        this.oSpeechSynthesisUtterance = null;
        this.oVoices = null;
        if ("webkitSpeechRecognition" in window) {
          debugger;
        } else {
          debugger;
          //speech to text not supported
          //   lblSpeak.style.display = "none";
        }

        if ("speechSynthesis" in window) {
          debugger;
          this.bTextToSpeechSupported = true;
          
                  speechSynthesis.onvoiceschanged = function () {
                      this.oVoices = window.speechSynthesis.getVoices();
                      
                  };
        }

      },



      TextToSpeech: function (s) {
        var selectcbx=this.getView().byId("_IDGenCheckBox1")
        if (this.bTextToSpeechSupported == false) return;
       var oVoices1 = window.speechSynthesis.getVoices();
       this.oSpeechSynthesisUtterance = new SpeechSynthesisUtterance();

       
          var sVoice = "0";
          if (sVoice != "") {
            this.oSpeechSynthesisUtterance.voice = oVoices1[parseInt(sVoice)];
          }
        
/*
        this.oSpeechSynthesisUtterance.onend = function () {
          //finished talking - can now listen
          if (this.oSpeechRecognizer && selectcbx.getchecked) {
            debugger;
            this.oSpeechRecognizer.start();
          }
        }

        if (this.oSpeechRecognizer && selectcbx.getchecked) {
          //do not listen to yourself when talking
          this.oSpeechRecognizer.stop();
        }
        */

        this.oSpeechSynthesisUtterance.lang = "en-US";
        this.oSpeechSynthesisUtterance.text = s;
        //Uncaught (in promise) Error: A listener indicated an 
        //asynchronous response by returning true, but the message channel closed 
        window.speechSynthesis.speak(this.oSpeechSynthesisUtterance);
      },

      onSpeak: function (oEvent) {
        debugger;
        if (oEvent.getParameter("selected")) {
          alert("Speak successfull")
        } else {
          alert("Please select speak")
        }



      },

      onMute: function (oEvent) {
        if (oEvent.getParameter("selected")) {
          alert("Mute successfull")
        } else {
          alert("Please select mute")
        }

      },


      onPressGPT: function () {
        var that = this;
        var API_KEY = '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';
        var t_prompt = this.byId("idInput").getValue();
        fetch('https://api.openai.com/v1/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + API_KEY
          },

          body: JSON.stringify({
            prompt: t_prompt,
            model: "text-davinci-003",
            max_tokens: 2000,
            temperature: 0.7,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
          })
        }).then(response => response.json())
          .then(data => {
            var ans = data.choices[0].text;
            that.byId("idText").setText(ans);
            that.TextToSpeech(ans);
          });
      }
    });
  });
