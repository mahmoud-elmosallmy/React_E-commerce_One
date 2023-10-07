import HeroSection from '../../Components/HeroSection'
// import { useProductContext } from '../../Context/ProductContext'

function About() {
  
  // const myName = useProductContext()

  const data = {
    name: "El Mosallmy E-commerce"
  }

  return (
    <>
      <HeroSection myData={data} />
    </>
  )
}

export default About  