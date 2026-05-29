(function () {
  const script = document.createElement("script");
  script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
  script.async = true;

  script.onload = () => {
    window.botpressWebChat.init({
      botId: "kb_01KST83XZZW9VM0ATYZ9ETW6NT",
      clientId: "YOUR_CLIENT_ID",
      hostUrl: "https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/05/29/13/20260529133940-F5A1YCX8.json",
      messagingUrl: "https://messaging.botpress.cloud",
      botName: "FIFA 2026 Analyst",
      themeColor: "#0d6efd",
      showPoweredBy: false
    });
  };

  document.head.appendChild(script);
})();
