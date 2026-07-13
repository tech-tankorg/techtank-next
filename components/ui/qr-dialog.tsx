"use client";

import Image from "next/image";
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
          <p className="text-sm text-muted-foreground mt-2">
            Point your phone camera at the code to open the get involved page.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-soft-lg">
          <Image
            src="/images/share/get-involved-qr.svg"
            alt="QR code linking to the TechTank get involved page"
            width={220}
            height={220}
            className="h-52 w-52"
          />
        </div>

        <Button variant="primary" className="w-full" asChild onClick={onClose}>
          <Link href="/get-involved">Visit Get Involved</Link>
        </Button>
      </div>
    </Dialog>
  );
}
