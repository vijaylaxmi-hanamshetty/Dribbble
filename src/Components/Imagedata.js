const designersData = Array.from({ length: 48 }, (_, i) => ({
    id: i + 1,
    name: `Designer ${i + 1}`,
    promo: `Promo ${i + 1}`,
    followers: Math.floor(Math.random() * 1000),
    views: Math.floor(Math.random() * 5000),
    imageUrl: `https://picsum.photos/id/${i + 10}/300/200`,
    profileImageUrl: `https://picsum.photos/id/${i + 100}/100/100`,
  }));
  export default designersData