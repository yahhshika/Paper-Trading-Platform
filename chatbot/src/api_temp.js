import axios from "axios";

const API_URL = "https://chatbot-lzak.onrender.com/chat";
// change /chat if your endpoint is something else

export async function sendMessage(message) {
  try {
    const response = await axios.post(API_URL, {
      message: message,
    });

    return response.data.reply;  // reply from backend
  } catch (error) {
    console.error("API Error:", error);
    return "Server is not responding. Please try again!";
  }
}