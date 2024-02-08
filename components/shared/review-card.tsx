import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { formatDate } from '@/lib/utils';
import { RatingStar } from '../icons';

interface Props {
  avatarPath: string | null;
  username: string;
  createdAt: string;
  content: string;
  vote: number;
}
const ReviewCard: React.FC<Props> = ({
  avatarPath,
  username,
  createdAt,
  content,
  vote,
}) => {
  const [showAllContent, setShowAllContent] = useState<boolean>(false);
  return (
    <div className="rounded-md border border-slate-800/50 p-2 md:p-4">
      <header className="flex items-center gap-2">
        <Avatar>
          {avatarPath && <AvatarImage src={avatarPath}></AvatarImage>}
          <AvatarFallback>
            {username.slice(0, 2).toLocaleUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h4 className="text-base font-semibold md:text-lg">{username}</h4>
          <div className="flex items-center gap-1">
            {vote && (
              <div className="flex items-center rounded-md border-[0.5px] border-slate-800/80 p-1">
                <RatingStar width={22} height={22} />
                <span className="text-sm">{vote.toFixed(1)}</span>
              </div>
            )}
            <span className="text-sm text-slate-400">
              Written on {formatDate(createdAt)}
            </span>
          </div>
        </div>
      </header>
      <div className="mt-4">
        <div
          className="inline-block text-sm text-slate-200 md:text-base"
          dangerouslySetInnerHTML={{
            __html: showAllContent
              ? content
              : content.substring(0, 410) + '...',
          }}
        ></div>
        {content.length > 450 && (
          <span
            role="button"
            className="cursor-pointer text-sm text-slate-100 underline underline-offset-2 transition-all hover:text-slate-400 md:text-base"
            onClick={() => setShowAllContent(!showAllContent)}
          >
            {showAllContent ? 'show less...' : 'show more...'}
          </span>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
