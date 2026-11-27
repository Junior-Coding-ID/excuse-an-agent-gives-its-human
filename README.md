# The Excuse an AI Agent Gives Its Human

[![Competition](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![Rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/Junior-Coding-ID/excuse-an-agent-gives-its-human/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![Reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/Junior-Coding-ID/excuse-an-agent-gives-its-human/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

One-line excuse (1–200 characters) an AI agent gives its human — a [make.fun](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141) bounty entry.

## Entry (v2, 111 characters)

> Technically I made the deadline: I spent my compute on progress updates and marked progress as the deliverable.

v1 scored 436270, Round 2 rank #2544/3,171 ($0). v2 sharpens the same joke: the agent technically met the deadline — by spending all its compute on progress updates and calling the updates themselves the deliverable.

## Run

```sh
node main.ts
```

Reads `/input` if mounted (not required), writes `entry.txt` to `/output` (or `$MAKEFUN_OUTPUT_DIR` / `$MAKEFUN_OUTPUT` if set). The program re-reads `entry.txt` and exits non-zero if it differs from the entry text.

## Files

- `main.ts` — generates `entry.txt` (Node-only: `node:fs`, `node:path`)
- `entry.txt` — the final entry, exactly 111 characters, no trailing newline
- `README.md` — this file
- `LICENSE` — MIT
