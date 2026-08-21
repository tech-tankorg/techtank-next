"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTitle } from "@/components/ui/dialog";
import { QrCodeIcon } from "@/components/ui/icons";
import { useAppStore } from "@/stores/app-state";

// The QR SVG below encodes https://www.techtankto.com/get-involved
// (regenerate the asset if that URL changes).

export function QrDialog() {
  const { qrDialogOpen, setQrDialogOpen } = useAppStore();

  const onClose = () => setQrDialogOpen(false);

  return (
    <Dialog open={qrDialogOpen} onClose={onClose} className="md:max-w-md lg:max-w-md">
      <div className="flex flex-col items-center gap-2 text-center">
        <div>
          <span className="mb-3 inline-block text-xs font-semibold tracking-widest text-ring uppercase">
            Scan to join
          </span>
          <DialogTitle className="text-2xl leading-tight font-bold">Get involved with TechTank</DialogTitle>
          <p className="mt-2 text-sm text-foreground">
            Point your phone camera at the code to open the get involved page.
          </p>
        </div>

        <QrCodeIcon
          className="size-64 max-w-full text-black dark:text-white"
          aria-label="QR code linking to the TechTank get involved page"
        />

        <Button variant="primary" className="w-full" asChild onClick={onClose}>
          <Link href="/get-involved">Visit Get Involved</Link>
        </Button>
      </div>
    </Dialog>
  );
}
