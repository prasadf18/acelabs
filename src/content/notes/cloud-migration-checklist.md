---
title: "A cloud migration checklist worth working through"
description: "The questions to answer before moving a single workload."
date: 2026-11-09
category: Cloud
---

Cloud migrations go wrong in predictable ways: a forgotten dependency, a surprise bill, a cutover at 6pm on a Friday. This is a list to work through before moving a workload.

## 1. Inventory

List every service, database, cron job and third-party integration the workload touches. Check outbound connections from the running system, not just the architecture diagram, which is usually out of date.

## 2. Decide the move type

Lift and shift, replatform, or rebuild? Pick per workload. Moving a stable internal tool as-is is fine. Moving something you plan to rewrite in six months is wasted effort.

## 3. Estimate cost properly

Include data transfer, storage growth, logging and the cost of running both environments during the transition. Set billing alerts before the first resource exists.

## 4. Define rollback

Write down how to go back, and test it. If rollback is "we'll figure it out," you don't have one.

## 5. Put infrastructure in code

Use Terraform or similar from the first day. Environments that can be rebuilt from a repository are easier to review, secure and hand over.

## 6. Add monitoring before cutover

Dashboards, alerts and logs should be working on the new side first, so you can compare it against the old one.

## 7. Cut over in small steps

Shift a slice of traffic, watch error rates, then continue. Pick a quiet weekday morning, not the end of the week.
