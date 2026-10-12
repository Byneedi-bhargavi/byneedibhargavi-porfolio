# Architecture rules
- Resume controls read the existing asset pointer rather than duplicating a PDF URL, so future supplied replacements update both sections consistently.
- Render the site footer once in the index route; shared root layout renders only the route outlet to avoid duplicate footers.