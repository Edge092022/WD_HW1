HW1: Production Portfolio — Task Decomposition
1. Goal and scope
Improve the existing coursework portfolio through four independently reviewed milestones using vanilla HTML, CSS, and JavaScript.

Assignment source: the student-provided HW1 screenshot, reviewed on 2026-10-14.

M1: WCAG 2.2 AA audit and accessibility fixes.
M2: Focus trap audit and keyboard trap prevention.
M3: Strict Content Security Policy (CSP) and zero inline event handlers.
M4: Lighthouse audit score of 100 and performance optimization.
Minimum four milestone commits. Avoid monolithic PRs and one-shot AI implementation.
The screenshot does not specify which Lighthouse categories or device configuration are graded. Confirm these before final acceptance; record all available category scores meanwhile.
This initial step creates documentation only. Implementation starts after the student saves and commits this plan.

2. Current starting point
Source reviewed: all five files in the supplied porfolio.zip.

File	Observed implementation
index.html	English document language, metadata, one h1, semantic header/nav/main/footer, labelled sections, skip-link targeting main-content, external deferred scripts, labelled required form fields, status regions, loading/empty/error project states.
styles.css	Light/dark tokens, responsive CSS Grid, focus-visible outline, hidden-state rule, form styling, animated skeleton with reduced-motion rule.
theme.js	Theme initialization, aria-pressed updates, click listener, localStorage key theme, storage error handling.
projects.js	Local data, one-second simulated load, query scenarios empty/error, DOM creation with textContent, retry listeners, focus moved to projects heading before hiding a focused retry region.
contact.js	Native validation, whitespace validation, invalid/input/submit listeners, local status feedback. Form does not send messages.
Static review observations, not acceptance results:

No CSP meta element or hosting/header configuration is included. The actual server response has not been inspected.
No inline HTML event handlers, inline scripts, or inline style attributes were observed in the supplied source. Runtime DOM and delivered pages remain untested.
No modal or intentional focus containment appears in this base. Audit the actual page and dynamic states for accidental traps.
Contrast, accessible announcements, target sizes, focus behavior, responsiveness, and Lighthouse scores have not been measured.
The one-second loading simulation and skeleton-to-card replacement may affect layout shift and loading metrics; measure before changing.
Both project cards currently link to the same HW1 GitHub URL. Verify destination and link-purpose clarity.
The archive contains no Git history or audit reports. Baseline commit status is unknown.
3. WBS
4. Subtasks and planned atomic commits
Each row is a separate work unit. Fix only confirmed defects; do not make artificial changes merely to create commits. Audit-only tasks may commit actual findings and evidence. Proposed fix commits depend on the audit results.

