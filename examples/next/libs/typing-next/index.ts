import { GetServerSideProps, GetStaticProps, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'

export const defineGetStaticProps = <T extends GetStaticProps>(
  getStaticProps: T,
) => ({ getStaticProps })

export const defGetStaticProps = <
  QueryProps extends ParsedUrlQuery = ParsedUrlQuery,
  Preview extends PreviewData = PreviewData,
>() =>
  <T extends GetStaticProps<any, QueryProps, Preview>>(getStaticProps: T) => ({
    getStaticProps,
  })

export type ExtractStaticProps<T extends GetStaticProps> = Awaited<
  Extract<AsyncedReturnType<T>, { props: any }>['props']
>

export const defineGetServerSideProps = <T extends GetServerSideProps>(
  getServerSideProps: T,
) => getServerSideProps

export const defGetServerSideProps = <
  QueryProps extends ParsedUrlQuery = ParsedUrlQuery,
  Preview extends PreviewData = PreviewData,
>() =>
  <T extends GetServerSideProps<any, QueryProps, Preview>>(getServerSideProps: T) => ({
    getServerSideProps,
  })

export type ExtractServerSideProps<T extends GetServerSideProps> = Awaited<
  Extract<AsyncedReturnType<T>, { props: any }>['props']
>

// utils

type AsyncedReturnType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>
