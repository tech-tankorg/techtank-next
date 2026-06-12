# Media Compression Script

This directory contains scripts for batch compressing and optimizing video assets for the TechTank website.

## Purpose

The `compress-media` scripts processes all `.mp4` files found in the `public/media/instagram` directory. For each video, it:
1. Downscales the resolution (max 480px width) to drastically reduce file size without impacting the UI.
2. Generates a highly optimized **WebM (VP9)** version for modern browsers.
3. Re-encodes the original video into a heavily compressed **MP4 (H.264)** version to serve as a reliable fallback for iOS and older devices.

This dual-format approach ensures the fastest possible load times while maintaining device compatibility.

## Prerequisites

You must have [FFmpeg](https://ffmpeg.org/) installed and available in your system's PATH.

### Installation (Windows)

You can easily install FFmpeg using the Windows Package Manager (`winget`):

```powershell
winget install --exact --id Gyan.FFmpeg --accept-package-agreements
```

*Note: After installing, you may need to restart your terminal for the `ffmpeg` command to be recognized in your PATH.*

### Installation (macOS)

Install FFmpeg via [Homebrew](https://brew.sh/):

```bash
brew install ffmpeg
```

### Installation (Linux)

Install FFmpeg via your distribution's package manager, e.g. on Debian/Ubuntu:

```bash
sudo apt update && sudo apt install ffmpeg
```

## Usage

### Windows (PowerShell)

Open PowerShell from the root of the project and run:

```powershell
.\scripts\compress-media.ps1
```

If you encounter execution policy errors, you can bypass them with:

```powershell
powershell.exe -ExecutionPolicy Bypass -File .\scripts\compress-media.ps1
```

### macOS / Linux (Shell)

Make the script executable once, then run it:

```sh
chmod +x ./scripts/compress-media.sh
./scripts/compress-media.sh
```
