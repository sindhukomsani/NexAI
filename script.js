const categories = [
    "ALL", "Chatbot AI", "Image Generation AI", "Video Generation AI", 
    "Video Editing AI", "Voice Enhancer AI", "Creative AI", "Music Generation AI", "Content Writing AI"
];

const tools = [
    { name: "ChatGPT", category: "Chatbot AI", description: "Conversational AI.", 
      link: "https://chat.openai.com/", learnMore: "https://en.wikipedia.org/wiki/ChatGPT", image: "chatgpt.jpg" },
    { name: "DALL-E", category: "Image Generation AI", description: "AI image generation.", 
      link: "https://openai.com/dall-e", learnMore: "https://en.wikipedia.org/wiki/DALL-E" },
    { name: "MidJourney", category: "Creative AI", description: "Creative AI.", 
      link: "https://www.midjourney.com/", learnMore: "https://blog.trello.com/midjourney-ai" },
    { name: "Stable Diffusion", category: "Image Generation AI", description: "Image synthesis AI.", 
      link: "https://stability.ai/", learnMore: "https://en.wikipedia.org/wiki/Stable_Diffusion" },
    { name: "Jasper", category: "Content Writing AI", description: "AI content creator.", 
      link: "https://www.jasper.ai", learnMore: "https://www.jasper.ai/blog/what-is-jasper" },
    { name: "Synthesia", category: "Video Generation AI", description: "AI video creation.", 
      link: "https://www.synthesia.io", learnMore: "https://www.synthesia.io/blog/what-is-synthesia" },
    { name: "Pictory", category: "Video Generation AI", description: "AI video editing.", 
      link: "https://www.pictory.ai", learnMore: "https://www.pictory.ai/blog" },
    { name: "Lumen5", category: "Video Generation AI", description: "AI video creation.", 
      link: "https://www.lumen5.com", learnMore: "https://www.lumen5.com/blog" },
    { name: "Descript", category: "Video Editing AI", description: "AI video editing.", 
      link: "https://www.descript.com", learnMore: "https://www.descript.com/blog" },
    { name: "Veed.io", category: "Video Editing AI", description: "AI video editing.", 
      link: "https://www.veed.io", learnMore: "https://www.veed.io/blog" },
    { name: "RunwayML", category: "Creative AI", description: "Creative AI.", 
      link: "https://www.runwayml.com", learnMore: "https://runwayml.com/blog" },
    { name: "Rev", category: "Voice Enhancer AI", description: "AI voice transcription.", 
      link: "https://www.rev.com", learnMore: "https://www.rev.com/blog" },
    { name: "Otter.ai", category: "Voice Enhancer AI", description: "AI meeting assistant.", 
      link: "https://www.otter.ai", learnMore: "https://otter.ai/blog" },
    { name: "Sonix", category: "Voice Enhancer AI", description: "AI transcription.", 
      link: "https://www.sonix.ai", learnMore: "https://www.sonix.ai/blog" },
    { name: "Whisper", category: "Voice Enhancer AI", description: "AI voice transcription.", 
      link: "https://www.whisper.ai", learnMore: "https://en.wikipedia.org/wiki/Whisper" },
    { name: "Copy.ai", category: "Content Writing AI", description: "AI copywriting.", 
      link: "https://www.copy.ai", learnMore: "https://www.copy.ai/blog" },
    { name: "Writesonic", category: "Content Writing AI", description: "AI writing assistant.", 
      link: "https://www.writesonic.com", learnMore: "https://writesonic.com/blog" },
    { name: "Wordtune", category: "Content Writing AI", description: "AI writing assistant.", 
      link: "https://www.wordtune.com", learnMore: "https://www.wordtune.com/blog" },
    { name: "Grammarly", category: "Content Writing AI", description: "AI grammar check.", 
      link: "https://www.grammarly.com", learnMore: "https://www.grammarly.com/blog" },
    { name: "Aiva", category: "Music Generation AI", description: "AI music creation.", 
      link: "https://www.aiva.ai", learnMore: "https://aiva.ai/blog" },
    { name: "Jukedeck", category: "Music Generation AI", description: "AI music generator.", 
      link: "https://www.jukedeck.com", learnMore: "https://jukedeck.com/blog" },
    { name: "Amper Music", category: "Music Generation AI", description: "AI music composition.", 
      link: "https://www.ampermusic.com", learnMore: "https://www.ampermusic.com/blog" },
    { name: "Soundraw", category: "Music Generation AI", description: "AI music creation.", 
      link: "https://soundraw.io/", learnMore: "https://soundraw.io/blog" },
    { name: "DoodleMaker", category: "Creative AI", description: "AI doodle maker.", 
      link: "https://doodlemaker.com/", learnMore: "https://doodlemaker.com/blog" }
];

const categoriesList = document.getElementById("categories-list");
const toolContainer = document.getElementById("tool-container");

// Populate categories
categories.forEach(category => {
    const li = document.createElement("li");
    li.textContent = category;
    li.onclick = () => filterTools(category);
    categoriesList.appendChild(li);
});

// Populate tools
function displayTools(filteredTools) {
    toolContainer.innerHTML = ""; // Clear previous tools
    filteredTools.forEach(tool => {
        const toolCard = document.createElement("div");
        toolCard.className = "tool-card";
        toolCard.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a href="${tool.learnMore}" target="_blank">Learn More</a>
            <a href="${tool.link}" target="_blank">Website</a>
        `;
        toolContainer.appendChild(toolCard);
    });
}

// Filter tools by category
function filterTools(category) {
    const filteredTools = category === "ALL" ? tools : tools.filter(tool => tool.category === category);
    displayTools(filteredTools);
}

// Display all tools initially
displayTools(tools);
