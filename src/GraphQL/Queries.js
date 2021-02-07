import { gql } from "@apollo/client";

export const ALL_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
        status
        gender
        episode {
          episode
        }
        species
      }
    }
  }
`
/* export const ALL_CHARACTERS = gql`
query video($id: String!) {
  video(id: $id) {
    id
    category {
      id
      title
    }
    channel {
      id
      bannerImageUrl
      country
      description
      keywords
      madeForKids
      privacy
      publishedAt
      statistics {
        hiddenSubscriberCount
        subscriberCount
        videoCount
        viewCount
      }
      thumbnails {
        default {
          url
          width
          height
        }
        medium {
          url
          width
          height
        }
        high {
          url
          width
          height
        }
      }
      title
    }
    description
    contentDetails {
      duration
      dimension
      definition
      caption
      licensedContent
      projection
    }
    publishedAt
    statistics {
      commentCount
      dislikeCount
      likeCount
      viewCount
    }
    status {
      uploadStatus
      privacyStatus
      license
      embeddable
      publicStatsViewable
      madeForKids
    }
    tags
    thumbnails {
      standard {
        url
        width
        height
      }
      maxres {
        url
        width
        height
      }
    }
    title
  }
}
`; */
