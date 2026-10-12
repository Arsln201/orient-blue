import {
  ArrowRight,
  CircleDot,
} from "lucide-react";

import {
  Button,
  Card,
  Container,
  Divider,
  Eyebrow,
  Grid,
  Heading,
  Section,
  TextBlock,
} from "@/components/ui";

export default function Home() {
  return (
    <main>
      {/* =====================================================
          EXISTING HERO — PRESERVED
          ===================================================== */}

      <Section className="ob-section-dark">
        <Container>
          <div className="max-w-[1100px]">
            <Eyebrow>Orient Blue / Engineering Systems</Eyebrow>

            <Heading level={1} className="!text-white">
              Precision built
              <br />
              for industry.
            </Heading>

            <TextBlock
              size="large"
              className="mt-8 max-w-[680px] !text-white/75"
            >
              A typography and layout foundation designed for a
              premium international engineering and technology
              company.
            </TextBlock>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#system">
                Explore the system
              </Button>

              <Button href="#principles" variant="light">
                Design principles
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* =====================================================
          PHASE 7 — WHO WE ARE
          ===================================================== */}

      <section
        id="who-we-are"
        className="ob-who-we-are"
        aria-labelledby="who-we-are-title"
      >
        {/* Premium transition */}
        <div
          className="ob-who-transition"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>

        <Container>
          <div className="ob-who-grid">
            {/* Editorial content */}

            <div className="ob-who-content">
              <div className="ob-who-eyebrow">
                <span className="ob-who-eyebrow-line" />
                <span>WHO WE ARE</span>
              </div>

              <h2
                id="who-we-are-title"
                className="ob-who-title"
              >
                Building technical solutions
                <br />
                <span>for modern industry.</span>
              </h2>

              <div className="ob-who-rule" />

              <p className="ob-who-lead">
                Orient Blue brings together technical products,
                engineering expertise and practical solutions
                for industrial applications.
              </p>

              <p className="ob-who-description">
                The company story, capabilities and positioning
                will be developed here using client-approved
                information. This section intentionally avoids
                unverified claims while establishing a serious
                technical corporate presence.
              </p>

              <div className="ob-who-placeholder">
                <CircleDot
                  size={15}
                  strokeWidth={1.5}
                />

                <span>
                  Client-approved company profile content to
                  be supplied.
                </span>
              </div>
            </div>

            {/* Technical visual */}

            <div
              className="ob-who-visual"
              aria-hidden="true"
            >
              <div className="ob-who-grid-lines" />

              <div className="ob-who-frame">
                <span className="ob-who-corner ob-who-corner-tl" />
                <span className="ob-who-corner ob-who-corner-tr" />
                <span className="ob-who-corner ob-who-corner-bl" />
                <span className="ob-who-corner ob-who-corner-br" />

                <span className="ob-who-axis ob-who-axis-x" />
                <span className="ob-who-axis ob-who-axis-y" />

                <span className="ob-who-node ob-who-node-1" />
                <span className="ob-who-node ob-who-node-2" />
                <span className="ob-who-node ob-who-node-3" />
                <span className="ob-who-node ob-who-node-4" />

                <span className="ob-who-link ob-who-link-1" />
                <span className="ob-who-link ob-who-link-2" />
                <span className="ob-who-link ob-who-link-3" />

                <div className="ob-who-core">
                  <span className="ob-who-core-ring" />
                  <span className="ob-who-core-point" />
                </div>
              </div>

              <div className="ob-who-visual-top">
                <span>01</span>
                <span>TECHNICAL SYSTEM</span>
              </div>

              <div className="ob-who-visual-bottom">
                <span>ORIENT BLUE</span>
                <span>ENGINEERING / PRODUCTS / SOLUTIONS</span>
              </div>
            </div>
          </div>

          {/* Bottom editorial strip */}

          <div className="ob-who-footer">
            <div className="ob-who-footer-statement">
              <span>01</span>

              <p>
                A technical foundation designed to connect
                products, engineering and industrial
                applications.
              </p>
            </div>

            <a
              href="#system"
              className="ob-who-footer-link"
            >
              <span>Explore the foundation</span>

              <ArrowRight
                size={16}
                strokeWidth={1.7}
              />
            </a>
          </div>
        </Container>
      </section>

      {/* =====================================================
          EXISTING INTRODUCTION — PRESERVED
          ===================================================== */}

      <Section id="system" className="ob-section-white">
        <Container>
          <div className="ob-editorial-grid">
            <div>
              <Eyebrow>01 / Typography</Eyebrow>

              <Heading level={2}>
                Large type.
                <br />
                Clear intent.
              </Heading>
            </div>

            <div className="pt-2">
              <TextBlock size="large">
                Orient Blue communicates with confidence through
                large editorial typography, short statements and
                generous whitespace.
              </TextBlock>

              <div className="mt-8">
                <TextBlock>
                  Every element has a defined relationship to the
                  content around it. Nothing is compressed simply
                  to fill available space.
                </TextBlock>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =====================================================
          EXISTING CARDS — PRESERVED
          ===================================================== */}

      <Section className="ob-section-ice">
        <Container>
          <Eyebrow>02 / Layout</Eyebrow>

          <Heading level={2}>
            Structured for
            <br />
            clarity.
          </Heading>

          <div className="mt-12">
            <Grid columns={3}>
              <Card>
                <div className="ob-number">01</div>

                <Heading level={4} className="mt-6">
                  Consistent width
                </Heading>

                <TextBlock size="small" className="mt-4">
                  A controlled content width keeps every major
                  section aligned across the experience.
                </TextBlock>
              </Card>

              <Card>
                <div className="ob-number">02</div>

                <Heading level={4} className="mt-6">
                  Generous spacing
                </Heading>

                <TextBlock size="small" className="mt-4">
                  Responsive spacing gives the desktop experience
                  room to breathe while remaining intentional on
                  mobile.
                </TextBlock>
              </Card>

              <Card>
                <div className="ob-number">03</div>

                <Heading level={4} className="mt-6">
                  Precise hierarchy
                </Heading>

                <TextBlock size="small" className="mt-4">
                  Eyebrows, headings, body copy and actions follow
                  a predictable visual rhythm.
                </TextBlock>
              </Card>
            </Grid>
          </div>
        </Container>
      </Section>

      {/* =====================================================
          EXISTING PRINCIPLES — PRESERVED
          ===================================================== */}

      <Section id="principles" className="ob-section-white">
        <Container>
          <div className="max-w-[900px]">
            <Eyebrow>03 / Principles</Eyebrow>

            <Heading level={2}>
              International.
              <br />
              Technical.
              <br />
              Precise.
            </Heading>

            <div className="mt-10">
              <Divider />
            </div>

            <div className="mt-10">
              <TextBlock size="large">
                The system is designed to scale from a cinematic
                homepage statement to detailed technical product
                information without losing its identity.
              </TextBlock>
            </div>
          </div>
        </Container>
      </Section>

      {/* =====================================================
          EXISTING CTA — PRESERVED
          ===================================================== */}

      <Section className="ob-section-midnight">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[800px]">
              <Eyebrow>04 / Foundation</Eyebrow>

              <Heading level={2} className="!text-white">
                Built to scale.
              </Heading>

              <TextBlock
                size="large"
                className="mt-6 !text-white/70"
              >
                The same foundation will support products,
                applications, industries, company information and
                technical content.
              </TextBlock>
            </div>

            <div className="shrink-0">
              <Button href="/capabilities" variant="light">
                Continue
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
