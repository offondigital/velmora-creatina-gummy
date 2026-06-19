import pages from "../../data/seo-pages.json";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = pages.find((item) => item.slug === slug);

  if (!page) {
    return {
      title: "Página não encontrada",
    };
  }

  return {
    title: page.title,
    description: page.metaDescription,

    alternates: {
    canonical: `https://creatinagummy.com.br/${page.slug}`,
  },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = pages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  const content = page as any;
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: page.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
        lineHeight: "1.8",
      }}
    >
      <h1>{page.h1}</h1>

      <p>{page.intro}</p>

      {content.section1Title && (
        <section style={{ marginTop: "40px" }}>
          <h2>{content.section1Title}</h2>
          <p>{content.section1Content}</p>
        </section>
      )}

      {content.section2Title && (
        <section style={{ marginTop: "40px" }}>
          <h2>{content.section2Title}</h2>
          <p>{content.section2Content}</p>
        </section>
      )}

      {content.section3Title && (
        <section style={{ marginTop: "40px" }}>
          <h2>{content.section3Title}</h2>
          <p>{content.section3Content}</p>
        </section>
      )}

      {content.section4Title && (
        <section style={{ marginTop: "40px" }}>
          <h2>{content.section4Title}</h2>
          <p>{content.section4Content}</p>
        </section>
      )}

      <section style={{ marginTop: "40px" }}>
        <h2>Benefícios</h2>

        <ul>
          {page.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Perguntas frequentes</h2>

        {page.faq.map((item) => (
          <div
            key={item.question}
            style={{ marginBottom: "24px" }}
          >
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Conteúdos relacionados</h2>

        <ul>
          {page.internalLinks.map((slug) => {
            const related = pages.find((p) => p.slug === slug);

            if (!related) return null;

            return (
              <li key={slug}>
                <Link href={`/${slug}`}>{related.title}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}