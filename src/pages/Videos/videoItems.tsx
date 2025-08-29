import React from "react";

interface VideoItem {
  id: number;
  title: string;
  description: string;
  url: string;
  platform: "youtube" | "gdrive";
  videoId: string;
}

export const videoList: VideoItem[] = [
  {
    id: 1,
    title: "Lunatic-Hai Zunba Fragmovie Ana, Soldier, Zarya, Mcree ver.",
    description: "Fast-paced highlight reel featuring Zunba’s gameplay with Ana, Soldier, Zarya, and McCree.",
    url: "https://www.youtube.com/watch?v=dA2SirNptKw&ab_channel=%EC%95%A0%EB%82%98",
    platform: "youtube",
    videoId: "dA2SirNptKw",
  },
  {
    id: 2,
    title: "JJANU Madmovie",
    description: "Montage showcasing gameplay highlights of JJANU moments.",
    url: "https://www.youtube.com/watch?v=vlZpfCp51aI&ab_channel=%EC%95%A0%EB%82%98",
    platform: "youtube",
    videoId: "vlZpfCp51aI",
  },
  {
    id: 3,
    title: "[Kinetic Typo] DEANxCrushxJeff Bernat - What2do",
    description: "Dynamic kinetic typography animation synced to the track What2do by DEAN, Crush, and Jeff Bernat.",
    url: "https://www.youtube.com/watch?v=e3ZhGEWdti4&ab_channel=%EC%95%A0%EB%82%98",
    platform: "youtube",
    videoId: "e3ZhGEWdti4",
  },
  {
    id: 4,
    title: "2019 Yearbook Promotion Video: Macbook",
    description: "A promotional video for the 2019 yearbook themed around the concept of macbook.",
    url: "https://www.youtube.com/watch?v=LUIvrBO9bFY",
    platform: "youtube",
    videoId: "LUIvrBO9bFY",
  },
  {
    id: 5,
    title: "2018 Yearbook Promotion Video: Magazine",
    description: "A promotional video for the 2018 yearbook themed around the concept of magazine.",
    url: "https://www.youtube.com/watch?v=vTlY7khrnwg",
    platform: "youtube",
    videoId: "vTlY7khrnwg",
  },
  {
    id: 6,
    title: "2017 Yearbook Opening Video: Constellation",
    description: "A promotional video for the 2017 yearbook themed around the concept of constellation.",
    url: "https://www.youtube.com/watch?v=tJ9OJ78HcYQ&ab_channel=KISJYearbook",
    platform: "youtube",
    videoId: "tJ9OJ78HcYQ",
  },
  {
    id: 7,
    title: "2016 Yearbook Promotion Video: Hashtag",
    description: "A promotional video for the 2016 yearbook themed around the concept of hashtag.",
    url: "https://www.youtube.com/watch?v=e3ZhGEWdti4&ab_channel=%EC%95%A0%EB%82%98",
    platform: "youtube",
    videoId: "e3ZhGEWdti4",
  },
  {
    id: 8,
    title: "2019 Senior Adventure Trip: UDO",
    description: "Documentary-style video capturing the senior adventure trip to Udo Island in 2019.",
    url: "https://www.youtube.com/watch?v=S2pRxhS6yQ4",
    platform: "youtube",
    videoId: "S2pRxhS6yQ4",
  },
  {
    id: 9,
    title: "Jeju April 3rd Uprising and Massacre",
    description: "Educational video reflecting on Jeju’s April 3rd Uprising and its historical significance.",
    url: "https://www.youtube.com/watch?v=5dc5wOgdOyk",
    platform: "youtube",
    videoId: "5dc5wOgdOyk",
  },
  {
    id: 10,
    title: "Soul'd Out Concert Music Videos",
    description: "Music videos produced for the Soul’d Out concert, capturing performances and stage energy.",
    url: "https://www.youtube.com/watch?v=v05ZF0CjO6o&list=PLFpItIX_uk32OGv6eOTimvBqlV4Vha-Bf&index=1&ab_channel=GoldPastaOfficial",
    platform: "youtube",
    videoId: "v05ZF0CjO6o",
  },
  {
    id: 11,
    title: "[KISJ] Service Learning to Vietnam 2016: Class of 2019",
    description: "Video covering the service learning trip to Vietnam by the class of 2019.",
    url: "https://www.youtube.com/watch?v=yu7JviY1_PQ&ab_channel=%EC%95%A0%EB%82%98",
    platform: "youtube",
    videoId: "yu7JviY1_PQ",
  },
  {
    id: 12,
    title: "Hanguel-day Info Video",
    description: "Informative video introducing Hangul Day and its cultural and historical importance.",
    url: "https://www.youtube.com/watch?v=R-E0rfMFK-4&ab_channel=%EC%95%A0%EB%82%98",
    platform: "youtube",
    videoId: "R-E0rfMFK-4",
  },
];

export const VideoItems: React.FC = () => {
  const getThumbnail = (video: VideoItem) => {
    if (video.platform === "youtube") {
      return `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
    } else if (video.platform === "gdrive") {
      return `https://drive.google.com/thumbnail?id=${video.videoId}`;
    }
  };

  return (
    <div className="videos-grid">
      {videoList.map((video) => (
        <a
          key={video.id}
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="video-card"
        >
          <img
            src={getThumbnail(video)}
            alt={video.title}
            className="video-thumbnail"
          />
          <div className="video-overlay">
            <h3 className="video-name">{video.title}</h3>
            <p className="video-description">{video.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};
