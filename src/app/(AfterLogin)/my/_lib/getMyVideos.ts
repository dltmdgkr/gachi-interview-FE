import customFetcher from "@/lib/utils/customFetcher";

export default async function getMyVideos({ userId }: { userId: number }) {
  try {
    const { response, data } = await customFetcher(`/user/${userId}/videos`);

    if (!response?.ok) {
      throw new Error("Failed to fetch data");
    }

    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
