import React from "react";

const ThreadDetails = ({
  message,
  imageSource,
  tags,
  name,
  time,
  views,
  likes,
  comments,
}) => {
  const displayTags = () => {
    return tags.map((val, index) => (
      <div className="bg-[#232a30] rounded-full text-white p-3" key={index}>
        {val}
      </div>
    ));
  };
  return (
    <div className="bg-[#262d34] w-5/6 h-52 rounded-xl">
      {/* paragraph */}
      <div className="text-white p-4">{message}</div>
      {/* tags */}
      <div className="flex gap-1">{displayTags()}</div>
      {/* username */}
      <div className="flex justify-between m-4 text-white">
        {/* profile */}
        <div className="flex gap-2">
          {/* img */}
          <div>
            <img src={imageSource} alt="img" />
          </div>
          {/* name and online status */}
          <div className="flex flex-col">
            <div>{name}</div>
            <div>{time}</div>
          </div>
        </div>
        {/* views */}
        <div>{views} Views</div>
        {/* likes */}
        <div>{likes} Likes</div>
        {/* comments */}
        <div>{comments} comments</div>
      </div>
    </div>
  );
};

export default ThreadDetails;
