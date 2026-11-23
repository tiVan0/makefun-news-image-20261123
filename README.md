# Monday, 23 November 2026 — The World in One Day

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/tiVan0/makefun-news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/tiVan0/makefun-news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

One image that sums up Monday 23 November 2026: a newspaper front page
with 35 stories — 3 leads with original illustrations, 10 picture cards,
22 more in ALSO TODAY — across 9 regions, a BY THE NUMBERS strip, a world
map with 13 numbered pins, and a 3-line DATE CHECK strip.

## The day

- **COP31 collapses with no deal** — the Antalya Pact died on Sunday:
  196 countries could not agree a text that even names fossil fuels.
  The EU led the revolt; president Kurum gavels the longest COP ever closed.
- **Kyiv's sea drones sink a Russian warship in Libya** — Zelenskyy said
  Monday that seven sea drones sank the corvette Merkury off Benghazi
  and hit the arms ship Angara. Libyan officials say the ship was badly
  damaged, not sunk; 10 or more were hurt. [CLAIM: sunk]
- **Huang is back — Nvidia soars 30%** — eleven days after he resigned,
  the board voted unanimously to bring Jensen Huang back. Shares jumped
  over 30%, the Nasdaq rose 6–7% and the S&P 500 4–5%, erasing Friday's
  rout. Asia had slid first: the Kospi closed −3.31% at 4,708.54.

## How it is built

`render.py` draws `entry.png` (1024×1024, RGB, ≤ 1 MiB) with Pillow at
build time — every illustration is an original drawing, no photographs.
`main.ts` (Node standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` with mode 0644. Run it twice and the
bytes are identical.

## Numbers, and where they come from

- Nvidia +30% Monday — Reuters
- Kospi 4,708.54, −3.31% Monday — KRX
- 7 sea drones; 2,400 km from the front line — AP
- 1,600+ Delta flights delayed Sunday — Delta / FAA
- Molly Meldrum, 83 — family statement via Reuters
- Alcaraz beat Zverev 6–2, 7–6(7) — ATP Tour

Key figures were checked against live primary sources and with Bivia
(boolean, deep, abstention allowed): COP31, Benghazi, Nvidia, Delta,
Meldrum and Alcaraz all returned yes; the Kospi close abstained and was
kept only because the KRX close itself confirms it.

## DATE CHECK

Wires cut 23 Nov 23:59 UTC. Everything in the image happened or was
first reported on Monday 23 November 2026, except three Sunday items
dated as Sunday in the strip (the COP31 collapse, the Alcaraz win and
