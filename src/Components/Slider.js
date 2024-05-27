import React from "react";
import Marquee2 from "./Marquee2";

const imageItems = [
  {
    url: "https://th.bing.com/th/id/R.31eb7fc0690c730775f9af270f8e7983?rik=KuguRdtRIxRjVg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f7%2fc%2f7%2f624165.jpg&ehk=ekLzKg27ujZHSZ4IilboRtSswc%2bQgnlKm3D14cRUWsc%3d&risl=&pid=ImgRaw&r=0",
    caption: "Nature",
  },
  {
    url: "https://th.bing.com/th/id/OIP.pLqraWRbiAbeQ9jBv7QU5AHaEK?rs=1&pid=ImgDetMain",
    caption: "Landscape",
  },
  {
    url: "https://th.bing.com/th/id/OIP.4qrPVLhmg-R2WdYFEgs9ygHaEz?rs=1&pid=ImgDetMain",
    caption: "Forest",
  },
  {
    url: "https://th.bing.com/th/id/OIP.Wi8v5f6VqV0K0CZoFSZZzQHaE8?rs=1&pid=ImgDetMain",
    caption: "Mountain",
  },
  {
    url: "https://th.bing.com/th/id/OIP.IugR_5yEN0rFQxWkJfihEgHaF7?rs=1&pid=ImgDetMain",
    caption: "Waterfall",
  },
  {
    url: "https://th.bing.com/th/id/OIP.yW7RPm2hp0ztQ8m_9TFMpwHaEo?rs=1&pid=ImgDetMain",
    caption: "Sunset",
  },
  {
    url: "https://th.bing.com/th/id/OIP.HA51aC03AYFnHW5KY8R1OAHaEK?rs=1&pid=ImgDetMain",
    caption: "Beach",
  },
  {
    url: "https://th.bing.com/th/id/OIP.8eJNMEsDP4uYuV4dl--i9gHaE8?rs=1&pid=ImgDetMain",
    caption: "Flowers",
  },
  {
    url: "https://th.bing.com/th/id/R.31eb7fc0690c730775f9af270f8e7983?rik=KuguRdtRIxRjVg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f7%2fc%2f7%2f624165.jpg&ehk=ekLzKg27ujZHSZ4IilboRtSswc%2bQgnlKm3D14cRUWsc%3d&risl=&pid=ImgRaw&r=0",
    caption: "Nature",
  },
  {
    url: "https://th.bing.com/th/id/OIP.pLqraWRbiAbeQ9jBv7QU5AHaEK?rs=1&pid=ImgDetMain",
    caption: "Landscape",
  },
  {
    url: "https://th.bing.com/th/id/OIP.4qrPVLhmg-R2WdYFEgs9ygHaEz?rs=1&pid=ImgDetMain",
    caption: "Forest",
  },
  {
    url: "https://th.bing.com/th/id/OIP.Wi8v5f6VqV0K0CZoFSZZzQHaE8?rs=1&pid=ImgDetMain",
    caption: "Mountain",
  },
  {
    url: "https://th.bing.com/th/id/OIP.4qrPVLhmg-R2WdYFEgs9ygHaEz?rs=1&pid=ImgDetMain",
    caption: "Forest",
  },
  {
    url: "https://th.bing.com/th/id/R.31eb7fc0690c730775f9af270f8e7983?rik=KuguRdtRIxRjVg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f7%2fc%2f7%2f624165.jpg&ehk=ekLzKg27ujZHSZ4IilboRtSswc%2bQgnlKm3D14cRUWsc%3d&risl=&pid=ImgRaw&r=0",
    caption: "Nature",
  },
  {
    url: "https://th.bing.com/th/id/OIP.pLqraWRbiAbeQ9jBv7QU5AHaEK?rs=1&pid=ImgDetMain",
    caption: "Landscape",
  },
  {
    url: "https://th.bing.com/th/id/OIP.4qrPVLhmg-R2WdYFEgs9ygHaEz?rs=1&pid=ImgDetMain",
    caption: "Forest",
  },
  
];

const Slider = () => {
  return (
    <div className="py-10">
      <Marquee2>
        {imageItems.map((item, index) => (
          <div key={index} className="inline-block mx-2">
            <div className=" h-36 w-36 overflow-hidden rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={item.url}
                alt={item.caption}
              />
            </div>
            <p className="text-center mt-2">{item.caption}</p>
          </div>
        ))}
      </Marquee2>
    </div>
  );
};

export default Slider;
