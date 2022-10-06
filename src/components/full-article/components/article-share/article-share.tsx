import styled from '@emotion/styled';

import { getFont } from '../../../../helpers';
import { getMediaquery } from '../../../../helpers';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

export interface ArticleShareSocialNetworksProp {
  href: string;
  icon: StaticImageData;
  alt: string;
  getUrl: (baseUrl: string) => string;
}

export interface ArticleShareProps {
  socialNetworks: ArticleShareSocialNetworksProp[];
}

export const ArticleShare: NextPage<ArticleShareProps> = ({ socialNetworks }) => {
  const { asPath } = useRouter();

  return (
    <ShareContainer>
      <ShareWord>Поделиться:</ShareWord>
      <SocialNetworks>
        {socialNetworks.map((item, index) => (
          <SocialNetworkIcon
            style={{ backgroundImage: `url(${item.icon.src})` }}
            key={index}
            href={item.getUrl(process.env.BASEPATH + asPath)}
          />
        ))}
      </SocialNetworks>
    </ShareContainer>
  );
};

const ShareContainer = styled.div`
  border-top: 4px solid rgba(25, 80, 132, 0.2);
  padding-top: 34px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${getMediaquery('sm')} {
    padding-right: 30px;
  }
  ${getMediaquery('lg')} {
    padding-right: 0px;
  }
`;
const ShareWord = styled.p`
  ${getFont('medium')};
  font-size: 18px;
  margin-right: 20px;
`;
const SocialNetworks = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`;
const SocialNetworkIcon = styled.a`
  width: 30px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  border: transparent;
`;
