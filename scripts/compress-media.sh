#!/bin/sh
set -eu

FFMPEG="ffmpeg"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TARGET_DIR="$SCRIPT_DIR/../public/media/instagram"

# Count mp4 files that are not already compressed
count=$(find "$TARGET_DIR" -type f -name "*.mp4" ! -name "*_compressed.mp4" | wc -l)
echo "Found $count videos to compress."

find "$TARGET_DIR" -type f -name "*.mp4" ! -name "*_compressed.mp4" | while IFS= read -r video; do
    printf '\nProcessing: %s\n' "$video"

    dir="$(dirname "$video")"
    base="$(basename "$video" .mp4)"
    webm_path="$dir/$base.webm"
    compressed_mp4_path="$dir/${base}_compressed.mp4"

    # 1. Generate optimized WebM (VP9) - lower resolution, higher CRF
    echo "Generating WebM..."
    "$FFMPEG" -y -i "$video" \
        -vf "scale='w=min(1080,iw):h=min(1080,ih):force_original_aspect_ratio=decrease'" \
        -c:v libvpx-vp9 -crf 40 -b:v 0 \
        -c:a libopus \
        "$webm_path"

    # 2. Generate optimized MP4 (H.264) - lower resolution, higher CRF
    echo "Generating optimized MP4..."
    "$FFMPEG" -y -i "$video" \
        -vf "scale='w=min(1080,iw):h=min(1080,ih):force_original_aspect_ratio=decrease'" \
        -c:v libx264 -preset medium -crf 28 \
        -c:a aac \
        -movflags +faststart \
        "$compressed_mp4_path"

    # 3. Replace original MP4 with compressed MP4
    if [ -f "$compressed_mp4_path" ]; then
        echo "Replacing original MP4..."
        rm "$video"
        mv "$compressed_mp4_path" "$video"
        echo "Successfully processed $base"
    else
        echo "Error: compressed file not created for $base"
    fi
done

printf '\nAll videos processed successfully!\n'
