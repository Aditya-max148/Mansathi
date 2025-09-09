"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Brain } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { login, authenticated, ready } = usePrivy();

  useEffect(() => {
    if (ready && authenticated) {
      router.push("/dashboard");
    }
  }, [ready, authenticated, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Container className="max-w-md">
        <Card className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold">Welcome to Your AI Wellness Companion – ManSathi</h1>
            <p className="text-muted-foreground">
              Start your journey to well-being by signing in
            </p>
          </div>

          <Button className="w-full text-lg" onClick={login}>
            Let’s Begin
          </Button>

          <p className="text-xs text-center text-muted-foreground">
          By moving forward, you consent to our Terms of Service and Privacy Policy.
          </p>
        </Card>
      </Container>
    </div>
  );
}
