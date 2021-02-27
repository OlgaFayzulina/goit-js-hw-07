const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const gallerytContainerEl = document.querySelector('#gallery');

  const creatGalleryItems = images.map(({url, alt}) => {
    const galleryItemEl = document.createElement('img');
    galleryItemEl.src = url;
    galleryItemEl.alt = alt;

    gallerytContainerEl.insertAdjacentHTML('beforeend',`<li class ="gallery-item"> <img class ="gallery-img" src="${url}" alt="${alt}"> </li>`);

    return galleryItemEl;
  });

     console.log(creatGalleryItems);

