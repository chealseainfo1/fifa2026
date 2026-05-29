(function () {
  const script = document.createElement("script");
  script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
  script.async = true;

  script.onload = function () {
    window.botpressWebChat.init({
      botId: "e6fd478c-6ebf-4c61-9a3f-cfc129897004",
      clientId: "wkspace_01KSSZA5YSECHEQZB6E1W6SP7B",

      hostUrl: "https://cdn.botpress.cloud/webchat/v1",
      messagingUrl: "https://messaging.botpress.cloud",

      botName: "FIFA 2026 Analyst",
      themeColor: "#0d6efd",
      showPoweredBy: false,

      enableReset: true,
      showConversationsButton: true,
      disableAnimations: false
    });
  };

  document.head.appendChild(script);
})();
