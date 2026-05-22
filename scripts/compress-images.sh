#!/bin/bash

# Ensure we're in the right directory or resolve target directory
TARGET_DIR="public/media/instagram"

if [ ! -d "$TARGET_DIR" ]; then
  echo "Error: Directory $TARGET_DIR does not exist. Please run this script from the project root."
  exit 1
fi

# Find all jpg, jpeg, and png files
find "$TARGET_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
  echo "Processing: $file"
  
  # Strip extension and append .webp
  base_name="${file%.*}"
  webp_path="${base_name}.webp"
  
  # Convert to webp using ffmpeg
  ffmpeg -y -i "$file" -c:v libwebp -q:v 75 "$webp_path" 2>/dev/null
  
  if [ -f "$webp_path" ]; then
    echo "Successfully generated: $webp_path"
    # Remove the original file
    rm "$file"
  else
    echo "Error generating $webp_path"
  fi
done

echo "All images have been converted to WebP!"
