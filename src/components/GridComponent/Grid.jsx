import React from "react";
import "./Grid.css";

const texts = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut    unde,  dolores accusantium!",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima..",
];

const data = texts.map((text) => ({
  text,
  name: "Gladis Lennon",
  role: "Head of SEO",
  image: "https://picsum.photos/id/633/40",
}));
console.log(data);

const Testimonial = ({ text, name, role, image }) => {
  return (
    <div className="testimonial">
      <p>{text}</p>
      <div className="author">
        <img src={image} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
};
export default function Grid() {
  return (
    <div className="testimonial-grid">
      {data.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  );
}
