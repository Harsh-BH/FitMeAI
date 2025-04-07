

# 👗 FitMeAI

**FitMeAI** is an AI-powered Virtual Try-On web application that enables users to try on clothes digitally using uploaded images or their webcam. It leverages the power of computer vision, pose detection, and generative AI to deliver realistic try-on experiences.

> “Try before you buy — virtually.”

---

## ✨ Features

### 👤 User Interaction
- Upload your photo or use the webcam
- Upload clothing images or choose from a catalog
- View realistic try-on previews
- Download or share your try-on images

### 🤖 AI Integration
- Body and pose detection using [MediaPipe](https://google.github.io/mediapipe/) / [OpenPose](https://github.com/CMU-Perceptual-Computing-Lab/openpose)
- Smart clothing fit overlay using OpenCV
- Advanced realism using [ControlNet](https://github.com/lllyasviel/ControlNet) + Stable Diffusion (optional)

### 🛍️ Clothing Catalog
- Browse clothing by category (e.g., Tops, Bottoms, Accessories)
- Upload your own clothing items
- Add filters: style, size, color, occasion

### 🔐 Authentication (Phase 2+)
- Sign up / Login
- Save try-on history
- Create a wishlist

---

## 🧠 Tech Stack

| Layer        | Technology Used                                 |
|--------------|-------------------------------------------------|
| **Frontend** | React.js / Next.js, Tailwind CSS                |
| **Backend**  | Python (FastAPI)                                |
| **AI/ML**    | MediaPipe, OpenCV, ControlNet, Stable Diffusion |
| **Storage**  | Firebase / AWS S3                               |
| **Auth**     | Firebase /  Next-Auth                           |
| **Database** | MongoDB / PostgreSQL                            |

---

## 📦 Folder Structure

```
FitMeAI/
├── client/         # React / Next.js app
├── server/          # FastAPI / Flask backend
├── devops/           # AI models and scripts
├── public/           # Assets like clothes, icons
├── examples/         # Sample user photos & outputs
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/FitMeAI.git
cd FitMeAI
```

### 2. Setup Frontend

```bash
cd client
npm install
npm run dev
```

### 3. Setup Backend

```bash
cd server
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 🧪 Basic AI Try-On Flow (Demo Version)

1. Detect pose using MediaPipe or OpenPose
2. Extract coordinates for shoulders, waist
3. Use OpenCV to resize and overlay clothing image
4. Output final try-on preview

For realistic generation, use ControlNet + Stable Diffusion with a body-pose-conditioned image-to-image pipeline.

---

## 🛣️ Roadmap

| Phase | Features |
|-------|----------|
| ✅ Phase 1 | Basic try-on using uploaded images |
| 🔄 Phase 2 | Add authentication and save try-on history |
| 🔄 Phase 3 | ControlNet-based realism + fashion suggestions |
| 🔄 Phase 4 | AR Try-on and mobile support |
| 🔄 Phase 5 | 3D model avatar generation and personal AI stylist |

---

## 🧑‍💻 Authors

- [Harsh Bhatt](https://github.com/Harsh-BH) – Full Stack / AI Developer

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

Feel free to reach out for questions, ideas, or collaborations:

- Email: `harsh.aby.007@gmail.com`
- LinkedIn: [linkedin.com/in/Harsh](https://www.linkedin.com/in/harsh-bhatt-114a2a293/)

---

---

🤝 Collaboration

We welcome contributions from developers, designers, and AI researchers.
Please see [COLLABORATION.md](Collaboration.md) for details on how to get started.

---

> **FitMeAI** — Redefining the way we try, style, and shop.

