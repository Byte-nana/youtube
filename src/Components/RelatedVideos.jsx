import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext.jsx';
import VideoCard from './VideoCard.jsx';

export default function RelatedVideos({ channelId }) {
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: playlists,
  } = useQuery({
    queryKey: ['playlists', channelId],
    queryFn: () => {
      return youtube.fetchPlaylists(channelId);
    },
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div>
      {isLoading && <p>Loading...💃</p>}
      {error && <p>Something is wrong😑</p>}
      {playlists && (
        <ul>
          {playlists.map((video) => (
            <VideoCard key={video.id} video={video} type='list' />
          ))}
        </ul>
      )}
    </div>
  );
}
