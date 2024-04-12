import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AiOutlineLike } from "react-icons/ai";

const VideoList = [
  {
    userId: 1,
    userName: "권우현",
    videoId: 555,
    videoLink: "idrive 올린 링크",
    videoTitle: "면접 연습 영상",
    time: "2024-04-01 15:41:00",
    updateTime: null,
    numOfLike: 20,
    tags: ["삼성", "네이버", "카카오", "BE"],
    thumbnailUrl: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
  },
  {
    userId: 2,
    userName: "권우현",
    videoId: 666,
    videoLink: "idrive 올린 링크",
    videoTitle: "면접 연습 영상2",
    time: "2024-04-01 15:42:00",
    updateTime: null,
    numOfLike: 15,
    tags: ["삼성", "네이버", "카카오", "BE"],
    thumbnailUrl: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
  },
  {
    userId: 3,
    userName: "권우현",
    videoId: 777,
    videoLink: "idrive 올린 링크",
    videoTitle: "면접 연습 영상3",
    time: "2024-04-01 15:43:00",
    updateTime: null,
    numOfLike: 10,
    tags: ["삼성", "네이버", "카카오", "BE"],
    thumbnailUrl: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
  },
  {
    userId: 4,
    userName: "권우현",
    videoId: 888,
    videoLink: "idrive 올린 링크",
    videoTitle: "면접 연습 영상4",
    time: "2024-04-01 15:44:00",
    updateTime: null,
    numOfLike: 5,
    tags: ["삼성", "네이버", "카카오", "BE"],
    thumbnailUrl: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
  },
  {
    userId: 5,
    userName: "권우현",
    videoId: 999,
    videoLink: "idrive 올린 링크",
    videoTitle: "면접 연습 영상5",
    time: "2024-04-01 15:45:00",
    updateTime: null,
    numOfLike: 0,
    tags: ["삼성", "네이버", "카카오", "BE"],
    thumbnailUrl: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
  },
  {
    userId: 6,
    userName: "권우현",
    videoId: 101010,
    videoLink: "idrive 올린 링크",
    videoTitle: "면접 연습 영상6",
    time: "2024-04-01 15:46:00",
    updateTime: null,
    numOfLike: 0,
    tags: ["삼성", "네이버", "카카오", "BE"],
    thumbnailUrl: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
  },
];

const Videos = () => {
  return (
    <div className="h-dvh w-full py-20 px-12">
      <div className="flex justify-between items-center w-full mb-8" style={{ gap: "1rem" }}>
        <input
          placeholder="Tag Filter"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <select
          className="flex h-10 w-32 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          defaultValue="최신순"
        >
          <option>최신순</option>
          <option>인기순</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {VideoList.map((video) => (
          <Card key={video.videoId} className="h-full">
            <CardHeader className="flex flex-row justify-between">
              <CardTitle className="text-lg font-semibold text-gray-800">
                {video.videoTitle}
              </CardTitle>
              <div className="flex items-center gap-2" style={{ gap: "0.5rem" }}>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="user"
                  className="w-4 h-4 rounded-full"
                />
                <div className="text-sm font-semibold">{video.userName}</div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center rounded-lg overflow-hidden">
                <img
                  src={video.thumbnailUrl}
                  alt="thumbnail"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {video.tags.map((tag) => (
                  <div key={tag} className="px-2 py-1 text-xs bg-gray-200 text-gray-800 rounded-md">
                    {tag}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-row items-center justify-between">
              <div className="text-sm text-muted-foreground">2일 전</div>
              <div className="flex items-center mt-2">
                <AiOutlineLike className="text-gray-500 mr-1" />
                <span className="text-gray-700 text-xs">{video.numOfLike}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Videos;
