const PROXY_CONFIG = [
  {
    context: ["/my", "/many", "/endpoints", "/i", "/need", "/to", "/proxy"],
    target: "https://localhost:8000/",
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
