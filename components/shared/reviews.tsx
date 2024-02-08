import ReviewCard from '@/components/shared/review-card';
import { ReviewsResponse } from '@/lib/types';
import { useReviews } from '@/services/reviews';
import React from 'react';

interface Props {
  id: number;
  type: 'movie' | 'tv';
}
const ReviewsSection: React.FC<Props> = ({ id, type }) => {
  const { data, isLoading } = useReviews<ReviewsResponse>(id, type);
  return (
    <section className="wrapper mb-8 md:mb-12">
      <h2 className="mb-4 text-lg md:text-xl">Reviews</h2>
      <div className="flex flex-col gap-6">
        {data &&
          data?.results.slice(0, 5).map((r) => {
            return (
              <ReviewCard
                key={r.id}
                avatarPath={r.author_details.avater_path}
                username={r.author_details.username}
                createdAt={r.created_at}
                content={r.content}
                vote={r.author_details.rating}
              />
            );
          })}
      </div>
    </section>
  );
};

export default ReviewsSection;
