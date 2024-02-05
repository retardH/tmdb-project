'use client';
import { TvShowsGeneralDetails } from '@/lib/types';
import { useTvShowGeneralDetails } from '@/services/tvShowDetails';
import { useParams } from 'next/navigation';
import React from 'react';
import BannerSection from '../movie-detail/banner';
import { imageUrlOriginal } from '@/lib/constants';

const TvShowDetailsPage = () => {
  const { id } = useParams();
  const { data: generalData, isLoading: isGeneralDataLoading } =
    useTvShowGeneralDetails<TvShowsGeneralDetails>(+id);

  const backdropPath = `${imageUrlOriginal}${generalData?.backdrop_path}`;
  const trailerId = generalData?.videos.results.find(
    (v) => v.type === 'Trailer',
  )?.key;
  return (
    <div>
      {generalData && (
        <section>
          <BannerSection
            type="Tv Show"
            title={generalData.name}
            tagline={generalData.tagline}
            voteAverage={generalData.vote_average.toFixed(1)}
            voteCount={generalData.vote_count}
            backdropImage={backdropPath}
            releaseDate={generalData.first_air_date}
            trailerId={trailerId}
          />
        </section>
      )}
    </div>
  );
};

export default TvShowDetailsPage;
