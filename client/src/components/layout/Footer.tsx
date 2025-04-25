import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    setEmail("");
  };

  return (
    <footer className="gradient-bg py-12 px-6 text-white mt-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Have an idea?</h3>
            <p className="text-white/80">Let's get your project started today!</p>
          </div>
          <div className="w-full md:w-1/3">
            <form onSubmit={handleSubmit} className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 h-12 rounded-l-md focus:outline-none text-gray-700 border-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 px-4 py-3 h-12 rounded-r-md text-white border-0"
              >
                <i className="fas fa-arrow-right"></i>
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 text-center text-white/60 text-sm">
          Copyright © {new Date().getFullYear()} Regeneron Web Services
        </div>
      </div>
    </footer>
  );
}
