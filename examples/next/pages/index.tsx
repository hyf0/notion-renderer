import {
  defineGetServerSideProps,
  defineGetStaticProps,
  ExtractServerSideProps,
  ExtractStaticProps,
} from '@/libs/typing-next'
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: `${process.env.NOTION_PAGE_ID}`,
      permanent: false,
    },
  }
}
const Home: NextPage = ({}) => {
  return (
    <div>
    </div>
  )
}

export default Home
