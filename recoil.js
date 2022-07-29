import { atom } from "recoil";
export const dataState = atom({
  key: "dataList",
  default: [
    {
      id: 1,
      name: "Joseph",
      isLiked: true,
      subName: "Universicy of Toronto",
      tagName: "Ringle LIVE",
      title: "함께 읽어요, H마트에서 울다",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      id: 2,
      name: "Jinyoung",
      isLiked: false,
      subName: "Ringle",
      tagName: "Ringle LIVE",
      title: "함께 읽어요, H마트에서 울다",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      id: 3,
      name: "Moorea",
      isLiked: false,
      subName: "Ringle",
      tagName: "Ringle LIVE",
      title: "함께 읽어요, H마트에서 울다",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      id: 4,
      name: "Joseph",
      isLiked: false,
      subName: "Ringle",
      tagName: "Ringle LIVE",
      title: "함께 읽어요, H마트에서 울다",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      id: 5,
      name: "Ringle Team",
      isLiked: false,
      subName: "Ringle",
      tagName: "Ringle LIVE",
      title: "함께 읽어요, H마트에서 울다",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
  ],
});

export default dataState;
