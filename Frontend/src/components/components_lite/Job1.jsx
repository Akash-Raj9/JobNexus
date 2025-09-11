
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const Job1 = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-6 rounded-lg shadow-lg bg-white border border-gray-200 flex flex-col justify-between h-full">
      <div>
        <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>

        <div className="flex items-center gap-3 mb-4">
          <Avatar className="w-12 h-12 border border-gray-300">
            <AvatarImage src={job?.company?.logo} alt={`${job?.company?.name} logo`} />
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{job?.company?.name}</h2>
            <p className="text-sm text-gray-500">India</p>
          </div>
        </div>

        <h1 className="font-extrabold text-xl text-gray-800 mb-3 leading-snug">{job?.title}</h1>

        <p className="text-sm text-gray-600 mb-6 line-clamp-3">{job?.description}</p>

        <div className="flex flex-wrap gap-3">
          <Badge className="text-blue-700 font-semibold" variant="ghost">
            {job?.position} Positions
          </Badge>
          <Badge className="text-red-600 font-semibold" variant="ghost">
            {job?.jobType}
          </Badge>
          <Badge className="text-purple-700 font-semibold" variant="ghost">
            {job?.salary}
          </Badge>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="flex-grow"
        >
          Details
        </Button>
      </div>
    </div>
  );
};

export default Job1;
