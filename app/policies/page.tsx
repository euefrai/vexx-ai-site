"use client";

import React from "react";
import { Shield, FileText, Lock } from "lucide-react";

export default function PoliciesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-16">Legal & <span className="text-accent-cyan">Policies.</span></h1>
        
        <div className="space-y-24">
           <section>
              <div className="flex items-center gap-3 mb-8">
                 <Shield className="text-accent-cyan" />
                 <h2 className="text-2xl font-bold">Privacy Policy</h2>
              </div>
              <div className="prose prose-invert max-w-none text-white/50 space-y-6">
                 <p>Last updated: April 25, 2024</p>
                 <p>
                    Vexx-AI is designed with privacy as a core principle. Unlike traditional SaaS platforms, 
                    Vexx-AI is a local-first application. This means that your computer's data, your screen content, 
                    and your interactions stay on your machine.
                 </p>
                 <h4 className="text-white">Data Collection</h4>
                 <p>
                    We do not collect or store your personal files, screen captures, or keystrokes on our servers. 
                    The only data transmitted to our servers includes:
                 </p>
                 <ul className="list-disc pl-6 space-y-2">
                    <li>Account authentication details (if using a Pro account)</li>
                    <li>Subscription status</li>
                    <li>Anonymous crash reports (optional)</li>
                    <li>License validation data</li>
                 </ul>
              </div>
           </section>

           <section>
              <div className="flex items-center gap-3 mb-8">
                 <FileText className="text-accent-purple" />
                 <h2 className="text-2xl font-bold">Terms of Service</h2>
              </div>
              <div className="prose prose-invert max-w-none text-white/50 space-y-6">
                 <p>
                    By using Vexx-AI, you agree to these terms. Vexx-AI is a tool that provides automation 
                    capabilities. You are solely responsible for the actions taken by the AI on your computer.
                 </p>
                 <h4 className="text-white">Acceptable Use</h4>
                 <p>
                    You agree not to use Vexx-AI for:
                 </p>
                 <ul className="list-disc pl-6 space-y-2">
                    <li>Developing or spreading malware</li>
                    <li>Unauthorized access to computer systems</li>
                    <li>Harassment or illegal activities</li>
                    <li>Automating malicious interactions on websites</li>
                 </ul>
              </div>
           </section>

           <section>
              <div className="flex items-center gap-3 mb-8">
                 <Lock className="text-accent-green" />
                 <h2 className="text-2xl font-bold">Security Disclosure</h2>
              </div>
              <div className="prose prose-invert max-w-none text-white/50 space-y-6">
                 <p>
                    We take security seriously. If you discover a vulnerability in Vexx-AI, please 
                    contact our security team at security@vexx-ai.com. We operate a bug bounty 
                    program for responsibly disclosed vulnerabilities.
                 </p>
              </div>
           </section>
        </div>
      </div>
    </div>
  );
}
