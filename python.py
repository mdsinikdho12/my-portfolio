from rembg import remove
from PIL import Image

# Input Image Load
input_path = "C:\Users\Cg\Downloads\instructor.jpeg"  
output_path = "passport_photo.png"

image = Image.open(input_path)

# Background Remove
output = remove(image)

# Resize for Passport Size (3.5cm x 4.5cm at 300 dpi)
passport_size = (413, 531)  # 3.5x4.5 cm in pixels at 300 DPI
output = output.resize(passport_size)

# Save Output
output.save(output_path)
print("Passport size image saved!")
