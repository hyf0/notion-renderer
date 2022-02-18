import { GetServerSideProps, GetStaticProps } from 'next'

export const defineGetStaticProps = <T extends GetStaticProps>(
  getStaticProps: T,
) => getStaticProps

export type ExtractStaticProps<T extends GetStaticProps> = Awaited<
  Extract<AsyncedReturnType<T>, { props: any }>['props']
>

export const defineGetServerSideProps = <T extends GetServerSideProps>(
  getServerSideProps: T,
) => getServerSideProps

export type ExtractServerSideProps<T extends GetServerSideProps> = Awaited<
  Extract<AsyncedReturnType<T>, { props: any }>['props']
>

// utils

type AsyncedReturnType<T extends (...args: any) => any> = Awaited<ReturnType<T>>
