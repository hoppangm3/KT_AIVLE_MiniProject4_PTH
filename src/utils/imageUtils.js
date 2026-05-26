/**
 * Utility to compress a Base64 image string using HTML5 Canvas.
 * @param {string} base64Str - The source base64 string (data:image/...)
 * @param {number} maxWidth - Maximum width for the compressed image
 * @param {number} maxHeight - Maximum height for the compressed image
 * @param {number} quality - Compression quality (0 to 1)
 * @returns {Promise<string>} - Compressed base64 string
 */
export async function compressImage(base64Str, maxWidth = 800, maxHeight = 1200, quality = 0.7) {
  if (!base64Str || !base64Str.startsWith('data:image')) {
    return base64Str;
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      // Calculate new dimensions while maintaining aspect ratio
      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      // Convert to JPEG for better compression
      const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
      resolve(compressedBase64);
    };
    img.onerror = (err) => {
      reject(err);
    };
  });
}
