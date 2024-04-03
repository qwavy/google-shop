const buttonPhone = document.querySelector(".button-value-phone");
const buttonWatch = document.querySelector(".button-value-watch");
const buttonTablet = document.querySelector(".button-value-tablet");
const buttonEarphone = document.querySelector(".button-value-earphone");
const buttonOther = document.querySelector(".button-value-other");
const buttons = document.querySelectorAll(".button-value");

const productsTemplate = document.querySelector(".products");

const numbers = [33,2,8]
numbers.sort()
console.log(0.2 + 0.4 )

let products = [
  {
    id: 1,
    name: "Pixel Fold (128Gb)",
    price: 2599,
    image: "https://storage.googleapis.com/mannequin/auto/tiles/2023-04-28_20h03m_a63e5ad4-d90f-4d8d-b9cb-4466022d019c/offers-tile-felix-obsidian_US.png",
    category: "phone",
  },
  {
    id: 2,
    name: "Pixel Fold (256Gb)",
    price: 2699,
    image: "https://storage.googleapis.com/mannequin/auto/tiles/2023-04-28_20h03m_a63e5ad4-d90f-4d8d-b9cb-4466022d019c/offers-tile-felix-porcelain-google%20one-youtube.png",
    category: "phone",
  },
  {
    id: 3,
    name: "Pixel Fold (512Gb)",
    price: 2799,
    image: "https://storage.googleapis.com/mannequin/auto/tiles/2023-04-28_20h03m_a63e5ad4-d90f-4d8d-b9cb-4466022d019c/offers-tile-felix-porcelain-google%20one-youtube.png",
    category: "phone",
  },
  {
    id: 4,
    name: "Pixel Fold (1Tb)",
    price: 2999,
    image: "https://storage.googleapis.com/mannequin/auto/tiles/2023-04-28_20h03m_a63e5ad4-d90f-4d8d-b9cb-4466022d019c/offers-tile-felix-porcelain-google%20one-youtube.png",
    category: "phone",
  },
  {
    id: 5,
    name: "Pixel 8 Pro (64Gb)",
    price: 1299,
    image: "https://lh3.googleusercontent.com/-C8tMK7X1m-WMOIqxC8XQ99MoOicv0cNE_YlJ1i6A9liHRiNhMzGiJtt2-VxjO4sF5jVr8UjA_LkDLMxN9uJLBopnQ6stNWT4A",
    category: "phone",
  },
  {
    id: 6,
    name: "Pixel 8 Pro (128Gb)",
    price: 1499,
    image: "https://lh3.googleusercontent.com/-C8tMK7X1m-WMOIqxC8XQ99MoOicv0cNE_YlJ1i6A9liHRiNhMzGiJtt2-VxjO4sF5jVr8UjA_LkDLMxN9uJLBopnQ6stNWT4A",
    category: "phone",
  },
  {
    id: 7,
    name: "Pixel 8 Pro (256Gb)",
    price: 1799,
    image: "https://lh3.googleusercontent.com/VOAvfTTN5gCOeUSeFcv8ig3AO51bUPmjV1_mRIF-8Ta7hL2zJqn2DjsYL2nzhvRgOecvLgADoj3B3oj4BmqWp4FxeS-yg8wIeGM",
    category: "phone",
  },
  {
    id: 8,
    name: "Pixel 8 Pro (512Gb)",
    price: 1999,
    image: "https://lh3.googleusercontent.com/VOAvfTTN5gCOeUSeFcv8ig3AO51bUPmjV1_mRIF-8Ta7hL2zJqn2DjsYL2nzhvRgOecvLgADoj3B3oj4BmqWp4FxeS-yg8wIeGM",
    category: "phone",
  },
  {
    id: 9,
    name: "Pixel 7a (64gb)",
    price: 299,
    image: "https://storage.googleapis.com/mannequin/auto/tiles/2023-04-28_20h03m_a63e5ad4-d90f-4d8d-b9cb-4466022d019c/offers-tile-lynx-sky-google%20one-youtube.png",
    category: "phone",
  },
  {
    id: 10,
    name: "Pixel 7a (128Gb)",
    price: 599,
    image: "https://storage.googleapis.com/mannequin/auto/tiles/2023-04-28_20h03m_a63e5ad4-d90f-4d8d-b9cb-4466022d019c/offers-tile-lynx-sky-google%20one-youtube.png",
    category: "phone",
  },
  {
    id: 11,
    name: "Pixel 7a (256Gb)",
    price: 799,
    image: "https://storage.googleapis.com/mannequin/auto/tiles/2023-05-30_18h26m_15799096-ddfa-4912-9d50-d80ed72bcab3/offers-tile-lynx-sky_US.png",
    category: "phone",
  },
  {
    id: 12,
    name: "Pixel Buds Pro",
    price: 219,
    image: "https://lh3.googleusercontent.com/JcIWzBsu-RSkYUtwI4UsvCeGNBSRdpDjdZE5-VF_eH4BW-I7inVmW1Fvuar0EGHCVhsb6uePPO9vl73svT3SW0Ie_IV5Wk5w_tWd",
    category: "earphone",
  },
  {
    id: 13,
    name: "Pixel Buds A-series",
    price: 219,
    image: "https://lh3.googleusercontent.com/3HDkh2zjWTqbuZBgJHfg1hKkZRoLqSO8HEHDOjlhebrF_RTPS-F2ThI-jAzxSJGcjo7gsjWdqDYIXEBCLRSTEOr_yCNdvy8OHE8=w404",
    category: "earphone",
  },
  {
    id: 14,
    name: "Nomad Modern Leather Case for Pixel Buds Pro",
    price: 39,
    image: "https://lh3.googleusercontent.com/vptuks5WZU90rT4AdgNTsy9Y38qysnJ9dxXYFELFd96n8U91FTvwb20IRuCsNO7U2ptMGgyItSD73WKuw_i0RzaLPl6Tt3K2Eg=w404",
    category: "earphone",
  },
  {
    id: 15,
    name: "Nomad Rugged Case for Pixel Buds A-Series",
    price: 29,
    image: "https://lh3.googleusercontent.com/ztF27QzqdQ5cPn7irej4FNU37p-zOpDyRxt8yxAJWca9eMNEGlcqK_uUla2Omjli6EGxmFG1Da7Kn5XcMSjG-oZTwCuacv3Mgao=w404",
    category: "earphone",
  },
  {
    id: 16,
    name: "Comply™ Premium Foam Tips for Pixel Buds Pro",
    price: 29,
    image: "https://lh3.googleusercontent.com/3HDkh2zjWTqbuZBgJHfg1hKkZRoLqSO8HEHDOjlhebrF_RTPS-F2ThI-jAzxSJGcjo7gsjWdqDYIXEBCLRSTEOr_yCNdvy8OHE8=w404",
    category: "earphone",
  },
  {
    id: 17,
    name: "Comply™ Premium Foam Tips for Pixel Buds A-Series",
    price: 24,
    image: "https://lh3.googleusercontent.com/ODLQgZTQz_ndalf2J7pwSdQxZ5mxiYL6pxrQ0fdI1xACqomfoL-KdtNzh1cAXlG4imZ5MC3g-8A3KkKcDJ85=w404",
    category: "earphone",
  },
  {
    id: 18,
    name: "Spigen Rugged Armor Case for Pixel Buds Pro",
    price: 19,
    image: "https://lh3.googleusercontent.com/qOvPnUju9o1od-gegCL_kJmJvWusaZ8M7oP8nmEGruGf-eUwJEBcGQQ1C6sU5l3D6Gr0s4_JHhq0Acl6eZ8M8O0SjdoN4GD-2g=w483",
    category: "earphone",
  },
  {
    id: 19,
    name: "Google Pixel Watch (Wi-Fi)",
    price: 249,
    image: "https://lh3.googleusercontent.com/pJpt1Ex3fE1auDfEWgGxG8VRIYKbHapOQwTZxL4CxW-rU00YyyLkPlMeXTlZ4buakj0x3dEhB5b1mVvzmmBTN3FzozXTwRQXkc4K",
    category: "watch",
  },
  {
    id: 20,
    name: "Google Pixel Watch (LTE)",
    price: 259,
    image: "https://lh3.googleusercontent.com/pJpt1Ex3fE1auDfEWgGxG8VRIYKbHapOQwTZxL4CxW-rU00YyyLkPlMeXTlZ4buakj0x3dEhB5b1mVvzmmBTN3FzozXTwRQXkc4K",
    category: "watch",
  },
  {
    id: 21,
    name: "Google Pixel Watch 2 (Wi-Fi)",
    price: 349,
    image: "https://lh3.googleusercontent.com/uIvUSR6P3Sa_itonfv_38NJjqWeAAgNEqTFekkKTJ-8dfZpuqKCyGJjnd6biwAttWowiEYi6hL_uJh5WbTmxgN0hzbM-lwqdTg=rw-e365-w3000",
    category: "watch",
  },
  {
    id: 22,
    name: "Google Pixel Watch 2 (LTE)",
    price: 359,
    image: "https://lh3.googleusercontent.com/uIvUSR6P3Sa_itonfv_38NJjqWeAAgNEqTFekkKTJ-8dfZpuqKCyGJjnd6biwAttWowiEYi6hL_uJh5WbTmxgN0hzbM-lwqdTg=rw-e365-w3000",
    category: "watch",
  },
  {
    id: 23,
    name: "Google Pixel Watch Active Band",
    price: 49,
    image: "https://storage.googleapis.com/mannequin/auto/tiles/2023-05-30_18h26m_15799096-ddfa-4912-9d50-d80ed72bcab3/offers-tile-rohan-band-hazel.png",
    category: "watch",
  },
  {
    id: 24,
    name: "Google Pixel Watch Stretch Band",
    price: 59,
    image: "https://lh3.googleusercontent.com/GxbH5IPXnl6WPhAQZ8nlmRtKVhRyUiMlo9nw6AfbP8fiA7u9q9eitFuCW_EDzPB-S-Oa300CykH2skk-HhtRLet-x7vOd-Pe0_E2",
    category: "watch",
  },
  {
    id: 25,
    name: "Pixel Tablet (128GB)",
    price: 899,
    image: "https://lh3.googleusercontent.com/zSAG3vidZJX0Bv_9s5RmINGThERqy3Kmxon2d8i-cypZEkIC3QvH8YpQFoMVSeNQFrWALZAw3SIOxuY3XS5lIPOI0KvJ5VOmyQA",
    category: "tablet",
  },
  {
    id: 26,
    name: "Pixel Tablet (256Gb)",
    price: 1099,
    image: "https://lh3.googleusercontent.com/zSAG3vidZJX0Bv_9s5RmINGThERqy3Kmxon2d8i-cypZEkIC3QvH8YpQFoMVSeNQFrWALZAw3SIOxuY3XS5lIPOI0KvJ5VOmyQA",
    category: "tablet",
  },
  {
    id: 27,
    name: "Pixel Tablet (512Gb)",
    price: 1299,
    image: "https://lh3.googleusercontent.com/zSAG3vidZJX0Bv_9s5RmINGThERqy3Kmxon2d8i-cypZEkIC3QvH8YpQFoMVSeNQFrWALZAw3SIOxuY3XS5lIPOI0KvJ5VOmyQA",
    category: "tablet",
  },
  {
    id: 28,
    name: "Brydge C-Type Wireless Desktop Keyboard for Chrome OS",
    price: 99,
    image: "https://lh3.googleusercontent.com/tplnKbI4RITkF_-EStIzYPAWNoE8r1Yw-NojdrOn_O1KB0KK2qi1X798SKvfWY1cIuROJ6q86--SRG2LDaca=w404",
    category: "tablet",
  },
  {
    id: 29,
    name: "Voice Remote for Chromecast with Google TV",
    price: 19,
    image: "https://lh3.googleusercontent.com/qlJK0kfKnl9yhycjwk1RxXl3ttXbnXN3OP8u19FOALOfHVHQ2ZtGaQIPfHenlMv7RMbHg_tjJWnZPT-N1WSqvnWXI-fQFDPn=w404",
    category: "other",
  },
  {
    id: 30,
    name: "Ethernet Adapter for Chromecast with Google TV",
    price: 19,
    image: "https://lh3.googleusercontent.com/6wJZluEY9ePZEfCp7V0Yb-z5eWnLQeyGgSulR_6hpWLGiwL-QNdOiKyAqVXwNKm84nnp1RsBO4Xd0DzkJhmBTQ=w404",
    category: "other",
  },
  {
    id: 31,
    name: "Cable Matters HDMI Extension Cable",
    price: 19,
    image: "https://lh3.googleusercontent.com/8s0-PDR9kL9EgFVOUUe-KKIBrb4Fu4jrJdFmxjgnPMRIyN9kICXN3K6NTfJ3ZSUrg2dueveacUOeErbJMtu6qquGWFpMf3ag4Q=w404",
    category: "other",
  },
  {
    id: 32,
    name: "Google Ethernet Adapter for Chromecast",
    price: 15,
    image: "https://lh3.googleusercontent.com/5PCMS3LXpOxtsK0HOFHHfJ9YH_V0-IkSjgjtqoUiwlVzJAothLD4f5cGtNDNEAc2ablnNJmR-YesfmJx4JiOcw=w404",
    category: "other",
  },
  {
    id: 33,
    name: "Tech21 EvoSlim for Pixel Buds A-Series",
    price: 19,
    image: "https://lh3.googleusercontent.com/PnY3Pg4f7GgnT2YzwWRZbU7sdx_866TJvKRb4XKWPYGk1MSDq-JZqM5gobKCMF2uMBPbKad8MhXG1JtqkBw2l7T8bdy4EzYYUzM=w483",
    category: "earphone",
  },
  {
    id: 34,
    name: "Charging Speaker Dock",
    price: 129,
    image: "https://lh3.googleusercontent.com/ZrWUTcY8KQBq6jSij6WEs_W27PeK0J7Vo6mgFru0ZN1L7cmtZ2Ip1IBB5OxFexBk97m7ZrjGlYFrkmwCDDRha2hzWUozXNajKw=w483",
    category: "tablet",
  },
  {
    id: 35,
    name: "Pixel Tablet Case",
    price: 79,
    image: "https://lh3.googleusercontent.com/0_UQiV9Ot2xKhmfaD9KNN1eycUvB1FkdM_WxcZVjsUX4vs0d7_9JiIZ58EVSF_sqfrAME-47X6FTd9jiHeXqr725KgS0Ek4dMQ=w483",
    category: "tablet",
  },
  {
    id: 35,
    name: "Bellroy Slim Backpack for Google Pixelbook Go",
    price: 79,
    image: "https://lh3.googleusercontent.com/Z-sxA5dYSi_br2q48a1f0YTog5ELk6e5qMk_24Cr5J-cZv-draIDFT6FA2-yqXi4Ed9D_fQpNtrIWbQkiiG-=w483",
    category: "tablet",
  },
  {
    id: 36,
    name: "Google 30W USB-C Power Charger",
    price: 25,
    image: "https://lh3.googleusercontent.com/r7WkKjNT5F5w9S_Lj2BbG5AMSOQKJbb9K2YvRJCm8yS6_FkfPGX0zXmdpkZ4fVjBYSQH1eexJKfZEeaHNPw-p7xRb5Kj8JZK=w483",
    category: "other",
  },
  {
    id: 37,
    name: "Google USB-C to USB-C Cable",
    price: 25,
    image: "https://lh3.googleusercontent.com/DfVEQYQ81iCHc9eznjl0f1tfZvWUPtm8Q2NfeVbN8TRp4kKRE2LXrIEjZAFRWcqlO4AugP9AET3iF0hRdvJc=w483",
    category: "other",
  },
  {
    id: 38,
    name: "Google Pixel Watch 2 USB-C® Fast Charging Cable",
    price: 29,
    image: "https://lh3.googleusercontent.com/cfd9iyh3wLmNqbWDlIYP0dzImGAbIWUWdxL7ijy1036ZiHwhK4NSgN_u4RkMVNH9WfYyc-j9VLDD91Hzlzhke8j-LKGHaMTNgQ=w483",
    category: "other",
  },
  {
    id: 39,
    name: "Pixel Watch Medical ID Tag",
    price: 9,
    image: "https://lh3.googleusercontent.com/GcmGtrqo7YP-nVbs7WdLeS1Y9vlQAeq_P1hg9WY-1T1hRKy51K5yKNNuoQHm4odBUQKgGPf3rv6vOxKVbQ--O4PHn8fuNfHQ=w483",
    category: "watch",
  },
  {
    id: 40,
    name: "iON Wireless Duo - MFG Charging Stand & Pad - Dark Gray",
    price: 49,
    image: "https://lh3.googleusercontent.com/3-qD--MuQ_UaIgVTQZfh4bZmqh818GZa5Zx0XiBMx3qEf3Z88vVPSB5xsi-2fKMEjBb2hltEq8R5EFDj2kYmNw=w483",
    category: "watch",
  },
  {
    id: 41,
    name: "Speck StandyShell Case for Google Pixel Tablet",
    price: 49,
    image: "https://lh3.googleusercontent.com/mexrRiWZQp4uw_Q-B79jtPVsUHy_9dnEvs2PMevZUc25gs7KjOkqXCggH37GjElPb3Z7CkjydmcqLKZdeyXaXq7-vSwC01W_=w483",
    category: "tablet",
  },
  {
    id: 42,
    name: "Google USB-C to USB-A Cable",
    price: 20,
    image: "https://lh3.googleusercontent.com/mR0CkYPDcCSCi4FOFn5JvC9ee9-H6NVYx6zDfwa7mSoBA-sO1lI6ripLMkoQESx2nEVVuiqeUuGC1kGQsYjI=w483",
    category: "other",
  },
];

