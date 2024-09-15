import React from 'react'
import { SfButton } from '@storefront-ui/react';
import classNames from 'classnames';

const displayDetails = [
    {
      image: 'https://www.muratogluhome.com.tr/media/2023/07/14/140/7d99d382-6885-4e2e-a6a3-1412fd2ac88f.png',
      title: 'Dekorasyon Ürünleri',
      subtitle: 'İndirim!!',
      description: 'Ev dekorasyon ürünlerinde inanılmaz indirimler',
      buttonText: 'Ürünlere Git',
      reverse: false,
      backgroundColor: 'bg-negative-200',
      titleClass: 'md:typography-display-2',
      subtitleClass: 'md:typography-headline-6',
      descriptionClass: 'md:typography-text-lg',
    },
    {
      image: 'https://ideacdn.net/idea/cl/50/myassets/products/234/2d030c5f-9ab9-46cf-842a-3b72801e2696.jpg?revision=1705240187',
      title: 'Bahçe & Balkon Ürünleri',
      subtitle: 'KAÇIRMA!!!',
      description: 'Bahçe & Balkon ürünlerinde kaçırılmıyacak ürünler sizlere',
      buttonText: 'Ürünlere Git',
      reverse: true,
      backgroundColor: 'bg-warning-200',
    },
    {
      image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display-3.png',
      title: 'Yeni Sezon !!!',
      subtitle: 'Yeni Sezon Ürünlere Göz Atmak İster misiniz ?',
      description: 'Add a pop up color to your outfit',
      buttonText: 'Ürünlere Git',
      reverse: false,
      backgroundColor: 'bg-secondary-200',
    },
  ];
  

const HomeBanner = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-6 max-w-[1540px]">
      {displayDetails.map(
        ({ image, title, subtitle, description, buttonText, backgroundColor, reverse, titleClass, subtitleClass }) => (
          <div
            key={title}
            className={classNames(
              'relative flex md:max-w-[1536px] md:[&:not(:first-of-type)]:flex-1 md:first-of-type:w-full',
              backgroundColor,
            )}
          >
            <a
              className="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
              aria-label={title}
              href="#"
            />
            <div
              className={classNames('flex justify-between overflow-hidden grow', {
                'flex-row-reverse': reverse,
              })}
            >
              <div className="flex flex-col justify-center items-start p-6 lg:p-10 max-w-1/2">
                <p
                  className={classNames('uppercase typography-text-xs block font-bold tracking-widest', subtitleClass)}
                >
                  {subtitle}
                </p>
                <h2 className={classNames('mb-4 mt-2 font-bold typography-display-3', titleClass)}>{title}</h2>
                <p className="typography-text-base block mb-4">{description}</p>
                <SfButton className="!bg-black">{buttonText}</SfButton>
              </div>
              <img src={image} alt={title} className="w-1/2 self-end object-contain" />
            </div>
          </div>
        ),
      )}
    </div>
  )
}

export default HomeBanner