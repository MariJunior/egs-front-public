import { gql } from '@apollo/client';

gql`
  query GetSocialRoles {
    socialRoles {
      id
      Name
      Description
      Icon {
        id
        width
        height
        url
      }
    }
  }
`;

gql`
  query GetApplications($start: Int, $limit: Int) {
    applications(
      start: $start
      limit: $limit
      where: { _or: [{ Category_null: true }, { Category_ne: "editors_choise" }] }
    ) {
      id
      Name
      ShortDescription
      Category
      Cover {
        id
        height
        width
        url
      }
      social_roles {
        id
        Name
        Description
        Icon {
          id
          width
          height
          url
        }
      }
      Logo {
        id
        width
        height
        url
      }
      ApplicationProperties {
        id
        Title
        Value
        Link
      }
      ApplicationLinks {
        __typename
        ... on ComponentApplicationLinkChatBotLink {
          id
          Link
        }
        ... on ComponentApplicationLinkAppStoreLink {
          id
          Link
        }
        ... on ComponentApplicationLinkHomepageLink {
          id
          Link
        }
        ... on ComponentApplicationLinkVkMiniAppLink {
          id
          Link
        }
        ... on ComponentApplicationLinkGooglePlayLink {
          id
          Link
        }
      }
    }
  }
`;

gql`
  query GetEditorsApplications {
    applications(where: { Category: "editors_choise" }) {
      id
      Name
      ShortDescription
      Category
      Cover {
        id
        height
        width
        url
      }
      social_roles {
        id
        Name
        Description
        Icon {
          id
          width
          height
          url
        }
      }
      Logo {
        id
        width
        height
        url
      }
      ApplicationProperties {
        id
        Title
        Value
        Link
      }
      ApplicationLinks {
        __typename
        ... on ComponentApplicationLinkChatBotLink {
          id
          Link
        }
        ... on ComponentApplicationLinkAppStoreLink {
          id
          Link
        }
        ... on ComponentApplicationLinkHomepageLink {
          id
          Link
        }
        ... on ComponentApplicationLinkVkMiniAppLink {
          id
          Link
        }
        ... on ComponentApplicationLinkGooglePlayLink {
          id
          Link
        }
      }
    }
  }
`;

gql`
  query GetAllApplication {
    applicationsCount(where: { _or: [{ Category_null: true }, { Category_ne: "editors_choise" }] })
  }
`;

gql`
  query GetApplication($id: ID!) {
    application(id: $id) {
      id
      Name
      ShortDescription
      Contacts {
        __typename
        ... on ComponentContactsContactEmail {
          id
          Title
          Email
        }
        ... on ComponentContactsContactPhone {
          id
          Title
          Phone
        }
      }
      Logo {
        id
        url
        width
        height
      }
      ApplicationProperties {
        id
        Title
        Value
        Link
      }
      ApplicationLinks {
        __typename
        ... on ComponentApplicationLinkChatBotLink {
          id
          Link
        }
        ... on ComponentApplicationLinkAppStoreLink {
          id
          Link
        }
        ... on ComponentApplicationLinkHomepageLink {
          id
          Link
        }
        ... on ComponentApplicationLinkVkMiniAppLink {
          id
          Link
        }
        ... on ComponentApplicationLinkGooglePlayLink {
          id
          Link
        }
      }
    }
  }
`;

gql`
  query GetPrimaryCards {
    primaryCard {
      Cards {
        __typename
        ... on ComponentCardsPrimaryCard {
          id
          Link
          Title
          Description
          Image {
            id
            width
            height
            url
          }
        }
      }
    }
  }
`;

gql`
  query GetPrimaryBanners {
    primaryBanners {
      id
      Title
      Link
      Description
      Image {
        url
        width
        height
      }
    }
  }
`;

gql`
  query GetNewestArticles($start: Int, $limit: Int) {
    newsArticles(sort: "published_at:desc", start: $start, limit: $limit) {
      id
      published_at
      Title
      ShortDescription
      Cover {
        id
        width
        height
        url
      }
    }
  }
`;

gql`
  query GetArticle($id: ID!) {
    newsArticle(id: $id) {
      id
      published_at
      Title
      Body
      Cover {
        url
        width
        height
      }
    }
  }
`;

gql`
  query GetSidebarArticles {
    newsArticles(sort: "published_at:desc", limit: 4) {
      id
      Title
      published_at
    }
  }
`;

gql`
  query GetFeaturedBanner {
    featuredBanner {
      primary_banner {
        id
        Title
        Link
        Description
        Image {
          id
          width
          height
          url
          alternativeText
        }
        Application {
          id
          Logo {
            url
            width
            height
            alternativeText
          }
        }
      }
    }
  }
`;
