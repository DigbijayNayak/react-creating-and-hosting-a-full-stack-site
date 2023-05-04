import React from "react";

const AboutPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <img
          src="https://drive.google.com/uc?export=view&id=12a8fnNMym5EK7RhTZEKIA3Fu_nOMzWDd"
          width="100px"
          height="100px"
          alt="profile img"
        />
        <h1>About Me</h1>
      </div>
      <p>
        Hi there, my name is <strong>Digbijay Nayak</strong>. I'm a Full Stack
        Web Developer based in Hyderabad. I have always been passionate about
        web developer, and over the years, I have honed my skills and gained
        extensive experience in JavaScript, react, nodejs and java.
      </p>
      <p>
        I post graduated from Indira Gandhi Institute of Technology, Sarang with
        a master degree in computer application, and I have been working in the
        field for 2 years. In my current role as a Jr. Software Engineer at
        People Tech Group.
        {/* , I am responsible for [Your
        Key Responsibilities]. */}
      </p>
      <p>
        Aside from my professional work, I enjoy exploring new thing in computer
        science, mathematics and reading books which help me to stay balanced
        and rejuvenated. I also enjoy watching movies (related to
        science-fiction, share market/money, futuristic, biography and human
        brain), playing cricket and chess, which have taught me valuable life
        lessons and enriched my perspective on the world.
      </p>
      <p>
        My approach to work is to always strive for excellence, and I believe
        that attention to detail and good communication are key to success. I am
        always looking for ways to learn and grow, and I'm not afraid to take on
        new challenges or push myself out of my comfort zone.
      </p>
      <p>
        In this blog, I hope to share my experiences, insights, and expertise
        with you. Whether you're looking for tips on web development, or simply
        interested in learning more about the tech industry, I hope you find
        this blog informative and engaging.
      </p>
      <p>
        Thank you for taking the time to read this "About Me" text, and I look
        forward to connecting with you!
      </p>
    </>
  );
};

export default AboutPage;
