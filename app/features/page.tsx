"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Shield,
  Fingerprint,
  Activity,
  Bot,
  LineChart,
  Wifi,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: "Intelligent Therapy Support",
    description:
      "Round-the-clock AI assistance, using various therapeutic approaches to provide tailored mental health guidance.",
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Trusted Blockchain",
    description:
      "Your mental health data is safeguarded by blockchain, offering privacy and transparent tracking.",
  },
  {
    icon: <Brain className="w-10 h-10 text-primary" />,
    title: "Thoughtful Analysis",
    description:
      "With emotion detection and advanced NLP, your mental health is understood and supported effectively.",
  },
  {
    icon: <Activity className="w-10 h-10 text-primary" />,
    title: "High-Risk Detection",
    description:
      "Real-time tracking with emergency protocols ensures your safety during urgent situations.",
  },
  {
    icon: <Wifi className="w-10 h-10 text-primary" />,
    title: "IoT Connectivity",
    description:
      "Connect smart home technology to craft a soothing environment personalized for you.",
  },
  {
    icon: <LineChart className="w-10 h-10 text-primary" />,
    title: "Growth Monitoring",
    description:
      "Track your mental health journey with detailed analytics and verified blockchain session records.",
  },
  {
    icon: <Fingerprint className="w-10 h-10 text-primary" />,
    title: "Confidential & Secure",
    description:
      "Your information is completely confidential, secured by advanced encryption and zero-knowledge protocols.",
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: "Complete Well-Being",
    description:
      "Connect your wearables and health providers for complete mental wellness tracking.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          ManSathi Features
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          See how our AI platform transforms mental health support with advanced technology and complete privacy.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-semibold mb-4">Let’s Begin!</h2>
        <p className="text-muted-foreground mb-8">
          Join a growing community using AI to support their mental health.
        </p>
        <a
          href="/dashboard"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Start Your Wellness Journey
          <Heart className="ml-2 w-5 h-5" />
        </a>
      </motion.div>
    </div>
  );
}