ID	Small task and output	Planned commit
P0.1	Review supplied files and draft this plan without source edits.	docs: add HW1 task decomposition
P0.2	Student reviews plan, checks staged diff, and commits this file alone. Confirm existing baseline history; if missing, commit the unchanged base separately before fixes.	chore: preserve portfolio baseline (only if needed)
M1.1	Inventory every applicable WCAG 2.2 A/AA criterion against the complete page and states. Record issue, affected element, criterion, severity, and proposed fix.	docs(a11y): record baseline audit
M1.2	Fix confirmed semantic, accessible-name, link-purpose, form-error, or status-feedback defects. Split independent fixes if needed.	fix(a11y): clarify form feedback (if needed)
M1.3	Measure color pairs in both themes; fix confirmed contrast/landmark defects. Review reflow, text resize/spacing, target size, and reduced motion. Separate CSS fixes from JavaScript work.	fix(a11y): contrast & landmarks
M1.4	Repeat affected checks and complete the criterion matrix with student-provided evidence.	docs(a11y): record verification evidence
M2.1	Map forward/reverse tab order for default, empty, error, retry, and form states. Record initial focus and focus after changes.	docs(nav): record keyboard audit
M2.2	Fix one confirmed focus/navigation defect at a time, preserving native controls and a usable exit path.	fix(nav): keyboard trap prevention
M2.3	Repeat keyboard paths, skip-link, theme toggle, retries, and valid/invalid form tests. Record evidence.	docs(nav): record keyboard verification
M3.1	Inventory resource origins, inline code/styles, event attributes, javascript: URLs, dynamic code execution, and hosting support for headers. Define the policy contract before implementation.	docs(security): define CSP contract
M3.2	Remove inline handlers/code if discovered; keep behavior in external JavaScript using addEventListener. If none exist, document the scan rather than invent a refactor.	refactor(js): remove inline event handlers (if needed)
M3.3	Add the agreed restrictive policy through server headers where supported; document limitations of any meta fallback.	feat(security): enforce strict CSP
M3.4	Verify delivered policy, allowed workflows, and intentional blocked-resource probes; repeat source and runtime scans.	docs(security): record CSP verification
M4.1	Run Lighthouse on the served page with recorded browser/tool version, URL, device mode, throttling, theme, and project scenario. Save baseline report.	docs(perf): record Lighthouse baseline
M4.2	Address one measured bottleneck at a time, such as loading-induced layout shift; rerun relevant measurements after each change.	perf: optimize assets
M4.3	Run final Lighthouse in the agreed grading configuration and repeat accessibility, keyboard, and CSP regression checks. Save reports and final commit reference.	docs: record final HW1 audit evidence
5. Contracts and acceptance criteria
Global contract
Use vanilla HTML/CSS/JavaScript; introduce no framework or unauthorized dependency.
Preserve working portfolio sections, light/dark themes, project scenarios, and frontend-only form behavior.
Keep repository documents and code comments in English.
Implement one agreed subtask at a time. Inspect the diff, verify the change, and commit separately before starting the next subtask.
Keep unrelated changes out of each commit. Do not combine all milestones into one commit.
A source observation is not a browser test or a WCAG conformance claim.
M1 — WCAG 2.2 AA
Build an applicability matrix covering all WCAG 2.2 Level A and AA criteria. Every applicable criterion needs a result and evidence; justify each Not applicable entry.
Preserve coherent landmarks, heading hierarchy, programmatically associated labels, and meaningful accessible names.
Normal text contrast is at least 4.5:1; qualifying large text at least 3:1. Required non-text UI/state indicators meet 3:1 where applicable.
Verify both themes and all interactive states, including errors and loading announcements.
Verify text resizing to 200%, text spacing overrides, and reflow at 320 CSS pixels; also check the coursework's 375px layout.
Evaluate WCAG 2.2 additions including focus not obscured and minimum target size of 24 by 24 CSS pixels or documented criterion exceptions.
Errors identify affected inputs and provide understandable correction guidance. Status messages are available to assistive technology.
Automated scans support manual inspection; Lighthouse 100 alone does not establish WCAG conformance.
M2 — Keyboard
All enabled interactive controls are reachable in a logical order using Tab and Shift+Tab.
Links activate with Enter; buttons support Enter and Space; normal text-entry keys keep their native behavior.
The skip-link becomes visible on focus, reaches main content, and permits continued navigation.
Focus remains visible and unobscured. Hidden project states contain no reachable controls.
Retrying after empty/error must not leave focus on a hidden or removed element.
Users can move away from every control without a mouse. Do not add a focus trap to this page.
If future UI requires modal containment, it must provide an accessible close action and restore focus; that feature is outside this base scope.
M3 — CSP
Zero inline HTML event handler attributes in source and runtime DOM, including on dynamically created elements.
External event listeners preserve all behavior. No javascript: URLs, eval, Function-based execution, or string-based timers.
Inventory the meaning of strict CSP before approval of this milestone: a restrictive same-origin policy without unsafe-inline or unsafe-eval is the proposed minimum for this static base. If the instructor requires nonce/hash-based strict CSP, adjust the contract before implementation.
Prefer an enforced HTTP response header; restrict scripts and styles to required sources, block objects, restrict base URIs and form destinations, and restrict framing through headers.
Keep script-src-attr and style-src-attr restrictive where supported; allow no unnecessary wildcard origins. Decide whether the data: favicon requires a narrowly scoped image exception or a local replacement.
A meta policy cannot enforce every header directive, including frame-ancestors; document fallback limitations rather than claiming equivalent protection.
A working page with no console errors does not prove enforcement: verify intentional disallowed content is blocked.
M4 — Lighthouse
Target score: 100 as stated in the HW1 screenshot. Confirm graded categories and required run configuration; no milestone pass until this ambiguity is resolved and evidence matches it.
Record all reported scores and relevant metrics, including LCP and CLS, with run settings. Preserve the original baseline report.
Optimize only measured problems. The simulated delay must not be removed without explaining its effect on the coursework demonstration.
Final reports correspond to the submitted source state and served environment.
Recheck M1–M3 after optimizations. Do not round lower scores up or substitute a different test configuration silently.
6. Verification methods
Area	Method	Evidence to provide
Source review	Inspect all HTML/CSS/JS, dynamically created nodes, and Git diff.	Findings with file/element references; staged diff.
Semantics	Browser Accessibility tree; HTML validation; screen-reader inspection.	Landmark/name screenshots and validation output.
WCAG coverage	Criterion applicability matrix plus manual and automated audit.	Criterion, state, result, method, evidence, and exception rationale.
Contrast	DevTools contrast inspection or contrast calculator on actual rendered foreground/background pairs.	Ratios and screenshot identifying theme, element, and state.
Layout	Browser responsive mode at 320px/375px and desktop; zoom and text spacing overrides.	Screenshots and overflow observations.
Announcements	Screen reader, such as NVDA with Chrome, for project and form status/error changes.	Recorded observations or short video, including tested state.
Keyboard	Mouse-free Tab/Shift+Tab/Enter/Space tests through every state.	Focus-order log or short screen recording.
CSP	Network response headers, page policy, Console violations, temporary disallowed-content probes, source/runtime handler scan.	Header/policy capture, blocked probe evidence, functional regression results.
Lighthouse	Audit a page served over HTTP/HTTPS, not a file URL; save HTML/JSON reports.	Full report plus settings, date, URL, and source commit.
Commit isolation	git diff --cached and git show --stat; review actual changed files.	Commit hash and focused diff.
Suggested project test routes: default page, ?projects=empty, and ?projects=error. The first retry should lead to data in the current simulator. Test contact with blank fields, invalid email, whitespace-only text, and valid inputs. Check both themes and storage-unavailable behavior.

