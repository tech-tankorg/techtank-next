"use client";

import { useState } from "react";
import { Mail, Copy, Check, MessageSquare } from "lucide-react";

interface ContactCardProps {
  context?: string;
}

export function ContactCard({
  context = "For hosting, sponsorship, speaking, and community inquiries.",
}: ContactCardProps) {
  const [copied, setCopied] = useState(false);
  const email = "techtankto@gmail.com";
  const slackUrl = "https://join.slack.com/t/thetechtank/shared_invite/zt-2oou5qbue-LXNB4M7~C_6CBAImj1kpJA";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl glass p-6 lg:p-8 space-y-4">
      <p className="text-sm text-muted-foreground">{context}</p>
      
      {/* Email */}
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-seafoam text-teal-dark">
          <Mail className="h-5 w-5" />
        </div>
        <div className="flex-1 flex items-center gap-3">
          <a
            href={`mailto:${email}`}
            className="font-display text-base font-semibold text-teal-dark hover:text-amber-dark transition-colors"
          >
            {email}
          </a>
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center h-7 w-7 rounded-lg bg-white/50 hover:bg-seafoam text-muted-foreground hover:text-teal-dark transition-colors"
            aria-label={copied ? "Copied" : "Copy email"}
          >
            {copied ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Slack */}
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-seafoam text-teal-dark">
          <MessageSquare className="h-5 w-5" />
        </div>
        <a
          href={slackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-base font-semibold text-teal-dark hover:text-amber-dark transition-colors"
        >
          Join our Slack community
        </a>
      </div>
    </div>
  );
}
