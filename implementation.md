IMI — component implementation order
0. Existing foundation — DONE

You already have:

app/
├── assets/
├── components/
├── data/
├── layouts/
├── pages/
└── app.vue

assets/css/
├── tokens.css
├── components.css
└── main.css

And:

Nuxt
Tailwind
global tokens
global CSS
data layer
app shell

Don't touch this again unless something actually breaks.

1. AppHeader.vue

Purpose: navigation + estimate CTA.

You've already started this, but because we changed the visual direction, make the final version:

IMI          [ SERVICES  PROJECTS  ABOUT ]          [ESTIMATE]
                       ↑
                  centred pill
Required
Logo/brand
Desktop nav
Active pill
Estimate CTA
Mobile menu
Anchor navigation
Don't build
CMS integration
scroll spy
fancy animation system

Get the static version working first.

2. HeroSplit.vue

This is the first actual homepage section.

Your content:

┌──────────────────────┬──────────────────────┐
│                      │                      │
│  EXTENSIONS &        │                      │
│  RENOVATIONS         │      PHOTO / VIDEO   │
│                      │                      │
│  Short statement     │                      │
│                      │                      │
│  [GET AN ESTIMATE]   │                      │
│                      │                      │
└──────────────────────┴──────────────────────┘
Required
Eyebrow
H1
Description
Primary CTA
Secondary/contact action
One hero media item
Data

Pull the content from:

siteData.hero

This is where we test whether the data system actually works.

3. Marquee.vue

Tiny component.

EXTENSIONS · RENOVATIONS · REFURBISHMENTS · STEVENAGE ·
Required
Repeating text
CSS animation
Reduced-motion fallback

Nothing more.

This is a good candidate for reuse across future Loba sites.

4. StatementSection.vue

Your big statement.

Something like:

WE BUILD SPACES
THAT FEEL LIKE
THEY BELONG.

Then a small supporting paragraph.

Required
Eyebrow
Large heading
Supporting copy

No cards.

No unnecessary components.

5. ServicesStrip.vue

This is your borderless 4-strip What We Do section.

01  EXTENSIONS                    ↗
──────────────────────────────────
02  RENOVATIONS                   ↗
──────────────────────────────────
03  REFURBISHMENTS                ↗
──────────────────────────────────
04  GENERAL BUILDING              ↗
Required
Service number
Service title
Description
Arrow
Hover interaction
Data
siteData.services

This is our first genuinely reusable data-driven component.

6. AlternatingContent.vue

Your alternating image/text section.

Desktop:

IMAGE          TEXT
TEXT           IMAGE

But don't make two components.

Make one:

<AlternatingFeature />

with a prop/data value determining direction.

Required
{
  eyebrow,
  title,
  description,
  image,
  reverse
}

This is another important pattern to learn:

One component, different composition through data.

7. PriceCalculator.vue

This is the important conversion component.

Don't make it a giant SaaS application.

Start with:

WHAT ARE YOU LOOKING TO BUILD?

[ Extension ]

WHAT TYPE OF PROPERTY?

[ Semi-detached ]

APPROXIMATE SIZE?

[ Small ] [ Medium ] [ Large ]

                    [ GET ESTIMATE ]
Build it in layers

Phase 1

Static options.

Phase 2

Vue state.

const projectType = ref(...)

Phase 3

Calculate an indicative range.

Phase 4

CTA:

Get my estimate →

which sends them toward WhatsApp/contact.

That is enough for V1.

8. ProjectShowcase.vue

Only because you have limited photography.

Don't build a huge portfolio grid.

Use the best 2–3 projects.

PROJECTS

┌────────────────────────────────────┐
│                                    │
│             IMAGE                  │
│                                    │
└────────────────────────────────────┘

Extension — Stevenage
Data
siteData.projects

And this is where the Sanity experiment becomes useful.

Later:

Sanity
 ↓
Projects
 ↓
ProjectShowcase
9. ProjectVideo.vue

You said you have one video.

Use it.

Don't build a generic video library.

Just:

large cinematic video
        ↓
short supporting statement

It can potentially be merged into the project showcase later if we find that cleaner.

10. FinalCTA.vue

This is where the site actually asks for the business.

READY TO TALK
ABOUT YOUR PROJECT?

[ GET AN ESTIMATE ]   [ WHATSAPP ]
Required
Heading
Short copy
Estimate CTA
WhatsApp CTA

Keep it extremely simple.

11. AppFooter.vue

Minimal.

IMI CONSTRUCTION

Extensions
Renovations
Refurbishments

Stevenage & surrounding areas

WhatsApp
Email
Phone

© 2026 IMI Construction

Done.

The actual minimum

If we're really ruthless, the site technically only needs:

AppHeader
HeroSplit
Marquee
StatementSection
ServicesStrip
AlternatingFeature
PriceCalculator
FinalCTA
AppFooter

That's 9 components.

The project showcase/video can be folded into AlternatingFeature if necessary.

Build order for us

Don't build all nine in one giant session.

Do this:

1. AppHeader
       ↓
2. HeroSplit
       ↓
3. Marquee
       ↓
4. StatementSection
       ↓
5. ServicesStrip
       ↓
6. AlternatingFeature
       ↓
7. PriceCalculator
       ↓
8. FinalCTA
       ↓
9. AppFooter

Then:

Sanity
   ↓
replace local data
   ↓
test editing IMI content