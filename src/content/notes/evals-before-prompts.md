---
title: "Write the eval before you write the prompt"
description: "How to test an AI feature before it reaches a single user."
date: 2026-11-09
category: AI
---

The usual way teams build an AI feature: write a prompt, try five examples, like what they see, ship it. Two weeks later a customer finds an input that makes it confidently wrong, and nobody can say whether the latest change made things better or worse.

## Start with a small test set

Collect 30 to 50 real inputs with the answers a careful person would give. Include the awkward ones: missing fields, contradictory instructions, questions the system should refuse. A spreadsheet is fine. You will add to it forever.

## Decide what "pass" means

"Sounds good" is not a rule. For each case, write a check: the answer contains the right figure, cites a source from the provided documents, does not promise anything policy doesn't allow. Simple string and structure checks cover more than people expect. Use a model as a grader only for what code can't check, and spot-check the grader by hand.

## Run it on every change

Treat the eval like a unit test suite. Changing the model, the prompt or the retrieval setup? Run it. A drop in score tells you what broke before a user does.

## What you get

Arguments about prompts turn into comparisons of numbers. You can swap to a cheaper model and know what it costs in quality. And when the feature does fail in production, you add that case to the set so it stays fixed.