Temporary CSP probes must not remain in submitted production code.

7. Progress and evidence register
Status vocabulary: Planned, In progress, Source reviewed, Awaiting verification, Passed, Failed, Not applicable.

Passed is permitted only after the student supplies actual evidence matching the current implementation. Not applicable requires a reason. Reopen affected results after later changes.

Work item	Current status	Evidence / limitation
Supplied five-file baseline	Source reviewed	ZIP source inspected on 2026-10-14; no runtime execution.
HW1 requirement screenshot	Source reviewed	Four mandatory milestones, minimum four commits, Lighthouse 100 target.
P0.1 Plan	Drafted	This document; student review pending.
P0.2 Save and commit	Planned	No student commit evidence supplied.
M1.1–M1.4	Planned / Not tested	No WCAG matrix or browser evidence supplied.
M2.1–M2.3	Planned / Not tested	No keyboard recording or focus-order evidence supplied.
M3.1–M3.4	Planned / Not tested	No delivered-header or CSP enforcement evidence supplied.
M4.1–M4.3	Planned / Not tested	No Lighthouse report supplied; categories/configuration pending clarification.
For each future check, record:

Check ID / criterion	Subtask	Theme / scenario / viewport	Method and tool version	Expected result	Actual result	Status	Evidence path or link	Source commit / date
To be recorded	—	—	—	—	Not run	Planned	None	—
Store real evidence in an evidence/ directory if appropriate. Do not create fabricated screenshots, reports, or commit hashes.

8. AI assistance disclosure
The existing portfolio base was developed during earlier exercise practice with AI assistance, as disclosed by the student.

ChatGPT assisted with reviewing the supplied source and drafting this HW1 work breakdown, contracts, verification plan, and proposed commit messages. No implementation source was modified during this planning step.

Future assistance must remain limited to one isolated subtask at a time. The student reviews changes, performs verification, supplies evidence, and commits each completed task separately.

Actual AI errors or unsuccessful suggestions: Record only when encountered, with diagnostic evidence and the corrected solution. Do not invent failure cases.
Student responsibility: Understand and explain each change and its Git history.
### M3.1 — CSP resource inventory and contract

Development URL: http://127.0.0.1:5501/index.html

Source inventory:
- Stylesheet: ./styles.css
- Scripts: ./theme.js, ./projects.js, ./contact.js
- Favicon: data: URL
- Project links: external GitHub navigation
- Contact form: frontend validation only; no message submission
- No inline event handlers observed in the reviewed source
- Delivered CSP and runtime behavior: Not tested

Planned policy:
- Allow only required local scripts and styles.
- Disallow inline event handlers and dynamic code evaluation.
- Block plugins, unexpected network connections, and form submission.
- Restrict base URLs and framing.
- Verify policy enforcement and all existing interactions.

CSP delivery method: Pending hosting selection.
Status: Planned; not passed.