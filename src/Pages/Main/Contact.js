import styled from "styled-components";

const Contact = () => {

  const Wrapper = styled.section`
    padding: 12rem 2rem;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return ( 
  <Wrapper>
    <h1 className="common-heading">Contact Page</h1>
    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.845800580384!2d31.361226819840603!3d31.037593544025583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dd36b08bc47%3A0x301c405b32a58944!2z2KfZhNis2KfZhdi52Kkg2KjZhNin2LLYpyDZhdmI2YQ!5e0!3m2!1sar!2seg!4v1695899223249!5m2!1sar!2seg" width={"100%"} height={400} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mjvqpvzp" method="POST" className="contact-inputs">
          <input 
            type="text" 
            placeholder="username" 
            name="username"
            value={""}
            required 
            autoComplete="off" />
          <input 
            type="email" 
            placeholder="Email" 
            name="Email" 
            value={""}
            required 
            autoComplete="off" />
          <textarea name="Message" cols={'30'} rows={"10"} required autoComplete="off" placeholder="Enter You Message"></textarea>
          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>
)};

export default Contact;
