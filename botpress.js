(function () {
  const script = document.createElement("script");
  script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
  script.async = true;

  script.onload = () => {
    window.botpressWebChat.init({
      botId: "e6fd478c-6ebf-4c61-9a3f-cfc129897004",
      clientId: "wkspace_01KSSZA5YSECHEQZB6E1W6SP7B",
      hostUrl: "https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/05/29/13/20260529133940-F5A1YCX8.json",
      messagingUrl: "https://messaging.botpress.cloud",
      botName: "FIFA 2026 Analyst",
      themeColor: "#0d6efd",
      showPoweredBy: false
    });
  };

  document.head.appendChild(script);
})();
