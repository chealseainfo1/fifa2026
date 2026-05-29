(function () {
  const script = document.createElement("script");
  script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
  script.async = true;

  script.onload = () => {
    window.botpressWebChat.init({
      botId: "YOUR_BOT_ID",
      clientId: "YOUR_CLIENT_ID",
      hostUrl: "https://cdn.botpress.cloud/webchat/v1",
      messagingUrl: "https://messaging.botpress.cloud",
      botName: "FIFA 2026 Analyst",
      themeColor: "#0d6efd",
      showPoweredBy: false
    });
  };

  document.head.appendChild(script);
})();