import cv2
import os

VIDEO_PATH = "character2.mp4"
OUTPUT_DIR = "../portfolio/public/frames"

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs("public/frames", exist_ok=True)

cap = cv2.VideoCapture(VIDEO_PATH)

if not cap.isOpened():
    raise RuntimeError("Could not open video")

total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
fps = cap.get(cv2.CAP_PROP_FPS)

print("Total frames:", total_frames)
print("FPS:", fps)

# Extract 64 frames distributed across the video
num_frames = 64

for i in range(num_frames):

    frame_index = round(
        i * (total_frames - 1) / (num_frames - 1)
    )

    cap.set(cv2.CAP_PROP_POS_FRAMES, frame_index)

    success, frame = cap.read()

    if not success:
        print("Failed:", frame_index)
        continue

    filename = os.path.join(
        OUTPUT_DIR,
        f"frame_{i:03d}.webp"
    )

    cv2.imwrite(
        filename,
        frame,
        [cv2.IMWRITE_WEBP_QUALITY, 95]
    )
    cv2.imwrite(
        os.path.join("public/frames", f"frame_{i:03d}.webp"),
        frame,
        [cv2.IMWRITE_WEBP_QUALITY, 95]
    )

    print(f"Saved {filename}")

cap.release()

print("Done!")