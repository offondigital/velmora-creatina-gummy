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

      <h2>Benefícios</h2>

      <ul>
        {page.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>

      <h2>Perguntas frequentes</h2>

      {page.faq.map((item) => (
        <div key={item.question}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

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
    </main>
  );
}