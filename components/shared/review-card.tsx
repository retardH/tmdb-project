import React from 'react';
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
            <div className="flex items-center rounded-md border-[0.5px] border-slate-800/80 p-1">
              <RatingStar width={22} height={22} />
              <span className="text-sm">{vote}.0</span>
            </div>
            <span className="text-sm text-slate-400">
              Written on {formatDate(createdAt)}
            </span>
          </div>
        </div>
      </header>
      <div className="mt-4">
        <p className="text-sm text-slate-200 md:text-base">{content}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
