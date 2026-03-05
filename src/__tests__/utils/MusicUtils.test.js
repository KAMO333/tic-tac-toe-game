import { randomizeIndex } from "../../utils/MusicUtils/index";

describe("Music Utils: randomizeIndex", () => {
  const mockPlaylist = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3",
    "song4.mp3",
    "song5.mp3",
  ];

  test("should return a number within the playlist range", () => {
    const index = randomizeIndex(mockPlaylist);
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(mockPlaylist.length);
  });

  test("should return 0 for a playlist with one item", () => {
    const singleItemPlaylist = ["only-one.mp3"];
    expect(randomizeIndex(singleItemPlaylist)).toBe(0);
  });

  test("should return an integer", () => {
    const index = randomizeIndex(mockPlaylist);
    expect(Number.isInteger(index)).toBe(true);
  });
});
