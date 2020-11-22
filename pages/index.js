import React from "react";
import { Layout, Home as HomeContainer } from "../containers";
import { useFetchUser, UserProvider } from "../lib/user";

function Index() {
  const { user, loading } = useFetchUser();

  return (
    <UserProvider value={{ user, loading }}>
      <Layout>
        <HomeContainer />
      </Layout>
    </UserProvider>
  );
}

// export async function getServerSideProps({ req, res }) {
//     const session = await auth0.getSession(req);
//     if (!session || !session.user) {
//       res.writeHead(302, {
//         Location: "/api/login",
//       });
//       res.end();
//       return {};
//     }
//     return { props: { user: session.user } };
//   }

export default Index;
