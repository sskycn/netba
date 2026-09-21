#!/usr/bin/env python3
"""Render public/og.png with exact brand text."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "og.png"

W, H = 1200, 630
BG = (12, 13, 11)
INK = (239, 230, 212)
INK2 = (200, 188, 166)
COPPER = (212, 114, 58)
TEAL = (94, 184, 168)
LINE = (239, 230, 212, 28)


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size)


serif = "/System/Library/Fonts/Supplemental/Georgia.ttf"
sans = "/System/Library/Fonts/Supplemental/Arial.ttf"
mono = "/System/Library/Fonts/Supplemental/Courier New.ttf"

img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img, "RGBA")

for x in range(0, W, 48):
    draw.line([(x, 0), (x, H)], fill=LINE, width=1)
for y in range(0, H, 48):
    draw.line([(0, y), (W, y)], fill=LINE, width=1)

draw.rectangle([0, 0, 12, H], fill=COPPER)

title = font(serif, 132)
sub = font(sans, 34)
meta = font(mono, 22)

draw.text((88, 148), "Netba", font=title, fill=INK)
product = font(serif, 36)
draw.text((88, 318), "NetbaDB — typed Rust database core", font=product, fill=COPPER)
draw.text((88, 378), "NetbaIoT — database-free IoT gateway", font=product, fill=TEAL)
draw.text(
    (88, 448),
    "Separate codebases. AGPL-3.0-or-later.",
    font=sub,
    fill=INK2,
)
draw.text((88, 540), "netba.net", font=meta, fill=TEAL)

img = img.convert("RGB")
img.save(OUT, "PNG", optimize=True)
print(f"wrote {OUT} {OUT.stat().st_size} bytes")
