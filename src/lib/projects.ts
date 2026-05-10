import { useEffect, useState } from "react";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
  metric?: string;
};

const KEY = "yassa.portfolio.projects.v1";

const seed: Project[] = [
  {
    id: "ecg",
    title: "ECG Image Classification",
    category: "Deep Learning",
    description:
      "CNN trained on the National Heart Foundation of Bangladesh dataset to classify ECG images into 4 categories. Deployed via Flask and Hugging Face Spaces.",
    tech: ["TensorFlow", "Keras", "CNN", "Flask", "Hugging Face"],
    metric: "94% accuracy",
  },
  {
    id: "pneumonia",
    title: "Pneumonia Detection — Chest X-rays",
    category: "Deep Learning",
    description:
      "CNN model detecting pneumonia from chest X-ray images, deployed as a public Flask web app on Hugging Face.",
    tech: ["TensorFlow", "CNN", "Flask", "Hugging Face"],
    metric: "95% accuracy",
  },
  {
    id: "cats-dogs",
    title: "Cats vs Dogs Classification",
    category: "Computer Vision",
    description:
      "Convolutional Neural Network built with TensorFlow for binary image classification.",
    tech: ["TensorFlow", "CNN", "Python"],
    metric: "96% accuracy",
  },
  {
    id: "twitter-nlp",
    title: "Twitter Sentiment Analysis",
    category: "NLP",
    description:
      "LSTM-based model classifying tweet sentiments after text cleaning and tokenization.",
    tech: ["LSTM", "Keras", "NLP"],
  },
  {
    id: "house-price",
    title: "California House Price Prediction",
    category: "Deep Learning",
    description:
      "Neural network with Keras predicting housing prices from numerical and categorical features.",
    tech: ["Keras", "Pandas", "Scikit-learn"],
  },
  {
    id: "breast-cancer",
    title: "Breast Cancer Classification",
    category: "Machine Learning",
    description:
      "Predictive model with Scikit-learn classifying cancer cases, evaluated by accuracy and F1-score.",
    tech: ["Scikit-learn", "Pandas", "ML"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Mobile App",
    category: "Flutter",
    description:
      "Cross-platform shopping app with product listings, cart and secure authentication.",
    tech: ["Flutter", "Dart", "Firebase", "BLoC"],
  },
  {
    id: "library",
    title: "Library App",
    category: "Flutter",
    description: "Library management mobile app built with Firebase and Cubit.",
    tech: ["Flutter", "Firebase", "Cubit"],
  },
];

function read(): Project[] {
  if (typeof window === "undefined") return seed;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return seed;
    const parsed = JSON.parse(raw) as Project[];
    return Array.isArray(parsed) && parsed.length ? parsed : seed;
  } catch {
    return seed;
  }
}

function write(items: Project[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("projects:changed"));
}

export function useProjects() {
  const [items, setItems] = useState<Project[]>(seed);

  useEffect(() => {
    setItems(read());
    const onChange = () => setItems(read());
    window.addEventListener("projects:changed", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("projects:changed", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  return {
    projects: items,
    add(p: Omit<Project, "id">) {
      const next: Project = { ...p, id: crypto.randomUUID() };
      const all = [next, ...read()];
      write(all);
    },
    remove(id: string) {
      write(read().filter((p) => p.id !== id));
    },
    reset() {
      localStorage.removeItem(KEY);
      window.dispatchEvent(new CustomEvent("projects:changed"));
    },
  };
}