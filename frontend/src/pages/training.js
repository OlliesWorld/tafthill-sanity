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
    link: ({ children, value }) => {
      // const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a
          className="text-darktan mt-4 hover:underline"
          href={value.href}
          rel="noreferrer noopener"
        >
          {children}
        </a>
      )
    },
  },
}

const TrainingPage = ({ data }) => {
  const description = data.sanityTrainingDescription
  return (
    <Layout>
      <Seo title="Training at Taft Hill Acres | Fort Collins Boarding Facility" />
      <section className="m-auto text-center lg:w-1/2 mb-6">
        {data.training.nodes.map(item => (
          <Link
            className="text-darktan text-2xl font-extrabold  mr-12 hover:border-b-2"
            to={item.idLink}
          >
            {item.trainer}
          </Link>
        ))}
      </section>
      <section className="lg:w-1/2 text-center m-auto mb-16">
        {description && (
          <h4 className=" bg-darktan text-tan text-4xl px-4 py-8">
            {description.description}
          </h4>
        )}
        <GatsbyImage
          className="m-auto"
          image={description.mainImage.asset.gatsbyImageData}
          alt={description.mainImage.asset.altText}
        />
      </section>

      {data.training.nodes.map(trainer => (
        <section key={trainer.id} className="m-auto text-center lg:w-1/2 mb-16">
          <div className="md:w-2/3  bg-darktan p-4">
            <h3 className="text-white mb-4 md:text-2xl text-left">
              {trainer.subtitle}
            </h3>
            <h2 className="text-green text-4xl lg:text-6xl font-extrabold text-center mb-4">
              {trainer.trainer}
            </h2>
          </div>
          <GatsbyImage
            image={trainer.trainerImage.asset.gatsbyImageData}
            alt={trainer.trainerImage.asset.altText}
          />

          <div className="px-4 lg:px-0   text-left  mt-6 text-xl md:text-2xl ">
            <PortableText value={trainer._rawBody} components={components} />
          </div>
        </section>
      ))}
    </Layout>
  )
}

export default TrainingPage

export const query = graphql`
  query TrainingQuery {
    sanityTrainingDescription {
      description
      mainImage {
        asset {
          altText
          gatsbyImageData(
            width: 600
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
    }
    training: allSanityTraining {
      nodes {
        id
        trainer
        subtitle
        _rawBody
        trainerImage {
          asset {
            altText
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 614
              height: 450
            )
          }
        }
      }
    }
  }
`