buttonPhone.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.add("not-active");
    button.classList.remove("active");
  });
  buttonPhone.classList.remove("not-active");

  buttonPhone.classList.add("active");

  let phones = products.filter((phone) => phone.category === "phone");


  renderHtml(phones)

});

buttonWatch.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.add("not-active");
    button.classList.remove("active");
  });
  buttonWatch.classList.remove("not-active");
  buttonWatch.classList.add("active");

  let wathcs = products.filter((wathcs) => wathcs.category === "watch");
  console.log(wathcs);

  renderHtml(wathcs)


});

buttonTablet.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.add("not-active");
    button.classList.remove("active");
  });
  buttonTablet.classList.remove("not-active");

  buttonTablet.classList.add("active");

  let tablet = products.filter((tablet) => tablet.category === "tablet");
  console.log(tablet);

  renderHtml(tablet)


});

buttonEarphone.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.add("not-active");
    button.classList.remove("active");
  });
  buttonEarphone.classList.remove("not-active");

  buttonEarphone.classList.add("active");

  let earphones = products.filter(
    (earphone) => earphone.category === "earphone"
  );
  renderHtml(earphones)
  
});

buttonOther.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.add("not-active");
    button.classList.remove("active");
  });
  buttonOther.classList.remove("not-active");

  buttonOther.classList.add("active");

  let others = products.filter(
    (other) => other.category === "other"
  );

  renderHtml(others)

});

const renderHtml = (products) => {
  const html = products.map((product) => `<div class="product">
    <img class="product-image" src=${product.img} alt="product image"/>
    <h3 class="product-name">${product.name}</h3>
    <p class="product-price">${product.price}</p>
    </div>`
    )
    .join("");
  productsTemplate.innerHTML = html;
};
