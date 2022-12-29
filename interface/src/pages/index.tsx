import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../generated-graphql/graphql";
import { ROUTES } from "../routes";
import styles from "../styles/Home.module.css";

type $fixMe = any;

export default function Home() {
  // const { data: usersData } = useGetUsersQuery()
  // const [deleteUser] = useDeleteUserMutation()
  // const router = useRouter()

  // React.useEffect(() => {
  //   router.push('/register')
  // }, [])

  // const onDelete = (id: $fixMe) => {

  //   deleteUser({
  //     variables: { id },
  //     update: (cache) => {
  //       cache.evict({ id: "User:" + id });
  //     },
  //   })
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Fullstack app sample</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.subtitle}>fullstack app </p>
        <h1 className={styles.title}>
          <a>Sample</a>
        </h1>

        <div className={styles.grid}>
          <Link href={ROUTES.register} className={styles.card}>
            Register
          </Link>
          <Link href={ROUTES.login} className={styles.card}>
            Login
          </Link>
          {/* {usersData?.users.map(user => {
            return <>
                <div className={styles.card}>
                  <h2>{user.username}</h2>
                  <p>{user.email}</p>
                  <p 
                    style={{ marginTop: 20, cursor: 'pointer' }}
                    onClick={() => onDelete(user.id)}  
                  >Delete</p>
                </div>
              </>
          })} */}
        </div>
      </main>
    </div>
  );
}
