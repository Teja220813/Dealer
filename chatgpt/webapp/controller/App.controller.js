sap.ui.define(
  [
    "sap/ui/core/mvc/Controller"
  ],
  function (BaseController) {
    "use strict";

    return BaseController.extend("chatgpt.controller.App", {
      onInit: function () {
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
            prompt:t_prompt,
            model:"text-davinci-003",
            max_tokens: 2000,
            temperature:0.7,
            top_p:1,
            frequency_penalty:0,
            presence_penalty:0
          })
        }).then(response => response.json())
          .then(data => {
            that.byId("idText").setText(data.choices[0].text);
          });
      }
    });
  });

