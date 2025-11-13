import React from "react";
import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <div className="relative p-4">
      {/* TODO: put some ema photos here and there */}
      <h1 className="text-2xl md:text-3xl font-bold z-10">Ema (絵馬)</h1>
      <p className="mt-2 text-base md:text-lg">
        Ema (絵馬) are traditional wooden plaques found at Shinto shrines in
        Japan, where visitors write their prayers, wishes, or messages. These
        plaques often feature beautiful illustrations and are hung up at the
        shrine, symbolizing the hopes and desires of the individuals who created
        them.
      </p>
      <Image
        src="/shrine.png"
        alt="Japanese Shrine"
        width={300}
        height={300}
        className="float-left mr-4 mt-4 rounded-sm"
      />
      <h2 className="text-xl mt-4 md:text-2xl">Summary of Ema (絵馬)</h2>
      <p className="mt-2 text-base md:text-lg">
        <strong>What It Is:</strong> Ema are small wooden boards, typically
        rectangular, used in Shinto practices as a medium for expressing wishes
        and prayers. Each Ema is inscribed with the hopes of the individual,
        often accompanied by an artistic depiction related to the deity
        worshipped at the shrine.
      </p>

      <p className="text-base md:text-lg">
        Visitors write their personal prayers or wishes on the Ema, hoping for
        blessings or guidance from the kami (deities). Ema serve as a connection
        between the spiritual and physical worlds, allowing individuals to
        communicate their desires to the divine.
      </p>

      <h2 className="text-xl mt-4 md:text-2xl">What It Does:</h2>
      <ul className="list-disc list-inside mt-2 text-base md:text-lg">
        <Image
          src="/ema-cover.png"
          alt="Ema plaques"
          width={300}
          height={300}
          className="float-right ml-4 mb-4 rounded-sm"
        />
        <li>
          <strong>Express Wishes:</strong> Visitors write their personal prayers
          or wishes on the Ema, hoping for blessings or guidance from the kami
          (deities).
        </li>
        <li>
          <strong>Cultural Significance:</strong> Ema serve as a connection
          between the spiritual and physical worlds, allowing individuals to
          communicate their desires to the divine.
        </li>
        <li>
          <strong>Artistic Display:</strong> The plaques are often adorned with
          intricate artwork, ranging from traditional motifs to modern designs,
          making them not only spiritual objects but also pieces of art.
        </li>
      </ul>
      <h2 className="text-xl mt-4 md:text-2xl">Where to Find It:</h2>
      <p className="mt-2 text-base md:text-lg">
        Ema can be found at Shinto shrines throughout Japan. When visiting a
        shrine, individuals can purchase Ema from the shrine&apos;s shop,
        usually for a small fee. After writing their wishes, they hang the Ema
        on designated racks or trees within the shrine grounds, where they
        remain until they are collected by the shrine staff, often during
        special ceremonies.
      </p>
      <p className="mt-2 text-base md:text-lg">
        Ema are a rich part of Japanese cultural heritage, embodying the hopes
        and prayers of countless individuals seeking connection with the divine.
      </p>
      <div className="absolute top-0 left-0 h-full w-full bg-amber-600 opacity-20 -z-10"></div>
    </div>
  );
};

export default AboutPage;
