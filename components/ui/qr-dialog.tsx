"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { useAppStore } from "@/stores/app-state";

// The QR SVG below encodes https://www.techtankto.com/get-involved
// (regenerate the asset if that URL changes).
const titleId = "qr-dialog-title";

export function QrDialog() {
  const { qrDialogOpen, setQrDialogOpen } = useAppStore();

  const onClose = () => setQrDialogOpen(false);

  return (
    <Dialog open={qrDialogOpen} onClose={onClose} labelledBy={titleId} className="md:max-w-md lg:max-w-md">
      <div className="flex flex-col items-center gap-6 text-center">
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-ring mb-3">
            Scan to join
          </span>
          <h2 id={titleId} className="font-display text-2xl font-bold text-foreground leading-tight">
            Get involved with TechTank
          </h2>
          <p className="text-sm text-foreground mt-2">
            Point your phone camera at the code to open the get involved page.
          </p>
        </div>

        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 37 37" 
          shapeRendering="crispEdges" 
          className="h-64 w-64 text-foreground"
          aria-label="QR code linking to the TechTank get involved page"
        >
          <path stroke="currentColor" d="M4 4.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h4m2 0h7M4 5.5h1m5 0h1m1 0h4m1 0h1m4 0h1m3 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m2 0h1m3 0h1m6 0h1m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h2m2 0h1m1 0h1m2 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m2 0h2m1 0h1m1 0h4m1 0h1m2 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m3 0h2m1 0h2m2 0h1m1 0h1m2 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h1m1 0h1m4 0h4M4 12.5h1m1 0h2m1 0h3m3 0h1m2 0h7m1 0h1m2 0h1m1 0h2M7 13.5h1m3 0h5m4 0h5m1 0h3m3 0h1M5 14.5h2m1 0h9m5 0h1m2 0h1m1 0h2m1 0h2M4 15.5h5m3 0h1m1 0h2m1 0h1m1 0h1m2 0h1m3 0h3m3 0h1M6 16.5h6m1 0h1m1 0h1m3 0h3m1 0h1m5 0h2M4 17.5h1m1 0h4m3 0h8m2 0h1m2 0h2m2 0h3M4 18.5h1m2 0h2m1 0h2m2 0h3m1 0h1m1 0h1m1 0h2m1 0h4m1 0h3M5 19.5h1m9 0h1m1 0h1m2 0h1m2 0h2m2 0h2m2 0h1M4 20.5h1m2 0h1m2 0h2m2 0h1m1 0h1m2 0h1m3 0h3m2 0h2m1 0h1M5 21.5h4m4 0h1m3 0h1m1 0h1m1 0h1m2 0h1m2 0h1m1 0h3M4 22.5h1m2 0h5m2 0h3m2 0h3m2 0h2m1 0h1m2 0h1M6 23.5h1m1 0h1m3 0h3m6 0h2m1 0h3m3 0h1M5 24.5h1m2 0h1m1 0h4m1 0h3m1 0h12M12 25.5h3m1 0h3m1 0h1m1 0h1m1 0h1m3 0h5M4 26.5h7m1 0h1m2 0h3m2 0h1m1 0h3m1 0h1m1 0h2m1 0h1M4 27.5h1m5 0h1m1 0h1m1 0h1m7 0h1m1 0h1m3 0h2m1 0h1M4 28.5h1m1 0h3m1 0h1m3 0h1m1 0h1m1 0h1m2 0h1m2 0h5m1 0h1M4 29.5h1m1 0h3m1 0h1m1 0h1m2 0h2m1 0h2m1 0h1m2 0h2m2 0h2m2 0h1M4 30.5h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m4 0h1m2 0h1m1 0h1M4 31.5h1m5 0h1m2 0h3m1 0h1m1 0h2m2 0h5m1 0h1m1 0h1M4 32.5h7m1 0h1m1 0h1m2 0h2m1 0h1m1 0h3m4 0h1m1 0h1"/>
        </svg>

        <Button variant="primary" className="w-full" asChild onClick={onClose}>
          <Link href="/get-involved">Visit Get Involved</Link>
        </Button>
      </div>
    </Dialog>
  );
}
