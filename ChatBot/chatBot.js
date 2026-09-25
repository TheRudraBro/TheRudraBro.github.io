(function () {
  const chatToggle = document.getElementById("chat-toggle");
  const chatWindow = document.getElementById("chat-window");
  const closeChat = document.getElementById("close-chat");
  const chatInput = document.getElementById("chat-input");
  const sendChat = document.getElementById("send-chat");
  const chatMessages = document.getElementById("chat-messages");

  let chatState = "normal";
  let clientData = {};

  // Window Toggle
  function toggleChat() {
    if (
      chatWindow.style.display === "none" ||
      chatWindow.style.display === ""
    ) {
      chatWindow.style.display = "flex";
      // Jokhon first time open hobe, tokhon default option dekhabe
      if (chatMessages.children.length === 1) {
        showQuickReplies([
          "Show me the work",
          "What can he build?",
          "How much does a site cost?",
          "I want to hire him",
        ]);
      }
    } else {
      chatWindow.style.display = "none";
    }
  }

  chatToggle.addEventListener("click", toggleChat);
  closeChat.addEventListener(
    "click",
    () => (chatWindow.style.display = "none"),
  );

  // Add Message Function
  function addMessage(text, isUser = false) {
    const msgDiv = document.createElement("div");
    msgDiv.className = isUser
      ? "bg-[#10a373] border border-emerald-400/30 rounded-xl rounded-tr-none p-3 text-sm text-white self-end max-w-[85%] leading-relaxed mt-2"
      : "bg-white/5 border border-emerald-400/10 rounded-xl rounded-tl-none p-3 text-sm text-white/90 self-start max-w-[85%] leading-relaxed mt-2";
    msgDiv.innerHTML = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Show Dynamic Quick Replies (Auto Options)
  function showQuickReplies(options) {
    const repliesContainer = document.createElement("div");
    repliesContainer.className =
      "flex flex-wrap gap-2 mt-2 mb-2 quick-replies-container";

    options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className =
        "text-xs border border-emerald-400/40 rounded-full px-3 py-1.5 text-emerald-300 hover:bg-emerald-500/20 transition cursor-pointer bg-black/40";
      btn.innerText = opt;
      btn.onclick = function () {
        chatInput.value = opt;
        handleSendMessage();
      };
      repliesContainer.appendChild(btn);
    });

    chatMessages.appendChild(repliesContainer);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Remove Old Quick Replies
  function clearOldReplies() {
    document
      .querySelectorAll(".quick-replies-container")
      .forEach((el) => el.remove());
  }

  function showTyping() {
    const typingDiv = document.createElement("div");
    typingDiv.id = "typing-indicator";
    typingDiv.className =
      "bg-white/5 border border-emerald-400/10 rounded-xl rounded-tl-none p-3 text-sm text-white/50 self-start max-w-[85%] flex gap-1 items-center mt-2";
    typingDiv.innerHTML =
      '<span class="w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-bounce"></span><span class="w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-bounce" style="animation-delay: 0.1s"></span><span class="w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>';
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeTyping() {
    const indicator = document.getElementById("typing-indicator");
    if (indicator) indicator.remove();
  }

  // Bot Smart Logic & Contextual Answers
  function processBotResponse(text) {
    const lowerText = text.toLowerCase();

    if (
      lowerText.includes("show me the work") ||
      lowerText.includes("project")
    ) {
      addMessage("Sure! Let me take you to his projects section. 🚀");
      setTimeout(() => {
        const target = document.getElementById("projects");
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 600);
      // Related questions after showing projects
      setTimeout(
        () =>
          showQuickReplies([
            "What skills does he have?",
            "How much does a site cost?",
            "I want to hire him",
          ]),
        800,
      );
    } else if (
      lowerText.includes("cost") ||
      lowerText.includes("price") ||
      lowerText.includes("how much")
    ) {
      addMessage(
        "Projects usually depend on the scope, features, and timeline. Would you like a custom quote?",
      );
      // Related questions after price
      showQuickReplies([
        "Yes, I want to hire him",
        "Show me the work",
        "What can he build?",
      ]);
    } else if (lowerText.includes("build") || lowerText.includes("skill")) {
      addMessage(
        "Rudra builds E-commerce platforms, Portfolios, and SaaS apps using React, Node.js, and Python. Scrolling to his skills now!",
      );
      setTimeout(() => {
        const target = document.getElementById("experience");
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 600);
      // Related questions after skills
      setTimeout(
        () =>
          showQuickReplies([
            "Show me the work",
            "How much does a site cost?",
            "I want to hire him",
          ]),
        800,
      );
    } else if (
      lowerText.includes("hire") ||
      lowerText.includes("contact") ||
      lowerText.includes("yes")
    ) {
      chatState = "ask_name";
      addMessage(
        "Awesome! Rudra would love to work with you. First, what's your full name?",
      );
      // No quick replies here, user needs to type their name
    } else {
      // Fallback for "Hi", "Hello" or unknown messages
      addMessage(
        "Hello there! 👋 That's a great pleasure to hear from you! <br><br> I am Rudra's AI Assistant. I can help you explore Rudra's portfolio. What would you like to know?",
      );
      showQuickReplies([
        "Show me the work",
        "What can he build?",
        "How much does a site cost?",
        "I want to hire him",
      ]);
    }
  }

  // Lead Generation Flow
  function handleLeadFlow(text) {
    if (chatState === "ask_name") {
      clientData.name = text;
      chatState = "ask_email";
      addMessage(
        `Nice to meet you, ${clientData.name}! What's the best email address to reach you at?`,
      );
    } else if (chatState === "ask_email") {
      clientData.email = text;
      chatState = "ask_budget";
      addMessage(
        "Got it. Finally, roughly what is your estimated budget for this project? (e.g. $1000-$5000)",
      );
    } else if (chatState === "ask_budget") {
      clientData.budget = text;
      chatState = "normal";
      addMessage(
        `Perfect! I've noted down your details. Rudra will contact you at <b>${clientData.email}</b> soon. Have a great day!`,
      );
      console.log("New Client Lead Collected:", clientData);
      // Flow complete hobar por abar default options dekhano
      setTimeout(
        () =>
          showQuickReplies([
            "Show me the work",
            "What can he build?",
            "How much does a site cost?",
          ]),
        1000,
      );
    }
  }

  // Main Send Function
  function handleSendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    chatInput.value = "";
    clearOldReplies(); // Aager button gulo muche felbe jeno screen clatter na hoy

    addMessage(text, true);
    showTyping();

    setTimeout(() => {
      removeTyping();
      if (chatState !== "normal") {
        handleLeadFlow(text);
      } else {
        processBotResponse(text);
      }
    }, 800);
  }

  sendChat.addEventListener("click", handleSendMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSendMessage();
  });
})();
