from PIL import Image
import numpy as np

# Load the image
img = Image.open('public/logo.png').convert('RGBA')

# Convert to numpy array
data = np.array(img)

# The image is white text on a blue/dark background
# Calculate luminance or just use a threshold on all channels to find white pixels.
# White is high RGB values.
r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# A simple way to isolate white text:
# Calculate grayscale brightness
gray = 0.2989 * r + 0.5870 * g + 0.1140 * b

# Threshold to separate white text from background (assuming background is dark blue/black)
# We can use the grayscale as the alpha channel, but we want the text to be pure white
# and background pure transparent.
# Let's map pixels > 150 to pure white, others to transparent. Wait, we want anti-aliasing.
# Map grayscale directly to alpha channel after some stretching to preserve anti-aliased edges.

# Enhance contrast of the grayscale image
gray = np.clip((gray - 100) * 2, 0, 255)

# Set RGB to pure white (255, 255, 255)
data[:,:,0] = 255
data[:,:,1] = 255
data[:,:,2] = 255
# Set Alpha to the extracted grayscale mask
data[:,:,3] = gray.astype(np.uint8)

out_img = Image.fromarray(data)
out_img.save('public/logo_transparent.png')

print("Processed image saved to public/logo_transparent.png")
