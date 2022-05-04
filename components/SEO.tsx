import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function SEO({
    title,
    description,
    imgUrl = null,
    authorUsername = null,
    publishedDate = null,
    noindex = false,
}: {
    title?: string;
    description?: string;
    imgUrl?: string;
    authorUsername?: string;
    publishedDate?: string;
    noindex?: boolean;
}) {
    const router = useRouter();
    const fullTitle = title;

    let openGraph = {
        title: fullTitle,
        description: description,
        url: "https://planned-obsolescence.vercel.app/" + router.asPath,
        images: imgUrl ? [{ url: imgUrl }] : [{ url: "https://planned-obsolescence.vercel.app/defaultImage.png" }],
    };

    let twitter = {
        site: "@laurgao",
        cardType: imgUrl ? "summary_large_image" : "summary",
    };

    return <NextSeo title={fullTitle} description={description} openGraph={openGraph} twitter={twitter} noindex={noindex} />;
}
