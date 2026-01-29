import json
import math
import os
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import Request, urlopen

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SECTIONS_PATH = ROOT / "app" / "sections.js"
RAW_DIR = ROOT / "public" / "icons" / "raw"
SPRITE_DIR = ROOT / "public" / "sprites"
MAP_PATH = ROOT / "app" / "sprite-map.json"

TILE = 64
COLS = 12


def get_tool_key(name: str) -> str:
    return "".join((name or "").split())


def read_sections():
    raw = SECTIONS_PATH.read_text(encoding="utf-8")
    start = raw.find("[")
    end = raw.rfind("];")
    if start == -1 or end == -1:
        raise RuntimeError("sections.js format not recognized")
    payload = raw[start : end + 1]
    return json.loads(payload)


def download_icon(url: str, dest: Path):
    dest.parent.mkdir(parents=True, exist_ok=True)
    req = Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
            "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        },
    )
    with urlopen(req, timeout=20) as response:
        data = response.read()
    dest.write_bytes(data)


def main():
    sections = read_sections()
    items = []
    for section in sections:
        for item in section.get("items", []):
            name = item.get("name")
            icon = item.get("icon")
            if not name or not icon:
                continue
            key = get_tool_key(name)
            items.append((key, icon))

    RAW_DIR.mkdir(parents=True, exist_ok=True)
    SPRITE_DIR.mkdir(parents=True, exist_ok=True)

    sprites = []
    for key, url in items:
        parsed = urlparse(url)
        ext = os.path.splitext(parsed.path)[1] or ".png"
        target = RAW_DIR / f"{key}{ext}"
        if not target.exists():
            try:
                download_icon(url, target)
            except Exception as exc:
                print(f"Skip {url}: {exc}")
                continue
        sprites.append((key, target))

    rows = math.ceil(len(sprites) / COLS)
    sprite_width = COLS * TILE
    sprite_height = rows * TILE
    sheet = Image.new("RGBA", (sprite_width, sprite_height), (0, 0, 0, 0))

    mapping = {}
    for idx, (key, path) in enumerate(sprites):
        col = idx % COLS
        row = idx // COLS
        x = col * TILE
        y = row * TILE
        with Image.open(path).convert("RGBA") as img:
            img.thumbnail((TILE, TILE), Image.LANCZOS)
            canvas = Image.new("RGBA", (TILE, TILE), (0, 0, 0, 0))
            offset = ((TILE - img.width) // 2, (TILE - img.height) // 2)
            canvas.paste(img, offset, img)
            sheet.paste(canvas, (x, y), canvas)
        mapping[key] = {"x": x, "y": y, "w": TILE, "h": TILE}

    sprite_path = SPRITE_DIR / "tools-sprite.png"
    sheet.save(sprite_path, "PNG", optimize=True)

    MAP_PATH.write_text(
        json.dumps(
            {
                "meta": {"width": sprite_width, "height": sprite_height, "tile": TILE},
                "items": mapping,
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )

    print(f"Sprite saved: {sprite_path}")
    print(f"Map saved: {MAP_PATH}")


if __name__ == "__main__":
    main()
