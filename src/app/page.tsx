"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Leaf } from 'lucide-react';

const assetMap = [{"id":"hero-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizza-on-table-1760907020160-073e0a8c.jpg","alt":"pizza on table"},{"id":"about-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizza-making-process-1760907024841-8e86c576.jpg","alt":"pizza making process"},{"id":"menu-item1-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pepperoni-pizza-1760907027332-03c61ddd.jpg","alt":"pepperoni pizza"},{"id":"menu-item2-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/vegetarian-pizza-1760907030313-bb17f75a.jpg","alt":"vegetarian pizza"},{"id":"contact-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizza-shop-interior-1760907033249-2b06ac92.jpg","alt":"pizza shop interior"}];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[{ name: "Home", id: "hero" }, { name: "Menu", id: "product" }, { name: "About Us", id: "about" }, { name: "Contact", id: "contact" }]}
          brandName="Pizza Shop"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <HeroSplit
            title="Discover Our Delicious Pizzas"
            description="Authentic flavors, made fresh daily. Satisfy your cravings at our pizza shop."
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizza-on-table-1760907020160-073e0a8c.jpg"
            buttons={[{ text: "Order Now", href: "contact" }, { text: "View Menu", href: "product" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <SplitAbout
            bulletPoints={[{ title: "Quality Ingredients", description: "We use only the freshest ingredients.", icon: Leaf }, { title: "Expert Chefs", description: "Our chefs have years of pizza-making experience." }]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizza-making-process-1760907024841-8e86c576.jpg"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <ProductCardOne
            products={[{ id: "1", name: "Pepperoni Pizza", price: "$12.99", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pepperoni-pizza-1760907027332-03c61ddd.jpg" }, { id: "2", name: "Vegetarian Pizza", price: "$11.99", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/vegetarian-pizza-1760907030313-bb17f75a.jpg" }]}
            title="Our Menu"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <ContactSplit
            tag="Newsletter"
            title="Get in Touch"
            description="We'd love to hear from you! Reach out for orders, feedback, or questions."
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizza-shop-interior-1760907033249-2b06ac92.jpg"
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <FooterBase
            columns={[
              { title: "Explore", items: [{ label: "Home", href: "hero" }, { label: "Menu", href: "product" }] },
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2025 Pizza Shop"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}