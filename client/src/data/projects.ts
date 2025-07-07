export const projects = [
  {
    slug: "sign2speech",
    title: "Sign2Speech System",
    description: "Real-time sign language translator powered by YOLO, Ollama, and TTS.",
    fullDescription: `
      Sign2Speech is an AI-powered real-time communication tool designed to translate sign language gestures into spoken language. 
      The system enhances accessibility for the hearing-impaired and can be used in healthcare, education, and public services.

      🚀 **Technical Pipeline**:
      - **Gesture Detection**: A YOLO-based custom model trained on sign gestures captures hand signs in real-time.
      - **Semantic Understanding**: Ollama (LLM) interprets the recognized sign's context and translates it to natural language.
      - **Speech Generation**: A Text-to-Speech (TTS) module vocalizes the interpreted response.

      🔧 Tools Used: YOLO, OpenCV, Ollama, TTS, Python.
    `,
    technologies: ["YOLO", "Ollama", "OpenCV", "TTS"],
    media: ["/images/projects/sign2speech/s2s.png", "/images/projects/sign2speech/ML-1.png"]
  },
  {
    slug: "human-trait-analyzer",
    title: "Human Trait Analyzer",
    description: "AI system for predicting age, gender, and emotion from facial images.",
    fullDescription: `
      A lightweight yet powerful deep learning pipeline that predicts human demographic and emotional traits based on facial images.
      The system is suitable for applications in marketing analytics, surveillance, and user profiling.

      🧠 **Technical Overview**:
      - **Face Detection**: Uses OpenCV to isolate facial regions in input images.
      - **Trait Classification**: A PyTorch CNN model classifies Age, Gender, and Emotion with high accuracy.
      - **Real-time Capability**: Optimized for edge deployment using FastAPI.

      📊 Accuracy: 94% on real-world datasets.
    `,
    technologies: ["CNN", "PyTorch", "OpenCV"],
    media: ["/images/projects/human-trait/humain-trait.jpg"]
  },
  {
    slug: "virtual-tryon",
    title: "Virtual Try-On System",
    description: "AI-powered virtual fitting room using GANs and computer vision.",
    fullDescription: `
      This Virtual Try-On system allows users to try clothes virtually before buying online, revolutionizing the fashion e-commerce space.

      👗 **Technical Breakdown**:
      - **Human Parsing**: Extracts body parts and pose.
      - **Garment Warping**: GAN-based warping engine adapts clothing to body contours.
      - **Image Generation**: Final composite is generated for visual feedback.

      The solution reduces product return rates and enhances user experience on shopping platforms.
    `,
    technologies: ["GAN", "Fashion AI", "Computer Vision"],
    media: ["/images/projects/Virtual try-on/vt2.png","/images/projects/Virtual try-on/vt3.png"]
  },
  {
    slug: "object-detection-dashboard",
    title: "Object Detection Dashboard",
    description: "Real-time surveillance system for pedestrian and vehicle tracking.",
    fullDescription: `
      A dashboard solution for monitoring pedestrian and vehicle movement using live video feeds. It integrates detection, tracking, and alerting in a real-time web interface.

      📹 **System Flow**:
      - **Detection**: YOLOv8 detects persons and vehicles in real-time.
      - **Tracking**: DeepSORT handles object tracking with unique IDs.
      - **Alerts**: Triggers alerts for specific conditions like line-crossing or motion detection.

      Use Cases: Smart traffic systems, facility surveillance, anomaly detection.
    `,
    technologies: ["YOLO", "FastAPI", "Real-time Processing"],
    media: ["/media/object-detection.jpg"]
  },
  {
    slug: "chatbot-personality",
    title: "AI Chatbot with Personality",
    description: "Dynamic GPT-powered chatbot that adapts tone and persona.",
    fullDescription: `
      A conversational assistant designed for interactive experiences in games and apps. 
      The bot changes its responses based on personality voting and user sentiment.

      💬 **Architecture**:
      - **GPT-based NLU**: Understands context and intent.
      - **Sentiment Analysis**: Adjusts tone (humor, empathy, assertiveness).
      - **Voting Engine**: Users can rate personality traits to influence future conversations.

      Applications: Gaming assistants, emotional companions, brand mascots.
    `,
    technologies: ["GPT", "NLP", "Personality AI"],
    media: ["/media/chatbot.jpg"]
  },
  {
    slug: "order-tracking-bot",
    title: "Customer Service Bot",
    description: "RAG-based AI assistant for automated order support.",
    fullDescription: `
      An intelligent assistant that automates customer service by combining retrieval-based memory and LLM reasoning.

      🧾 **Technical Architecture**:
      - **Vector DB**: Stores and retrieves order-related knowledge.
      - **RAG Framework**: Uses retrieved documents to condition responses.
      - **LLM Output**: Generates personalized, context-aware replies.

      Outcome: Reduced customer service load by 80% with 24/7 support availability.
    `,
    technologies: ["RAG", "Vector DB", "LLM"],
    media: ["/media/order-bot.jpg"]
  }
];
