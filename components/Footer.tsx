import Image from 'next/image';
import Link from 'next/link';

import { FooterLinks } from '@/constants';

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <section className="flexStart footer">
    <div className="flex flex-col gap-12 w-full">
      <div className="flex items-start flex-col">
        <Image src="/logo.svg" width={116} height={38} alt="logo" />

        <p className="text-start text-sm font-normal mt-5 max-w-xs">
          the world&apos;s leading community for creatives to share, grow, and get hired.
        </p>
      </div>
      <div className="flex flex-wrap gap-12">
        <FooterColumn title={FooterLinks[0].title} links={FooterLinks[0].links} />

        <div className="flex-1 flex flex-col gap-4">
          <FooterColumn title={FooterLinks[1].title} links={FooterLinks[1].links} />
          <FooterColumn title={FooterLinks[2].title} links={FooterLinks[2].links} />
        </div>

        <FooterColumn title={FooterLinks[3].title} links={FooterLinks[3].links} />

        <div className="flex-1 flex flex-col gap-4">
          <FooterColumn title={FooterLinks[4].title} links={FooterLinks[4].links} />
          <FooterColumn title={FooterLinks[5].title} links={FooterLinks[5].links} />
        </div>

        <FooterColumn title={FooterLinks[6].title} links={FooterLinks[6].links} />
      </div>
    </div>

    <div className="flexBetween footer_copyright">
      <p>@ 2023 Dribbble. All rights reserved</p>
      <p className="text-gray">
        <span className="text-black font-semibold">14,057</span> projects submitted
      </p>
    </div>
  </section>
);

export default Footer;
