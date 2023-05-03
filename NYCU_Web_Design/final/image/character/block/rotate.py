
# import the Python Image processing Library

from PIL import Image

path = "/Users/kyuuhikoji/Desktop/final/image/character/rinko.png"

# Create an Image object from an Image

colorImage  = Image.open(path)


# Rotate it by 45 degrees

rotated     = colorImage.rotate(-45)


# Display the Image rotated by 45 degrees
rotated.save( path )
'''

import cv2
import numpy as np

def add_margin(pil_img, top, right, bottom, left):
    width, height = pil_img.size
    new_width = width + right + left
    new_height = height + top + bottom
    result = Image.new(pil_img.mode, (new_width, new_height))
    result.paste(pil_img, (left, top))
    return result

im = Image.open(path)
im_new = add_margin(im, 50, 100, 50, 100)
im_new.save(path, qualty=100)

'''