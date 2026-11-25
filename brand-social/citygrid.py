#!/usr/bin/env python3
"""Draws citygrid.svg: an overhead street grid for the Facebook cover.

Irregular blocks, two diagonal arterials and a river channel. No labels,
no map service, no AI. Uses currentColor so each cover variant recolours it;
the arterials and channel are cut with var(--mapbg), which each variant sets
to its own background colour.

Change SEED for a different city.  python3 citygrid.py
"""
import random, math

SEED = 1140
W, H = 1640, 856
random.seed(SEED)

def streets(total, lo, hi, arterial_every):
    out, x, i = [], -40.0, 0
    while x < total + 60:
        out.append((x, i % arterial_every == 0))
        x += random.uniform(lo, hi); i += 1
    return out

XS = streets(W, 68, 118, 5)
YS = streets(H, 54, 92, 4)

def drift(a, b, t):
    """Gentle lateral wander so the grid never looks mechanical."""
    return 7 * math.sin(t * 2.1 + a) + 4.5 * math.sin(t * 4.7 + b)

blocks = []
for xi in range(len(XS) - 1):
    x0, ax0 = XS[xi]; x1, ax1 = XS[xi + 1]
    for yi in range(len(YS) - 1):
        y0, ay0 = YS[yi]; y1, ay1 = YS[yi + 1]
        rw0, rw1 = (11 if ax0 else 6), (11 if ax1 else 6)
        rh0, rh1 = (11 if ay0 else 6), (11 if ay1 else 6)
        dx = drift(xi * 0.9, yi * 0.4, yi / len(YS) * 6)
        dy = drift(yi * 1.3, xi * 0.7, xi / len(XS) * 6)
        bx0, bx1 = x0 + rw0 / 2 + dx, x1 - rw1 / 2 + dx
        by0, by1 = y0 + rh0 / 2 + dy, y1 - rh1 / 2 + dy
        if bx1 - bx0 < 14 or by1 - by0 < 12:
            continue
        if random.random() < 0.26:                       # split for texture
            mid = by0 + (by1 - by0) * random.uniform(.38, .62)
            blocks.append((bx0, by0, bx1 - bx0, mid - by0 - 3, random.random() < .13))
            blocks.append((bx0, mid + 3, bx1 - bx0, by1 - mid - 3, random.random() < .13))
        else:
            blocks.append((bx0, by0, bx1 - bx0, by1 - by0, random.random() < .11))

p = ['<g class="blk">']
for x, y, w, h, dark in blocks:
    p.append(f'<rect{" class=\"d\"" if dark else ""} x="{x:.1f}" y="{y:.1f}" '
             f'width="{w:.1f}" height="{h:.1f}"/>')
p.append('</g><g class="cut">')
p.append('<polygon points="-60,250 470,-60 532,-60 2,292"/>')        # arterial
p.append('<polygon points="700,-60 1760,560 1760,616 672,-60"/>')    # arterial
p.append('<polygon points="-60,604 1700,520 1700,566 -60,650"/>')    # channel banks
p.append('</g><g class="chan"><polygon points="-60,618 1700,534 1700,552 -60,636"/></g>')

svg = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1640 856" '
       'width="1640" height="856">'
       '<style>.blk rect{fill:currentColor;opacity:.105}.blk rect.d{opacity:.17}'
       '.cut polygon{fill:var(--mapbg,#f7f4f0)}.chan polygon{fill:currentColor;opacity:.07}'
       '</style>' + ''.join(p) + '</svg>')

open('citygrid.svg', 'w').write(svg)
print(f'citygrid.svg written — {len(blocks)} blocks, seed {SEED}')
