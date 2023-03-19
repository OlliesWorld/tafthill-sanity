import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"

const components = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className=" text-2xl text-white">{children}</h1>,
  
    blockquote: ({ children }) => (
      <blockquote className="text-green border-l-green">{children}</blockquote>
    ),
    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-green ">{children}</h2>
    ),
  },
  marks: {
    link: ({children, value}) => {
      // const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a className="text-darktan mt-4 hover:underline" href={value.href} rel='noreferrer noopener'>
          {children}
        </a>
      )
    },
  },
}


const TrainingPage = ({ data }) => {
  const idTrainer = data.training.trainer.toLowerCase().replaceAll(' ', '-');
  const idLink = '#' + idTrainer
  const idTrainer2 = data.training.trainer2.toLowerCase().replaceAll(' ', '-');
  const idLink2 = '#' + idTrainer2
  const idTrainer3 = data.training.trainer3.toLowerCase().replaceAll(' ', '-');
  const idLink3 = '#' + idTrainer3
 
  return (
    <Layout>
      <Seo title="Training" />
      <section className="grid md:grid-cols-3 justify-content-center ml-4  md:ml-12 lg:w-1/2 lg:m-auto md:mb-4">
        <Link className="text-darktan text-2xl font-extrabold  mr-12 hover:border-b-2" to={idLink}>{data.training.trainer}</Link>
        <Link className="text-darktan text-2xl font-extrabold mr-12 hover:border-b-2 md:text-center" to={idLink2}>{data.training.trainer2}</Link>
        <Link className="text-darktan text-2xl font-extrabold hover:border-b-2 md:text-center" to={idLink3}>{data.training.trainer3}</Link>
      </section>
      <section className="lg:w-1/2 text-center m-auto mb-12">
        {data.training.description && 
          <h4 className=" bg-darktan text-tan text-4xl px-4 py-8">{data.training.description}</h4>}
        <GatsbyImage
          image={data.training.mainImage.asset.gatsbyImageData}
          alt="about image"
        />
      </section>
      
     {data.training.trainer && 
      <section id={idTrainer} className='m-auto text-center lg:w-1/2 mb-12'>
        <div className="md:w-2/3  bg-darktan p-4">
          <h3 className="text-white mb-4 md:text-2xl text-left">
            {data.training.subtitle}
          </h3>
          <h2 className="text-green text-4xl lg:text-6xl font-extrabold text-center mb-4">
            {data.training.trainer}
          </h2>
        </div>
        <GatsbyImage
          image={data.training.trainerImage.asset.gatsbyImageData}
          alt={data.training.trainer}
        />

        <div className="px-4 lg:px-0   text-left  mt-6 text-xl md:text-2xl ">
          <PortableText
            value={data.training._rawBody}
            components={components}
          />
        </div>
      </section>}
      {data.training.trainer2 && 
      <section id={idTrainer2} className="m-auto text-center lg:w-1/2 mb-12">
        <div className="md:w-2/3   bg-darktan p-4">
          <h3 className="text-white mb-4 text-2xl text-left">
            {data.training.subtitle2}
          </h3>
          <h2 className="text-green text-4xl lg:text-6xl font-extrabold text-center mb-4">
            {data.training.trainer2}
          </h2>
        </div>
        <GatsbyImage
          image={data.training.trainerImage2.asset.gatsbyImageData}
          alt={data.training.trainer2}
        />

        <div className="px-4 lg:px-0  text-left  mt-6 text-xl md:text-2xl ">
          <PortableText
            value={data.training._rawBody2}
            components={components}
          />
        </div>
      </section>}
      {data.training.trainer3 && 
      <section id={idTrainer3} className="m-auto text-center lg:w-1/2 mb-12">
        <div className="md:w-2/3   bg-darktan p-4">
          <h3 className="text-white mb-4  text-2xl text-left">
            {data.training.subtitle3}
          </h3>
          <h2 className="text-green text-4xl lg:text-6xl font-extrabold text-center mb-4">
            {data.training.trainer3}
          </h2>
        </div>
        <GatsbyImage
          image={data.training.trainerImage3.asset.gatsbyImageData}
          alt={data.training.trainer3}
        />

        <div className="px-4 lg:px-0  text-left  mt-6 text-xl md:text-2xl ">
          <PortableText
            value={data.training._rawBody3}
            components={components}
          />
        </div>
      </section>}
    </Layout>
  )
}

export default TrainingPage

export const query = graphql`
  query TrainingQuery {
    training: sanityTraining(_type: { eq: "training" }) {
      description
      trainer2
      trainer
      trainer3
      subtitle2
      subtitle
      subtitle3
      _rawBody
      _rawBody2
      _rawBody3
      mainImage {
        asset {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 600)
        }
      }
      trainerImage {
        asset {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 614)
        }
      }
      trainerImage2 {
        asset {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 600)
        }
      }
      trainerImage3 {
        asset {
          gatsbyImageData(layout:CONSTRAINED, placeholder: BLURRED, width: 600)
        }
      }
    }
  }
`
